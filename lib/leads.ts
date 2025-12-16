"use server";

import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data/leads.json");

type Lead = {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: string;
};

export async function submitLead(_: unknown, formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  if (typeof name !== "string" || typeof phone !== "string" || typeof email !== "string" || !name || !phone || !email) {
    return { ok: false, message: "Please fill all required fields." };
  }

  const lead: Lead = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    message: typeof message === "string" ? message.trim() : "",
    date: new Date().toISOString(),
  };

  let existing: Lead[] = [];
  try {
    const parsed = JSON.parse(await fs.readFile(filePath, "utf8"));
    if (Array.isArray(parsed)) {
      existing = parsed as Lead[];
    }
  } catch {}

  existing.unshift(lead);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

  const asanaResult = await sendLeadToAsana(lead);

  if (!asanaResult.ok) {
    return { ok: true, message: "Saved locally. Asana sync failed: " + asanaResult.message };
  }

  return { ok: true, message: "Thanks! We'll contact you shortly." };
}

async function sendLeadToAsana(lead: Lead) {
  const token = process.env.ASANA_ACCESS_TOKEN || process.env.ASANA_PAT || process.env.NEXT_PRIVATE_ASANA_TOKEN;
  const projectId = process.env.ASANA_PROJECT_ID || "1212483309974941";
  const workspaceId = process.env.ASANA_WORKSPACE_ID;

  if (!token) {
    return { ok: false, message: "Missing ASANA token" };
  }

  try {
    const data: Record<string, unknown> = {
      name: `New intake: ${lead.name}`,
      notes: [
        `Contact: ${lead.name}`,
        `Phone: ${lead.phone}`,
        `Email: ${lead.email}`,
        `Received: ${lead.date}`,
        "",
        lead.message ? `Message: ${lead.message}` : "Message: (none provided)",
      ].join("\n"),
    };

    if (projectId) {
      data.projects = [String(projectId)];
    }

    if (workspaceId) {
      data.workspace = String(workspaceId);
    }

    const response = await fetch("https://app.asana.com/api/1.0/tasks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return { ok: false, message: `Asana error ${response.status}: ${errorBody}` };
    }

    return { ok: true, message: "Created Asana task" };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : "Unknown error" };
  }
}

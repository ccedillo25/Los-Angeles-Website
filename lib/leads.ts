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

  return { ok: true, message: "Thanks! We'll contact you shortly." };
}

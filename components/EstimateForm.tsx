"use client";

import { useActionState } from "react";
import { submitLead } from "@/lib/leads";

const initial = { ok: false, message: "" };

export default function EstimateForm() {
  const [state, action, pending] = useActionState(submitLead, initial);

  return (
    <form action={action} className="grid gap-4 max-w-lg">
      <input name="name" placeholder="Full Name *" className="border p-2 rounded" />
      <input name="phone" placeholder="Phone *" className="border p-2 rounded" />
      <input name="email" placeholder="Email *" className="border p-2 rounded" />
      <textarea name="message" placeholder="How can we help?" className="border p-2 rounded" />

      <button
        disabled={pending}
        className="bg-zinc-900 text-white py-2 rounded"
      >
        {pending ? "Sending..." : "Request Free Estimate"}
      </button>

      {state.message && (
        <p className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}

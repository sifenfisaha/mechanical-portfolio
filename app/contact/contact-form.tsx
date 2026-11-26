"use client";

import { useState, type FormEvent } from "react";
import { contact } from "../_data/site";

const fieldClass =
  "mt-2 w-full rounded-[6px] border border-line bg-page px-4 py-3 text-[14px] text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

// There is no backend yet, so the form hands the message to the visitor's
// own email app with everything pre-filled.
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const subject = String(data.get("subject"));
    const body = [
      String(data.get("message")),
      "",
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[10px] border border-line bg-panel p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[13px] font-medium">
          Full Name
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] font-medium">
          Email Address
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block text-[13px] font-medium">
        Subject
        <input
          name="subject"
          required
          placeholder="What would you like to discuss?"
          className={fieldClass}
        />
      </label>

      <label className="mt-5 block text-[13px] font-medium">
        Message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your idea, project or opportunity."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[360px] text-[12px] text-muted" aria-live="polite">
          {sent
            ? `Your email app should now open. If it doesn't, email ${email} directly.`
            : "This opens your email app with the message filled in. Nothing is stored on this site."}
        </p>
        <button
          type="submit"
          className="rounded-[6px] bg-accent px-6 py-3 text-[13px] font-semibold text-accent-ink transition-[filter] hover:brightness-110"
        >
          {contact.cta.button}
        </button>
      </div>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { site } from "@/content/site";

const field =
  "w-full rounded-lg border border-sand bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/50 focus:border-charcoal focus:outline-none";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      "Quote request",
      `Name: ${d.get("name")}`,
      `Company: ${d.get("company")}`,
      `City: ${d.get("city")}`,
      `Fabric: ${d.get("fabric")}`,
      `Quantity: ${d.get("quantity")}`,
      `Notes: ${d.get("notes")}`,
    ].join("\n");

    // Until a backend is connected, open WhatsApp if a number is set in content/site.ts
    if (site.whatsapp) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
    setSent(true);
  }

  return (
    <section id="quote" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <p className="eyebrow text-sage">Request a quote / 05</p>
        <h2 className="mt-4 text-4xl md:text-5xl">
          Tell us what you need. <em className="text-terracotta">We will send samples.</em>
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-charcoal/80">
          Share your fabric type and quantity. Our team replies with swatches and a bulk price.
        </p>
      </Reveal>

      <Reveal delay={120}>
        {sent ? (
          <div className="rounded-2xl border border-sand bg-sand/30 p-8" role="status">
            <h3 className="text-3xl">Thank you.</h3>
            <p className="mt-3 text-sm text-charcoal/80">Your request has been noted. We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5">
              <span className="eyebrow text-[0.64rem]">Name</span>
              <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
            </label>
            <label className="grid gap-1.5">
              <span className="eyebrow text-[0.64rem]">Company</span>
              <input name="company" autoComplete="organization" className={field} placeholder="Company or shop" />
            </label>
            <label className="grid gap-1.5">
              <span className="eyebrow text-[0.64rem]">City</span>
              <input name="city" required className={field} placeholder="City" />
            </label>
            <label className="grid gap-1.5">
              <span className="eyebrow text-[0.64rem]">Fabric type</span>
              <select name="fabric" className={field} defaultValue="Curtain fabric">
                <option>Curtain fabric</option>
                <option>Sofa fabric</option>
                <option>Both</option>
              </select>
            </label>
            <label className="grid gap-1.5 sm:col-span-2">
              <span className="eyebrow text-[0.64rem]">Quantity (meters or rolls)</span>
              <input name="quantity" required className={field} placeholder="For example 500 meters" />
            </label>
            <label className="grid gap-1.5 sm:col-span-2">
              <span className="eyebrow text-[0.64rem]">Notes</span>
              <textarea name="notes" rows={4} className={field} placeholder="Shades, designs or anything else" />
            </label>
            <button
              type="submit"
              className="eyebrow rounded-full bg-terracotta px-7 py-4 text-ivory transition-opacity hover:opacity-90 sm:col-span-2 sm:justify-self-start"
            >
              Send request
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

// Critically damped default — smooth settle, no overshoot.
const springSettle = { type: "spring", bounce: 0, duration: 0.35 } as const;
// Slight bounce reserved for the interactive tap itself.
const springTap = { type: "spring", bounce: 0.2, duration: 0.25 } as const;

const BUDGET_TIERS = ["<₹50k", "₹50k–₹1.5L", "₹1.5L+"] as const;
type BudgetTier = (typeof BUDGET_TIERS)[number];

const inputClasses =
  "apple-glass w-full rounded-2xl px-4 py-3 text-[14px] text-foreground placeholder:text-foreground-muted/70 outline-none transition-colors focus:border-accent/50";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow-text text-foreground-muted">{label}</span>
      {children}
    </label>
  );
}

export function Contact() {
  const [brand, setBrand] = useState("");
  const [handle, setHandle] = useState("");
  const [budget, setBudget] = useState<BudgetTier | null>(null);
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Campaign Pilot Request — ${brand || "New Brand"}`
    );
    const body = encodeURIComponent(
      [
        `Brand / Business Name: ${brand}`,
        `Instagram Handle or Website: ${handle}`,
        `Budget Tier: ${budget ?? "Not specified"}`,
        `WhatsApp / Email: ${contactInfo}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );
    window.location.href = `mailto:sheik@decibel.co?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="eyebrow-text text-accent">Get in touch</p>
          <h2 className="display-title-sm mt-3 text-foreground">
            Request a campaign pilot.
          </h2>
          <p className="body-text mt-4 text-[15px] text-foreground-muted">
            Tell us about your brand and budget — we&apos;ll come back with a
            shortlisted creator plan within 48 hours.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springSettle}
          className="apple-glass mt-10 flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Brand / Business Name">
              <input
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. Coastal & Co."
                className={inputClasses}
              />
            </Field>
            <Field label="Instagram Handle or Website">
              <input
                required
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="@yourbrand or yourbrand.com"
                className={inputClasses}
              />
            </Field>
          </div>

          <Field label="Budget Tier">
            <div className="apple-glass flex w-fit flex-wrap items-center gap-1 rounded-full p-1.5">
              {BUDGET_TIERS.map((tier) => {
                const isActive = budget === tier;
                return (
                  <motion.button
                    key={tier}
                    type="button"
                    onClick={() => setBudget(tier)}
                    whileTap={{ scale: 0.96 }}
                    transition={springTap}
                    className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                      isActive ? "text-black" : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="budget-tier-pill"
                        transition={springSettle}
                        className="absolute inset-0 -z-10 rounded-full bg-accent"
                      />
                    )}
                    <span className="relative">{tier}</span>
                  </motion.button>
                );
              })}
            </div>
          </Field>

          <Field label="WhatsApp / Email">
            <input
              required
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="+91 90000 00000 or you@brand.com"
              className={inputClasses}
            />
          </Field>

          <Field label="Message">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you looking to launch?"
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </Field>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            transition={springTap}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-black"
          >
            Request Campaign Pilot
            <ArrowUpRight size={16} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

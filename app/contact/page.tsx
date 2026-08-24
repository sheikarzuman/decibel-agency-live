"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send, CheckCircle2, MessageSquare, Mail, MapPin, ArrowUpRight } from "lucide-react";

// lucide-react dropped brand/logo icons (incl. Instagram) — inline glyph instead,
// matching the same stroke-based style as the rest of the icon set.
function InstagramIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    handle: "",
    contact: "",
    budget: "< ₹50,000",
    service: "Influencer Marketing",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
      <Navbar />

      {/* Header */}
      <section className="text-center pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }} // Critically damped spring
        >
          <span className="inline-block apple-glass text-xs font-medium px-4 py-1.5 rounded-full text-foreground-muted mb-4">
            Direct Line • Fast Turnaround
          </span>
          <h1 className="display-title font-semibold text-white tracking-tight">
            <span className="text-foreground-muted">Let’s craft your next</span> <br />
            breakout campaign.
          </h1>
          <p className="body-text text-base text-foreground-muted max-w-xl mx-auto mt-4">
            Whether you need high-converting UGC reels or a full-scale South Indian creator deployment, our team is ready to execute.
          </p>
        </motion.div>
      </section>

      {/* Main Grid: Form + Quick Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">

        {/* Left Column: Direct Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* WhatsApp Direct Card */}
          <div className="apple-glass rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Instant WhatsApp Connect</h3>
                <p className="text-xs text-foreground-muted">Fastest response for immediate briefs</p>
              </div>
            </div>
            <motion.a
              href="https://wa.me/916369411388?text=Hi%20Decibel%20Team%2C%20we%20would%20like%20to%20discuss%20a%20campaign%20pilot"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }} // Instant pointer feedback
              className="mt-2 w-full bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs font-medium py-2.5 px-4 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Chat +91 63694 11388</span>
              <ArrowUpRight size={14} className="text-foreground-muted" />
            </motion.a>
          </div>

          {/* Email Card */}
          <div className="apple-glass rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Formal Briefs & RFPs</h3>
                <p className="text-xs text-foreground-muted">Send pitch decks and deliverables</p>
              </div>
            </div>
            <motion.a
              href="mailto:decible.creative.in@gmail.com"
              whileTap={{ scale: 0.97 }}
              className="mt-2 w-full bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs font-medium py-2.5 px-4 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>decible.creative.in@gmail.com</span>
              <ArrowUpRight size={14} className="text-foreground-muted" />
            </motion.a>
          </div>

          {/* Instagram Card */}
          <div className="apple-glass rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <InstagramIcon size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Instagram Studio</h3>
                <p className="text-xs text-foreground-muted">Follow our creator drops and roster</p>
              </div>
            </div>
            <motion.a
              href="https://www.instagram.com/decibel.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="mt-2 w-full bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs font-medium py-2.5 px-4 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>@decibel.co.in</span>
              <ArrowUpRight size={14} className="text-foreground-muted" />
            </motion.a>
          </div>

          {/* Regional Hubs */}
          <div className="apple-glass rounded-2xl p-6 border border-white/10 text-xs text-foreground-muted flex items-center gap-3">
            <MapPin size={18} className="text-white shrink-0" />
            <span>Serving leading brands across Bengaluru, Chennai, Coimbatore, Hyderabad & Kochi.</span>
          </div>
        </motion.div>

        {/* Right Column: Interactive Brief Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <div className="apple-glass rounded-3xl p-8 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle2 className="mx-auto text-white mb-4" size={48} />
                <h2 className="text-xl font-semibold text-white">Campaign Brief Submitted</h2>
                <p className="text-sm text-foreground-muted mt-2 max-w-sm mx-auto">
                  Thank you! Our operations team will review your scope and get in touch via WhatsApp / Email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-foreground-muted uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-foreground-muted uppercase tracking-wider mb-2">Brand / Company</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Acme Lifestyle"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-foreground-muted uppercase tracking-wider mb-2">Website / Instagram Handle</label>
                    <input
                      required
                      type="text"
                      placeholder="@yourbrand or domain.com"
                      value={formData.handle}
                      onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-foreground-muted uppercase tracking-wider mb-2">WhatsApp or Email</label>
                    <input
                      required
                      type="text"
                      placeholder="+91 98765 43210 / brand@domain.com"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-foreground-muted uppercase tracking-wider mb-2">Primary Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#121216] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white"
                    >
                      <option value="Influencer Marketing">Influencer Marketing Campaign</option>
                      <option value="UGC Video Studio">UGC Video Production</option>
                      <option value="Both">Both (Influencer + UGC)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-foreground-muted uppercase tracking-wider mb-2">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#121216] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white"
                    >
                      <option value="< ₹50,000">&lt; ₹50,000 (Sprint Pilot)</option>
                      <option value="₹50,000 - ₹1,50,000">₹50,000 – ₹1,50,000 (Growth)</option>
                      <option value="₹1,50,000+">₹1,50,000+ (Regional Scale)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-foreground-muted uppercase tracking-wider mb-2">Campaign Deliverables & Goals</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about target audience, timeline, or specific creative requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }} // Instant tap feedback[cite: 1]
                  className="w-full bg-white text-black font-medium text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e8e8ed] transition-colors shadow-lg"
                >
                  Submit Campaign Brief <Send size={15} />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

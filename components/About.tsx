"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const FOUNDERS = [
  {
    name: "Sheik Arzuman",
    role: "Co-Founder & Managing Partner",
    initials: "SA",
    photo: "/sheik.jpg",
    email: "sheik@decibel.co",
    badge: "Operations & Systems",
    desc: "B.Tech graduate with engineering background in backend development and agentic AI architectures. Translates technical precision into high-throughput campaign operations, creator tracking, and quantified performance metrics."
  },
  {
    name: "Anu Suresh",
    role: "Co-Founder & Creative Director",
    initials: "AS",
    email: "anu@decibel.co",
    badge: "Creative & Brand Strategy",
    desc: "Brings 1+ years of dedicated influencer marketing experience directing talent and high-impact campaigns for leading consumer brands including Amazon, Flipkart, and Lifestyle."
  }
];

export function About() {
  return (
    <section id="about" className="pt-12 pb-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-foreground-muted font-medium">
            Leadership
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2 tracking-tight">
            Built for creators. Engineered for brand growth.
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="apple-glass rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {founder.photo ? (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10">
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-medium text-sm text-white">
                      {founder.initials}
                    </div>
                  )}
                  <span className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                    {founder.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">{founder.name}</h3>
                <p className="text-xs font-medium text-foreground-muted uppercase tracking-wider mt-1">{founder.role}</p>
                <p className="text-sm text-foreground-muted mt-4 leading-relaxed">{founder.desc}</p>
                {founder.email && (
                  <a
                    href={`mailto:${founder.email}`}
                    className="mt-4 inline-block text-xs text-foreground-muted hover:text-white transition-colors"
                  >
                    {founder.email}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

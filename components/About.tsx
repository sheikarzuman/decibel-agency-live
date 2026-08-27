"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const FOUNDERS = [
  {
    name: "Sheik Arzuman",
    role: "Co-Founder & Managing Partner",
    focus: "Operations & Systems",
    photo: "/sheik.jpg",
    email: "sheik@decibel.co",
    desc: "B.Tech graduate with an engineering background in backend development and agentic AI architectures. Translates technical precision into high-throughput campaign operations, creator tracking, and quantified performance metrics."
  },
  {
    name: "Anu Suresh",
    role: "Co-Founder & Creative Director",
    focus: "Creative & Brand Strategy",
    photo: "/anu.jpg",
    email: "anu@decibel.co",
    desc: "Brings 6+ years of experience in social media management and entrepreneurship, alongside 1+ years of dedicated influencer marketing experience directing talent and high-impact campaigns for leading consumer brands including Amazon, Flipkart, and Lifestyle."
  }
];

export function About() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="eyebrow-text text-foreground-muted">Leadership</p>
          <h2 className="display-title-sm mt-3 text-white">Built by operators, not marketers.</h2>
        </div>

        {/* Founders — large editorial presentation, not team-page cards */}
        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-900">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent px-6 pb-6 pt-20">
                  <p className="eyebrow-text text-white/70">{founder.focus}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{founder.name}</h3>
                <p className="mt-1 text-sm text-foreground-muted">{founder.role}</p>
                <p className="body-text mt-4 max-w-md text-[15px] leading-relaxed text-foreground-muted">
                  {founder.desc}
                </p>
                <a
                  href={`mailto:${founder.email}`}
                  className="mt-4 inline-block text-[13px] text-foreground-muted transition-colors hover:text-white"
                >
                  {founder.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

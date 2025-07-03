import React from "react";

// Core values and Why Us
const coreValues = [
  {
    title: "Performance First",
    desc: "We don’t chase vanity metrics. Everything we do is tied to ROI.",
  },
  {
    title: "Transparency",
    desc: "No hidden fees. No vague reports. We show you exactly what’s working and what’s not.",
  },
  {
    title: "Ownership Mentality",
    desc: "Your business is our business. We treat every campaign like it’s our own money on the line.",
  },
  {
    title: "Innovation",
    desc: "From CAPI integration to AI-powered creatives, we stay ahead so you don’t fall behind.",
  },
];

const whyWorkWithUs = [
  "Google Certified Partner",
  "Strategy-first approach (not just media buying)",
  "Full-funnel expertise: from ad to conversion",
  "Crystal-clear reporting and tracking",
  "Friendly, proactive communication",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-poppins flex flex-col pt-32 pb-16">
      {/* HERO */}
      <section className="w-full max-w-2xl mx-auto px-5 flex flex-col items-center text-center">
        <span className="text-xs tracking-widest font-semibold uppercase bg-[#FFD700] text-black px-4 py-1 rounded-full mb-5 shadow-sm">
          ABOUT US
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] mb-2 leading-tight " style={{letterSpacing: "-1.5px", lineHeight: "60px"}}>
          At Leads Magnet,<br className="hidden sm:inline"/> We Build Campaigns That Perform.
        </h1>
        <div className="w-16 h-1.5 rounded-full bg-[#FFD700] my-6" />
        <p className="text-white/90 text-lg font-light mb-2 max-w-xl">
          Based in London and trusted globally, we specialize in performance marketing for home services, clinics, and eCommerce brands that want <span className="text-[#FFD700] font-semibold">real results, not empty metrics</span>.
        </p>
        <p className="text-[#FFD700] text-lg font-bold max-w-xl mb-5">
          10+ years experience. Real leads. Real revenue.
        </p>
      </section>
      
      {/* DIVIDER */}
      <div className="w-full max-w-2xl px-5 my-8 mx-auto">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
      </div>

      {/* ABOUT BODY */}
      <section className="w-full max-w-3xl mx-auto px-5 mb-10">
        <p className="text-white/90 text-base sm:text-lg mb-3">
          With a sharp focus on <b className="text-[#FFD700]">ROI</b>, we act as a true growth partner, helping clients turn ad spend into profit with smart strategy, high-performing creatives, and bulletproof tracking.
        </p>
        <p className="text-white/90 text-base sm:text-lg mb-3">
          We’ve helped local businesses go from <span className="text-[#FFD700] font-semibold">5 leads a week to 30+ a day</span>, and scaled eCommerce brands to <span className="text-[#FFD700] font-semibold">12X ROAS</span>. Whatever your goal, our team is here to turn marketing from a cost into your <b>best investment</b>.
        </p>
      </section>
      
      {/* MISSION / VISION */}
      <section className="w-full max-w-3xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
        <div className="bg-white/5 border border-[#FFD70033] rounded-2xl p-6 flex flex-col items-start shadow-md">
          <h2 className="text-xl font-extrabold text-[#FFD700] mb-1">Our Mission</h2>
          <div className="text-white/90 text-base">
            To help growth-focused businesses scale smarter through performance-driven marketing that delivers measurable results—leads, sales, and real revenue, not just likes or impressions.
          </div>
        </div>
        <div className="bg-white/5 border border-[#FFD70033] rounded-2xl p-6 flex flex-col items-start shadow-md">
          <h2 className="text-xl font-extrabold text-[#FFD700] mb-1">Our Vision</h2>
          <div className="text-white/90 text-base">
            To become the go-to performance marketing agency for service-based businesses and eCommerce brands across the UK, GCC, and North America—known for delivering results, transparency, and unmatched strategy.
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full max-w-3xl mx-auto px-5 mb-12">
        <h3 className="text-2xl font-extrabold text-[#FFD700] mb-4 text-center">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coreValues.map(val => (
            <div key={val.title} className="bg-black/70 border border-[#FFD70022] rounded-2xl p-5">
              <div className="font-bold text-[#FFD700] mb-1">{val.title}</div>
              <div className="text-white/80">{val.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="w-full max-w-3xl mx-auto px-5 mb-6">
        <h3 className="text-2xl font-extrabold text-[#FFD700] mb-3 text-center">Why Work With Us?</h3>
        <ul className="flex flex-col gap-3 items-start sm:items-center pl-2 sm:pl-0">
          {whyWorkWithUs.map(item => (
            <li key={item} className="flex items-center gap-2 text-white/90 text-base">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFD700] mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA - if you want a button here, you can add it */}
      {/* 
      <div className="w-full flex justify-center mt-8">
        <button className="bg-[#FFD700] text-black font-bold px-8 py-3 rounded-2xl shadow hover:scale-105 hover:brightness-110 transition">
          Get Your Free Audit
        </button>
      </div>
      */}

      <style>{`
        .text-gold { color: #FFD700; }
        .bg-gold { background: #FFD700; }
      `}</style>
    </main>
  );
}

import React from "react";
import {
  FaTooth,
  FaHouseUser,
  FaCartShopping,
  FaStethoscope,
  FaArrowRight,
} from "react-icons/fa6";

const studies = [
  {
    industry: "Dental Clinic",
    icon: <FaTooth className="text-3xl text-gold drop-shadow" />,
    problem: "Few patient bookings from online campaigns",
    strategy: "Intent-based keywords + local targeting + phone tracking",
    result: "Booked 2 months out, 7x ROI in 3 months",
  },
  {
    industry: "Home Services",
    icon: <FaHouseUser className="text-3xl text-gold drop-shadow" />,
    problem: "Low lead volume from Google Ads",
    strategy: "Geo-targeted ads + call funnel optimization",
    result: "Cost per lead dropped by 63%",
  },
  {
    industry: "eCommerce",
    icon: <FaCartShopping className="text-3xl text-gold drop-shadow" />,
    problem: "Scaling ad spend with flat sales",
    strategy: "Ad creative testing, funnel restructure, ROAS automation",
    result: "Revenue up 4x, new top 5% store status",
  },
  {
    industry: "Medical Clinic",
    icon: <FaStethoscope className="text-3xl text-gold drop-shadow" />,
    problem: "Wasted spend, unqualified leads",
    strategy: "Conversion-focused landing + call tracking",
    result: "Lead quality up, 3x more bookings",
  },
];

export default function CasePage() {
  return (
    <main className="min-h-[93vh] bg-black text-white font-poppins pb-20">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-5 flex flex-col items-center text-center mb-20 pt-36 sm:pt-40">
        {/* ↑↑↑ Here is the increased padding-top (pt-36 or sm:pt-40) */}
        <span className="bg-gold text-black font-bold px-7 py-2 rounded-full text-sm tracking-widest mb-6 shadow-md">
          CASE STUDIES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gold mb-4 leading-tight sm:leading-snug" style={{ letterSpacing: "-1px" }}>
          Real Client Success<br />In Every Industry
        </h1>
        <div className="w-16 h-1.5 rounded-full bg-gold mb-7 mt-1" />
        <p className="text-white/90 text-lg sm:text-xl mb-2 max-w-2xl">
          See how we’ve transformed results for clinics, home services, and online brands — with ROI, not just reports.
        </p>
        <div className="font-bold text-gold text-lg sm:text-xl mt-2 mb-7">
          10+ years. 50+ campaigns. Measurable, repeatable growth.
        </div>
        <div className="w-full max-w-2xl px-5 mt-2 mb-10 flex">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
      </div>
      </section>

      {/* CASE CARDS */}
      <section className="max-w-5xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-10">
        {studies.map(({ industry, icon, problem, strategy, result }, i) => (
          <div
            key={i}
            className="
              flex flex-col h-full bg-white/5 border border-gold/20
              rounded-3xl px-8 py-8 shadow-xl group transition-transform duration-200
              hover:scale-[1.033] hover:shadow-gold/40
              animate-fadeIn
            "
            style={{ minHeight: 370 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gold/15 mr-1">
                {icon}
              </div>
              <span className="font-extrabold text-xl text-gold">{industry}</span>
            </div>
            <div className="flex flex-col gap-2 flex-grow pb-4">
              <div className="text-white/90 text-base leading-snug">
                <span className="font-bold text-gold/90">Problem: </span>
                {problem}
              </div>
              <div className="text-white/85 text-base leading-snug">
                <span className="font-bold text-gold/90">Strategy: </span>
                {strategy}
              </div>
              <div className="text-white/90 text-base leading-snug">
                <span className="font-bold text-gold/90">Results: </span>
                {result}
              </div>
            </div>
            <div className="flex-grow" />
            <a
              href="#cta"
              className="
                mt-6 w-full
                relative
                flex items-center justify-center gap-2
                bg-gold text-black font-black text-base
                rounded-2xl py-3 px-2 shadow-lg shadow-gold/20
                border border-gold/60
                transition-all duration-200
                focus:outline-none
                hover:bg-black hover:text-gold
                hover:scale-105 active:scale-97
                before:absolute before:inset-0 before:rounded-2xl before:z-0
                before:opacity-0 hover:before:opacity-60
                before:bg-gold before:blur-lg
                group
              "
              style={{ zIndex: 1, overflow: "hidden" }}
            >
              <span className="relative z-10">Want results like this? Get a Free Audit</span>
              <FaArrowRight className="relative z-10 text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </section>

      {/* Styles */}
      <style>{`
        .text-gold { color: #FFD700; }
        .bg-gold { background: #FFD700; }
        .border-gold\\/20 { border-color: #FFD70033; }
        .shadow-gold\\/20 { box-shadow: 0 2px 16px #FFD70022; }
        .shadow-gold\\/40 { box-shadow: 0 4px 24px #FFD70066; }
        .hover\\:scale-105:hover { transform: scale(1.05); }
        .active\\:scale-97:active { transform: scale(0.97); }
        .animate-fadeIn { animation: fadeInUp .7s cubic-bezier(.16,1,.3,1) both;}
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(48px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </main>
  );
}

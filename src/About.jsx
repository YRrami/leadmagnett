import React from "react";

const traits = [
  {
    label: "London-based",
    desc: "Rooted in the UK business scene.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="#181818" stroke="#FFD700" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="6.5" fill="#FFD700" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Niche Experts",
    desc: "Home services & clinics. We know your market.",
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="4" fill="#FFD700" />
        <rect x="7" y="9" width="18" height="14" rx="2" fill="#fff" fillOpacity="0.92" />
        <rect x="11" y="11" width="10" height="2" rx="1" fill="#FFD700" />
      </svg>
    ),
  },
  {
    label: "Transparent, Responsive",
    desc: "Fast, honest updates—always.",
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4C24 4 28 8 28 12C28 22 16 28 16 28C16 28 4 22 4 12C4 8 8 4 16 4Z" fill="#FFD700" stroke="#fff" strokeWidth="2"/>
        <path d="M16 10v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="2" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: "ROI-Obsessed",
    desc: "If you don’t grow, we don’t win.",
    icon: (
      <svg width="42" height="42" fill="none" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 5C19 5 25 8 25 16C25 25 16 25 16 25C16 25 7 25 7 16C7 8 13 5 16 5Z" fill="#FFD700" stroke="#fff" strokeWidth="2"/>
        <circle cx="16" cy="14" r="2.5" fill="#fff"/>
        <path d="M16 25v4" stroke="#FFD700" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-poppins flex flex-col items-center pt-32 pb-24">
      {/* ---- HERO section (keep as you like) ---- */}
      <div className="w-full max-w-2xl px-5 mx-auto flex flex-col items-center">
        <span className="text-xs tracking-widest font-semibold uppercase bg-[#FFD700] text-black px-4 py-1 rounded-full mb-5 shadow-sm">
          ABOUT US
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] text-center tracking-tight mb-3"
          style={{ letterSpacing: "-1.5px", lineHeight: 1.13 }}
        >
          Your Strategic Growth<br />Partner
        </h1>
        <div className="w-16 h-1.5 rounded-full bg-[#FFD700] mb-7" />
        <p className="text-white/90 text-lg text-center font-light mb-3 max-w-xl">
          We’re not just media buyers — we’re your outsourced performance marketing team.
        </p>
        <p className="text-[#FFD700] text-lg font-bold text-center max-w-xl mb-7">
          10+ years experience. Real leads. Real revenue.
        </p>
      </div>
      {/* ---- SOFT DIVIDER ---- */}
      <div className="w-full max-w-2xl px-5 mt-2 mb-10">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
      </div>
      {/* ---- TRAITS ROW ---- */}
      <section
        className="
          w-full max-w-5xl flex flex-col md:flex-row items-center justify-center
          gap-8 md:gap-4 lg:gap-8 px-4
          mt-2
        "
        aria-label="Key Agency Traits"
      >
        {traits.map(({ label, desc, icon }) => (
          <div
            key={label}
            className="
              flex flex-col items-center text-center
              p-0 md:p-3 lg:p-5
              min-w-[170px] max-w-[220px]
              "
          >
            <div className="mb-3">{icon}</div>
            <div className="font-extrabold text-lg text-[#FFD700] mb-1">{label}</div>
            <div className="text-white/80 text-base font-light leading-snug">{desc}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

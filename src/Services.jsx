import React from "react";

const services = [
  {
    icon: "📍",
    title: "Google Ads for Home Services",
    copy: "We help plumbing, electrical, HVAC, and other home service businesses dominate local search with high-converting Google Ads.",
    bullets: [
      "Geo-targeted lead generation",
      "Call tracking and booking funnel optimization",
      "Performance-based scaling"
    ],
    cta: "Book Your Free Audit"
  },
  {
    icon: "🏥",
    title: "Google Ads for Clinics",
    copy: "We specialize in Google Ads for dental, medical, and cosmetic clinics — built to drive patient bookings, not just clicks.",
    bullets: [
      "Keyword intent mapping",
      "Local campaign structuring",
      "Call & form tracking"
    ],
    cta: "Get Patients on Autopilot"
  },
  {
    icon: "🛍️",
    title: "eCommerce Ads",
    copy: "We help online stores scale profitably. Facebook, Instagram, Google Shopping — we test fast and scale what works.",
    bullets: [
      "Conversion-focused creatives",
      "Ad funnel strategies",
      "ROAS-based decisions"
    ],
    cta: "Scale Your Store"
  },
  {
    icon: "🔍",
    title: "SEO with Guarantee",
    copy: "We guarantee your business will appear on the first page of Google within 6 months — or you don’t pay until it does.",
    bullets: [
      "Full site audit",
      "On-page optimization",
      "Link-building campaigns",
      "Google Business profile optimization"
    ],
    cta: "Get Guaranteed SEO"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-poppins">
      {/* Header */}
      <section className="flex flex-col items-center justify-center pt-36 pb-6 px-3">
        <div className="mb-3">
          <span className="text-xs tracking-widest font-semibold uppercase bg-[#FFD700] text-black px-4 py-1 rounded-full mb-5 shadow-sm">
            SERVICES
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gold text-center mb-2 leading-tight" style={{ letterSpacing: "-1px" }}>
          Services Designed For<br />Growth
        </h1>
        <div className="my-3 h-1 w-20 bg-gold/80 rounded-full" />
        <p className="text-white/90 text-xl text-center max-w-2xl">
          We deliver real business results — not just impressions or vanity metrics.
        </p>
        <div className="mb-7 mt-4 font-extrabold text-gold text-lg text-center">
          10+ years experience. Real leads. Real revenue.
        </div>
        {/* ---- SOFT DIVIDER ---- */}
        <div className="w-full max-w-2xl px-5 mt-2 mb-10 flex">
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-9 mt-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                flex flex-col h-full bg-gradient-to-br from-zinc-900/85 to-black/90
                border border-zinc-800 rounded-2xl shadow-lg px-7 py-8
                transition-all hover:border-gold/60 hover:scale-[1.035]
                min-h-[420px] relative
              "
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-black text-lg text-gold mb-2">{service.title}</h3>
                <p className="text-white/85 mb-4 text-base">{service.copy}</p>
                <ul className="mb-1 space-y-1">
                  {service.bullets.map((b, idx) => (
                    <li className="text-white/75 text-sm flex items-start" key={idx}>
                      <span className="inline-block mr-2 text-gold font-bold text-base pt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-5 flex">
                <a
                  href="/contact"
                  className="
                    inline-block bg-gold text-black font-bold px-6 py-2 rounded-xl
                    shadow-lg hover:scale-105 hover:brightness-105 transition-all duration-200
                    text-base text-center w-full
                  "
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Extra styles for .bg-gold */}
      <style>{`
        .bg-gold { background-color: #FFD700; }
        .text-gold { color: #FFD700; }
        .border-gold { border-color: #FFD700; }
      `}</style>
    </main>
  );
}

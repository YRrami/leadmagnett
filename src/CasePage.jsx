import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const caseStudies = [
  {
    headline: "🚀 How Austin Jumping Castles Turned $3K/Month Into $85K in Sales",
    before: "Austin Jumping Castles is a family-run business offering inflatable fun across Sydney. Despite a great service and positive customer feedback, they were struggling to scale. They were relying on word of mouth and had tried advertising before — but with little return.",
    challenge: "Their biggest challenge was predictability. Some weeks were fully booked; others were completely dry. They had no clear system to consistently bring in bookings, especially during off-peak seasons.",
    solution: "We built a targeted Google Ads campaign focused on high-intent keywords in their area — including suburb-specific search terms and seasonal event targeting. We created landing pages that were optimized for conversion, structured call tracking, and implemented dayparting strategies to make sure ads showed when customers were searching.",
    result: "In just 60 days, Austin Jumping Castles scaled from inconsistent leads to consistent bookings and $85,000/month in sales — all on a $3,000/month ad budget.",
    bonus: "They’ve now expanded their fleet and are considering launching new party rental services due to increased demand.",
  },
  {
    headline: "🚗 How a Sydney Towing Company Went From Slow Days to 25+ Calls Daily",
    before: "This towing company was operating across Sydney but wasn’t getting consistent business. They relied on an outdated website and organic search, which was too slow to deliver results. Their competitors were dominating the paid search space.",
    challenge: "They needed urgent calls — not clicks or form submissions. Tow truck customers are in the moment of need. This required a strategy that didn’t just generate leads — it had to deliver live phone calls at scale.",
    solution: "We crafted a location-based Google Ads campaign targeting 'tow truck near me' and emergency-related terms. We used call-only ads during peak traffic hours and set up a 24/7 tracking system with instant response automation to capture every possible call.",
    result: "With just a $4,500/month ad spend, they now receive 25+ calls every single day — and the cost per call is well below industry average.",
    bonus: "They’ve added three new trucks to keep up with the increased demand and are now planning to open a second location.",
  },
  {
    headline: "🌱 How a Dubai Hair Brand Hit 8X ROAS in 45 Days",
    before: "Ultra Green Life, a clean beauty brand based in Dubai, was ready to grow—but their Meta ads weren’t profitable. Their products were top-tier, but poor targeting and generic creatives held them back from scale.",
    challenge: "They needed a performance strategy that could cut through a saturated beauty market and deliver measurable ROI, not vanity metrics.",
    solution: "We built a full-funnel Meta strategy — starting with high-converting video ads tailored to GCC culture and beauty trends. We segmented audiences by lookalike data, retargeted based on pixel events, and tested dozens of creative variations.",
    result: "Ultra Green Life scaled to 8X ROAS in just 45 days — doubling monthly revenue while lowering cost-per-purchase by 37%.",
    bonus: "They're now preparing to launch in Saudi Arabia, with us leading the expansion plan.",
  },
  {
    headline: "😎 How Vibe Haus Turned TikTok Glasses Into a 12X ROAS Winner",
    before: "Vibe Haus had a fun product—party glasses with built-in lens filters—but no real traction. Their previous agency focused on impressions and likes, not revenue. Sales were unpredictable and mostly organic.",
    challenge: "They needed a system to turn viral moments into real purchases — consistently.",
    solution: "We rebuilt their Meta strategy from scratch, focusing on bold, trend-driven UGC paired with direct-response copywriting. We implemented a conversion-focused Shopify funnel, connected CAPI, and built retargeting sequences that hit at the right moment.",
    result: "Vibe Haus hit 12X ROAS in under 30 days and turned into a top seller in their niche. Their average daily orders tripled and the brand became a go-to for party accessories.",
    bonus: "They just launched a new collection — GlowRush — and it’s already outperforming the original product line.",
  },
];

function CaseCard({ data, onOpenContact }) {
  const [open, setOpen] = useState(false);

  // Handle click on card but NOT on button
  function handleCardClick(e) {
    // If the button was clicked, don't toggle card
    if (e.target.closest("button")) return;
    setOpen((v) => !v);
  }

  return (
    <div
      className={`
        w-full bg-white/10 border border-gold/20 rounded-3xl p-4 sm:p-7 mb-8 shadow-xl transition-all
        hover:shadow-gold/30
        ${open ? "bg-black/85" : "bg-black/60"}
        group animate-fadeIn
        cursor-pointer
      `}
      style={{ minHeight: open ? 330 : 140 }}
      tabIndex={0}
      aria-expanded={open}
      onClick={handleCardClick}
      onKeyPress={e => { if (e.key === "Enter" || e.key === " ") setOpen(v => !v); }}
    >
      <h2 className="text-base sm:text-xl font-extrabold text-gold mb-2">{data.headline}</h2>
      {!open ? (
        <div className="text-white/80 text-base sm:text-lg">
          <span className="font-bold text-gold/90">Result: </span>
          {data.result}
          <span className="block mt-2 text-sm text-gold/80 underline underline-offset-2">Click here to show more</span>
        </div>
      ) : (
        <div className="text-white/90 text-base sm:text-lg flex flex-col gap-2 mt-2">
          <div><span className="font-bold text-gold/90">Before: </span>{data.before}</div>
          <div><span className="font-bold text-gold/90">The Challenge: </span>{data.challenge}</div>
          <div><span className="font-bold text-gold/90">Our Solution: </span>{data.solution}</div>
          <div><span className="font-bold text-gold/90">The Result: </span>{data.result}</div>
          <div className="text-gold/80 text-sm mt-1 italic">Bonus Win: {data.bonus}</div>
        </div>
      )}
      {/* Button always visible at bottom */}
      <div className="flex w-full mt-5">
        <button
          type="button"
          onClick={e => { e.stopPropagation(); onOpenContact && onOpenContact(); }}
          className="
            w-full
            relative
            flex items-center justify-center gap-2
            bg-gold text-black font-black text-base sm:text-lg
            rounded-2xl py-3 shadow-lg shadow-gold/20
            border border-gold/60
            transition-all duration-200
            focus:outline-none
            hover:bg-black hover:text-gold
            hover:scale-105 active:scale-97
            group
          "
          style={{ zIndex: 1, overflow: "hidden" }}
          tabIndex={0}
        >
          <span className="relative z-10">Want results like this? Get a Free Audit</span>
          <FaArrowRight className="relative z-10 text-lg group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function CasePage({ onOpenContact }) {
  return (
    <main className="min-h-[93vh] bg-black text-white font-poppins pb-16">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center mb-12 pt-28 sm:pt-36">
        <span className="bg-gold text-black font-bold px-7 py-2 rounded-full text-xs sm:text-sm tracking-widest mb-6 shadow-md">
          CASE STUDIES
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gold mb-4 leading-tight sm:leading-snug" style={{ letterSpacing: "-1px" }}>
          Real Client Success<br />In Every Industry
        </h1>
        <div className="w-16 h-1.5 rounded-full bg-gold mb-7 mt-1" />
        <p className="text-white/90 text-base sm:text-xl mb-2 max-w-2xl">
          See how we’ve transformed results for real businesses — with ROI, not just reports.
        </p>
        <div className="font-bold text-gold text-base sm:text-xl mt-2 mb-7">
          10+ years. 50+ campaigns. Measurable, repeatable growth.
        </div>
        <div className="w-full max-w-2xl px-5 mt-2 mb-8 flex">
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
        </div>
      </section>

      {/* CASE CARDS */}
      <section className="max-w-3xl mx-auto px-2">
        {caseStudies.map((study, i) => (
          <CaseCard data={study} key={i} onOpenContact={onOpenContact} />
        ))}
      </section>

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

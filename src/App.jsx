import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import heroAnim from "./hero-anim.json";
import logoImg from "./logo.png";
import { motion, AnimatePresence } from "framer-motion";
import PartnerBadge from './Partner-CMYK.svg';
// --------- PAGE COMPONENTS (IMPORT YOURS) ---------
import AboutPage from "./About";
import ServicesPage from "./Services";
import CasePage from "./CasePage";
// import Testimonials from "./testimonials";
import BlogPage from "./BlogPage";
import Contact from "./Contact";
import Contacta from "./Contacta";

// ---------- NAVBAR ----------
const Logo = ({ size = 45, className = "" }) => (
  <a href="/"><img
    src={logoImg}
    alt="Leads Magnet Logo"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ borderRadius: 12 }}
  /></a>
);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Case Studies", to: "/CasePage" },
  // { name: "Testimonials", to: "/testimonials" },
  { name: "Blog", to: "/BlogPage" },
   { name: "Contact", to: "/Contacta" } // If you want a direct link to contact
];

// --- NAVBAR COMPONENT ---
const Navbar = ({ onOpenContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMobileNav = () => setMenuOpen(false);

  return (
    <header className="w-full flex justify-center fixed top-0 z-50 transition-all duration-200">
      <nav className="
        relative flex items-center justify-between w-full
        bg-black/15
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_4px_24px_0_rgba(0,0,0,0.22)]
        font-poppins
        py-2 sm:py-2.5
        mt-2 sm:mt-4 xl:mt-6
        px-4 sm:px-6
        transition-all duration-200
        ring-1 ring-gold/30
        xl:max-w-7xl xl:rounded-2xl
      ">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Logo />
          <span
            className="text-gold uppercase tracking-wider"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 900,
              letterSpacing: "0.12em",
              fontSize: "1.0rem",
              lineHeight: 1.05,
            }}
          >
            <a href="/">LEADS MAGNET</a>
          </span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden xl:flex gap-2 sm:gap-4 lg:gap-7 items-center h-14" role="menubar">
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <a
                href={link.to}
                className={`
                  group relative px-2 md:px-3 py-2 rounded-lg
                  font-medium text-base
                  focus:outline-gold transition-all
                  text-white hover:text-gold
                `}
                onClick={handleMobileNav}
              >
                <span>{link.name}</span>
                <span className={`
                  absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 rounded-full bg-gold transition-all duration-300 ease-in
                  group-hover:w-2/3
                `} />
              </a>
            </li>
          ))}
          <li role="none">
            <button
              type="button"
              onClick={onOpenContact}
              className="ml-1 xl:ml-3 bg-gold text-black font-bold px-4 py-2 rounded-2xl
                transition shadow-md border border-gold/0
                hover:brightness-110
                hover:shadow-[0_0_16px_4px_rgba(255,215,0,0.65)]
                relative overflow-hidden
                text-base
                focus:outline-gold
              "
              aria-label="Get Your Free Audit"
            >
              <span className="relative z-10">Get Your Free Audit</span>
              <span className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-60 transition-opacity duration-300 bg-gold blur-lg z-0" />
            </button>
          </li>
        </ul>
        {/* Hamburger/X for Mobile */}
        <button
          className="
            xl:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-gold transition
            absolute right-4 top-1/2 -translate-y-1/2
            xl:static xl:translate-y-0
          "
          style={{ zIndex: 10 }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}>
              <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round"/>
              <line x1="6" y1="18" x2="18" y2="6" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth={2}>
              <line x1="5" y1="7" x2="19" y2="7" strokeLinecap="round"/>
              <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round"/>
              <line x1="5" y1="17" x2="19" y2="17" strokeLinecap="round"/>
            </svg>
          )}
        </button>
        {/* Mobile Nav */}
        <div>
          <div
            className={`
              xl:hidden fixed top-[68px] left-0 w-full z-50 transition-all duration-300
              ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-8 opacity-0 pointer-events-none"}
            `}
          >
            <ul className="bg-black/95 backdrop-blur-2xl rounded-b-3xl shadow-xl border-t border-gold/30 mx-2 pt-6 pb-7 flex flex-col gap-2 text-base sm:text-lg font-semibold text-white" role="menubar">
              {navLinks.map((link) => (
                <li key={link.name} role="none">
                  <a
                    href={link.to}
                    className={`
                      block px-4 sm:px-6 py-3 rounded-xl
                      focus:outline-gold
                      text-white hover:text-gold
                      relative transition-all
                    `}
                    onClick={handleMobileNav}
                  >
                    <span>{link.name}</span>
                    <span className={`
                      absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 rounded-full bg-gold transition-all duration-300 ease-in
                    `} />
                  </a>
                </li>
              ))}
              <li className="mt-3" role="none">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="block bg-gold text-black font-bold px-4 sm:px-6 py-3 rounded-2xl
                    hover:brightness-110 hover:shadow-[0_0_16px_4px_rgba(255,215,0,0.65)]
                    relative overflow-hidden text-center text-base sm:text-lg transition focus:outline-gold
                  "
                  aria-label="Get Your Free Audit"
                >
                  <span className="relative z-10">Get Your Free Audit</span>
                  <span className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-60 transition-opacity duration-300 bg-gold blur-lg z-0" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
        .focus\\:outline-gold:focus {
          outline: 2px solid #FFD700 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </header>
  );
};

// ---------- HERO ----------
const Hero = ({ onOpenContact }) => (
  <section
    className="relative flex items-center justify-center w-full min-h-screen bg-black text-white font-poppins pt-20 sm:pt-28 xl:pt-40 pb-10 sm:pb-20 overflow-hidden"
    id="home"
  >
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[320px] sm:w-[400px] md:w-[480px] h-[320px] sm:h-[400px] md:h-[480px] bg-gold opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 left-0 w-[100px] sm:w-[150px] md:w-[220px] h-[100px] sm:h-[150px] md:h-[220px] bg-gold opacity-10 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[90px] sm:w-[130px] md:w-[180px] h-[90px] sm:h-[130px] md:h-[180px] bg-gold opacity-10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/80 to-black" />
    </div>
    <div className="relative z-10 flex flex-col-reverse xl:flex-row items-center w-full px-2 sm:px-6 gap-8 xl:gap-0 xl:justify-between">
      {/* --- LEFT: TEXT CONTENT --- */}
      <div className="flex-1 flex flex-col justify-center items-start xl:items-start text-left xl:text-left w-full max-w-2xl xl:ml-16 mb-10 xl:mb-0">
        <span className="mb-5 sm:mb-7 inline-block bg-gold/90 text-black font-lato font-bold px-4 sm:px-6 py-1 rounded-full uppercase tracking-wide text-xs sm:text-sm shadow-md animate-fadeIn">
          Google Certified Partner 
        </span>
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-5 text-gold drop-shadow-xl leading-tight animate-fadeInUp">
          Campaigns That Perform.
        </h1>
        <h2 className="text-base sm:text-xl xl:text-2xl font-semibold mb-6 sm:mb-10 text-white/90 animate-fadeInUp" style={{ animationDelay: "0.15s" }}>
          We drive real ROI through lead generation, eCommerce ads,<br className="hidden sm:block" />
          and guaranteed SEO — no fluff.
        </h2>
        <button
          type="button"
          onClick={onOpenContact}
          className="
            bg-gold text-black font-bold px-7 sm:px-10 py-3 sm:py-4 rounded-2xl text-base sm:text-lg shadow-lg
            transition-all duration-200 animate-fadeInUp mb-5 sm:mb-7
            hover:scale-105 hover:brightness-100
            hover:shadow-[0_0_24px_6px_rgba(255,215,0,0.8)]
            relative overflow-hidden
          "
          style={{ animationDelay: "0.3s" }}
          aria-label="Get Your Free Audit"
        >
          <span className="relative z-10">Get Your Free Audit</span>
          <span className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-60 transition-opacity duration-300 bg-gold blur-lg z-0" />
        </button>
      </div>
      {/* --- RIGHT: LOTTIE ANIMATION --- */}
      <div className="flex-1 w-full flex justify-center items-center">
        <div className="w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] xl:w-[430px] xl:h-[430px]">
          <Lottie
            animationData={heroAnim}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-14 sm:h-20 bg-gold opacity-15 blur-2xl rounded-full pointer-events-none" />
    <div className="absolute bottom-4 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
      <span className="text-gold text-xl sm:text-2xl animate-bounce">↓</span>
      <span className="text-xs text-white/70">Scroll</span>
    </div>
    <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
      }
      @keyframes fadeIn {
        from { opacity: 0;}
        to { opacity: 1;}
      }
      .animate-fadeIn {
        animation: fadeIn 1s ease both;
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.13;}
        50% { opacity: 0.22;}
      }
      .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
      }
      .focus\\:outline-gold:focus {
        outline: 2px solid #FFD700 !important;
        outline-offset: 2px !important;
      }
    `}</style>
  </section>
);

// ---------- WHY CHOOSE US SECTION ----------


// Sample data (update as before)
const whyChooseItems = [
  {
    label: "Google Certified Partner ",
    badge: PartnerBadge, // Or use import as mentioned before
    link: "https://www.google.com/partners/agency?id=2595684232",
    desc: "Your campaigns are handled by certified pros.",
  },
  { label: "ROI & ROAS Focused", icon: "💹", desc: "We maximize your budget for real profit—not just clicks." },
  { label: "SEO Guarantee", icon: "🛡️", desc: "If we don’t deliver, you don’t pay—simple." },
  { label: "Full Transparency", icon: "🔍", desc: "You see every move, every stat, all in real time." }
];

const WhyChooseUs = () => (
  <section className="relative py-20 px-4 bg-black backdrop-blur-xl" id="why-us">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <h3 className="text-3xl sm:text-4xl font-black text-gold mb-12 text-center drop-shadow-gold">
        Why Choose Us?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full">
        {whyChooseItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-5 bg-black/60 border border-gold/15 rounded-2xl py-7 px-7 shadow-lg hover:scale-[1.035] hover:shadow-[0_0_24px_4px_rgba(255,215,0,0.13)] transition-all duration-200 backdrop-blur-md"
          >
            {/* Badge or Icon */}
            {item.badge && item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-15 h-15 min-w-[64px] min-h-[64px] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg border-2 border-gold/40  relative"
                aria-label="Google Partner - Visit Site"
                style={{
                  boxShadow: "0 0 0 5px #FFD70044, 0 2px 18px #FFD70022",
                }}
              >
                {/* ZOOMED Badge Image */}
                <img
                  src={item.badge}
                  alt="Google Partner Certified"
                  className="absolute left-1/2 top-1/2 w-24 h-24 object-contain -translate-x-1/2 -translate-y-1/2 scale-125"
                  style={{
                    pointerEvents: 'none', // Keeps click on <a>
                  }}
                />
              </a>
            ) : item.icon ? (
              <span className="text-3xl bg-gold/25 rounded-full p-3">{item.icon}</span>
            ) : null}
            {/* Text Content */}
            <div>
              <div className="text-lg font-bold text-gold mb-1">{item.label}</div>
              <div className="text-white/80 text-sm">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      .drop-shadow-gold { filter: drop-shadow(0 2px 10px #FFD70055);}
    `}</style>
  </section>
);





// ---------- SERVICES SNAPSHOT ----------
const services = [
  { name: "Google Ads for Home Services", icon: "🏠" },
  { name: "Google Ads for Clinics", icon: "🏥" },
  { name: "SEO (Guaranteed)", icon: "🚀" },
  { name: "eCommerce Ads", icon: "🛒" },
];
const ServicesSnapshot = () => (
  <section className="relative py-16 px-4 bg-black via-black/80 to-black/90" id="services">
    <h3 className="text-3xl sm:text-4xl font-black text-gold mb-14 text-center drop-shadow animate-fadeInUp">
      Our Services
    </h3>
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {services.map((service, i) => (
        <div
          key={service.name}
          className="relative flex flex-col items-center justify-center bg-black/70 border-2 border-gold/20 rounded-3xl p-8 shadow-xl transition group hover:border-gold hover:bg-gold/5 hover:shadow-gold/30 hover:scale-105"
          style={{
            animationDelay: `${i * 0.1 + 0.2}s`,
            animation: "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-gold/10 blur-2xl rounded-full pointer-events-none" />
          <div className="relative text-4xl mb-4 group-hover:scale-125 transition">{service.icon}</div>
          <div className="font-black text-lg text-gold mb-1 text-center tracking-wide">{service.name}</div>
        </div>
      ))}
    </div>
  </section>
);









const clientResults = [
  {
    adSpend: "£10K",
    revenue: "£80K",
    desc: "Plumbing Client (UK)",
    roi: "800%",
  },
  {
    adSpend: "$3,000",
    revenue: "$30,000",
    desc: "US Dentist",
    roi: "1000%",
  },
  {
    adSpend: "$45,000",
    revenue: "$1,200,000",
    desc: "Ecom Store (US)",
    roi: "2567%",
  },
  {
    adSpend: "€12,000",
    revenue: "€120,000",
    desc: "EU SaaS Startup",
    roi: "1000%",
  },
];

const ClientResults = () => (
  <section className="relative py-12 px-1 sm:py-20 sm:px-4 bg-gradient-to-br from-black via-zinc-900/95 to-black overflow-hidden">
    {/* Background orbs */}
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -top-24 -left-16 w-[170px] h-[170px] bg-gold/30 rounded-full blur-3xl opacity-30 animate-pulse-slow2"></div>
      <div className="absolute bottom-10 -right-10 w-[120px] h-[120px] bg-gold/20 rounded-full blur-2xl opacity-25 animate-pulse-slow"></div>
      <div className="absolute left-1/2 top-2/3 -translate-x-1/2 w-[270px] h-[100px] bg-gold/15 rounded-full blur-2xl opacity-25 animate-pulse"></div>
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      <div
        className="rounded-3xl border border-gold/25 bg-white/10 shadow-2xl px-0 sm:px-8 py-8 sm:py-14 backdrop-blur-xl animate-fadeInUp ring-2 ring-gold/10"
        style={{
          background: "linear-gradient(115deg,rgba(18,17,13,0.84) 70%,rgba(255,215,0,0.07))",
        }}
      >
        <h4 className="text-xl sm:text-2xl font-black text-gold mb-2 tracking-tight drop-shadow-gold px-4 sm:px-0">Client Results</h4>
        <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-gold/70 via-white/80 to-gold/50 mb-6 animate-bar-pulse mx-4 sm:mx-0"></div>
        
        {/* Cards */}
        <div
          className="
            flex sm:grid gap-5 sm:gap-6
            overflow-x-auto sm:overflow-x-visible
            snap-x sm:snap-none pb-3
            sm:grid-cols-2 lg:grid-cols-4
            px-3
            scrollbar-thin scrollbar-thumb-[#FFD70044] scrollbar-track-[#181818]
          "
        >
          {clientResults.map((r, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 snap-center
                box-border
                min-w-[80vw] max-w-[85vw] xs:min-w-[70vw] xs:max-w-[75vw]
                sm:min-w-0 sm:max-w-none
                bg-black/85 rounded-2xl border border-gold/20 shadow-lg
                p-4 xs:p-5 flex flex-col items-center justify-center
                hover:scale-[1.04] hover:shadow-gold/30 transition
                mx-auto
                focus-within:ring-2 focus-within:ring-gold
                relative
              "
              style={{
                animation: `fadeInUp .65s ${(i * 0.11) + 0.1}s both`,
              }}
              tabIndex={0}
            >
              <div className="text-gold/80 text-[0.80rem] font-bold uppercase tracking-widest mb-1 text-center">{r.desc}</div>
              <div className="flex items-end gap-1 justify-center mb-2 flex-wrap">
                <span className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-gold drop-shadow-gold animate-goldPulse">{r.adSpend}</span>
                <span className="ml-1 text-xs xs:text-sm sm:text-base text-white/85 font-semibold" style={{lineHeight: 1}}>ad spend</span>
                <span className="hidden sm:inline mx-2 text-gold font-black text-2xl">→</span>
                <span className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-gold drop-shadow-gold animate-goldPulse2">{r.revenue}</span>
                <span className="ml-1 text-xs xs:text-sm sm:text-base text-white/85 font-semibold" style={{lineHeight: 1}}>revenue</span>
              </div>
              <div className="text-white/70 text-xs xs:text-sm sm:text-base italic pt-1">ROI: {r.roi}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center px-3">
          <span className="italic text-xs sm:text-sm text-white/70">
            Real results. Zero fluff. Clients see ROI, not excuses.
          </span>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 right-10 w-9 h-9 bg-gold/25 rounded-full blur-xl opacity-40 pointer-events-none z-0" />
    <style>{`
      .drop-shadow-gold { filter: drop-shadow(0 2px 15px #FFD70088);}
      @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px);} 100% { opacity: 1; transform: translateY(0);}}
      .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both;}
      @keyframes pulse-slow { 0%,100% { opacity: 0.30;} 50% { opacity: 0.45;}}
      @keyframes pulse-slow2 { 0%,100% { opacity: 0.18;} 50% { opacity: 0.32;}}
      .animate-pulse-slow { animation: pulse-slow 3.2s cubic-bezier(0.4,0,0.6,1) infinite;}
      .animate-pulse-slow2 { animation: pulse-slow2 4.3s cubic-bezier(0.4,0,0.6,1) infinite;}
      @keyframes goldPulse { 0%,100% { text-shadow: 0 0 14px #FFD70077;} 55% { text-shadow: 0 0 26px #FFD700;}}
      @keyframes goldPulse2 { 0%,100% { text-shadow: 0 0 10px #FFD70044;} 65% { text-shadow: 0 0 28px #FFD700BB;}}
      .animate-goldPulse { animation: goldPulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite;}
      .animate-goldPulse2 { animation: goldPulse2 2.9s cubic-bezier(0.4,0,0.6,1) infinite;}
      @keyframes bar-pulse { 0%,100% { opacity: 0.75;} 55% { opacity: 1;}}
      .animate-bar-pulse { animation: bar-pulse 2.3s ease-in-out infinite;}
      .scrollbar-thin::-webkit-scrollbar { height: 7px;}
      .scrollbar-thumb-[#FFD70044]::-webkit-scrollbar-thumb { background: #FFD70044; border-radius: 4px;}
      .scrollbar-track-[#181818]::-webkit-scrollbar-track { background: #181818;}
    `}</style>
  </section>
);






















// const testimonials = [
//   ...testimonials removed...
// ];

const GOLD = "#FFD700";

// Card animation for center/faded sides
const cardAnim = {
  initial: (custom) => ({
    opacity: 0,
    scale: 0.92,
    x: custom * 120,
    filter: "blur(8px)",
  }),
  animate: (custom) => ({
    opacity: 1,
    scale: custom === 0 ? 1 : 0.93,
    x: custom * 120,
    filter: custom === 0 ? "blur(0px)" : "blur(3px)",
    zIndex: custom === 0 ? 2 : 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 24,
    }
  }),
  exit: (custom) => ({
    opacity: 0,
    scale: 0.91,
    x: custom * 120,
    filter: "blur(8px)",
    transition: { duration: 0.13 }
  })
};

// export function TestimonialsCarousel() {
//   ...testimonials carousel code commented out...
// }


// ---------- CTA STRIP ----------
const CTAStrip = ({ onOpenContact }) => (
  <section className="relative py-14 px-4 bg-black">
    <div className="bg-gradient-to-r from-gold/90 to-gold/70 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between px-8 py-10 gap-7 sm:gap-0 animate-fadeInUp">
      <div className="text-2xl sm:text-3xl font-black text-black tracking-tight">
        Let’s build a campaign that performs.
      </div>
      <button
        type="button"
        onClick={onOpenContact}
        className="mt-4 sm:mt-0 bg-black text-gold font-bold px-10 py-4 rounded-2xl text-lg shadow-lg hover:scale-105 hover:brightness-110 hover:shadow-gold/40 transition-all duration-200 pulse-gold"
        aria-label="Claim Your Free Audit"
      >
        Claim Your Free Audit
      </button>
    </div>
    <style>{`
      .pulse-gold {
        animation: pulseGold 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes pulseGold {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,215,0,0.18);}
        50% { box-shadow: 0 0 24px 4px rgba(255,215,0,0.35);}
      }
    `}</style>
  </section>
);



// ---------- FOOTER ----------
const Footer = () => (
  <footer className="relative z-10 w-full bg-black backdrop-blur-xl border-t border-gold/20 py-8 px-4 mt-12">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8 sm:gap-6">
      {/* Logo & Brand */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <Logo size={36} />
        <span
          className="text-gold font-bold text-lg tracking-wider"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          LEADS MAGNET
        </span>
      </div>
      {/* Nav Links */}
      <ul className="
        flex flex-wrap justify-center
        gap-4 md:gap-5
        text-white/70 font-medium text-sm
        px-1
      ">
        <li><a href="/about" className="hover:text-gold transition">About</a></li>
        <li><a href="/services" className="hover:text-gold transition">Services</a></li>
        <li><a href="/CasePage" className="hover:text-gold transition">Case Studies</a></li>
       {/* <li><a href="/testimonials" className="hover:text-gold transition">Testimonials</a></li> */}
        <li><a href="/BlogPage" className="hover:text-gold transition">Blog</a></li>
        <li><a href="/Contacta" className="hover:text-gold transition">Contact</a></li>
      </ul>
      {/* Social & Copyright */}
      <div className="flex flex-col-reverse sm:flex-row items-center gap-3 sm:gap-4">
        <span className="text-white/40 text-xs">
          &copy; {new Date().getFullYear()} Leads Magnet
        </span>
        <div className="flex gap-2">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold text-white/50 transition" aria-label="Twitter">
            {/* Twitter SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M18 6.1c.01.15.01.31.01.46 0 4.68-3.53 10.08-10.01 10.08-1.98 0-3.83-.58-5.39-1.57a7.16 7.16 0 0 0 5.18-1.45 3.54 3.54 0 0 1-3.3-2.46c.22.03.45.06.7.06.33 0 .66-.04.97-.13a3.54 3.54 0 0 1-2.83-3.47v-.05c.47.26 1 .41 1.56.43a3.55 3.55 0 0 1-1.58-2.96c0-.65.17-1.26.46-1.78A10.05 10.05 0 0 0 9.83 7.1c-.06-.15-.09-.31-.09-.48 0-1.16.94-2.1 2.1-2.1.6 0 1.14.25 1.52.66A7.16 7.16 0 0 0 17.5 4.7c-.18.52-.52.97-.99 1.25A4.2 4.2 0 0 0 18 6.1z"/></svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold text-white/50 transition" aria-label="LinkedIn">
            {/* LinkedIn SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17.6 17.6h-2.65V13c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.68H9.04V7.5h2.54v1.38h.04c.35-.66 1.21-1.35 2.48-1.35 2.65 0 3.14 1.74 3.14 4.01v6.06zM5.34 6.11a1.54 1.54 0 1 1 0-3.09 1.54 1.54 0 0 1 0 3.09zM6.68 17.6H3.99V7.5h2.69v10.1zM18.88 0H1.1C.49 0 0 .48 0 1.08v17.84C0 19.51.48 20 1.09 20h17.79c.6 0 1.09-.49 1.09-1.08V1.08C20 .48 19.51 0 18.91 0z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);


// ---------- APP ----------

// ---------- LINK INTERCEPTOR ----------
function LinkInterceptor() {
  const navigate = useNavigate();
  useEffect(() => {
    const handler = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      const anchor = e.target.closest("a[href]");
      if (
        anchor &&
        anchor.href &&
        anchor.origin === window.location.origin &&
        anchor.getAttribute("target") !== "_blank"
      ) {
        const href = anchor.getAttribute("href");
        if (
          href.startsWith("http") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:") ||
          href.startsWith("#") ||
          anchor.hasAttribute("download")
        ) {
          return;
        }
        e.preventDefault();
        navigate(href);
        window.scrollTo(0, 0);
      }
    };
    document.body.addEventListener("click", handler);
    return () => document.body.removeEventListener("click", handler);
  }, [navigate]);
  return null;
}

// ---------- MAIN APP ----------
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // Keyboard close for modal
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <BrowserRouter>
      <LinkInterceptor />
      <Navbar onOpenContact={() => setModalOpen(true)} />
      {/* Modal overlay for Contact */}
      {modalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setModalOpen(false)} />
          <div className="relative z-10">
            <Contact open={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
          <style>{`
            .animate-fadeIn {
              animation: fadeIn 0.33s;
            }
            @keyframes fadeIn {
              from { opacity: 0;}
              to { opacity: 1;}
            }
          `}</style>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero onOpenContact={() => setModalOpen(true)} />
              <WhyChooseUs />
              <ServicesSnapshot />
              <ClientResults />
             
              {/* <TestimonialsCarousel /> */}
              <CTAStrip onOpenContact={() => setModalOpen(true)} />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        
        {/* Optionally, /Contact as a page */}
        <Route path="/Contact" element={<Contact open={true} />} />
        <Route path="/BlogPage" element={<BlogPage />} />
         <Route path="/Contacta" element={<Contacta />} />

        <Route path="/CasePage" element={<CasePage onOpenContact={() => setModalOpen(true)} />} />
      </Routes>
      <Footer />
      <ExtraStyles />
    </BrowserRouter>
  );
}
// ---------- EXTRA ANIM STYLES ----------
const ExtraStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(40px);}
      100% { opacity: 1; transform: translateY(0);}
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
    }
    .drop-shadow-gold {
      filter: drop-shadow(0 2px 8px #FFD70066);
    }
  `}</style>
);

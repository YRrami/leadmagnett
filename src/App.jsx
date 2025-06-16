import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import heroAnim from "./hero-anim.json";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import AboutPage from "./About";
import ServicesPage from "./Services";
import CasePage from "./CasePage";
import Testimonials from "./testimonials";
import BlogPage from "./BlogPage";
import Contact from "./Contact";
import logoImg from "./logo.png";
import { motion, AnimatePresence } from "framer-motion";
import PartnerBadge from './Partner-CMYK.svg';


// ---------- NAVBAR ----------

const Logo = ({ size = 45, className = "" }) => (
  <img
    src={logoImg}
    alt="Leads Magnet Logo"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ borderRadius: 12 }}
  />
);
const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Case Studies", to: "/CasePage" },
  { name: "Testimonials", to: "/testimonials" },
  { name: "Blog", to: "/BlogPage" },
];

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Determines active nav based on path/hash
  const isActive = (link) => {
    if (link.to === "/") return location.pathname === "/" && !location.hash;
    if (link.to === "/about") return location.pathname === "/about";
    if (link.to === "/services") return location.pathname === "/services";
    if (link.to === "/testimonials") return location.pathname === "/testimonials";
    if (link.to === "/BlogPage") return location.pathname === "/BlogPage";
    if (link.to === "/CasePage") return location.pathname === "/CasePage";
    // For in-page sections, match hash and be on home page
    if (link.to.startsWith("/"))
      return (
        location.pathname === "/" &&
        location.hash === link.to.replace("/", "")
      );
    return false;
  };

  // For mobile menu: close on nav
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
            LEADS MAGNET
          </span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden xl:flex gap-2 sm:gap-4 lg:gap-7 items-center h-14" role="menubar">
          {navLinks.map((link) =>
             (link.to === "/" || link.to === "/about" || link.to === "/BlogPage" || link.to === "/CasePage" || link.to === "/testimonials"|| link.to === "/services"|| link.to === "/Contact") ? (
              <li key={link.name} role="none">
                <Link
                  to={link.to}
                  className={`
                    group relative px-2 md:px-3 py-2 rounded-lg
                    font-medium text-base
                    focus:outline-gold transition-all
                    ${isActive(link) ? "text-gold font-bold" : "text-white hover:text-gold"}
                  `}
                  onClick={handleMobileNav}
                >
                  <span>{link.name}</span>
                  <span className={`
                    absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 rounded-full bg-gold transition-all duration-300 ease-in
                    ${isActive(link) ? "w-3/4" : "group-hover:w-2/3"}
                  `} />
                </Link>
              </li>
            ) : (
              <li key={link.name} role="none">
                <a
                  href={link.to.replace("/", "")}
                  className={`
                    group relative px-2 md:px-3 py-2 rounded-lg
                    font-medium text-base
                    focus:outline-gold transition-all
                    ${isActive(link) ? "text-gold font-bold" : "text-white hover:text-gold"}
                  `}
                  onClick={handleMobileNav}
                >
                  <span>{link.name}</span>
                  <span className={`
                    absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 rounded-full bg-gold transition-all duration-300 ease-in
                    ${isActive(link) ? "w-3/4" : "group-hover:w-2/3"}
                  `} />
                </a>
              </li>
            )
          )}
          <li role="none">
            <Link
              to="/Contact"
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
            </Link>
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
              {navLinks.map((link) =>
                (link.to === "/" || link.to === "/about" || link.to === "/BlogPage" || link.to === "/CasePage" || link.to === "/testimonials"|| link.to === "/services"|| link.to === "/Contact") ? (
                  <li key={link.name} role="none">
                    <Link
                      to={link.to}
                      className={`
                        block px-4 sm:px-6 py-3 rounded-xl
                        focus:outline-gold
                        ${isActive(link) ? "text-gold font-bold" : "text-white hover:text-gold"}
                        relative transition-all
                      `}
                      onClick={handleMobileNav}
                    >
                      <span>{link.name}</span>
                      <span className={`
                        absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 rounded-full bg-gold transition-all duration-300 ease-in
                        ${isActive(link) ? "w-3/4" : ""}
                      `} />
                    </Link>
                  </li>
                ) : (
                  <li key={link.name} role="none">
                    <a
                      href={link.to.replace("/", "")}
                      className={`
                        block px-4 sm:px-6 py-3 rounded-xl
                        focus:outline-gold
                        ${isActive(link) ? "text-gold font-bold" : "text-white hover:text-gold"}
                        relative transition-all
                      `}
                      onClick={handleMobileNav}
                    >
                      <span>{link.name}</span>
                      <span className={`
                        absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 rounded-full bg-gold transition-all duration-300 ease-in
                        ${isActive(link) ? "w-3/4" : ""}
                      `} />
                    </a>
                  </li>
                )
              )}
              <li className="mt-3" role="none">
                <Link
                  to="/Contact"
                  className="block bg-gold text-black font-bold px-4 sm:px-6 py-3 rounded-2xl
                    hover:brightness-110 hover:shadow-[0_0_16px_4px_rgba(255,215,0,0.65)]
                    relative overflow-hidden text-center text-base sm:text-lg transition focus:outline-gold
                  "
                  onClick={handleMobileNav}
                  aria-label="Get Your Free Audit"
                >
                  <span className="relative z-10">Get Your Free Audit</span>
                  <span className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-60 transition-opacity duration-300 bg-gold blur-lg z-0" />
                </Link>
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
const Hero = () => (
  <section
    className="relative flex items-center justify-center w-full min-h-screen bg-black text-white font-poppins pt-20 sm:pt-28 xl:pt-40 pb-10 sm:pb-20 overflow-hidden"
    id="home"
  >
    {/* --- BACKGROUND EFFECTS --- */}
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
          Google Partner Certified
        </span>
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-5 text-gold drop-shadow-xl leading-tight animate-fadeInUp">
          Campaigns That Perform.
        </h1>
        <h2 className="text-base sm:text-xl xl:text-2xl font-semibold mb-6 sm:mb-10 text-white/90 animate-fadeInUp" style={{ animationDelay: "0.15s" }}>
          We drive real ROI through lead generation, eCommerce ads,<br className="hidden sm:block" />
          and guaranteed SEO — no fluff.
        </h2>
        <a
          href="/Contact"
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
        </a>
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

    {/* --- SCROLL INDICATOR & BOTTOM GLOW --- */}
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


// Sample data
const whyChooseItems = [
  { label: "Google Partner Certified", badge: "/mnt/data/Partner-CMYK.svg", desc: "Your campaigns are handled by certified pros." },
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
            className="flex items-start gap-4 bg-black/60 border border-gold/15 rounded-2xl py-7 px-7 shadow-lg hover:scale-[1.035] hover:shadow-[0_0_24px_4px_rgba(255,215,0,0.13)] transition-all duration-200 backdrop-blur-md"
          >
            {/* Only render the badge for the Google Partner Certified option */}
            {item.label === "Google Partner Certified" && (
              <a href="https://www.google.com/partners/agency?id=2595684232" target="_blank" rel="noopener noreferrer">
                <div className="w-35 h-16 rounded-full overflow-hidden relative">
                  <img
                    src={PartnerBadge}
                    alt="Google Partner Certified"
                    className="object-cover w-full h-full transform scale-110 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </a>
            )}
            {/* Display other icons */}
            {item.label !== "Google Partner Certified" && (
              <span className="text-3xl bg-gold/25 rounded-full p-3">{item.icon}</span>
            )}
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

// ---------- CLIENT RESULTS ----------
const ClientResults = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-black via-zinc-900/95 to-black overflow-hidden">
    {/* --- Animated gold orbs, background --- */}
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Left orb */}
      <div className="absolute -top-24 -left-16 w-[170px] h-[170px] bg-gold/30 rounded-full blur-3xl opacity-30 animate-pulse-slow2"></div>
      {/* Right orb */}
      <div className="absolute bottom-10 -right-10 w-[120px] h-[120px] bg-gold/20 rounded-full blur-2xl opacity-25 animate-pulse-slow"></div>
      {/* Subtle center orb */}
      <div className="absolute left-1/2 top-2/3 -translate-x-1/2 w-[270px] h-[100px] bg-gold/15 rounded-full blur-2xl opacity-25 animate-pulse"></div>
    </div>

    {/* --- Glassy Results Card --- */}
    <div className="max-w-2xl mx-auto relative z-10">
      <div
        className="
          rounded-3xl border border-gold/25 bg-white/10
          shadow-2xl px-8 py-14 flex flex-col items-center text-center
          backdrop-blur-xl
          animate-fadeInUp
          ring-2 ring-gold/10
        "
        style={{
          background:
            "linear-gradient(115deg,rgba(18,17,13,0.84) 70%,rgba(255,215,0,0.07))",
        }}
      >
        {/* Title */}
        <h4 className="text-2xl font-black text-gold mb-2 tracking-tight drop-shadow-gold">Client Results</h4>
        {/* Animated gold bar */}
        <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-gold/70 via-white/80 to-gold/50 mb-7 animate-bar-pulse"></div>

        {/* Numbers, pop, and glow */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center justify-center">
          <span className="text-3xl sm:text-4xl font-extrabold text-gold drop-shadow-gold animate-goldPulse">£10K</span>
          <span className="font-semibold text-base sm:text-lg text-white/90">in ad spend</span>
          <span className="hidden sm:inline text-gold font-black text-2xl">→</span>
          <span className="text-3xl sm:text-4xl font-extrabold text-gold drop-shadow-gold animate-goldPulse2">£80K</span>
          <span className="font-semibold text-base sm:text-lg text-white/90">revenue</span>
        </div>
        {/* Description */}
        <div className="mt-5">
          <span className="italic text-sm text-white/70">Real results. Zero fluff. Clients see ROI, not excuses.</span>
        </div>
      </div>
    </div>

    {/* Decorative dot */}
    <div className="absolute bottom-8 right-10 w-9 h-9 bg-gold/25 rounded-full blur-xl opacity-40 pointer-events-none z-0" />
    <style>{`
      .drop-shadow-gold { filter: drop-shadow(0 2px 15px #FFD70088);}
      @keyframes pulse-slow {
        0%,100% { opacity: 0.30;}
        50% { opacity: 0.45;}
      }
      @keyframes pulse-slow2 {
        0%,100% { opacity: 0.18;}
        50% { opacity: 0.32;}
      }
      .animate-pulse-slow {
        animation: pulse-slow 3.2s cubic-bezier(0.4,0,0.6,1) infinite;
      }
      .animate-pulse-slow2 {
        animation: pulse-slow2 4.3s cubic-bezier(0.4,0,0.6,1) infinite;
      }
      @keyframes goldPulse {
        0%,100% { text-shadow: 0 0 14px #FFD70077;}
        55% { text-shadow: 0 0 26px #FFD700;}
      }
      @keyframes goldPulse2 {
        0%,100% { text-shadow: 0 0 10px #FFD70044;}
        65% { text-shadow: 0 0 28px #FFD700BB;}
      }
      .animate-goldPulse {
        animation: goldPulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite;
      }
      .animate-goldPulse2 {
        animation: goldPulse2 2.9s cubic-bezier(0.4,0,0.6,1) infinite;
      }
      @keyframes bar-pulse {
        0%,100% { opacity: 0.75;}
        55% { opacity: 1;}
      }
      .animate-bar-pulse {
        animation: bar-pulse 2.3s ease-in-out infinite;
      }
    `}</style>
  </section>
);

const testimonials = [
  {
    quote: "Leads Magnet delivered 8x ROI on our campaigns. Impressive!",
    name: "John Doe",
    role: "Plumbing Business",
    img: "https://placehold.co/96x96",
  },
  {
    quote: "Booked out our clinic for 2 months straight.",
    name: "Dr. Sarah Lee",
    role: "Dental Clinic",
    img: "https://placehold.co/96x96",
  },
  {
    quote: "No-nonsense results. Highly recommended.",
    name: "Samir Patel",
    role: "eCommerce Store",
    img: "https://placehold.co/96x96",
  },
  {
    quote: "They actually cared about our KPIs. Great partner.",
    name: "Fatima Z.",
    role: "Consulting Agency",
    img: "https://placehold.co/96x96",
  },
];

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

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 640
  );
  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  function go(dir) {
    setCurrent((c) => {
      if (dir === "next") return (c + 1) % testimonials.length;
      if (dir === "prev") return (c - 1 + testimonials.length) % testimonials.length;
      return c;
    });
  }

  // Get indices for prev, current, next
  const getIdx = (offset) => (current + offset + testimonials.length) % testimonials.length;

  // Cards to display
  const cards = [
    { ...testimonials[getIdx(-1)], pos: -1 },
    { ...testimonials[getIdx(0)], pos: 0 },
    { ...testimonials[getIdx(1)], pos: 1 }
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-black" id="testimonials">
      <h3 className="text-2xl sm:text-4xl font-black text-gold mb-10 sm:mb-14 text-center drop-shadow animate-fadeInUp">
        What Our Clients Say
      </h3>
      <div className="flex flex-col items-center w-full">
        {/* Carousel row */}
        <div className="relative w-full flex items-center justify-center min-h-[290px] sm:min-h-[360px] max-w-[97vw] sm:max-w-3xl mx-auto">
          {cards.map((card, idx) => {
            if (isMobile && card.pos !== 0) return null;
            return (
              <AnimatePresence key={card.name + card.pos + current}>
                <motion.div
                  key={card.name + card.pos + current}
                  custom={card.pos}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={cardAnim}
                  className={`
                    absolute sm:static left-0 right-0 mx-auto
                    ${card.pos === 0 ? "z-20" : "z-10"}
                    flex flex-col items-center
                    w-full
                    px-2
                    ${isMobile ? "min-w-[90vw]" : "sm:w-[350px]"}
                  `}
                  style={{
                    pointerEvents: card.pos === 0 ? "auto" : "none"
                  }}
                >
                  {/* --- Neon avatar overlapping card --- */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      top: isMobile ? -33 : -48,
                      zIndex: 20,
                    }}
                  >
                    <div
                      className="neon-avatar flex items-center justify-center"
                      style={{
                        width: isMobile ? 56 : 78,
                        height: isMobile ? 56 : 78,
                        borderRadius: "9999px",
                        background: "#111",
                        position: "relative",
                        boxShadow:
                          `0 0 0 3px #222, 0 0 16px 6px #FFD70088, 0 0 44px 9px #FFD70044`,
                        overflow: "visible",
                        animation: "pulseNeon 2.2s cubic-bezier(0.4,0,0.6,1) infinite"
                      }}
                    >
                      <img
                        src={card.img}
                        alt={card.name}
                        className="rounded-full object-cover"
                        style={{
                          width: isMobile ? 48 : 66,
                          height: isMobile ? 48 : 66,
                          borderRadius: "9999px",
                          border: "3px solid #FFD700",
                          zIndex: 1,
                          boxShadow: "0 0 18px 0 #FFD70055",
                        }}
                      />
                      {/* Extra neon overlay for pop */}
                      <span style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "9999px",
                        boxShadow: "0 0 16px 4px #FFD70090, 0 0 36px 7px #FFD70040",
                        pointerEvents: "none",
                        zIndex: 0,
                        opacity: 0.8,
                        mixBlendMode: "screen"
                      }} />
                    </div>
                  </div>
                  {/* Card */}
                  <div className={`
                    bg-black/80 border border-gold/30 rounded-3xl pt-12 pb-8 px-5 sm:pt-16 sm:pb-9 sm:px-7 shadow-xl
                    flex flex-col items-center text-center relative
                    ${card.pos === 0 ? "" : "opacity-65"}
                  `}>
                    {/* Neon shadow under avatar */}
                    <div
                      style={{
                        position: "absolute",
                        top: isMobile ? 7 : 15,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: isMobile ? 44 : 66,
                        height: isMobile ? 14 : 22,
                        borderRadius: "40%",
                        background: "radial-gradient(circle, #FFD70055 35%, transparent 80%)",
                        zIndex: 1,
                        filter: "blur(7px)",
                        opacity: 0.6
                      }}
                    />
                    {/* Quote mark */}
                    <svg
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 text-gold/10 z-0 select-none pointer-events-none"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        fontSize={isMobile ? 36 : 48}
                        fontWeight="bold"
                        fill="currentColor"
                        opacity="0.6"
                      >“</text>
                    </svg>
                    <p className="text-base sm:text-lg text-white/90 italic font-medium mb-5 z-10">{card.quote}</p>
                    <span className="font-black text-gold text-base sm:text-lg mb-1 z-10">{card.name}</span>
                    <span className="text-gold/70 text-xs sm:text-sm font-semibold z-10">{card.role}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
        {/* Arrows + dots */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 mt-9 sm:mt-12">
          <button
            className="w-11 h-11 rounded-full border-2 border-gold text-gold flex items-center justify-center bg-black/60 hover:bg-gold/20 hover:scale-110 transition text-xl"
            onClick={() => go("prev")}
            aria-label="Previous testimonial"
            tabIndex={0}
          >
            <svg width="22" height="22" viewBox="0 0 22 22"><polyline points="14 6 8 11 14 16" fill="none" stroke={GOLD} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${current === i ? "bg-gold scale-125 shadow-gold" : "bg-gold/30"}`}
                style={{ boxShadow: current === i ? `0 0 8px 1px ${GOLD}90` : undefined }}
              />
            ))}
          </div>
          <button
            className="w-11 h-11 rounded-full border-2 border-gold text-gold flex items-center justify-center bg-black/60 hover:bg-gold/20 hover:scale-110 transition text-xl"
            onClick={() => go("next")}
            aria-label="Next testimonial"
            tabIndex={0}
          >
            <svg width="22" height="22" viewBox="0 0 22 22"><polyline points="8 6 14 11 8 16" fill="none" stroke={GOLD} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      {/* Neon Pulse Animation */}
      <style>{`
        .shadow-gold { box-shadow: 0 0 10px 1px #FFD70099; }
        @keyframes pulseNeon {
          0%,100% { box-shadow: 0 0 0 3px #222, 0 0 16px 6px #FFD70088, 0 0 44px 9px #FFD70033; }
          40% { box-shadow: 0 0 0 4px #FFD700AA, 0 0 34px 14px #FFD70055, 0 0 74px 18px #FFD70022;}
          70% { box-shadow: 0 0 0 3px #FFD70088, 0 0 16px 8px #FFD70077, 0 0 44px 13px #FFD70033;}
        }
      `}</style>
    </section>
  );
}
// ---------- CTA STRIP ----------
const CTAStrip = () => (
  <section className="relative py-14 px-4 bg-black">
    <div className="bg-gradient-to-r from-gold/90 to-gold/70 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between px-8 py-10 gap-7 sm:gap-0 animate-fadeInUp">
      <div className="text-2xl sm:text-3xl font-black text-black tracking-tight">
        Let’s build a campaign that performs.
      </div>
      <Link
        to="/Contact"
        className="mt-4 sm:mt-0 bg-black text-gold font-bold px-10 py-4 rounded-2xl text-lg shadow-lg hover:scale-105 hover:brightness-110 hover:shadow-gold/40 transition-all duration-200 pulse-gold"
        aria-label="Claim Your Free Audit"
      >
        Claim Your Free Audit
      </Link>
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
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <Logo />
        <span
          className="text-gold font-bold text-lg tracking-wider"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          LEADS MAGNET
        </span>
      </div>
      <ul className="flex gap-5 flex-wrap text-white/70 font-medium text-sm">
        <li>
          {/* <a href="#about" ...> to actual /about */}
          <Link to="/about" className="hover:text-gold transition">
            About
          </Link>
        </li>
        
        <li>
          <Link to="/services" className="hover:text-gold transition">
          Services
          </Link>
        </li>

        <li><Link to="/CasePage" className="hover:text-gold transition">Case Studies</Link></li>
        <li><Link to="/testimonials" className="hover:text-gold transition">Testimonials</Link></li>
        <li><Link to="/BlogPage" className="hover:text-gold transition">Blog</Link></li>
       
      </ul>
      <div className="flex items-center gap-4">
        <span className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Leads Magnet</span>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold text-white/50 transition" aria-label="Twitter">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M20.94 7.17c.01.15.01.31.01.46 0 4.67-3.56 10.06-10.06 10.06-2 .01-3.98-.57-5.65-1.67.29.04.57.06.87.06 1.65 0 3.18-.56 4.41-1.5-1.54-.03-2.84-1.05-3.29-2.45.21.04.42.06.65.06.31 0 .61-.04.89-.12-1.61-.32-2.83-1.74-2.83-3.45v-.04c.47.26 1.01.42 1.58.44-.94-.63-1.56-1.7-1.56-2.91 0-.64.17-1.25.46-1.77 1.67 2.05 4.18 3.4 7 3.54-.06-.25-.09-.5-.09-.76 0-1.86 1.51-3.38 3.37-3.38.97 0 1.84.41 2.45 1.07.77-.15 1.5-.43 2.16-.81-.25.79-.79 1.46-1.49 1.88.68-.08 1.33-.26 1.93-.54-.45.67-1 1.25-1.65 1.71z"></path></svg>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold text-white/50 transition" aria-label="LinkedIn">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5C3.33 3.5 2 4.82 2 6.48s1.32 2.98 2.98 2.98h.02c1.66 0 2.98-1.32 2.98-2.98S6.65 3.5 4.98 3.5zM2.4 20.5h5.16V9.5H2.4v11zm7.86 0h5.17v-5.52c0-1.32.02-3.01-1.84-3.01-1.84 0-2.12 1.44-2.12 2.93V20.5h5.17v-6.14c0-2.93-1.55-4.29-3.61-4.29-1.64 0-2.39.91-2.8 1.55h.02v-1.33H10.3c.07.86 0 11 0 11z"></path></svg>
        </a>
      </div>
    </div>
  </footer>
);

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

// ---------- APP ----------
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUs />
              <ServicesSnapshot />
              <ClientResults />
              <TestimonialsCarousel />
              <CTAStrip />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* To add more pages: */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/CasePage" element={<CasePage />}/>
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/BlogPage" element={<BlogPage />} /> 
      </Routes>
      <Footer />
      <ExtraStyles />
    </>
  );
}
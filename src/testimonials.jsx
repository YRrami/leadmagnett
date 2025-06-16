import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Dr. Sarah Lee",
    role: "Dental Clinic",
    location: "London, UK",
    quote:
      "Booked out our clinic for 2 months straight. The results were way beyond our expectations. Absolutely recommended.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "John Doe",
    role: "Plumbing Business",
    location: "London, UK",
    quote:
      "Leads Magnet delivered 8x ROI on our campaigns. Impressive, professional, and transparent from start to finish.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Samir Patel",
    role: "eCommerce Store",
    location: "London, UK",
    quote:
      "No-nonsense results. We scaled up quickly and saw a significant boost in online sales. Highly recommended.",
  },
];

const cardVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 70 : -70,
    scale: 0.98,
    opacity: 0,
    zIndex: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 2,
    position: "relative",
    transition: {
      x: { type: "spring", stiffness: 330, damping: 28 },
      scale: { duration: 0.2 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (dir) => ({
    x: dir < 0 ? 70 : -70,
    scale: 0.97,
    opacity: 0,
    zIndex: 0,
    position: "absolute",
    transition: { duration: 0.22 },
  }),
};

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);

  const next = () => {
    setDir(1);
    setIdx((i) => (i + 1) % testimonials.length);
  };
  const prev = () => {
    setDir(-1);
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const nextIdx = (idx + 1) % testimonials.length;

  return (
    <main className="min-h-screen bg-black text-white font-poppins flex flex-col items-center pt-32 pb-24">
      {/* --- Hero Section: Do not change anything here! --- */}
      <div className="w-full max-w-2xl px-5 mx-auto flex flex-col items-center">
        <span className="text-xs tracking-widest font-semibold uppercase bg-[#FFD700] text-black px-4 py-1 rounded-full mb-5 shadow-sm">
          TESTIMONIALS
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] text-center tracking-tight mb-3"
          style={{ letterSpacing: "-1.5px", lineHeight: 1.13 }}
        >
          What Our Clients Say
        </h1>
        <div className="w-16 h-1.5 rounded-full bg-[#FFD700] mb-7" />
        <p className="mb-7 text-white/90 text-lg text-center font-light mb-3 max-w-xl">
          See how we've transformed results for clinics, home services, and
          online brands — with ROI, not just reports.
        </p>
      </div>
      {/* ---- Soft Divider ---- */}
      <div className="w-full max-w-2xl px-5 mt-2 mb-10">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
      </div>

      {/* ---- Testimonials Section ---- */}
      <div className="
        flex flex-col md:flex-row gap-10 md:gap-14
        items-center justify-center w-full
        max-w-7xl px-3
        ">
        {/* Main Card */}
        <div className="
          relative flex items-center justify-center
          w-full max-w-[95vw]
          sm:w-[410px] md:w-[510px] lg:w-[540px]
          h-[250px] md:h-[260px]
          transition-all duration-200
        ">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={idx}
              custom={dir}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute left-0 top-0 w-full h-full flex items-center justify-center"
              style={{ minHeight: 180 }}
            >
              <div className={`
                group flex flex-row items-center w-full h-full
                bg-gradient-to-br from-black/90 via-black/85 to-gold/5
                border border-gold/40
                rounded-[2.2rem]
                px-4 sm:px-7 md:px-8 py-6 md:py-7
                shadow-xl glassy-card
                transition-all duration-200
              `}>
                {/* Avatar */}
                <div className="flex flex-col items-center justify-center mr-6 sm:mr-7">
                  <img
                    src={testimonials[idx].img}
                    alt={testimonials[idx].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] object-cover border-4 border-gold/70 shadow-md bg-black"
                  />
                  <div className="font-black text-gold mt-3 text-[1.08rem] leading-tight">{testimonials[idx].name}</div>
                  <div className="text-gold/80 text-xs -mt-0.5">{testimonials[idx].role}</div>
                  <div className="text-gold/30 text-[11px]">{testimonials[idx].location}</div>
                </div>
                {/* Quote */}
                <div className="flex-1 flex items-center pl-0 sm:pl-2">
                  <blockquote className="text-white/90 text-[1rem] md:text-base leading-relaxed font-semibold">
                    {testimonials[idx].quote}
                  </blockquote>
                </div>
                {/* Left Arrow */}
                <button
                  onClick={prev}
                  className="absolute left-4 bottom-4 p-2 rounded-full bg-black/80 border border-gold/60 text-gold hover:bg-gold hover:text-black shadow-lg transition"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft size={17} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Secondary Card */}
        <motion.div
          key={nextIdx + "-side"}
          initial={{ opacity: 0, x: 45, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.34, type: "spring", bounce: 0.14 }}
          className="
            relative flex flex-col items-center justify-center
            w-full max-w-[90vw] sm:w-[180px] md:w-[215px] h-[225px] md:h-[235px]
            bg-gradient-to-br from-black/85 via-black/70 to-gold/10
            border border-gold/25 rounded-[2.2rem] p-5 shadow-lg glassy-card
          "
        >
          <img
            src={testimonials[nextIdx].img}
            alt={testimonials[nextIdx].name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-gold/40 shadow bg-black"
          />
          <div className="font-black text-gold mt-3 text-lg leading-tight">{testimonials[nextIdx].name}</div>
          <div className="text-gold/70 text-xs mb-1">{testimonials[nextIdx].role}</div>
          <div className="text-gold/40 text-[11px] mb-3">{testimonials[nextIdx].location}</div>
          <button
            onClick={next}
            className="absolute right-3 bottom-3 p-2 rounded-full bg-black/90 border border-gold/40 text-gold hover:bg-gold hover:text-black shadow transition"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={15} />
          </button>
        </motion.div>
      </div>

      {/* Styles */}
      <style>{`
        .text-gold { color: #FFD700; }
        .border-gold\\/25 { border-color: #FFD70040; }
        .border-gold\\/40 { border-color: #FFD70066; }
        .border-gold\\/60 { border-color: #FFD700bb; }
        .glassy-card { backdrop-filter: blur(7px); }
      `}</style>
    </main>
  );
}

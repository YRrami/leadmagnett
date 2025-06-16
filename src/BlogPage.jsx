import React from "react";
import { FaArrowRight } from "react-icons/fa6";

// Sample blog data with placeholder images
const blogPosts = [
  {
    title: "SEO Tips for 2025: Boost Your Rankings",
    date: "March 22, 2025",
    excerpt:
      "Learn the latest SEO strategies to optimize your website for better rankings. Discover how to improve your organic traffic and increase conversions.",
    img: "https://via.placeholder.com/400x250.png?text=SEO+Tips",  // Placeholder image
  },
  {
    title: "Lead Generation Strategies for 2025",
    date: "April 5, 2025",
    excerpt:
      "Master lead generation strategies to attract qualified prospects. Find out how to convert visitors into leads and nurture them into customers.",
    img: "https://via.placeholder.com/400x250.png?text=Lead+Generation", // Placeholder image
  },
  {
    title: "Paid Ads Insights: What Works in 2025?",
    date: "April 15, 2025",
    excerpt:
      "Get the latest insights into paid ads campaigns. Learn what works and what doesn't in 2025 to maximize your ad spend and ROI.",
    img: "https://via.placeholder.com/400x250.png?text=Paid+Ads", // Placeholder image
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white font-poppins flex flex-col items-center py-28 px-4">
      {/* Hero Section */}
      <section className="text-center mb-9 mt-9">
        <div className="mb-5">
          <span className="text-xs tracking-widest font-semibold uppercase bg-[#FFD700] text-black px-4 py-1 rounded-full mb-9 shadow-sm">
            BLOG
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] text-center tracking-tight mb-4">
          SEO, Lead Generation & Paid Ads Insights
        </h1>
        <p className="text-lg text-white/70 max-w-3xl mx-auto font-light">
          Discover the best strategies for SEO, lead generation, and paid advertising. Stay ahead with the latest insights and tips.
        </p>
        {/* ---- SOFT DIVIDER ---- */}
      </section>
      <div className="w-full max-w-2xl px-5 mt-2 mb-10">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
      </div>
      {/* Blog Post Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start bg-gradient-to-br from-black/80 via-black/60 to-gold/10 border border-gold/40 rounded-[2rem] p-6 shadow-xl glassy-card transition-all duration-200"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-extrabold text-[#FFD700] mb-3">{post.title}</h3>
            <p className="text-white/90 mb-4">{post.excerpt}</p>
            <Link
              to="/Contact"
              className="flex items-center justify-between text-gold font-bold text-base py-2 px-6 bg-black/80 rounded-xl border-2 border-gold/40 transition-all duration-200 hover:bg-gold hover:text-black"
            >
              Need help with this? Book your free audit
              <FaArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .text-gold { color: #FFD700; }
        .border-gold\\/40 { border-color: #FFD70066; }
        .glassy-card { backdrop-filter: blur(9px); }
      `}</style>
    </main>
  );
}

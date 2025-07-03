import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    businessEmail: "",
    phone: "",
    website: "",
    businessType: "",
    revenue: "",
    adSpend: "",
    auditGoal: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      full_name: formData.fullName,
      business_name: formData.businessName,
      business_email: formData.businessEmail,
      phone: formData.phone,
      website: formData.website,
      business_type: formData.businessType,
      revenue: formData.revenue,
      ad_spend: formData.adSpend,
      audit_goal: formData.auditGoal,
    };

    emailjs
      .send(
        "your_service_id",    // <-- Replace with your EmailJS service ID
        "your_template_id",   // <-- Replace with your EmailJS template ID
        templateParams,
        "your_user_id"        // <-- Replace with your EmailJS public key (user ID)
      )
      .then(
        () => {
          setStatus("success");
          setFormData({
            fullName: "",
            businessName: "",
            businessEmail: "",
            phone: "",
            website: "",
            businessType: "",
            revenue: "",
            adSpend: "",
            auditGoal: "",
          });
        },
        (err) => {
          setStatus("error");
        }
      );
  };

  return (
    <main className="min-h-screen bg-black text-white font-poppins flex flex-col items-center py-24 px-4">
      <section className="text-center mb-10 mt-6">
        <span className="text-xs tracking-widest font-semibold uppercase bg-[#FFD700] text-black px-4 py-1 rounded-full shadow-sm">
          GET A FREE AUDIT
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] tracking-tight mb-3 mt-5">
          Contact Us for a Free Audit
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
          Ready to take your business to the next level? Fill out the form below to book your free audit and get expert insights into your growth potential.
        </p>
      </section>

      <div className="w-full max-w-2xl px-5 mb-8">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
      </div>

      <div className="max-w-3xl w-full px-4 mx-auto mb-12">
        {status !== "success" && (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 bg-black/60 p-6 rounded-2xl border border-[#FFD70033] shadow-lg">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-white/90 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col">
              <label htmlFor="businessName" className="text-white/90 font-semibold mb-2">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                placeholder="Enter your business name"
              />
            </div>

            {/* Business Email */}
            <div className="flex flex-col">
              <label htmlFor="businessEmail" className="text-white/90 font-semibold mb-2">Business Email Address *</label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                placeholder="Enter your business email"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white/90 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Website URL */}
            <div className="flex flex-col">
              <label htmlFor="website" className="text-white/90 font-semibold mb-2">Website URL</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                placeholder="Enter your website URL"
              />
            </div>

            {/* Business Type */}
            <div className="flex flex-col">
              <label htmlFor="businessType" className="text-white/90 font-semibold mb-2">What kind of business do you run? *</label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                placeholder="Describe your business"
                required
              />
            </div>

            {/* Revenue Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="revenue" className="text-white/90 font-semibold mb-2">Current Monthly Revenue *</label>
              <select
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                required
              >
                <option value="">Select an option</option>
                <option value="Less than $100K">Less than $100K</option>
                <option value="$100K-$250K">$100K–$250K</option>
                <option value="$250K-$500K">$250K–$500K</option>
                <option value="More than $1M">More than $1M</option>
              </select>
            </div>

            {/* Monthly Ad Spend Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="adSpend" className="text-white/90 font-semibold mb-2">Monthly ad spend (if any)</label>
              <select
                id="adSpend"
                name="adSpend"
                value={formData.adSpend}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
              >
                <option value="">Select an option</option>
                <option value="I don’t run ads yet">I don’t run ads yet</option>
                <option value="£1,000–£5,000">£1,000–£5,000</option>
                <option value="£5,000–£10,000">£5,000–£10,000</option>
                <option value="£10,000–£20,000">£10,000–£20,000</option>
              </select>
            </div>

            {/* Audit Goal */}
            <div className="flex flex-col">
              <label htmlFor="auditGoal" className="text-white/90 font-semibold mb-2">What’s your main goal with this audit? *</label>
              <input
                type="text"
                id="auditGoal"
                name="auditGoal"
                value={formData.auditGoal}
                onChange={handleChange}
                className="p-4 bg-black/70 border border-[#FFD700]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
                placeholder="Tell us your main goal"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FFD700] text-black font-extrabold py-4 px-6 rounded-lg hover:bg-[#FFD700]/90 transition duration-300 mt-2"
            >
              Submit
            </button>
          </form>
        )}
        {/* Success/Error Messages */}
        {status === "success" && (
          <p className="text-green-400 text-center text-lg mt-4">
            Thank you! Your submission was received.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center text-lg mt-4">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>

      {/* Calendly Booking Widget */}
      <div className="w-full max-w-2xl px-2 mx-auto mb-16 mt-8">
        <h2 className="text-2xl font-bold text-[#FFD700] text-center mb-4">
          Or book your free strategy call now:
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-[#FFD70033] bg-gradient-to-br from-[#181830] via-[#FFD70010] to-[#22114b]">
          <InlineWidget
            url="https://calendly.com/your-link/30min" // <-- Replace with your Calendly link!
            styles={{ height: "640px" }}
            pageSettings={{
              backgroundColor: "181830",
              primaryColor: "FFD700",
              textColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
            }}
          />
        </div>
      </div>
    </main>
  );
}

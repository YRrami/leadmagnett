import React, { useState } from "react";
import emailjs from '@emailjs/browser';

// Sample form handling and data storage
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS Service Integration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      business_type: formData.businessType,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your template ID
        templateParams,
        "your_user_id" // Replace with your user ID from EmailJS dashboard
      )
      .then(
        (response) => {
          console.log("SUCCESS", response.status, response.text);
          // You can display a success message or reset form data
        },
        (err) => {
          console.log("FAILED", err);
          // Handle error (e.g., display error message)
        }
      );
  };

  return (
    <main className="min-h-screen bg-black text-white font-poppins flex flex-col items-center py-28 px-4">
      {/* Hero Section */}
      <section className="text-center mb-9 mt-9">
        <div className="mb-5">
          <span className="text-xs tracking-widest font-semibold uppercase bg-[#FFD700] text-black px-4 py-1 rounded-full mb-9 shadow-sm">
            GET A FREE AUDIT
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] text-center tracking-tight mb-4">
          Contact Us for a Free Audit
        </h1>
        <p className="text-lg text-white/70 max-w-3xl mx-auto font-light">
          Ready to take your business to the next level? Fill out the form below to book your free audit and get expert insights into your growth potential.
        </p>
        {/* ---- SOFT DIVIDER ---- */}
      </section>
      <div className="w-full max-w-2xl px-5 mt-2 mb-10">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD70099] to-transparent" />
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl w-full px-5 mx-auto mb-16">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white/90 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 bg-black/80 border border-gold/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white/90 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 bg-black/80 border border-gold/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-white/90 font-semibold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-4 bg-black/80 border border-gold/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Business Type */}
          <div className="flex flex-col">
            <label htmlFor="businessType" className="text-white/90 font-semibold mb-2">Business Type</label>
            <input
              type="text"
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="p-4 bg-black/80 border border-gold/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
              placeholder="Enter your business type"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white/90 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="p-4 bg-black/80 border border-gold/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-200"
              placeholder="Describe your needs or questions"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-black font-extrabold py-4 px-6 rounded-lg hover:bg-gold/80 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Optional Add-ons Section */}
      <div className="max-w-4xl w-full px-5 mx-auto mb-16 text-center">
        <h3 className="text-2xl font-extrabold text-[#FFD700] mb-4">We Make It Easier For You.</h3>

        {/* Embedded Calendar (Placeholder) */}
        <div className="mb-12">
          <h4 className="text-xl text-white/80 font-semibold mb-3">Schedule a Call</h4>
          <div className="flex justify-center items-center mb-6">
            <iframe
              src="https://calendly.com/your-schedule-link"
              width="100%"
              height="500px"
              frameBorder="0"
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
        </div>

        {/* Google Maps Location */}
        <h4 className="text-xl text-white/80 font-semibold mb-3">Find Us at Our Location</h4>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235234.4172864637!2d-0.510375667144105!3d51.28676029905459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b36f8b25f7b%3A0xa482fc6bb4479f56!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1621327393442!5m2!1sen!2sus"
            width="100%"
            height="350"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen="true"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </main>
  );

}

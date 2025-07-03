import React, { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "emailjs-com";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Focus trap hook for accessibility (keyboard navigation)
function useFocusTrap(ref, open) {
  useEffect(() => {
    if (!open || !ref.current) return;
    const node = ref.current;
    const focusable = node.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (first) first.focus();
    const handler = (e) => {
      if (e.key !== "Tab") return;
      if (focusable.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    node.addEventListener("keydown", handler);
    return () => node.removeEventListener("keydown", handler);
  }, [ref, open]);
}

// Reusable field wrapper
const Field = ({ label, required, error, children }) => (
  <div className="flex flex-col mb-2">
    <label className="text-white/90 font-semibold mb-1 text-[1rem]">
      {label}
      {required && <span className="text-[#FFD700] ml-1">*</span>}
    </label>
    {children}
    {error && <span className="text-red-400 mt-1 text-xs">{error}</span>}
  </div>
);

export default function Contact({ open, onClose }) {
  // Form state
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
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [loading, setLoading] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // ESC to close modal
  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  // Focus trap for accessibility
  const panelRef = useRef();
  useFocusTrap(panelRef, open);

  // Validation logic
  function validate() {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = "Full name is required.";
    if (!formData.businessEmail.trim()) {
      e.businessEmail = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.businessEmail)
    ) {
      e.businessEmail = "Invalid email format.";
    }
    if (!formData.businessType.trim()) e.businessType = "Required.";
    if (!formData.revenue) e.revenue = "Select monthly revenue.";
    if (formData.website && !/^https?:\/\/.+\..+/i.test(formData.website))
      e.website = "URL must start with http(s)://";
    if (!formData.auditGoal.trim()) e.auditGoal = "Required.";
    return e;
  }

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // ---- EMAILJS submit handler ----
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length) return;
    setLoading(true);

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
        "your_service_id",      // <--- Replace with your service ID
        "your_template_id",     // <--- Replace with your template ID
        templateParams,
        "your_user_id"          // <--- Replace with your user/public key
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
          setLoading(false);
        },
        (err) => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  // Click backdrop to close
  const handleBackdrop = useCallback((e) => {
    if (e.target === e.currentTarget && onClose) onClose();
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "rgba(18,18,18,0.87)",
        overscrollBehavior: "contain",
        transition: "background 0.2s"
      }}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={handleBackdrop}
    >
      {/* Modal panel (custom scroll area) */}
      <div
        ref={panelRef}
        className="
          relative flex flex-col bg-black border border-[#FFD700]
          rounded-2xl shadow-2xl
          w-full max-w-[97vw]
          max-h-[calc(100svh-32px)]
          sm:max-w-md md:max-w-lg
          px-3.5 sm:px-7 py-6 sm:py-8
          text-white font-poppins
          animate-scaleIn
          focus:outline-none focus:ring-2 focus:ring-[#FFD700]
          custom-modal-scroll
          "
        style={{
          boxSizing: "border-box",
        }}
        tabIndex={0}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-gold/15 hover:bg-gold text-gold hover:text-black rounded-full p-2 font-bold text-xl transition focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            aria-label="Close"
            type="button"
            tabIndex={0}
          >×</button>
        )}

        <h2 className="text-lg sm:text-2xl font-black text-[#FFD700] mb-4 text-center">
          Get Your Free Audit
        </h2>
        {status === "success" ? (
          <div className="py-10 text-center text-lg font-semibold text-[#FFD700]">
            <CheckCircle className="w-6 h-6 inline mb-1" /> Thank you! Your submission was received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            <Field label="Full Name" required error={errors.fullName}>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                placeholder="e.g. John Smith"
                autoComplete="off"
                required
              />
            </Field>
            <Field label="Business Name">
              <input
                name="businessName"
                type="text"
                value={formData.businessName}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                placeholder="e.g. Smith Enterprises"
              />
            </Field>
            <Field label="Business Email Address" required error={errors.businessEmail}>
              <input
                name="businessEmail"
                type="email"
                value={formData.businessEmail}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                placeholder="your@email.com"
                required
              />
            </Field>
            <Field label="Phone Number">
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                placeholder="e.g. +44 123 4567"
              />
            </Field>
            <Field label="Website URL" error={errors.website}>
              <input
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                placeholder="https://yourwebsite.com"
              />
            </Field>
            <Field label="What kind of business do you run?" required error={errors.businessType}>
              <input
                name="businessType"
                type="text"
                value={formData.businessType}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                placeholder="e.g. Marketing Agency"
                required
              />
            </Field>
            <Field label="What is your current monthly revenue?" required error={errors.revenue}>
              <select
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                required
              >
                <option value="">Select an option</option>
                <option>Less than $100K</option>
                <option>$100K–$250K</option>
                <option>$250K–$500K</option>
                <option>More than $1M</option>
              </select>
            </Field>
            <Field label="Monthly ad spend (if any)">
              <select
                name="adSpend"
                value={formData.adSpend}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
              >
                <option value="">Select an option</option>
                <option>I don’t run ads yet</option>
                <option>£1,000–£5,000</option>
                <option>£5,000–£10,000</option>
                <option>£10,000–£20,000</option>
              </select>
            </Field>
            <Field label="What’s your main goal with this audit?" required error={errors.auditGoal}>
              <input
                name="auditGoal"
                type="text"
                value={formData.auditGoal}
                onChange={handleChange}
                className="p-3 bg-black/70 border border-[#FFD700]/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base"
                placeholder="Your main goal or objective"
                required
              />
            </Field>
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full bg-[#FFD700] text-black font-extrabold py-3 px-6 rounded-xl mt-3
                flex items-center justify-center gap-2
                hover:bg-[#FFD700]/80 transition duration-300
                ${loading ? "opacity-60 cursor-not-allowed" : ""}
              `}
              style={{ fontSize: "1.09rem", minHeight: 46 }}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" /> Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
            {status === "error" && (
              <div className="flex items-center justify-center mt-4 gap-2 text-red-400 text-lg animate-fade-in">
                <AlertCircle className="w-5 h-5" /> Something went wrong. Please try again.
              </div>
            )}
          </form>
        )}
      </div>
      <style>{`
        .animate-scaleIn { animation: scaleIn 0.27s cubic-bezier(.44,1.15,.59,.98);}
        @keyframes scaleIn { 0%{ opacity:0; transform:scale(.92) translateY(32px);} 100%{ opacity:1; transform:scale(1) translateY(0);} }
        .animate-fade-in { animation: fade-in 0.4s; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to   { opacity: 1; transform: translateY(0); } }
        /* Custom scrollbar (all browsers) */
        .custom-modal-scroll {
          overflow-y: auto !important;
          scrollbar-width: thin;
          scrollbar-color: #FFD70077 #191919;
          overscroll-behavior: contain;
        }
        .custom-modal-scroll::-webkit-scrollbar {
          width: 8px;
          background: #191919;
        }
        .custom-modal-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(120deg,#FFD700cc,#FFD70044 80%);
          border-radius: 4px;
          border: 1.5px solid #191919;
        }
        .custom-modal-scroll::-webkit-scrollbar-thumb:hover {
          background: #FFD70099;
        }
        @media (max-width: 640px) {
          .custom-modal-scroll {
            box-shadow: 0 18px 24px -18px #FFD70022 inset;
          }
        }
      `}</style>
    </div>
  );
}

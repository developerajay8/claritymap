"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import Container from "./container";

const SERVICES = [
  "Restaurant Website",
  "Salon Website",
  "Dental Clinic Website",
  "Real Estate Website",
  "Portfolio Website",
  "Landing Page Design",
  "AI Website Design",
  "Business Website",
  "E-Commerce Website",
  "Custom Web Development",
  "Other",
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const whatsappMessage = `
🔥 New Website Lead

👤 Full Name: ${form.fullName}
📞 Phone Number: ${form.phone}
💼 Service: ${form.service}

📝 Message:
${form.message}
`;

    // GOOGLE SHEET WEB APP URL
    const scriptURL =
      "YOUR_GOOGLE_SCRIPT_WEBAPP_URL";

    try {
      // Save to Google Sheet
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Open WhatsApp
      window.open(
        `https://wa.me/919999999999?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      setForm({
        fullName: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <section className="relative z-10 md:py-24 py-14 overflow-hidden bg-[#050505]">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.15) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.12] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(158,255,0,0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="text-[#9EFF00]">✦</span>

              <span className="text-[#9EFF00] text-xs tracking-[3px] uppercase font-semibold">
                Let’s Build Something Amazing
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Start Your{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#9EFF00,#d4ff75)",
                }}
              >
                Dream Website
              </span>{" "}
              Today
            </motion.h2>

            <p className="text-white/45 text-sm leading-relaxed mt-6 max-w-[540px]">
              We design premium modern websites with smooth
              animations, responsive layouts, luxury UI/UX,
              conversion-focused sections, and high-performance
              experiences for modern businesses.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                "Modern Premium UI Design",
                "Mobile Responsive Layout",
                "Fast Performance",
                "WhatsApp Integration",
                "SEO Friendly Structure",
                "Luxury Animations",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] backdrop-blur-xl px-4 py-4"
                >
                  <div className="w-9 h-9 rounded-full bg-[#9EFF00]/15 border border-[#9EFF00]/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2
                      size={17}
                      className="text-[#9EFF00]"
                    />
                  </div>

                  <span className="text-white/70 text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Form glow */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(circle at top, rgba(158,255,0,0.25), transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            <div className="relative rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">
              {/* Top blur line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9EFF00]/40 to-transparent" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#9EFF00] flex items-center justify-center shadow-[0_0_30px_rgba(158,255,0,0.5)]">
                  <MessageCircle
                    size={22}
                    className="text-black"
                  />
                </div>

                <div>
                  <h3 className="text-white text-xl font-bold">
                    Get Free Consultation
                  </h3>

                  <p className="text-white/40 text-sm">
                    Fill the form and connect instantly
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Full Name */}
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none focus:border-[#9EFF00]/40 transition-all placeholder:text-white/25"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none focus:border-[#9EFF00]/40 transition-all placeholder:text-white/25"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Select Service
                  </label>

                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full h-14 rounded-2xl border border-white/10 bg-[#0b0b0b] px-5 text-white outline-none focus:border-[#9EFF00]/40 transition-all"
                  >
                    <option value="">
                      Choose your service
                    </option>

                    {SERVICES.map((service, i) => (
                      <option key={i} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Message
                  </label>

                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-[#9EFF00]/40 transition-all placeholder:text-white/25 resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="submit"
                  disabled={loading}
                  className="h-14 rounded-2xl bg-[#9EFF00] text-black font-bold text-sm flex items-center justify-center gap-2 mt-2 shadow-[0_0_35px_rgba(158,255,0,0.35)]"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit & Connect on WhatsApp"}

                  <ArrowUpRight size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
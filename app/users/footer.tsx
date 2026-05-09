"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useState } from "react";
import Container from "./container";

const QUICK_LINKS = [
  "About Us",
  "Services",
  "Case Studies",
  "Our Process",
  "Testimonials",
  "Contact Us",
];

const CONTACT = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.22 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    text: "+91 98765 43210",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Jaipur, Rajasthan, India",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    text: "hello@claritymapai.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    text: "www.claritymapai.com",
  },
];

const SOCIAL = [
  {
    label: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="black" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="black" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="relative z-10 pt-6 overflow-hidden bg-[#050505]">
      {/* Glow Effects */}
      <div
        className="absolute top-0 left-0 w-[260px] h-[320px] opacity-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(158,255,0,0.25) 0%, transparent 60%)",
          clipPath: "polygon(0 0,40% 0,60% 100%,0 100%)",
          filter: "blur(20px)",
        }}
      />

      <div
        className="absolute top-0 right-0 w-[260px] h-[320px] opacity-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(225deg, rgba(158,255,0,0.25) 0%, transparent 60%)",
          clipPath: "polygon(60% 0,100% 0,100% 100%,40% 100%)",
          filter: "blur(20px)",
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Top Border */}
      <div className="border-t border-white/5" />

      <Container className="relative z-10 pt-16 pb-8">
        {/* CTA BOX */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 rounded-[34px] border border-[#9EFF00]/15 bg-gradient-to-br from-[#0d1406] to-[#060804] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative"
          style={{
            boxShadow:
              "0 0 50px rgba(158,255,0,0.08), inset 0 0 40px rgba(158,255,0,0.03)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(158,255,0,0.25), transparent 40%)",
            }}
          />

          <div className="relative z-10 max-w-[650px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#9EFF00]">✦</span>
              <span className="text-[#9EFF00] text-xs font-semibold tracking-[0.25em] uppercase">
                Let’s Build Something Powerful
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready To Transform
              <br />
              Your Business With{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #9EFF00, #d7ff87)",
                }}
              >
                Smart Technology
              </span>
            </h2>

            <p className="text-white/45 text-sm leading-relaxed mt-5 max-w-[540px]">
              We create futuristic websites, AI powered systems, automation
              tools and scalable digital experiences designed to help modern
              businesses grow faster in the digital era.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(158,255,0,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 flex items-center gap-3 bg-[#9EFF00] text-black font-bold px-8 py-4 rounded-full text-sm"
          >
            Start Your Project
            <div className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </motion.div> */}

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full bg-[#9EFF00] flex items-center justify-center"
                style={{
                  boxShadow: "0 0 18px rgba(158,255,0,0.5)",
                }}
              >
                <Zap size={18} className="fill-black text-black" />
              </div>

              <div>
                <h3 className="text-white font-bold text-lg tracking-widest">
                  CLARITYMAP
                </h3>
                <p className="text-white/35 text-[11px] tracking-[0.2em] uppercase">
                  AI & Software Agency
                </p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed">
              CLARITYMAP builds modern AI products, high converting websites,
              automation systems and scalable digital platforms for startups,
              brands and growing businesses worldwide.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  whileHover={{
                    scale: 1.12,
                    y: -2,
                  }}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-[#9EFF00] hover:border-[#9EFF00]/50 transition-all duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Quick Navigation
            </h4>

            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 6 }}
                  className="text-white/45 text-sm hover:text-[#9EFF00] transition-all duration-300 w-fit"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Contact Info
            </h4>

            <div className="flex flex-col gap-4">
              {CONTACT.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-[#9EFF00] mt-0.5 flex-shrink-0">
                    {c.icon}
                  </div>

                  <span className="text-white/45 text-sm leading-relaxed">
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-sm tracking-wide">
              Newsletter
            </h4>

            <p className="text-white/40 text-sm leading-relaxed">
              Subscribe to receive updates, latest projects, AI trends and
              future ready business solutions directly in your inbox.
            </p>

            <div
              className="flex items-center gap-0 rounded-full border border-white/10 bg-white/5 overflow-hidden pl-5 pr-1 py-1"
              style={{
                boxShadow: "0 0 0 1px rgba(158,255,0,0.06)",
              }}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white/70 text-sm placeholder:text-white/25 outline-none min-w-0"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#9EFF00] text-black font-bold text-xs px-5 py-3 rounded-full"
                style={{
                  boxShadow: "0 0 16px rgba(158,255,0,0.4)",
                }}
              >
                Subscribe
              </motion.button>
            </div>

            <label className="flex items-center gap-2 cursor-pointer group">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 ${
                  agreed
                    ? "bg-[#9EFF00] border-[#9EFF00]"
                    : "border-white/25 bg-transparent"
                }`}
              >
                {agreed && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="black"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <span className="text-white/35 text-xs leading-relaxed">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-white/70 underline underline-offset-2 hover:text-[#9EFF00]"
                >
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 CLARITYMAP AI Studio. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white/30 text-xs hover:text-[#9EFF00] transition-colors"
            >
              Terms & Conditions
            </a>

            <span className="text-white/15">|</span>

            <a
              href="#"
              className="text-white/30 text-xs hover:text-[#9EFF00] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>

      {/* Watermark */}
      <div className="relative overflow-hidden h-28 select-none pointer-events-none">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-extrabold tracking-tighter leading-none"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(90px, 17vw, 180px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          CLARITY
        </motion.p>
      </div>
    </footer>
  );
}
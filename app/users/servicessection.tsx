"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  HeartPulse,
  Dumbbell,
  Coffee,
  Building2,
  Megaphone,
  Camera,
  GraduationCap,
  Hammer,
  Sparkles,
  Store,
  Hotel,
  Car,
  Briefcase,
  Plane,
  Shirt,
  Laptop,
  Music2,
  PartyPopper,
  Baby,
  ArrowUpRight,
} from "lucide-react";

import Container from "./container";

const SERVICES = [
  {
    icon: <Scissors size={18} />,
    title: "Salon Landing Pages",
    desc: "Premium salon websites with booking systems, offers, and modern visuals.",
  },
  {
    icon: <HeartPulse size={18} />,
    title: "Dental Clinic Pages",
    desc: "Professional healthcare landing pages designed for trust and appointments.",
  },
  {
    icon: <Dumbbell size={18} />,
    title: "Gym & Fitness Pages",
    desc: "High-energy landing pages for gyms, trainers, and fitness programs.",
  },
  {
    icon: <Coffee size={18} />,
    title: "Cafe Landing Pages",
    desc: "Modern café websites with menu highlights and aesthetic UI sections.",
  },
  {
    icon: <Building2 size={18} />,
    title: "Real Estate Pages",
    desc: "Property showcase pages with lead generation and inquiry forms.",
  },
  {
    icon: <Megaphone size={18} />,
    title: "Marketing Agency Pages",
    desc: "Creative agency websites focused on branding and client conversions.",
  },
  {
    icon: <Camera size={18} />,
    title: "Photographer Portfolios",
    desc: "Elegant portfolio landing pages with immersive image galleries.",
  },
  {
    icon: <GraduationCap size={18} />,
    title: "Coaching Institute Pages",
    desc: "Lead-focused education pages with enrollment and webinar sections.",
  },
  {
    icon: <Hammer size={18} />,
    title: "Construction Company Pages",
    desc: "Corporate construction landing pages with project showcases.",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Spa & Skin Clinic Pages",
    desc: "Luxury beauty and skincare pages with appointment integrations.",
  },
  {
    icon: <Store size={18} />,
    title: "Ecommerce Product Pages",
    desc: "High-converting product landing pages for online brands.",
  },
  {
    icon: <Hotel size={18} />,
    title: "Hotel & Resort Pages",
    desc: "Premium hospitality websites with booking-focused layouts.",
  },
  {
    icon: <Car size={18} />,
    title: "Car Rental Pages",
    desc: "Modern vehicle booking and rental service landing pages.",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Startup & SaaS Pages",
    desc: "Modern startup websites with animated UI and conversion sections.",
  },
  {
    icon: <Plane size={18} />,
    title: "Travel Agency Pages",
    desc: "Beautiful travel landing pages with package and booking sections.",
  },
  {
    icon: <Shirt size={18} />,
    title: "Fashion Brand Pages",
    desc: "Stylish fashion websites with immersive product showcases.",
  },
  {
    icon: <Laptop size={18} />,
    title: "Tech Company Pages",
    desc: "Futuristic landing pages for AI, SaaS, and tech startups.",
  },
  {
    icon: <Music2 size={18} />,
    title: "Music & Artist Pages",
    desc: "Creative pages for musicians, DJs, and entertainment brands.",
  },
  {
    icon: <PartyPopper size={18} />,
    title: "Event Landing Pages",
    desc: "Event promotion pages with registration and countdown sections.",
  },
  {
    icon: <Baby size={18} />,
    title: "Kids & Preschool Pages",
    desc: "Friendly and colorful landing pages for schools and daycare brands.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden bg-[#050505]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(158,255,0,0.5) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <Container className="relative z-10">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#9EFF00]">✦</span>

            <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
              Industries We Work With
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight text-center mb-14"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Landing Pages For{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #9EFF00, #c6ff5e)",
              filter:
                "drop-shadow(0 0 14px rgba(158,255,0,0.4))",
            }}
          >
            Every Industry
          </span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
  {SERVICES.map((service, i) => (
    <ServiceCard
      key={i}
      {...service}
      delay={i * 0.05}
    />
  ))}
</div>
      </Container>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-[15px] border border-white/10 p-7 transition-all duration-500"
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        backdropFilter: "blur(18px)",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.45)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(158,255,0,0.15), transparent 55%)",
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-[15px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(158,255,0,0.25), 0 0 35px rgba(158,255,0,0.08)",
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 8, scale: 1.08 }}
        className="relative z-10 w-14 h-14 rounded-2xl bg-[#9EFF00]/10 border border-[#9EFF00]/20 flex items-center justify-center text-[#9EFF00]"
        style={{
          boxShadow:
            "0 0 25px rgba(158,255,0,0.12)",
        }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mt-6">
        <h3
          className="text-white text-xl font-bold leading-snug"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>

        <p className="text-white/45 text-sm leading-relaxed mt-3">
          {desc}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 mt-8 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#9EFF00]/70"
            />
          ))}
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          className="flex items-center gap-2 text-[#9EFF00] text-sm font-semibold"
        >
          View Service
          <ArrowUpRight size={15} />
        </motion.button>
      </div>

      {/* Floating gradient orb */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(158,255,0,0.45), transparent 70%)",
        }}
      />
    </motion.div>
  );
}
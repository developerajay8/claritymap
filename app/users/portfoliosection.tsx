"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "./container";

const PROJECTS = [
  {
    category: "Commerce Coaching Website",
    title: "Mahendra Commerce Classes Platform",
    image: "/image copy 6.png",
    link: "https://mahendra-commerce-classes.vercel.app/",
  },
  {
    category: "Salon Website",
    title: "Luxury Beauty & Hair Studio Experience",
    image: "/image copy 2.png",
    link: "https://finalsalon-phi.vercel.app/",
  },
  {
    category: "Dental Clinic",
    title: "Urban Modern Dental Care Website",
    image: "/image copy 4.png",
    link: "https://urbanclinicjaipur.com/",
  },
  {
    category: "Story Platform",
    title: "Creative Storytelling Landing Experience",
    image: "/image copy 3.png",
    link: "https://storyora.vercel.app/",
  },
  {
    category: "Travel & Walking",
    title: "Quick Walk Travel Booking Platform",
    image: "/image copy 5.png",
    link: "https://quick-walk.vercel.app/",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative z-10 md:py-24 py-12 overflow-hidden bg-[#050505]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(158,255,0,0.6) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-[#9EFF00]">✦</span>

              <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
                Premium Landing Page Designs
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Explore Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #9EFF00, #c6ff5e)",
                  filter:
                    "drop-shadow(0 0 14px rgba(158,255,0,0.4))",
                }}
              >
                Creative Projects
              </span>
            </motion.h2>

            <p className="text-white/45 text-sm max-w-[560px] mt-5 leading-relaxed">
              We craft high-converting premium websites with modern UI,
              animations, responsive layouts, and powerful user experiences for
              salons, clinics, education brands, restaurants, startups, and
              luxury businesses.
            </p>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-[#9EFF00] text-black font-bold text-sm px-6 py-3 rounded-full flex-shrink-0 h-fit"
            style={{
              boxShadow: "0 0 24px rgba(158,255,0,0.45)",
            }}
          >
            View All Projects
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        {/* Portfolio cards */}
        <div className="flex gap-5 items-end overflow-x-auto pb-3 no-scrollbar">
          {PROJECTS.map((project, i) => (
            <PortfolioCard
              key={i}
              project={project}
              isActive={active === i}
              onClick={() => setActive(i)}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PortfolioCard({
  project,
  isActive,
  onClick,
  index,
}: {
  project: (typeof PROJECTS)[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      animate={{
        flex: isActive ? 2.4 : 1,
        opacity: isActive ? 1 : 0.65,
      }}
      style={{
        minWidth: isActive ? 360 : 180,
        transition:
          "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="relative rounded-[28px] overflow-hidden cursor-pointer group flex-shrink-0"
    >
      <div
        className="relative w-full h-[430px] sm:h-[560px] overflow-hidden bg-black"
        style={{
          border: isActive
            ? "1px solid rgba(158,255,0,0.35)"
            : "1px solid rgba(255,255,255,0.06)",

          boxShadow: isActive
            ? "0 0 60px rgba(158,255,0,0.16)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
      >
        {/* Background image */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isActive
              ? "scale-100 grayscale-0"
              : "scale-110 grayscale-[40%]"
          }`}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Green hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(circle at top, rgba(158,255,0,0.18), transparent 60%)",
          }}
        />

        {/* Animated border */}
        {isActive && (
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-[28px] pointer-events-none"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(158,255,0,0.35)",
            }}
          />
        )}

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-5 left-5"
        >
          <div className="px-3 py-1.5 rounded-full border border-[#9EFF00]/30 bg-black/40 backdrop-blur-md">
            <span className="text-[#9EFF00] text-[10px] font-bold tracking-wider uppercase">
              Featured Project
            </span>
          </div>
        </motion.div>

        {/* Bottom content */}
        <AnimatePresence>
          {isActive ? (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-7"
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold mb-3"
                style={{
                  background: "rgba(158,255,0,0.15)",
                  border:
                    "1px solid rgba(158,255,0,0.3)",
                  color: "#9EFF00",
                }}
              >
                {project.category}
              </span>

              <h3
                className="text-white font-extrabold text-[28px] leading-tight max-w-[320px]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {project.title}
              </h3>

              <p className="text-white/45 text-sm leading-relaxed mt-3 max-w-[330px]">
                Modern responsive website crafted with premium UI,
                smooth animations, luxury visuals, and strong
                conversion-focused sections.
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 mt-6 text-[#9EFF00] w-fit"
                >
                  <span className="text-sm font-semibold">
                    Explore Design
                  </span>

                  <ArrowUpRight size={16} />
                </motion.div>
              </a>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
              <div className="w-2 h-2 rounded-full bg-white/30" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
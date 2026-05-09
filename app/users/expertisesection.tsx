"use client";

import { motion, MotionProps } from "framer-motion";
import Container from "./container";

const SKILLS = [
  { label: "Landing Page Design", percent: 98 },
  { label: "3D UI Animations", percent: 95 },
  { label: "Conversion Optimization", percent: 97 },
];

function CircleProgress({ percent }: { percent: number }) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <div className="relative w-[84px] h-[84px] flex items-center justify-center">
      <svg width="84" height="84" viewBox="0 0 84 84" className="-rotate-90">
        <circle
          cx="42"
          cy="42"
          r={r}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="5"
          fill="none"
        />

        <motion.circle
          cx="42"
          cy="42"
          r={r}
          stroke="#9EFF00"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - dash }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            delay: 0.3,
          }}
          style={{
            filter: "drop-shadow(0 0 6px rgba(158,255,0,0.6))",
          }}
        />
      </svg>

      <span className="absolute text-white font-bold text-sm">
        {percent}%
      </span>
    </div>
  );
}

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 32 },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    margin: "-60px",
  },

  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as [
      number,
      number,
      number,
      number
    ],
    delay,
  },
});

export default function ExpertiseSection() {
  return (
    <section className="relative z-10 py-24 overflow-hidden bg-[#050505]">

      {/* Glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(158,255,0,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,255,0,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(158,255,0,0.2) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 gap-6 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">

              {/* Main image card */}
              <div
                className="relative w-[340px] h-[420px] sm:w-[420px] sm:h-[500px] rounded-[36px] overflow-hidden border border-[#9EFF00]/15"
                style={{
                  boxShadow:
                    "0 0 60px rgba(158,255,0,0.08)",
                  background:
                    "linear-gradient(135deg, rgba(158,255,0,0.08), rgba(255,255,255,0.02))",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="creative developer"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 100%)",
                  }}
                />

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 left-6 px-4 py-2 rounded-full border border-[#9EFF00]/20 bg-black/40 backdrop-blur-xl"
                >
                  <span className="text-[#9EFF00] text-xs font-semibold tracking-wide">
                    ✦ Premium Landing Page Studio
                  </span>
                </motion.div>

                {/* Bottom stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="rounded-2xl border border-white/10 p-5 backdrop-blur-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4
                          className="text-white text-3xl font-extrabold"
                          style={{
                            fontFamily: "'Syne', sans-serif",
                          }}
                        >
                          250+
                        </h4>

                        <p className="text-white/50 text-xs mt-1">
                          Landing Pages Delivered
                        </p>
                      </div>

                      <div className="w-px h-12 bg-white/10" />

                      <div>
                        <h4
                          className="text-[#9EFF00] text-3xl font-extrabold"
                          style={{
                            fontFamily: "'Syne', sans-serif",
                          }}
                        >
                          98%
                        </h4>

                        <p className="text-white/50 text-xs mt-1">
                          Client Satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -right-4 top-16 w-5 h-5 rounded-full bg-[#9EFF00]"
                style={{
                  boxShadow:
                    "0 0 24px rgba(158,255,0,0.8)",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div
              {...fadeUp(0.15)}
              className="flex items-center gap-2"
            >
              <span className="text-[#9EFF00] text-base">
                ✦
              </span>

              <span className="text-[#9EFF00] text-xs font-semibold tracking-widest uppercase">
                Expertise That Drives Results
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...fadeUp(0.25)}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
              }}
            >
              We Build High Converting
              <br />

              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #9EFF00, #c6ff5e)",
                  filter:
                    "drop-shadow(0 0 14px rgba(158,255,0,0.4))",
                }}
              >
                Modern Landing Pages
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              {...fadeUp(0.33)}
              className="text-white/45 text-sm leading-relaxed max-w-[500px]"
            >
              We create premium landing pages with advanced
              animations, immersive 3D visuals, and
              conversion-focused layouts that help brands
              attract attention, generate leads, and grow
              faster in the digital world.
            </motion.p>

            {/* Features */}
            <motion.div
              {...fadeUp(0.38)}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "Modern UI/UX Experience",
                "Fast Performance",
                "3D Interactive Sections",
                "Mobile Responsive Design",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-white/8 bg-white/[0.03]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#9EFF00]" />

                  <span className="text-white/70 text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap gap-8"
            >
              {SKILLS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2"
                >
                  <CircleProgress percent={s.percent} />

                  <span className="text-white/60 text-xs text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.5)}>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 0 44px rgba(158,255,0,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-[#9EFF00] text-black font-bold px-7 py-4 rounded-full text-sm shadow-[0_0_28px_rgba(158,255,0,0.35)] transition-all duration-300"
              >
                Explore Our Expertise

                <span className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
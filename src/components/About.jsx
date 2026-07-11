import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { FaCheckCircle, FaPlane } from "react-icons/fa";

const MotionLink = motion.create(Link);

const stats = [
  { end: 24, suffix: "/7", label: "Travel Support" },
  { end: 100, suffix: "%", label: "Guided Process" },
  { end: 4, suffix: "+", label: "Core Services" },
];

const CountUp = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(end * eased);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Company = () => {
  const [learnMoreFly, setLearnMoreFly] = useState(false);

  const handleLearnMoreClick = () => {
    if (learnMoreFly) return;

    setLearnMoreFly(true);
    window.__lenis?.start?.();

    setTimeout(() => {
      setLearnMoreFly(false);
    }, 700);
  };

  return (
    <section
      id="company"
      className="relative overflow-hidden bg-white py-16 text-navy md:py-20"
    >
      {/* Soft premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(39,169,79,0.09),transparent_24%),radial-gradient(circle_at_90%_12%,rgba(8,35,58,0.06),transparent_20%),linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]" />

      {/* Soft animated route lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 1400 650"
        fill="none"
      >
        <motion.path
          d="M-120 420 C 160 260, 380 300, 620 390 S 980 540, 1500 250"
          stroke="#27A94F"
          strokeWidth="2"
          strokeDasharray="9 13"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <motion.path
          d="M100 120 C 330 40, 530 110, 760 200 S 1100 300, 1400 120"
          stroke="#08233a"
          strokeWidth="1.4"
          strokeDasharray="9 13"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.6, delay: 0.1, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -38 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="mb-4 inline-flex items-center gap-3 rounded-full border border-green/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)]"
            >
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-45" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green shadow-[0_0_14px_rgba(39,169,79,0.85)]" />
              </span>
              About Aldaleel
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-navy md:text-6xl"
            >
              Your trusted travel partner for{" "}
              <span className="text-green">smooth journeys</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Aldaleel Travel and Tourism helps travelers plan with confidence —
              from flights and visa support to hotel reservations, Umrah
              journeys and complete travel guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 grid gap-3 sm:grid-cols-2"
            >
              {[
                "Professional travel guidance",
                "Clear booking process",
                "Reliable customer support",
                "Premium agency experience",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.4, delay: 0.22 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="shrink-0 text-green" />

                  <span className="text-sm font-extrabold text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.34 }}
              className="mt-7"
            >
              <MotionLink
                to="/about?back=company"
                onClick={handleLearnMoreClick}
                whileHover="hover"
                whileTap="tap"
                className="group relative inline-flex min-w-[154px] items-center justify-center overflow-hidden rounded-full border border-green/25 bg-green/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-green shadow-[0_14px_34px_rgba(39,169,79,0.12)] backdrop-blur-xl transition hover:border-green/40 hover:bg-green/15 hover:shadow-[0_18px_45px_rgba(39,169,79,0.20)] md:text-sm"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(39,169,79,0.12),rgba(255,255,255,0.20),rgba(39,169,79,0.08))]" />

                <span className="relative z-10 pr-7">Learn More</span>

                <motion.span
                  variants={{
                    hover: { x: 8 },
                    tap: { x: 14 },
                  }}
                  animate={learnMoreFly ? { x: 58, opacity: [1, 1, 0] } : {}}
                  transition={{ duration: 0.42, ease: "easeInOut" }}
                  className="absolute right-5 z-10 inline-flex text-green"
                >
                  <FaPlane className="rotate-360 text-[13px]" />
                </motion.span>
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 38, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-100 bg-white p-4 shadow-[0_26px_80px_rgba(16,32,51,0.10)] md:p-5">
              <div className="relative h-[340px] overflow-hidden rounded-[1.8rem] bg-navy md:h-[380px]">
                <motion.div
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 bg-cover bg-center opacity-75"
                  style={{
                    backgroundImage: "url('/about-hero.png')",
                  }}
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,34,0.10)_0%,rgba(7,21,34,0.82)_100%)]" />

                <motion.div
                  animate={{
                    x: ["-15%", "115%"],
                    y: [0, -18, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-16 text-3xl text-white/85"
                >
                  <FaPlane />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6"
                >
                  <div className="rounded-[1.4rem] border border-white/15 bg-white/12 p-4 text-white backdrop-blur-2xl md:p-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-green">
                      Aldaleel Travel & Tourism
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-[1.25rem] border border-slate-100 bg-white p-3 text-center shadow-[0_12px_34px_rgba(16,32,51,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(16,32,51,0.10)] md:p-4"
                >
                  <h4 className="text-xl font-black text-green md:text-3xl">
                    <CountUp end={item.end} suffix={item.suffix} />
                  </h4>

                  <p className="mt-1 text-[11px] font-extrabold text-slate-500 md:text-xs">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Company;
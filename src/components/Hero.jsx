import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { FaChevronDown, FaPlane, FaMapMarkerAlt } from "react-icons/fa";

const TypingHeroTitle = ({ playKey }) => {
  const fullText = "Your World. Your Journey.\nOur Expertise.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    setDisplayText("");

    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index += 1;

      if (index >= fullText.length) {
        clearInterval(typing);
      }
    }, 55);

    return () => clearInterval(typing);
  }, [playKey]);

  return (
    <h1 className="cursor-default whitespace-pre-line text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[82px]">
      {displayText}
      <span className="ml-1 inline-block h-8 w-[3px] translate-y-1 bg-green animate-pulse sm:h-10 md:h-14" />
    </h1>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const [typingPlayKey, setTypingPlayKey] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypingPlayKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const section =
      document.getElementById("about") || document.getElementById("company");

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#071522] text-white"
    >
      {/* Floating Hero Background */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          scale: [1.04, 1.07, 1.04],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-world.png')",
        }}
      />

      {/* Premium Dark Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.92)_0%,rgba(7,21,34,0.74)_45%,rgba(7,21,34,0.50)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(39,169,79,0.24),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.10),transparent_22%)]" />

      {/* Animated Route Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1400 850"
        fill="none"
      >
        <motion.path
          d="M-140 540 C 160 350, 380 420, 610 510 C 840 600, 1080 560, 1510 260"
          stroke="#27A94F"
          strokeWidth="2"
          strokeDasharray="10 14"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.path
          d="M100 220 C 330 130, 520 180, 760 290 C 1010 410, 1180 350, 1450 130"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeDasharray="8 14"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>

      {/* Airplane moving inside wave route */}
      <motion.div
        animate={{
          x: [
            "-10vw",
            "10vw",
            "27vw",
            "44vw",
            "61vw",
            "78vw",
            "96vw",
            "112vw",
          ],
          y: [0, -70, -42, 4, 48, 35, -8, -120],
          opacity: [0, 1, 1, 1, 1, 1, 1, 0],
          rotate: [8, -10, 4, 12, 8, -4, -12, -18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-[62%] z-10 text-3xl text-green drop-shadow-[0_14px_28px_rgba(0,0,0,0.35)] md:top-[60%] md:text-4xl"
      >
        <FaPlane />
      </motion.div>

      {/* Company Badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[34%] hidden items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl lg:flex"
      >
        <FaMapMarkerAlt className="text-green" />
        Global Travel Network
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[22%] right-[8%] hidden items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl lg:flex"
      >
        <FaMapMarkerAlt className="text-green" />
        Travel Support
      </motion.div>

      {/* Hero Content with Lift Effect */}
      <motion.div
        initial={{ opacity: 0, y: 85, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 md:pt-36"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_45px_rgba(0,0,0,0.15)] backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-50 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
            </span>
            Premium Travel Agency
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
          >
            <TypingHeroTitle playKey={typingPlayKey} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42, ease: "easeOut" }}
            className="mt-4 text-sm font-black uppercase tracking-[0.28em] text-green sm:text-base"
          >
            Aldaleel Travel & Tourism KSA
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg md:text-xl"
          >
            From flights and visas to hotels, Umrah and transport — Aldaleel
            makes every step of your travel smoother, clearer and more reliable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.button
              type="button"
              onClick={scrollToAbout}
              animate={{
                scale: [1, 1.045, 1],
                boxShadow: [
                  "0 14px 34px rgba(0,0,0,0.16)",
                  "0 18px 48px rgba(39,169,79,0.32)",
                  "0 14px 34px rgba(0,0,0,0.16)",
                ],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/12 bg-white/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:border-green/40 hover:bg-green/20"
            >
              <span className="absolute inset-0 rounded-full bg-green/0 transition group-hover:bg-green/10" />

              <motion.span
                animate={{
                  opacity: [0, 0.35, 0],
                  scale: [0.85, 1.35, 1.7],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  repeatDelay: 2.2,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-green/55"
              />

              <span className="relative z-10">Discover More</span>

              <motion.span
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
                className="relative z-10 text-green"
              >
                <FaChevronDown />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Very Light Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-10 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.18)_100%)]" />
    </section>
  );
};

export default Hero;
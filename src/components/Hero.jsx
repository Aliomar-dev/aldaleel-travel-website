import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { FaChevronDown, FaPlane, FaMapMarkerAlt } from "react-icons/fa";

const FadeHeroTitle = ({ playKey }) => {
  return (
    <h1 className="cursor-default text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl md:text-7xl lg:text-[82px]">
      <motion.span
        key={`${playKey}-journey`}
        initial={{
          opacity: 0,
          y: 24,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.1,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block text-white"
      >
        Your World. Your Journey.
      </motion.span>

      <motion.span
        key={`${playKey}-expertise`}
        initial={{
          opacity: 0,
          y: 24,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.1,
          delay: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-1 block text-green"
      >
        Our Expertise.
      </motion.span>
    </h1>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const allowDiscoverJumpRef = useRef(false);
  const lockActiveRef = useRef(true);

  const originalStylesRef = useRef({
    htmlOverflow: "",
    htmlOverscroll: "",
    htmlTouchAction: "",
    bodyOverflow: "",
    bodyOverscroll: "",
    bodyTouchAction: "",
  });

  const [titlePlayKey, setTitlePlayKey] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitlePlayKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    originalStylesRef.current = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      htmlTouchAction: html.style.touchAction,
      bodyOverflow: body.style.overflow,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyTouchAction: body.style.touchAction,
    };

    const isLocked = () => {
      return lockActiveRef.current && !allowDiscoverJumpRef.current;
    };

    const lockPage = () => {
      if (!isLocked()) return;

      window.__lenis?.stop?.();

      html.style.overflow = "hidden";
      html.style.overscrollBehavior = "none";
      html.style.touchAction = "none";

      body.style.overflow = "hidden";
      body.style.overscrollBehavior = "none";
      body.style.touchAction = "none";

      if (window.scrollY !== 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    };

    const restorePage = () => {
      html.style.overflow = originalStylesRef.current.htmlOverflow;
      html.style.overscrollBehavior =
        originalStylesRef.current.htmlOverscroll;
      html.style.touchAction = originalStylesRef.current.htmlTouchAction;

      body.style.overflow = originalStylesRef.current.bodyOverflow;
      body.style.overscrollBehavior =
        originalStylesRef.current.bodyOverscroll;
      body.style.touchAction = originalStylesRef.current.bodyTouchAction;

      window.__lenis?.start?.();
    };

    const hardBlock = (event) => {
      if (!isLocked()) return;

      event.preventDefault();
      event.stopPropagation();

      if (typeof event.stopImmediatePropagation === "function") {
        event.stopImmediatePropagation();
      }

      window.__lenis?.stop?.();

      if (window.scrollY !== 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }

      return false;
    };

    const blockKeyboard = (event) => {
      if (!isLocked()) return;

      const blockedKeys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        " ",
        "Spacebar",
        "Home",
        "End",
      ];

      if (!blockedKeys.includes(event.key)) return;

      event.preventDefault();
      event.stopPropagation();

      if (typeof event.stopImmediatePropagation === "function") {
        event.stopImmediatePropagation();
      }

      window.__lenis?.stop?.();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return false;
    };

    const forceTop = () => {
      if (!isLocked()) return;

      window.__lenis?.stop?.();

      if (window.scrollY !== 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    };

    lockPage();

    const lockInterval = window.setInterval(() => {
      if (!isLocked()) return;

      lockPage();
    }, 80);

    window.addEventListener("wheel", hardBlock, {
      passive: false,
      capture: true,
    });

    document.addEventListener("wheel", hardBlock, {
      passive: false,
      capture: true,
    });

    document.body.addEventListener("wheel", hardBlock, {
      passive: false,
      capture: true,
    });

    window.addEventListener("touchmove", hardBlock, {
      passive: false,
      capture: true,
    });

    document.addEventListener("touchmove", hardBlock, {
      passive: false,
      capture: true,
    });

    document.body.addEventListener("touchmove", hardBlock, {
      passive: false,
      capture: true,
    });

    window.addEventListener("keydown", blockKeyboard, {
      passive: false,
      capture: true,
    });

    document.addEventListener("keydown", blockKeyboard, {
      passive: false,
      capture: true,
    });

    window.addEventListener("scroll", forceTop, {
      passive: true,
    });

    return () => {
      lockActiveRef.current = false;

      window.clearInterval(lockInterval);

      restorePage();

      window.removeEventListener("wheel", hardBlock, true);
      document.removeEventListener("wheel", hardBlock, true);
      document.body.removeEventListener("wheel", hardBlock, true);

      window.removeEventListener("touchmove", hardBlock, true);
      document.removeEventListener("touchmove", hardBlock, true);
      document.body.removeEventListener("touchmove", hardBlock, true);

      window.removeEventListener("keydown", blockKeyboard, true);
      document.removeEventListener("keydown", blockKeyboard, true);

      window.removeEventListener("scroll", forceTop);
    };
  }, []);

  const scrollToAbout = () => {
    const section =
      document.getElementById("about") ||
      document.getElementById("company");

    if (!section) return;

    allowDiscoverJumpRef.current = true;
    lockActiveRef.current = false;

    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = originalStylesRef.current.htmlOverflow;
    html.style.overscrollBehavior =
      originalStylesRef.current.htmlOverscroll;
    html.style.touchAction = originalStylesRef.current.htmlTouchAction;

    body.style.overflow = originalStylesRef.current.bodyOverflow;
    body.style.overscrollBehavior =
      originalStylesRef.current.bodyOverscroll;
    body.style.touchAction = originalStylesRef.current.bodyTouchAction;

    window.__lenis?.start?.();

    const navbarOffset = window.innerWidth >= 768 ? 104 : 86;
    const targetTop = Math.max(section.offsetTop - navbarOffset, 0);

    if (window.__lenis) {
      window.__lenis.scrollTo(targetTop, {
        immediate: true,
        force: true,
        offset: 0,
      });
    }

    window.scrollTo({
      top: targetTop,
      left: 0,
      behavior: "auto",
    });

    setTimeout(() => {
      window.scrollTo({
        top: targetTop,
        left: 0,
        behavior: "auto",
      });

      allowDiscoverJumpRef.current = false;
    }, 100);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071522]">
      <motion.section
        ref={heroRef}
        id="home"
        initial={{ y: 0 }}
        animate={{
          y: [0, -12, 0, -5, 0],
        }}
        transition={{
          duration: 1.8,
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: [0.45, 0, 0.25, 1],
        }}
        className="relative min-h-screen overflow-hidden bg-[#071522] text-white will-change-transform"
      >
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

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.92)_0%,rgba(7,21,34,0.74)_45%,rgba(7,21,34,0.50)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(39,169,79,0.24),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.10),transparent_22%)]" />

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
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M100 220 C 330 130, 520 180, 760 290 C 1010 410, 1180 350, 1450 130"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeDasharray="8 14"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.2,
            delay: 0.2,
            ease: "easeInOut",
          }}
        />
      </svg>

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

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[14%] top-[34%] hidden items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl lg:flex"
      >
        <FaMapMarkerAlt className="text-green" />
        Global Travel Network
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[22%] right-[8%] hidden items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl lg:flex"
      >
        <FaMapMarkerAlt className="text-green" />
        Travel Support
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 85,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 md:pt-36"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_45px_rgba(0,0,0,0.15)] backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
            </span>

            Premium Travel Agency
          </motion.div>

          <FadeHeroTitle playKey={titlePlayKey} />

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.15,
              ease: "easeOut",
            }}
            className="mt-4 text-sm font-black uppercase tracking-[0.28em] text-green sm:text-base"
          >
            Aldaleel Travel & Tourism KSA
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 1.3,
              ease: "easeOut",
            }}
            className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg md:text-xl"
          >
            From flights and visas to Umrah, Hajj, hotels, tours and transport — 
            Aldaleel makes every step of your travel smoother, clearer and more reliable.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 1.45,
              ease: "easeOut",
            }}
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

        <div className="absolute bottom-0 left-0 right-0 z-10 h-10 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.18)_100%)]" />
      </motion.section>
    </div>
  );
};

export default Hero;
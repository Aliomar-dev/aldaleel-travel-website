import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { FaPlane } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const [fly, setFly] = useState(false);

  const progress = useMotionValue(0);

  const smoothProgress = useSpring(progress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  // Plane green progress path ke sath compact movement
  const planeX = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-10, 6, 10, 4, 0]
  );

  const planeY = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [11, 5, -3, -9, -15]
  );

  const planeRotate = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-35, -48, -62, -78, -90]
  );

  const trailHeight = useTransform(smoothProgress, [0, 1], [8, 38]);
  const trailOpacity = useTransform(smoothProgress, [0, 1], [0.18, 0.75]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = maxScroll > 0 ? scrollTop / maxScroll : 0;

      progress.set(Math.min(Math.max(value, 0), 1));
      setShow(scrollTop > 360);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress]);

  const handleClick = () => {
    setFly(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 120);

    setTimeout(() => {
      setFly(false);
    }, 1350);
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            onClick={handleClick}
            initial={{ opacity: 0, y: 28, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.85 }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="group fixed bottom-6 right-5 z-50"
            aria-label="Scroll to top"
          >
            <div className="relative h-[58px] w-[58px] md:h-[62px] md:w-[62px]">
              {/* soft premium glow */}
              <span className="absolute inset-0 rounded-full bg-green/20 blur-xl transition group-hover:bg-green/35" />

              {/* compact glass base */}
              <span className="absolute inset-0 rounded-full border border-green/15 bg-white/65 shadow-card backdrop-blur-xl" />

              {/* inner clean base */}
              <span className="absolute inset-[5px] rounded-full bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_25px_rgba(16,32,51,0.10)]" />

              {/* progress circle */}
              <svg
                className="absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 62 62"
              >
                <circle
                  cx="31"
                  cy="31"
                  r="27"
                  fill="none"
                  stroke="rgba(30, 52, 77, 0.09)"
                  strokeWidth="2.6"
                />

                <motion.circle
                  cx="31"
                  cy="31"
                  r="27"
                  fill="none"
                  stroke="#27A94F"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  pathLength="1"
                  style={{ pathLength: smoothProgress }}
                />
              </svg>

              {/* compact direction trail */}
              <motion.span
                style={{
                  height: trailHeight,
                  opacity: trailOpacity,
                }}
                className="absolute bottom-[14px] left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-t from-green via-green/70 to-transparent"
              />

              {/* small moving dot */}
              <motion.span
                style={{
                  opacity: trailOpacity,
                }}
                animate={{
                  y: [10, -15, 10],
                  opacity: [0.12, 0.75, 0.12],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-green"
              />

              {/* airplane: no own border, compact premium */}
              <motion.div
                style={
                  fly
                    ? undefined
                    : {
                        x: planeX,
                        y: planeY,
                        rotate: planeRotate,
                      }
                }
                animate={
                  fly
                    ? {
                        x: [0, 0, 0],
                        y: [0, -32, -82],
                        rotate: [-90, -90, -90],
                        scale: [1, 1.08, 0.82],
                        opacity: [1, 1, 0],
                      }
                    : {
                        scale: [1, 1.04, 1],
                      }
                }
                transition={
                  fly
                    ? {
                        duration: 0.85,
                        ease: "easeInOut",
                      }
                    : {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="absolute inset-0 z-20 flex items-center justify-center"
              >
                <FaPlane className="text-[20px] text-navy drop-shadow-[0_4px_8px_rgba(16,32,51,0.20)] transition group-hover:text-green md:text-[22px]" />
              </motion.div>

              {/* soft plane shadow */}
              <motion.span
                animate={
                  fly
                    ? {
                        opacity: [0.22, 0.1, 0],
                        scale: [1, 0.7, 0.25],
                      }
                    : {
                        opacity: [0.18, 0.32, 0.18],
                        scale: [1, 1.06, 1],
                      }
                }
                transition={
                  fly
                    ? { duration: 0.8 }
                    : {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="absolute bottom-[9px] left-1/2 h-1.5 w-7 -translate-x-1/2 rounded-full bg-navy/15 blur-sm"
              />

              {/* hover label */}
              <div className="pointer-events-none absolute right-[72px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-100 bg-white px-3.5 py-2 text-xs font-extrabold text-navy opacity-0 shadow-card transition duration-300 group-hover:opacity-100 md:block">
                Fly to top
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Page fly animation on click */}
      <AnimatePresence>
        {fly && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.7, 1.05, 1.12, 0.75],
              x: [0, 0, 0, 0],
              y: [0, -110, -300, -500],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
            }}
            className="pointer-events-none fixed bottom-14 right-8 z-[80]"
          >
            <div className="relative">
              {/* long flight trail */}
              <motion.span
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: [0, 115, 200],
                  opacity: [0, 0.75, 0],
                }}
                transition={{
                  duration: 1.15,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-10 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-green via-green/55 to-transparent"
              />

              {/* glow behind plane */}
              <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/22 blur-2xl" />

              {/* clean premium plane, no border */}
              <motion.div
                animate={{
                  rotate: -90,
                }}
                className="relative flex h-14 w-14 items-center justify-center"
              >
                <FaPlane className="text-[36px] text-green drop-shadow-[0_8px_18px_rgba(39,169,79,0.35)]" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
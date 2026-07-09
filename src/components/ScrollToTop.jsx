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

  const planeX = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-8, 5, 9, 4, 0]
  );

  const planeY = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [9, 4, -3, -8, -13]
  );

  const planeRotate = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-35, -48, -62, -76, -90]
  );

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
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            onClick={handleClick}
            initial={{ opacity: 0, y: 24, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.86 }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="group fixed bottom-6 right-5 z-50"
            aria-label="Scroll to top"
          >
            <div className="relative h-[56px] w-[56px] md:h-[60px] md:w-[60px]">
              <span className="absolute inset-0 rounded-full bg-green/20 blur-xl transition group-hover:bg-green/35" />

              <span className="absolute inset-0 rounded-full border border-green/15 bg-white/70 shadow-[0_18px_45px_rgba(16,32,51,0.14)] backdrop-blur-xl" />

              <span className="absolute inset-[5px] rounded-full bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_25px_rgba(16,32,51,0.10)]" />

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
                        y: [0, -30, -78],
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
                        duration: 0.82,
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
                <FaPlane className="text-[19px] text-navy drop-shadow-[0_4px_8px_rgba(16,32,51,0.20)] transition group-hover:text-green md:text-[21px]" />
              </motion.div>

              <motion.span
                animate={
                  fly
                    ? {
                        opacity: [0.2, 0.08, 0],
                        scale: [1, 0.7, 0.25],
                      }
                    : {
                        opacity: [0.14, 0.28, 0.14],
                        scale: [1, 1.06, 1],
                      }
                }
                transition={
                  fly
                    ? { duration: 0.78 }
                    : {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="absolute bottom-[10px] left-1/2 h-1.5 w-7 -translate-x-1/2 rounded-full bg-navy/12 blur-sm"
              />

              <div className="pointer-events-none absolute right-[70px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-100 bg-white px-3.5 py-2 text-xs font-bold text-navy opacity-0 shadow-[0_12px_34px_rgba(16,32,51,0.12)] transition duration-300 group-hover:opacity-100 md:block">
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
              scale: [0.7, 1.05, 1.1, 0.75],
              x: [0, 0, 0, 0],
              y: [0, -105, -285, -470],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.12,
              ease: "easeInOut",
            }}
            className="pointer-events-none fixed bottom-14 right-8 z-[80]"
          >
            <div className="relative">
              {/* Aero trail behind plane */}
              <motion.span
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: [0, 70, 145, 210],
                  opacity: [0, 0.65, 0.38, 0],
                }}
                transition={{
                  duration: 1.05,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-[34px] w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-green/70 via-green/28 to-transparent blur-[0.2px]"
              />

              <motion.span
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: [0, 55, 115, 165],
                  opacity: [0, 0.45, 0.25, 0],
                }}
                transition={{
                  duration: 1.05,
                  ease: "easeOut",
                  delay: 0.04,
                }}
                className="absolute left-[42%] top-[38px] w-[1.5px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/70 via-green/25 to-transparent"
              />

              <motion.span
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: [0, 55, 115, 165],
                  opacity: [0, 0.45, 0.25, 0],
                }}
                transition={{
                  duration: 1.05,
                  ease: "easeOut",
                  delay: 0.04,
                }}
                className="absolute left-[58%] top-[38px] w-[1.5px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/70 via-green/25 to-transparent"
              />

              {/* Small smoke dots */}
              <motion.span
                initial={{ opacity: 0, y: 18, scale: 0.4 }}
                animate={{
                  opacity: [0, 0.45, 0],
                  y: [18, 65, 120],
                  scale: [0.4, 1, 1.45],
                }}
                transition={{ duration: 0.95, ease: "easeOut" }}
                className="absolute left-1/2 top-9 h-3 w-3 -translate-x-1/2 rounded-full bg-green/20 blur-sm"
              />

              <motion.span
                initial={{ opacity: 0, y: 28, x: -7, scale: 0.35 }}
                animate={{
                  opacity: [0, 0.32, 0],
                  y: [28, 82, 145],
                  x: [-7, -12, -18],
                  scale: [0.35, 0.9, 1.35],
                }}
                transition={{ duration: 1.02, ease: "easeOut", delay: 0.08 }}
                className="absolute left-1/2 top-9 h-2.5 w-2.5 rounded-full bg-white/28 blur-sm"
              />

              <motion.span
                initial={{ opacity: 0, y: 28, x: 7, scale: 0.35 }}
                animate={{
                  opacity: [0, 0.32, 0],
                  y: [28, 82, 145],
                  x: [7, 12, 18],
                  scale: [0.35, 0.9, 1.35],
                }}
                transition={{ duration: 1.02, ease: "easeOut", delay: 0.08 }}
                className="absolute left-1/2 top-9 h-2.5 w-2.5 rounded-full bg-white/28 blur-sm"
              />

              <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/22 blur-2xl" />

              <motion.div
                animate={{
                  rotate: -90,
                }}
                className="relative z-10 flex h-14 w-14 items-center justify-center"
              >
                <FaPlane className="text-[35px] text-green drop-shadow-[0_8px_18px_rgba(39,169,79,0.35)]" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
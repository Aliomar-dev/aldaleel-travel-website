import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaPlane } from "react-icons/fa";

const TravelAgentBridge = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const planeX = useTransform(scrollYProgress, [0, 1], ["-12vw", "112vw"]);
  const planeOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0]
  );

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section
      ref={sectionRef}
      className="relative my-2 h-[205px] overflow-hidden bg-navy sm:my-3 sm:h-[225px] md:my-4 md:h-[250px] lg:my-5 lg:h-[275px]"
    >
      {/* Background image */}
      <motion.div
        style={{
          scale: imageScale,
          backgroundImage: "url('/travel-agent-bg.jpg')",
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />

      {/* Premium overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,34,0.78)_0%,rgba(7,21,34,0.42)_48%,rgba(7,21,34,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(7,21,34,0.15)_30%,rgba(7,21,34,0.72)_100%)]" />

      {/* Airplane line above heading */}
      <div className="absolute left-0 right-0 top-[25%] z-10 h-[2px] -translate-y-1/2 sm:top-[25%] md:top-[26%]">
        <div className="mx-auto h-full max-w-[88%] bg-gradient-to-r from-transparent via-green/60 to-transparent md:max-w-6xl" />
      </div>

      {/* Scroll airplane */}
      <motion.div
        style={{
          x: planeX,
          opacity: planeOpacity,
        }}
        className="pointer-events-none absolute left-0 top-[25%] z-20 -translate-y-1/2 text-2xl text-green drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:top-[25%] sm:text-3xl md:top-[26%] md:text-4xl"
      >
        <FaPlane className="rotate-[360deg]" />
      </motion.div>

      {/* Guidance heading */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl items-center justify-center px-3 pt-10 pb-6 text-center sm:px-5 sm:pt-12 sm:pb-7 md:pt-14 md:pb-8 lg:pt-16 lg:pb-9">
        <motion.h2
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto whitespace-nowrap text-[18px] font-black leading-none tracking-tight text-white min-[390px]:text-[20px] sm:text-3xl md:text-4xl lg:text-[46px]"
        >
          <span className="text-green">Guidance</span> before every journey begins.
        </motion.h2>
      </div>

      {/* Bottom fade for services overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[linear-gradient(180deg,transparent_0%,#f7fafc_100%)] sm:h-14 md:h-16" />
    </section>
  );
};

export default TravelAgentBridge;
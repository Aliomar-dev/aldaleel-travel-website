import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaCheckCircle, FaPlane, FaHome } from "react-icons/fa";
import SEO from "../components/SEO";

const ThankYou = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071522] px-5 pt-28 text-white">

<SEO
  title="Thank You | Aldaleel Travel & Tourism"
  description="Thank you for contacting Aldaleel Travel & Tourism."
  path="/thank-you"
  noIndex={true}
/>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(39,169,79,0.22),transparent_32%),linear-gradient(180deg,#071522_0%,#06111d_100%)]" />

      <motion.div
        animate={{
          x: ["-12vw", "112vw"],
          y: [0, -40, 20, -25, 0],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-[30%] text-3xl text-green drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)]"
      >
        <FaPlane />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-2xl rounded-[2rem] border border-white/12 bg-white/10 p-7 text-center shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green/15 text-5xl text-green">
          <FaCheckCircle />
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-7 text-white/72 md:text-lg">
          Your booking request has been sent successfully. Aldaleel Travel &
          Tourism will contact you soon.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-green px-6 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(39,169,79,0.32)] transition hover:-translate-y-1 hover:bg-[#1f8d40]"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="/booking"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:border-green/40 hover:text-green"
          >
            <FaPlane />
            Send Another Request
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ThankYou;
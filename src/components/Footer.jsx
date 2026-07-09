import { motion } from "motion/react";
import {
  FaPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const address =
    "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah, Riyadh 13551, Saudi Arabia";

  const mapLink = "https://maps.app.goo.gl/L7VnDLCA3RifcYsa8";
  const mapQuery = encodeURIComponent(address);
  const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "Expertise", path: "/#services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071522] text-white">
      {/* Premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(39,169,79,0.16),transparent_30%),radial-gradient(circle_at_88%_42%,rgba(255,255,255,0.05),transparent_24%),linear-gradient(180deg,#071522_0%,#06111d_100%)]" />

      {/* Curved route line */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-[155px] w-full opacity-25"
        viewBox="0 0 1440 220"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M-90 120 C 130 20, 310 190, 520 105 C 710 28, 860 38, 1030 118 C 1190 192, 1330 120, 1530 45"
          stroke="#27A94F"
          strokeWidth="2.4"
          strokeDasharray="10 14"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </svg>

      {/* Moving airplane only */}
      <motion.div
        animate={{
          x: ["-10vw", "13vw", "32vw", "52vw", "73vw", "93vw", "112vw"],
          y: [0, -48, 28, -18, 24, -14, -62],
          opacity: [0, 1, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-[72px] z-10 text-2xl text-green drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)] md:text-3xl"
      >
        <FaPlane className="-rotate-12" />
      </motion.div>

      <div className="relative z-20 mx-auto max-w-7xl px-5 pt-14 pb-4">
        {/* Main footer top */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-7 lg:grid-cols-[1fr_430px] lg:items-center"
        >
          {/* Left side */}
          <div className="max-w-2xl">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/aldaleel-logo-green-white.svg"
                alt="Aldaleel Travel and Tourism"
                className="h-[64px] w-auto object-contain"
              />
            </Link>

            <h2 className="mt-2 max-w-2xl text-[30px] font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-[48px]">
              Ready for your next{" "}
              <span className="text-green">smooth journey?</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-white/66 sm:text-base sm:leading-7">
              Aldaleel Travel & Tourism makes your travel planning clearer,
              easier and more reliable.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 rounded-full bg-green px-6 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(39,169,79,0.32)] transition hover:-translate-y-1 hover:bg-[#1f8d40]"
              >
                Get Travel Quote
                <FaPlane className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Contact map block */}
          <div className="overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.065] shadow-[0_24px_70px_rgba(0,0,0,0.20)] backdrop-blur-xl">
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="block h-[160px] overflow-hidden"
              aria-label="Open location in Google Maps"
            >
              <iframe
                title="Aldaleel Travel & Tourism Location"
                src={mapEmbed}
                className="h-full w-full border-0 grayscale-[18%] transition duration-500 hover:scale-[1.03]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>

            <div className="grid gap-3 p-4">
              <a
                href="mailto:info@aldaleeltravel.com"
                className="flex items-center gap-3 text-sm font-bold text-white/72 transition hover:text-green"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/12 text-green">
                  <FaEnvelope />
                </span>
                <span className="break-all">info@aldaleeltravel.com</span>
              </a>

              <a
                href="tel:+966531314557"
                className="flex items-center gap-3 text-sm font-bold text-white/72 transition hover:text-green"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/12 text-green">
                  <FaPhoneAlt />
                </span>
                <span>+966-53 1314557</span>
              </a>

              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm font-bold leading-5 text-white/72 transition hover:text-green"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/12 text-green">
                  <FaMapMarkerAlt />
                </span>
                <span>{address}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative my-6 h-px overflow-hidden bg-white/10">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-green to-transparent"
          />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-white/72">
              Quick Routes
            </h3>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white/56 transition hover:text-green"
                >
                  {link.name}
                  <FaArrowRight className="text-[10px] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition hover:-translate-y-1 hover:border-transparent hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center text-[11px] font-semibold text-white/42 md:flex-row">
          <p>© {year} Aldaleel Travel & Tourism. All rights reserved.</p>

          <p>
            Designed for smoother journeys by{" "}
            <span className="font-black text-green">Aldaleel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
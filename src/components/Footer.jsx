import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaStar,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";


const phone = "+966-53 1314557";
const email = "info@aldaleeltravel.com";
const address =
  "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah, Riyadh 13551, Saudi Arabia";
const mapLink = "https://maps.app.goo.gl/L7VnDLCA3RifcYsa8";
const reviewLink = "https://g.page/r/CUqiIlQhhGsrEAE/review";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Expertise", to: "/expertise" },
  { label: "Company", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const contactLinks = [
  {
    label: email,
    href: `mailto:${email}`,
    icon: FaEnvelope,
  },
  {
    label: phone,
    href: "tel:+966531314557",
    icon: FaPhoneAlt,
  },
  {
    label: "Riyadh, Saudi Arabia",
    href: mapLink,
    icon: FaMapMarkerAlt,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
    hover: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
    hover: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/966531314557",
    icon: FaWhatsapp,
    hover: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#071522] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(39,169,79,0.22),transparent_28%),radial-gradient(circle_at_86%_4%,rgba(255,255,255,0.11),transparent_26%),linear-gradient(180deg,#071522_0%,#08233a_100%)]" />

      <div className="absolute inset-0 opacity-[0.12]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      {/* Route line */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-44 w-full opacity-25"
        viewBox="0 0 1400 230"
        fill="none"
      >
        <motion.path
          d="M-80 140 C 200 20, 370 190, 610 105 C 850 22, 990 160, 1480 45"
          stroke="#27A94F"
          strokeWidth="2"
          strokeDasharray="10 16"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        animate={{
          x: ["-4vw", "18vw", "42vw", "72vw", "106vw"],
          y: [0, -16, 12, -18, -32],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-12 hidden text-2xl text-green drop-shadow-[0_15px_35px_rgba(39,169,79,0.35)] md:block"
      >
        <FaPlane className="rotate-360" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-7 pt-12 sm:pt-14 md:pt-16">
        {/* Top CTA Bar */}
        <div className="mb-9 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl md:p-6">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green/12 text-green">
                <FaPlane className="rotate-360" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green">
                  Aldaleel Travel & Tourism
                </p>

                <h2 className="mt-1 max-w-2xl text-2xl font-black leading-tight tracking-tight md:text-4xl">
                  Ready for a smoother travel experience?
                </h2>

                <p className="mt-2 max-w-2xl text-sm font-semibold leading-7 tracking-[-0.01em] text-white/62">
                  Flights, visa guidance, hotels, Smart Umrah, tours and
                  transport arrangements — all planned with care.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-bold tracking-[-0.01em] text-white shadow-[0_18px_45px_rgba(39,169,79,0.26)] transition hover:-translate-y-0.5 hover:bg-[#1f8d40]"
              >
                Get Travel Quote
                <FaPlane className="rotate-360 text-xs transition group-hover:translate-x-1" />
              </Link>

              <a
                href={reviewLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-bold tracking-[-0.01em] text-white transition hover:-translate-y-0.5 hover:border-green/35 hover:text-green"
              >
                Review Us
                <FaStar className="text-xs text-green transition group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.7fr_1fr_0.95fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo.svg"
                alt="Aldaleel Travel and Tourism"
className="h-14 w-auto object-contain md:h-16"              />
            </Link>

            <p className="mt-5 max-w-md text-sm font-semibold leading-7 tracking-[-0.01em] text-white/62">
              Aldaleel Travel & Tourism helps customers plan reliable and
              comfortable journeys with professional travel support in Riyadh,
              Saudi Arabia.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Flights", "Visa", "Hotels", "Smart Umrah", "Transport"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] font-bold tracking-[-0.01em] text-white/60"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-green">
              Quick Routes
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="group inline-flex w-fit items-center gap-2 text-sm font-bold tracking-[-0.01em] text-white/68 transition hover:text-green"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green opacity-70 transition group-hover:scale-125 group-hover:opacity-100" />
                  <span>{link.label}</span>
                  <FaArrowRight className="text-[10px] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-green">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.045] p-3 text-sm font-bold tracking-[-0.01em] text-white/68 transition hover:border-green/25 hover:bg-white/8 hover:text-white"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green transition group-hover:bg-green group-hover:text-white">
                      <Icon />
                    </span>

                    <span className="min-w-0 leading-6">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-green">
              Connect
            </h3>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white transition hover:-translate-y-0.5 ${item.hover}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 block rounded-[1.5rem] border border-white/8 bg-white/[0.045] p-4 transition hover:border-green/25 hover:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-green/10 text-green transition group-hover:bg-green group-hover:text-white">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-green">
                    Our Location
                  </p>

                  <p className="mt-1 text-sm font-bold leading-6 tracking-[-0.01em] text-white/68">
                    Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs font-semibold leading-6 tracking-[-0.01em] text-white/48">
                {address}
              </p>

              <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-[-0.01em] text-green">
                Open Map
                <FaExternalLinkAlt className="text-[10px] transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-9 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

        <div className="flex flex-col gap-3 py-6 text-sm font-bold tracking-[-0.01em] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Aldaleel Travel & Tourism. All rights
            reserved.
          </p>

          <p className="text-white/45">Travel with ease, travel with us.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
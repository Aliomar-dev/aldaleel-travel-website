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
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

const phone = "+966-53 1314557";
const email = "info@aldaleeltravel.com";
const address =
  "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah, Riyadh 13551, Saudi Arabia";
const mapLink = "https://maps.app.goo.gl/L7VnDLCA3RifcYsa8";
const reviewLink = "https://g.page/r/CUqiIlQhhGsrEAE/review";

const developerName = "HD labz";
const developerEmail = "omar786.official@gmail.com";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Expertise", to: "/expertise" },
  { label: "Company", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
    hover: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white",
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
    hover: "hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/966531314557",
    icon: FaWhatsapp,
    hover: "hover:border-[#25D366] hover:bg-[#25D366] hover:text-white",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#061421] font-sans text-white">
      {/* Main Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(39,169,79,0.18),transparent_24%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.08),transparent_23%),linear-gradient(180deg,#061421_0%,#08233a_100%)]" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      {/* Interconnected World Links Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-1/2 top-1/2 h-[540px] w-[1040px] -translate-x-1/2 -translate-y-1/2 opacity-[0.24]"
          viewBox="0 0 1040 540"
          fill="none"
        >
          {/* Globe Base Rings */}
          <path
            d="M125 270C125 155 302 62 520 62C738 62 915 155 915 270C915 385 738 478 520 478C302 478 125 385 125 270Z"
            stroke="rgba(39,169,79,0.32)"
            strokeWidth="1.2"
          />
          <path
            d="M220 270C220 155 354 62 520 62C686 62 820 155 820 270C820 385 686 478 520 478C354 478 220 385 220 270Z"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
          />
          <path
            d="M520 62C592 136 628 202 628 270C628 338 592 404 520 478C448 404 412 338 412 270C412 202 448 136 520 62Z"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <path
            d="M130 270H910"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <path
            d="M185 178C330 225 710 225 855 178"
            stroke="rgba(39,169,79,0.22)"
            strokeWidth="1"
          />
          <path
            d="M185 362C330 315 710 315 855 362"
            stroke="rgba(39,169,79,0.22)"
            strokeWidth="1"
          />

          {/* Interconnected Routes */}
          <motion.path
            d="M115 335C205 260 285 292 365 225C455 148 575 180 655 238C742 302 830 255 920 178"
            stroke="rgba(39,169,79,0.62)"
            strokeWidth="1.4"
            strokeDasharray="8 12"
            initial={{ pathLength: 0, opacity: 0.18 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0.18, 0.62, 0.22] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M170 185C280 95 410 124 520 210C640 305 760 180 900 245"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="1.2"
            strokeDasharray="7 13"
            initial={{ pathLength: 0, opacity: 0.14 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0.14, 0.45, 0.18] }}
            transition={{
              duration: 8.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          <motion.path
            d="M235 420C315 335 420 360 520 280C625 196 720 122 858 108"
            stroke="rgba(39,169,79,0.44)"
            strokeWidth="1.2"
            strokeDasharray="5 12"
            initial={{ pathLength: 0, opacity: 0.12 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0.12, 0.48, 0.17] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />

          <motion.path
            d="M150 250C300 390 465 140 620 320C710 425 820 395 940 325"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.1"
            strokeDasharray="6 11"
            initial={{ pathLength: 0, opacity: 0.1 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0.1, 0.36, 0.15] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8,
            }}
          />

          {/* Connecting Straight Links */}
          <path
            d="M365 225L520 280L655 238L858 108"
            stroke="rgba(39,169,79,0.18)"
            strokeWidth="1"
          />
          <path
            d="M235 420L520 280L900 245"
            stroke="rgba(255,255,255,0.13)"
            strokeWidth="1"
          />
          <path
            d="M170 185L520 210L920 178"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />

          {/* Network Dots */}
          {[
            [115, 335, "green"],
            [170, 185, "white"],
            [235, 420, "green"],
            [365, 225, "white"],
            [520, 210, "green"],
            [520, 280, "white"],
            [620, 320, "green"],
            [655, 238, "white"],
            [858, 108, "green"],
            [900, 245, "white"],
            [920, 178, "green"],
            [940, 325, "white"],
          ].map(([cx, cy, tone], index) => (
            <motion.g key={`${cx}-${cy}`}>
              <motion.circle
                cx={cx}
                cy={cy}
                r="8"
                fill={tone === "green" ? "rgba(39,169,79,0.12)" : "rgba(255,255,255,0.08)"}
                animate={{
                  opacity: [0.15, 0.55, 0.15],
                  scale: [0.75, 1.25, 0.75],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: index * 0.18,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={cx}
                cy={cy}
                r="3.5"
                fill={tone === "green" ? "#27A94F" : "rgba(255,255,255,0.78)"}
                animate={{
                  opacity: [0.35, 1, 0.35],
                  scale: [0.85, 1.18, 0.85],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.16,
                  ease: "easeInOut",
                }}
              />
            </motion.g>
          ))}
        </svg>

        <div className="absolute -left-20 top-12 h-56 w-56 rounded-full border border-green/10" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full border border-white/10" />
      </div>

      {/* Top Route Line */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full opacity-20"
        viewBox="0 0 1400 170"
        fill="none"
      >
        <motion.path
          d="M-120 108 C 165 24, 360 142, 610 82 C 850 18, 1010 128, 1500 38"
          stroke="#27A94F"
          strokeWidth="2"
          strokeDasharray="9 15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        animate={{
          x: ["-6vw", "30vw", "64vw", "106vw"],
          y: [0, -10, 8, -18],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-7 hidden text-lg text-green drop-shadow-[0_12px_28px_rgba(39,169,79,0.35)] md:block"
      >
        <FaPlane className="rotate-350" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-8 md:pt-9">
        {/* Top CTA Bar */}
        <div className="mb-6 rounded-[1.35rem] border border-white/10 bg-white/[0.052] px-4 py-3 shadow-[0_18px_58px_rgba(0,0,0,0.13)] backdrop-blur-2xl md:px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[1rem] bg-green/12 text-green">
                <FaPlane className="rotate-350 text-sm" />
              </span>

              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-green">
                  Aldaleel Travel & Tourism
                </p>

                <p className="mt-0.5 whitespace-nowrap font-sans text-[17px] font-semibold leading-tight tracking-[-0.015em] text-white/90 min-[390px]:text-[18px] sm:text-[23px] md:text-[26px]">
  Travel with Ease, Travel with Us
</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-green px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_14px_36px_rgba(39,169,79,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1f8d40]"
              >
                Get Travel Quote
                <FaArrowRight className="text-[9px] transition group-hover:translate-x-1" />
              </Link>

              <a
                href={reviewLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:border-green/35 hover:text-green"
              >
                Review Us
                <FaStar className="text-[9px] text-green transition group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid items-stretch gap-5 pb-5 lg:grid-cols-[1.02fr_0.58fr_1.35fr_auto]">
          {/* Brand */}
          <div className="flex min-h-0 items-center lg:min-h-[170px]">
            <div>
              <Link to="/" className="inline-flex items-center">
                <img
                  src="/logo.svg"
                  alt="Aldaleel Travel and Tourism"
                  className="h-12 w-auto object-contain md:h-14"
                />
              </Link>

              <p className="mt-2 max-w-[360px] text-sm font-medium leading-6 tracking-[-0.01em] text-white/62 md:leading-7">
                Aldaleel Travel & Tourism provides reliable travel support in
                Riyadh, Saudi Arabia with a clear, comfortable and professional
                booking experience.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex min-h-0 items-center lg:min-h-[170px]">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-green">
                Quick Links
              </h3>

              <div className="mt-4 flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="group inline-flex w-fit items-center gap-2 text-sm font-semibold tracking-[-0.01em] text-white/66 transition hover:text-green"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green/80 transition group-hover:scale-125 group-hover:bg-green" />
                    <span>{link.label}</span>
                    <FaArrowRight className="text-[9px] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact + Map Card */}
          <div className="min-h-0 lg:min-h-[170px]">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-2.5 transition hover:border-green/25 hover:bg-white/8">
              <div className="grid gap-2.5 md:grid-cols-[0.92fr_1.08fr]">
                {/* Contact Info */}
                <div className="flex flex-col gap-2.5">
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-2.5 rounded-[0.95rem] border border-white/8 bg-white/[0.045] p-2.5 text-[12px] font-semibold tracking-[-0.01em] text-white/66 transition hover:border-green/25 hover:bg-green/8 hover:text-white sm:text-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green transition group-hover:bg-green group-hover:text-white">
                      <FaEnvelope className="text-sm" />
                    </span>

                    <span className="min-w-0 whitespace-nowrap leading-5">
                      {email}
                    </span>
                  </a>

                  <a
                    href="tel:+966531314557"
                    className="group flex items-center gap-2.5 rounded-[0.95rem] border border-white/8 bg-white/[0.045] p-2.5 text-sm font-semibold tracking-[-0.01em] text-white/66 transition hover:border-green/25 hover:bg-green/8 hover:text-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green transition group-hover:bg-green group-hover:text-white">
                      <FaPhoneAlt className="text-sm" />
                    </span>

                    <span className="min-w-0 leading-5">{phone}</span>
                  </a>

                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-2.5 rounded-[0.95rem] border border-white/8 bg-white/[0.045] p-2.5 transition hover:border-green/25 hover:bg-green/8"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green/12 text-green transition group-hover:bg-green group-hover:text-white">
                      <FaMapMarkerAlt className="text-sm" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-extrabold tracking-[-0.01em] text-white">
                        Riyadh, Saudi Arabia
                      </span>

                      <span className="mt-0.5 line-clamp-2 block text-[11px] font-medium leading-5 tracking-[-0.01em] text-white/52">
                        {address}
                      </span>
                    </span>
                  </a>
                </div>

                {/* Map */}
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group/map block overflow-hidden rounded-[1rem] border border-white/8 bg-[#0b253b]"
                >
                  <div className="relative h-[150px] overflow-hidden rounded-[0.9rem] md:h-full md:min-h-[154px]">
                    <iframe
                      title="Aldaleel Travel & Tourism Location"
                      src="https://www.google.com/maps?q=3401%20Prince%20Bandar%20Ibn%20Abd%20Al%20Aziz%2C%20An%20Nahdah%2C%20Riyadh%2013551%2C%20Saudi%20Arabia&output=embed"
                      className="h-full w-full border-0 grayscale-[0.25] transition duration-500 group-hover/map:scale-[1.03] group-hover/map:grayscale-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,33,0.03)_0%,rgba(6,20,33,0.30)_100%)]" />

                    <span className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-[#071522]/82 px-2.5 py-1.5 text-[10px] font-extrabold text-white backdrop-blur-xl">
                      <FaMapMarkerAlt className="text-green" />
                      Open Maps
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex min-h-0 items-center justify-center lg:min-h-[170px]">
            <div className="flex gap-3 lg:flex-col">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white/78 transition hover:-translate-y-0.5 ${item.hover}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

        <div className="flex flex-col gap-2 py-3.5 text-xs font-bold tracking-[-0.01em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Aldaleel Travel & Tourism. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/terms-and-conditions"
              className="transition hover:text-green"
            >
              Terms & Conditions
            </Link>

            <span className="h-1 w-1 rounded-full bg-white/25" />

            <Link to="/privacy-policy" className="transition hover:text-green">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="pb-3.5 text-center">
          <a
            href={`mailto:${developerEmail}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] font-semibold tracking-[-0.01em] text-white/42 transition hover:border-green/25 hover:bg-green/10 hover:text-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green/12 text-green">
              <FaCode className="text-[9px]" />
            </span>

            <span>
              Developed by{" "}
              <span className="font-extrabold text-white/65 transition group-hover:text-green">
                {developerName}
              </span>
            </span>

            <FaEnvelope className="text-[9px] opacity-50 transition group-hover:text-green group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
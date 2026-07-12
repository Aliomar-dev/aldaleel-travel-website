import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import SEO from "../components/SEO";
import PageSeo from "../components/PageSeo";

import {
  FaPlane,
  FaBullseye,
  FaEye,
  FaBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPassport,
  FaHotel,
  FaKaaba,
  FaCarSide,
  FaMapMarkedAlt,
  FaHandshake,
  FaGlobeAsia,
  FaShieldAlt,
  FaRoute,
  FaHeadset,
  FaUserTie,
  FaQuoteLeft,
  FaSignature,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const companyHighlights = [
  {
    title: "Riyadh Travel Hub",
    desc: "Smooth KSA Journeys",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Trusted Guidance",
    desc: "Clear Travel Process",
    icon: FaShieldAlt,
  },
  {
    title: "Smooth Support",
    desc: "From Inquiry to Journey",
    icon: FaHeadset,
  },
  {
    title: "Premium Planning",
    desc: "Flights, Hotels & Tours",
    icon: FaPlane,
  },
];

const services = [
  {
    title: "Air Ticketing",
    desc: "Reliable domestic and international flight booking support with smooth travel guidance.",
    icon: FaPlane,
  },
  {
    title: "Smart Umrah",
    desc: "Well-planned Umrah travel support including flights, hotels and transport arrangements.",
    icon: FaKaaba,
  },
  {
    title: "Tour Packages",
    desc: "Customized local and international tour packages for families, groups, holidays and business travel plans.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Hotel Reservations",
    desc: "Comfortable hotel booking options according to your destination, budget and travel needs.",
    icon: FaHotel,
  },
  {
    title: "Transport Services",
    desc: "Reliable transport arrangements for airport transfers, city travel and trip convenience.",
    icon: FaCarSide,
  },
  {
    title: "Visa Facilitation",
    desc: "Professional visa assistance with documentation guidance and application support.",
    icon: FaPassport,
  },
];

const whyChooseUs = [
  {
    title: "Clear Travel Guidance",
    desc: "We explain travel options in a simple way so customers can make better decisions.",
    icon: FaRoute,
  },
  {
    title: "Reliable Support",
    desc: "From inquiry to journey, we focus on smooth communication and helpful assistance.",
    icon: FaHeadset,
  },
  {
    title: "Professional Process",
    desc: "Bookings, visa guidance, hotels, transport and tour plans are handled in an organized manner.",
    icon: FaShieldAlt,
  },
  {
    title: "Customer-Focused Service",
    desc: "Every travel plan is handled according to customer needs, budget and comfort.",
    icon: FaHandshake,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Listen",
    desc: "We understand your destination, dates, budget and travel needs.",
  },
  {
    step: "02",
    title: "Guide",
    desc: "We suggest suitable travel options with clear information.",
  },
  {
    step: "03",
    title: "Arrange",
    desc: "We support bookings, visa guidance, hotels, transport and tour package arrangements.",
  },
  {
    step: "04",
    title: "Support",
    desc: "We stay connected to make the journey easier and smoother.",
  },
];

const SectionBadge = ({ children, icon: Icon = FaCheckCircle, dark = false }) => {
  return (
    <div
      className={`relative mb-3 inline-flex items-center gap-3 overflow-hidden rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] shadow-[0_12px_34px_rgba(16,32,51,0.06)] backdrop-blur-xl sm:text-xs ${
        dark
          ? "border-white/10 bg-white/8 text-green"
          : "border-green/15 bg-white/85 text-green"
      }`}
    >
      <motion.span
        aria-hidden="true"
        animate={{ x: ["-140%", "160%"] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 2.4,
          ease: "easeInOut",
        }}
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 ${
          dark
            ? "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
            : "bg-[linear-gradient(90deg,transparent,rgba(39,169,79,0.16),transparent)]"
        }`}
      />

      <span
        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${
          dark ? "bg-white/10" : "bg-green/10"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-green/10 blur-md" />
        <Icon className="relative z-10 text-[13px] text-green" />
      </span>

      <span className="relative z-10">{children}</span>
    </div>
  );
};

const AboutUsPage = () => {

   <PageSeo page="about" />
   
  const [signatureText, setSignatureText] = useState("");
  const [signatureDone, setSignatureDone] = useState(false);
  const signatureName = "Zulfiqar Ali";

  const signatureRef = useRef(null);
  const isSignatureInView = useInView(signatureRef, {
    once: true,
    amount: 0.7,
  });

  const address =
    "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah, Riyadh 13551, Saudi Arabia";

  const mapLink = "https://maps.app.goo.gl/L7VnDLCA3RifcYsa8";

  useEffect(() => {
    if (!isSignatureInView || signatureDone) return;

    let index = 0;
    let timeoutId;

    const typeSignature = () => {
      setSignatureText(signatureName.slice(0, index + 1));

      if (index < signatureName.length - 1) {
        index += 1;
        timeoutId = setTimeout(typeSignature, 135);
      } else {
        setSignatureText(signatureName);
        setSignatureDone(true);
      }
    };

    typeSignature();

    return () => clearTimeout(timeoutId);
  }, [isSignatureInView, signatureDone]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fafc] pt-[106px] text-navy md:pt-[118px]">
  
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(39,169,79,0.12),transparent_27%),radial-gradient(circle_at_88%_16%,rgba(8,35,58,0.09),transparent_25%),linear-gradient(180deg,#ffffff_0%,#f7fafc_46%,#ffffff_100%)]" />

      <div className="absolute inset-0 opacity-[0.22]">
        <div className="h-full w-full bg-[linear-gradient(rgba(8,35,58,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(8,35,58,0.045)_1px,transparent_1px)] bg-[size:38px_38px]" />
      </div>

      <motion.div
        animate={{
          x: ["-8vw", "18vw", "42vw", "70vw", "108vw"],
          y: [0, -22, 16, -18, -38],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-[170px] z-10 hidden text-3xl text-green drop-shadow-[0_18px_38px_rgba(0,0,0,0.22)] md:block"
      >
        <FaPlane className="rotate-360" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-5 md:pb-20">
        {/* Hero */}
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <div className="relative mb-4 inline-flex items-center gap-3 overflow-hidden rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)] backdrop-blur-xl sm:text-xs">
              <motion.span
                aria-hidden="true"
                animate={{ x: ["-140%", "160%"] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2.2,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(39,169,79,0.16),transparent)]"
              />

              <span className="relative z-10 flex h-2.5 w-2.5 rounded-full bg-green shadow-[0_0_14px_rgba(39,169,79,0.75)]" />
              <span className="relative z-10">About Us</span>
            </div>

            <h1 className="max-w-4xl text-[36px] font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Your reliable partner for{" "}
              <span className="text-green">smarter travel planning</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              Aldaleel Travel & Tourism provides professional travel support for
              customers who want a smooth, organized and reliable journey. From
              flight bookings, visa guidance and hotel reservations to Smart
              Umrah, transport services and customized tour packages, our focus
              is to make every step clear, comfortable and well-managed.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {companyHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.06,
                      ease: "easeOut",
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(39,169,79,0.085)_62%,rgba(8,35,58,0.045)_100%)] px-4 py-3 shadow-[0_14px_36px_rgba(16,32,51,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(16,32,51,0.10)]"
                  >
                    <motion.span
                      aria-hidden="true"
                      animate={{ x: ["-140%", "160%"] }}
                      transition={{
                        duration: 2.7,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                        delay: index * 0.25,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(39,169,79,0.14),transparent)]"
                    />

                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-green/10 blur-2xl transition group-hover:bg-green/18" />

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green/10 text-green transition group-hover:bg-green group-hover:text-white">
                        <Icon />
                      </div>

                      <div>
                        <p className="text-sm font-black text-navy">
                          {item.title}
                        </p>

                        <p className="mt-0.5 text-[11px] font-bold text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Company Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white bg-[linear-gradient(135deg,#ffffff_0%,rgba(39,169,79,0.08)_48%,rgba(8,35,58,0.045)_100%)] p-5 shadow-[0_26px_85px_rgba(16,32,51,0.10)] md:p-6"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green/15 blur-3xl" />
            <div className="absolute -bottom-20 left-6 h-44 w-44 rounded-full bg-navy/10 blur-3xl" />

            <div className="relative z-10 rounded-[1.6rem] bg-[linear-gradient(135deg,#071522_0%,#08233a_58%,#0f3b35_100%)] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-green">
                    Company Profile
                  </p>

                  <h2 className="mt-2 text-2xl font-black leading-tight">
                    Aldaleel Travel & Tourism
                  </h2>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl text-green">
                  <FaBuilding />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Base", "Riyadh, KSA"],
                  ["Focus", "Travel & Tours"],
                  ["Customers", "Families, Groups, Business"],
                  ["Goal", "Trusted Travel Partner"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(39,169,79,0.07))] p-4"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                      {label}
                    </p>

                    <p className="mt-1 text-sm font-black text-white/88">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/65">
                We believe a good journey starts with clear guidance, organized
                planning, dependable support and well-designed travel packages.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CEO Card */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.58 }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(39,169,79,0.065)_52%,rgba(8,35,58,0.04)_100%)] p-5 shadow-[0_26px_85px_rgba(16,32,51,0.09)] md:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,#071522_0%,#08233a_56%,#0f3b35_100%)] p-6 text-white">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-3xl text-green">
                    <FaUserTie />
                  </div>

                  <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
                    CEO
                  </span>
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-green">
                  Leadership
                </p>

                <h2 className="mt-2 text-3xl font-black leading-tight">
                  Message from CEO
                </h2>

                <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(39,169,79,0.08))] p-4">
                  <div className="flex items-start gap-3">
                    <FaQuoteLeft className="mt-1 shrink-0 text-green" />

                    <p className="text-sm font-semibold leading-7 text-white/72">
                      Our aim is to make travel planning easier, clearer and
                      more dependable for every customer who chooses Aldaleel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-green/10 bg-[linear-gradient(135deg,#f7fafc_0%,#ffffff_58%,rgba(39,169,79,0.08)_100%)] p-6">
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-green/15 blur-3xl" />

              <div className="relative z-10">
                <div className="relative mb-4 inline-flex items-center gap-3 overflow-hidden rounded-full border border-green/15 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_30px_rgba(16,32,51,0.055)]">
                  <motion.span
                    aria-hidden="true"
                    animate={{ x: ["-140%", "160%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 2.4,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(39,169,79,0.16),transparent)]"
                  />
                  <FaSignature className="relative z-10" />
                  <span className="relative z-10">CEO Signature</span>
                </div>

                <h3 className="text-2xl font-black tracking-tight md:text-3xl">
                  Leading Aldaleel with clarity, trust and service excellence.
                </h3>

                <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Under the leadership of our CEO, Aldaleel Travel & Tourism is
                  focused on building a professional travel experience where
                  customers feel guided, supported and confident from inquiry to
                  journey completion.
                </p>

                <div
                  ref={signatureRef}
                  className="mt-7 rounded-[1.5rem] border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(39,169,79,0.075)_100%)] p-5 shadow-[0_18px_55px_rgba(16,32,51,0.06)]"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
                    Chief Executive Officer
                  </p>

                  <h4 className="min-h-[38px] font-signature text-[32px] font-semibold leading-none text-green sm:text-[42px]">
                    {signatureText}

                    {isSignatureInView && !signatureDone && (
                      <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse rounded-full bg-green shadow-[0_0_14px_rgba(39,169,79,0.75)]" />
                    )}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-10 rounded-[2rem] border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(39,169,79,0.065)_48%,rgba(8,35,58,0.035)_100%)] p-6 shadow-[0_22px_70px_rgba(16,32,51,0.08)] backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-[280px_1fr] md:items-start">
            <div>
              <SectionBadge icon={FaBuilding}>Overview</SectionBadge>

              <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                Who we are
              </h2>
            </div>

            <div className="space-y-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              <p>
                Aldaleel Travel & Tourism is a travel agency based in Riyadh,
                Saudi Arabia. We provide travel support for customers who need
                smooth and organized assistance for flights, visas, hotels,
                Smart Umrah, transport and customized tour packages.
              </p>

              <p>
                Our purpose is to make the travel process easier for every
                customer. Instead of confusing options and unclear steps, we aim
                to provide clear guidance, suitable travel arrangements and a
                professional experience from the first inquiry to the journey
                completion.
              </p>

              <p>
                Whether customers are planning a family holiday, group trip,
                business travel, Umrah journey or a custom tour package, our
                team focuses on comfort, clarity and dependable travel support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Mission */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(39,169,79,0.08)_100%)] p-6 shadow-[0_22px_70px_rgba(16,32,51,0.075)] md:p-8"
          >
            <SectionBadge icon={FaEye}>Our Vision</SectionBadge>

            <h3 className="mt-3 text-2xl font-black tracking-tight">
              Our Vision
            </h3>

            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              To become a trusted and recognized travel agency in Riyadh and
              across Saudi Arabia, known for clear guidance, dependable support,
              smooth journeys and well-planned travel packages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(8,35,58,0.045)_45%,rgba(39,169,79,0.075)_100%)] p-6 shadow-[0_22px_70px_rgba(16,32,51,0.075)] md:p-8"
          >
            <SectionBadge icon={FaBullseye}>Our Mission</SectionBadge>

            <h3 className="mt-3 text-2xl font-black tracking-tight">
              Our Mission
            </h3>

            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              To simplify travel planning by providing organized assistance,
              honest guidance, suitable travel options and professional support
              for flights, visas, hotels, Smart Umrah, transport services and
              customized tour packages.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55 }}
          className="mt-10"
        >
          <div className="mb-5 max-w-3xl">
            <SectionBadge icon={FaShieldAlt}>Why Choose Us</SectionBadge>

            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
              A travel partner focused on clarity and comfort
            </h2>

            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              Customers choose Aldaleel because our service is built around
              guidance, reliability and a smooth travel experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,#071522_0%,#08233a_56%,#12365f_100%)] p-5 text-white shadow-[0_22px_65px_rgba(8,35,58,0.18)] transition hover:-translate-y-1 hover:shadow-[0_30px_85px_rgba(8,35,58,0.26)]"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green/16 blur-3xl transition group-hover:bg-green/25" />

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-green transition group-hover:bg-green group-hover:text-white">
                      <Icon />
                    </div>

                    <h3 className="mt-4 text-lg font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-white/66">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(8,35,58,0.035)_44%,rgba(39,169,79,0.07)_100%)] p-6 shadow-[0_22px_70px_rgba(16,32,51,0.08)] md:p-8"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionBadge icon={FaRoute}>Our Approach</SectionBadge>

              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                How we help our customers
              </h2>
            </div>

            <p className="max-w-md text-sm font-semibold leading-7 text-slate-600">
              Our process is simple, practical and customer-focused.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.5rem] border border-green/10 bg-white/78 p-5"
              >
                <span className="inline-flex rounded-full bg-green/10 px-3 py-1 text-xs font-black text-green">
                  {item.step}
                </span>

                <h3 className="mt-4 text-lg font-black">{item.title}</h3>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55 }}
          className="mt-10"
        >
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionBadge icon={FaPlane}>What We Do</SectionBadge>

              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                Travel services we provide
              </h2>

              <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-slate-600">
                From single bookings to complete tour packages, Aldaleel helps
                customers plan every important part of their journey with
                clarity and comfort.
              </p>
            </div>

            <Link
              to="/expertise?back=services"
              replace
              className="inline-flex items-center gap-2 text-sm font-black text-green transition hover:gap-3"
            >
              View Expertise
              <FaPlane className="rotate-360 text-xs" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group rounded-[1.6rem] border border-green/10 bg-[linear-gradient(135deg,#ffffff_0%,rgba(39,169,79,0.065)_100%)] p-5 shadow-[0_18px_55px_rgba(16,32,51,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(16,32,51,0.11)]"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-xl text-green transition group-hover:bg-green group-hover:text-white">
                    <span className="absolute inset-0 rounded-2xl bg-green/25 opacity-45 blur-xl transition group-hover:opacity-70" />
                    <Icon className="relative z-10" />
                  </div>

                  <h3 className="mt-4 text-base font-black text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55 }}
          className="mt-10 rounded-[2rem] border border-green/15 bg-[linear-gradient(135deg,rgba(39,169,79,0.10)_0%,#ffffff_58%,rgba(8,35,58,0.04)_100%)] p-6 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green text-2xl text-white">
              <FaGlobeAsia />
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">
                Our promise
              </h2>

              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
                We want every customer to feel guided, supported and confident
                while planning a journey with Aldaleel Travel & Tourism. Our
                promise is to keep the process clear, the service professional
                and the travel experience as smooth as possible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#071522_0%,#08233a_58%,#0f3b35_100%)] p-6 text-white shadow-[0_28px_85px_rgba(7,21,34,0.18)] md:p-8"
        >
          <div className="grid gap-7 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <SectionBadge icon={FaEnvelope} dark>
                Contact
              </SectionBadge>

              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                Get in touch with Aldaleel
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/62 sm:text-base">
                Reach out for booking support, visa guidance, hotel
                reservations, Smart Umrah planning, transport services or
                customized tour package arrangements.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:info@aldaleeltravel.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm font-bold text-white/78 transition hover:border-green/35 hover:text-green"
              >
                <FaEnvelope className="text-green" />
                info@aldaleeltravel.com
              </a>

              <a
                href="tel:+966531314557"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm font-bold text-white/78 transition hover:border-green/35 hover:text-green"
              >
                <FaPhoneAlt className="text-green" />
                +966-53 1314557
              </a>

              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm font-bold leading-6 text-white/78 transition hover:border-green/35 hover:text-green"
              >
                <FaMapMarkerAlt className="mt-1 shrink-0 text-green" />
                {address}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsPage;
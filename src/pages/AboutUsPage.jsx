import { useEffect, useState } from "react";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import {
  FaPlane,
  FaCheckCircle,
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
  FaHandshake,
  FaGlobeAsia,
  FaArrowRight,
  FaShieldAlt,
  FaRoute,
  FaHeadset,
  FaUserTie,
  FaQuoteLeft,
  FaSignature,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const companyHighlights = [
  "Professional travel guidance",
  "Clear communication",
  "Reliable booking support",
  "Customer-focused service",
];

const services = [
  {
    title: "Air Ticketing",
    desc: "Domestic and international flight booking support with route and fare guidance.",
    icon: FaPlane,
  },
  {
    title: "Visa Facilitation",
    desc: "Visa documentation guidance and organized application support.",
    icon: FaPassport,
  },
  {
    title: "Hotel Reservations",
    desc: "Hotel booking options for families, groups and business travelers.",
    icon: FaHotel,
  },
  {
    title: "Smart Umrah",
    desc: "Umrah travel planning with hotel, transport and journey support.",
    icon: FaKaaba,
  },
  {
    title: "Transport Services",
    desc: "Airport transfers, city transport and group travel arrangements.",
    icon: FaCarSide,
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
    desc: "Bookings, visa guidance, hotels and transport are handled in an organized manner.",
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
    desc: "We support bookings, visa guidance, hotel and transport arrangements.",
  },
  {
    step: "04",
    title: "Support",
    desc: "We stay connected to make the journey easier and smoother.",
  },
];

const AboutUsPage = () => {
  const [signatureText, setSignatureText] = useState("");
  const signatureName = "Zulfiqar Ali";

  const address =
    "3401 Prince Bandar Ibn Abd Al Aziz, An Nahdah, Riyadh 13551, Saudi Arabia";

  const mapLink = "https://maps.app.goo.gl/L7VnDLCA3RifcYsa8";

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeSignature = () => {
      setSignatureText(signatureName.slice(0, index));

      if (index <= signatureName.length) {
        index += 1;
        timeoutId = setTimeout(typeSignature, 135);
      } else {
        timeoutId = setTimeout(() => {
          index = 0;
          setSignatureText("");
          typeSignature();
        }, 2600);
      }
    };

    typeSignature();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fafc] pt-[106px] text-navy md:pt-[118px]">

      <SEO
  title="About Aldaleel Travel & Tourism | Travel Agency in Riyadh"
  description="Learn about Aldaleel Travel & Tourism, a reliable travel agency in Riyadh, Saudi Arabia helping customers with flights, visa guidance, hotels, Smart Umrah, tours and transport."
  keywords="about Aldaleel Travel, Aldaleel Travel Riyadh, travel agency in Riyadh, Saudi travel company, Aldaleel Travel and Tourism KSA"
  path="/about"
/>
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
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)] backdrop-blur-xl sm:text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              About Us
            </div>

            <h1 className="max-w-4xl text-[36px] font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Your reliable partner for{" "}
              <span className="text-green">smarter travel planning</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              Aldaleel Travel & Tourism provides professional travel support for
              customers who want a smooth, organized and reliable journey. From
              flight bookings and visa guidance to hotels, Smart Umrah and
              transport arrangements, our focus is to make every step clear,
              comfortable and well-managed.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {companyHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-xs font-black text-slate-600 shadow-[0_12px_30px_rgba(16,32,51,0.055)]"
                >
                  <FaCheckCircle className="text-green" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Company Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-[0_26px_85px_rgba(16,32,51,0.10)] md:p-6"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green/15 blur-3xl" />
            <div className="absolute -bottom-20 left-6 h-44 w-44 rounded-full bg-navy/10 blur-3xl" />

            <div className="relative z-10 rounded-[1.6rem] bg-navy p-6 text-white">
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
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Base
                  </p>
                  <p className="mt-1 text-sm font-black text-white/88">
                    Riyadh, KSA
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-black text-white/88">
                    Travel Services
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Customers
                  </p>
                  <p className="mt-1 text-sm font-black text-white/88">
                    Families, Groups, Business
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Goal
                  </p>
                  <p className="mt-1 text-sm font-black text-white/88">
                    Trusted Travel Partner
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/65">
                We believe a good journey starts with clear guidance, organized
                planning and dependable support.
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
          className="mt-10 overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-5 shadow-[0_26px_85px_rgba(16,32,51,0.09)] md:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-navy p-6 text-white">
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

                <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-white/8 p-4">
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

            <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-100 bg-[#f7fafc] p-6">
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-green/15 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-green/15 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_30px_rgba(16,32,51,0.055)]">
                  <FaSignature />
                  CEO Signature
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

                <div className="mt-7 rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(16,32,51,0.06)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
                    Chief Executive Officer
                  </p>

                <h4 className="min-h-[38px] font-signature text-[32px] font-semibold leading-none text-green sm:text-[42px]">
  {signatureText}
  <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse rounded-full bg-green" />
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
          className="mt-10 rounded-[2rem] border border-slate-100 bg-white/90 p-6 shadow-[0_22px_70px_rgba(16,32,51,0.08)] backdrop-blur-xl md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-[280px_1fr] md:items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
                Overview
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                Who we are
              </h2>
            </div>

            <div className="space-y-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              <p>
                Aldaleel Travel & Tourism is a travel agency based in Riyadh,
                Saudi Arabia. We provide travel support for customers who need
                smooth and organized assistance for flights, visas, hotels,
                Umrah planning and transport.
              </p>

              <p>
                Our purpose is to make the travel process easier for every
                customer. Instead of confusing options and unclear steps, we aim
                to provide clear guidance, suitable travel arrangements and a
                professional experience from the first inquiry to the journey
                completion.
              </p>

              <p>
                We are working with the ambition to grow Aldaleel Travel &
                Tourism into one of the trusted and recognized travel agencies
                in Riyadh and across Saudi Arabia.
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
            className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_22px_70px_rgba(16,32,51,0.075)] md:p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-2xl text-green">
              <FaEye />
            </div>

            <h3 className="mt-5 text-2xl font-black tracking-tight">
              Our Vision
            </h3>

            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              To become a trusted and recognized travel agency in Riyadh and
              across Saudi Arabia, known for clear guidance, dependable support
              and smooth travel experiences for every customer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_22px_70px_rgba(16,32,51,0.075)] md:p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-2xl text-green">
              <FaBullseye />
            </div>

            <h3 className="mt-5 text-2xl font-black tracking-tight">
              Our Mission
            </h3>

            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
              To simplify travel planning by providing organized assistance,
              honest guidance, suitable travel options and professional support
              for flights, visas, hotels, Umrah and transport services.
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
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
              Why Choose Us
            </p>
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
                  className="group rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(16,32,51,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(16,32,51,0.11)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-xl text-green transition group-hover:bg-green group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-lg font-black text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                    {item.desc}
                  </p>
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
          className="mt-10 overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_22px_70px_rgba(16,32,51,0.08)] md:p-8"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
                Our Approach
              </p>
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
                className="rounded-[1.5rem] border border-slate-100 bg-[#f7fafc] p-5"
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
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
                What We Do
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                Travel services we provide
              </h2>
            </div>

            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-sm font-black text-green transition hover:gap-3"
            >
              View Expertise
              <FaPlane className="rotate-360 text-xs" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(16,32,51,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(16,32,51,0.11)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-xl text-green transition group-hover:bg-green group-hover:text-white">
                    <Icon />
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
          className="mt-10 rounded-[2rem] border border-green/15 bg-green/8 p-6 md:p-8"
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
          className="mt-10 overflow-hidden rounded-[2rem] bg-navy p-6 text-white shadow-[0_28px_85px_rgba(7,21,34,0.18)] md:p-8"
        >
          <div className="grid gap-7 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
                Contact
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                Get in touch with Aldaleel
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-white/62 sm:text-base">
                Reach out for booking support, visa guidance, hotel
                reservations, Umrah planning or custom travel arrangements.
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
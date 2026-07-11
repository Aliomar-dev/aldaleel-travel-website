import { motion } from "motion/react";
import {
  FaPlaneDeparture,
  FaPassport,
  FaHotel,
  FaKaaba,
  FaCarSide,
  FaPlane,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const expertiseList = [
  {
    title: "Air Ticketing",
    description:
      "Reliable domestic and international flight booking support with smooth travel guidance.",
    icon: FaPlaneDeparture,
  },
  {
    title: "Smart Umrah",
    description:
      "Well-planned Umrah travel support including flights, hotels and transport arrangements.",
    icon: FaKaaba,
  },
  {
    title: "Tour Packages",
    description:
      "Customized local and international tour planning for families, groups and business travelers.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Hotel Reservations",
    description:
      "Comfortable hotel booking options according to your destination, budget and travel needs.",
    icon: FaHotel,
  },
  {
    title: "Transport Services",
    description:
      "Reliable transport arrangements for airport transfers, city travel and trip convenience.",
    icon: FaCarSide,
  },
  {
    title: "Visa Facilitation",
    description:
      "Professional visa assistance with documentation guidance and application support.",
    icon: FaPassport,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7fafc] py-12 text-navy sm:py-14 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(39,169,79,0.12),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(8,35,58,0.08),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]" />

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-green/10 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col gap-4 text-left md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-green/15 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.06)] backdrop-blur-xl sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.24em]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-45" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              Our Expertise
            </div>

            <h2 className="max-w-3xl text-[32px] font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Travel services made{" "}
              <span className="text-green">simple, smooth & reliable</span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
            Aldaleel Travel & Tourism helps you plan your journey with trusted
            travel support, clear guidance and professional arrangements.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {expertiseList.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative min-h-[150px] cursor-default overflow-hidden rounded-[1.35rem] border border-white bg-white p-4 shadow-[0_16px_42px_rgba(16,32,51,0.065)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(16,32,51,0.12)] sm:min-h-[210px] sm:rounded-[1.6rem] sm:p-5 xl:min-h-[250px] xl:rounded-[1.8rem]"
              >
                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-green/12 blur-3xl transition duration-500 group-hover:bg-green/20" />

                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.15 + index * 0.08 }}
                  className="absolute left-0 top-0 h-[3px] bg-green/70"
                />

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-green transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3 sm:items-start">
                    <div className="flex min-w-0 items-center gap-3 sm:block">
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green/10 text-xl text-green shadow-[0_12px_30px_rgba(39,169,79,0.12)] transition duration-500 group-hover:rotate-3 group-hover:bg-green group-hover:text-white sm:h-14 sm:w-14 sm:rounded-3xl sm:text-2xl">
                        <span className="absolute inset-0 rounded-2xl bg-green/20 opacity-40 blur-xl transition group-hover:opacity-70 sm:rounded-3xl" />
                        <Icon className="relative z-10" />
                      </div>

                      <h3 className="min-w-0 text-[17px] font-black leading-tight tracking-tight text-navy sm:mt-6 sm:text-xl">
                        {item.title}
                      </h3>
                    </div>

                    <span className="shrink-0 rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-slate-400 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-3 text-[13px] font-semibold leading-6 text-slate-600 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Separate Read More Button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-9 flex justify-center md:mt-10"
        >
          <Link
            to="/expertise?back=services"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_24px_70px_rgba(7,21,34,0.18)] transition hover:-translate-y-1 hover:bg-[#08233a] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
          >
            <span className="absolute inset-0 translate-x-[-105%] bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 group-hover:translate-x-[105%]" />

            <span className="relative z-10">Fly to Read More</span>

            <motion.span
              animate={{
                x: [0, 6, 0],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 inline-flex"
            >
              <FaPlane className="rotate-360 text-green transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
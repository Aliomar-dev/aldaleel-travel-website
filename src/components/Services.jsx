import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaPlane,
  FaPlaneDeparture,
  FaPassport,
  FaHotel,
  FaKaaba,
  FaCarSide,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    id: "flights",
    icon: FaPlaneDeparture,
    title: "Air Ticketing",
    short: "Smart routes, better fare options and smooth booking support.",
    desc: "We help you choose the right domestic and international flights with proper timing, route guidance and reliable booking support.",
    points: ["Domestic & international flights", "Route guidance", "Fare options"],
    code: "FLT",
  },
  {
    id: "visa",
    icon: FaPassport,
    title: "Visa Facilitation",
    short: "Clear visa guidance with document support and process handling.",
    desc: "From document checklist to application guidance, we make the visa process easier and more organized for travelers.",
    points: ["Document checklist", "Application guidance", "Clear process"],
    code: "VSA",
  },
  {
    id: "hotels",
    icon: FaHotel,
    title: "Hotel Reservations",
    short: "Comfortable stays for families, groups and business travelers.",
    desc: "We arrange hotel options based on your travel type, budget, location preference and comfort requirements.",
    points: ["Family stays", "Business hotels", "Group booking"],
    code: "HTL",
  },
  {
    id: "umrah",
    icon: FaKaaba,
    title: "Smart Umrah",
    short: "Organized Umrah planning with visa, hotel and transport support.",
    desc: "A smoother Umrah journey with complete planning support, including hotels, transport, visa guidance and travel coordination.",
    points: ["Umrah planning", "Hotel options", "Transport support"],
    code: "UMR",
  },
  {
    id: "transport",
    icon: FaCarSide,
    title: "Transport Services",
    short: "Reliable transfers and travel transport arrangements.",
    desc: "From airport pickup to city transfers, we arrange comfortable transport for individuals, families and groups.",
    points: ["Airport transfers", "City transport", "Group travel"],
    code: "TRN",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section
      id="services"
      className="relative overflow-hidden rounded-t-[2rem] bg-[#f7fafc] py-10 text-navy shadow-[0_-30px_90px_rgba(16,32,51,0.12)] sm:rounded-t-[2.5rem] sm:py-12 md:rounded-t-[3rem] md:py-16 lg:py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(39,169,79,0.10),transparent_24%),radial-gradient(circle_at_88%_15%,rgba(8,35,58,0.08),transparent_22%),linear-gradient(180deg,#f7fafc_0%,#ffffff_48%,#f7fafc_100%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.28] md:opacity-[0.34]">
        <div className="h-full w-full bg-[linear-gradient(rgba(8,35,58,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(8,35,58,0.045)_1px,transparent_1px)] bg-[size:34px_34px] md:bg-[size:42px_42px]" />
      </div>

      {/* Route line */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] md:opacity-[0.10]"
        viewBox="0 0 1400 760"
        fill="none"
      >
        <motion.path
          d="M-120 470 C 180 280, 390 340, 610 430 C 810 510, 1040 520, 1500 230"
          stroke="#27A94F"
          strokeWidth="2"
          strokeDasharray="10 14"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.7, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mb-7 flex flex-col gap-4 text-left md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)] backdrop-blur-xl sm:text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-50 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              Services
            </div>

            <h2 className="max-w-[350px] text-[32px] font-black leading-[1.05] tracking-tight sm:max-w-xl sm:text-4xl md:max-w-3xl md:text-5xl lg:text-6xl">
              Travel solutions designed around{" "}
              <span className="text-green">your journey</span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-semibold leading-6 text-slate-600 sm:text-base sm:leading-7">
            Select a service and explore how Aldaleel makes every step clearer,
            smoother and more reliable.
          </p>
        </motion.div>

        {/* Main Services Layout */}
        <div className="grid gap-4 lg:grid-cols-[300px_1fr] lg:gap-5">
          {/* Service board */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-[1.6rem] border border-slate-100 bg-white/88 p-3 shadow-[0_18px_55px_rgba(16,32,51,0.07)] backdrop-blur-2xl md:rounded-[2rem]"
          >
            <div className="mb-3 rounded-[1.2rem] bg-navy px-4 py-3 text-white md:rounded-[1.4rem] md:py-4">
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-green md:text-[10px]">
                Service Board
              </p>
              <h3 className="mt-1 text-base font-black md:text-lg">
                Choose Your Need
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {services.map((service, index) => {
                const Icon = service.icon;
                const active = index === activeIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group flex min-w-0 items-center gap-2 rounded-[1.1rem] px-2.5 py-2.5 text-left transition sm:gap-3 sm:px-3 lg:rounded-[1.25rem] lg:py-3 ${
                      active
                        ? "bg-green text-white shadow-[0_14px_32px_rgba(39,169,79,0.22)]"
                        : "bg-slate-50 text-navy hover:bg-green/10 hover:text-green"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm transition md:h-10 md:w-10 md:text-base ${
                        active
                          ? "bg-white/18 text-white"
                          : "bg-white text-green shadow-[0_10px_24px_rgba(16,32,51,0.06)] group-hover:bg-green group-hover:text-white"
                      }`}
                    >
                      <Icon />
                    </span>

                    <span className="min-w-0">
                      <span className="block truncate text-xs font-black sm:text-sm">
                        {service.title}
                      </span>
                      <span
                        className={`mt-0.5 hidden truncate text-[11px] font-bold lg:block ${
                          active ? "text-white/78" : "text-slate-500"
                        }`}
                      >
                        {service.short}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Service pass */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-[0_24px_75px_rgba(16,32,51,0.09)] md:rounded-[2.4rem] md:shadow-[0_28px_90px_rgba(16,32,51,0.10)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(39,169,79,0.13),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f8fbfd_100%)]" />

            {/* Top strip */}
            <div className="relative z-10 flex items-center justify-between gap-3 border-b border-dashed border-slate-200 px-4 py-3 sm:px-5 md:px-6 md:py-4">
              <div className="min-w-0">
                <p className="truncate text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px] md:tracking-[0.28em]">
                  Aldaleel Service Pass
                </p>
                <h3 className="mt-1 truncate text-lg font-black text-navy md:text-xl">
                  {activeService.title}
                </h3>
              </div>

              <div className="shrink-0 rounded-xl bg-navy px-3 py-2 text-center text-white md:rounded-2xl md:px-4 md:py-3">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-green md:text-[10px]">
                  Code
                </p>
                <p className="text-base font-black md:text-lg">
                  {activeService.code}
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -26 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="relative z-10 p-4 sm:p-5 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_240px] md:items-center md:gap-8">
                  <div>
                    <motion.div
                      initial={{ scale: 0.86, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-green text-2xl text-white shadow-[0_18px_48px_rgba(39,169,79,0.28)] md:mb-6 md:h-16 md:w-16 md:rounded-[1.5rem] md:text-3xl"
                    >
                      <ActiveIcon />
                    </motion.div>

                    <h4 className="text-2xl font-black leading-tight sm:text-3xl md:text-5xl">
                      {activeService.title}
                    </h4>

                    <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7 md:mt-5 md:text-lg md:leading-8">
                      {activeService.desc}
                    </p>

                    <div className="mt-5 grid gap-2 sm:grid-cols-3 md:mt-6 md:gap-3">
                      {activeService.points.map((point, index) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.32, delay: index * 0.07 }}
                          className="rounded-2xl border border-slate-100 bg-white/80 px-3 py-3 shadow-[0_12px_28px_rgba(16,32,51,0.055)] md:px-4"
                        >
                          <FaCheckCircle className="mb-1.5 text-sm text-green md:mb-2 md:text-base" />
                          <p className="text-[11px] font-black leading-4 text-slate-700 md:text-xs">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Visual ticket */}
                  <div className="relative hidden md:block">
                    <div className="relative overflow-hidden rounded-[2rem] bg-navy p-5 text-white shadow-[0_24px_70px_rgba(16,32,51,0.18)]">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green/25 blur-3xl" />

                      <div className="relative z-10">
                        <div className="mb-10 flex items-center justify-between">
                          <FaPlane className="rotate-90 text-2xl text-green" />
                          <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
                            Ready
                          </span>
                        </div>

                        <div className="space-y-5">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45">
                              From
                            </p>
                            <h5 className="text-2xl font-black">Inquiry</h5>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="h-[2px] flex-1 rounded-full bg-green" />
                            <FaPlane className="rotate-90 text-green" />
                            <span className="h-[2px] flex-1 rounded-full bg-green" />
                          </div>

                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45">
                              To
                            </p>
                            <h5 className="text-2xl font-black">Journey</h5>
                          </div>
                        </div>

                        <div className="mt-10 rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-xl">
                          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-green">
                            Travel With Ease
                          </p>
                          <p className="mt-1 text-sm font-bold text-white/78">
                            Guided by Aldaleel Travel & Tourism
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
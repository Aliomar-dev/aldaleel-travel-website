import { motion } from "motion/react";
import {
  FaPlaneDeparture,
  FaPassport,
  FaHotel,
  FaKaaba,
  FaCarSide,
} from "react-icons/fa";

const expertiseItems = [
  {
    icon: FaPlaneDeparture,
    title: "Air Ticketing",
    desc: "Domestic and international flight booking with smooth support.",
    tag: "Flights",
  },
  {
    icon: FaPassport,
    title: "Visa Facilitation",
    desc: "Clear visa guidance with proper document handling support.",
    tag: "Visa",
  },
  {
    icon: FaHotel,
    title: "Hotel Reservations",
    desc: "Comfortable hotel booking options for every journey.",
    tag: "Hotels",
  },
  {
    icon: FaKaaba,
    title: "Smart Umrah",
    desc: "Organized Umrah planning with booking and travel assistance.",
    tag: "Umrah",
  },
  {
    icon: FaCarSide,
    title: "Transport Services",
    desc: "Reliable transport arrangements for transfers and travel needs.",
    tag: "Transport",
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-16 text-navy md:py-20"
    >
      {/* soft clean background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(39,169,79,0.08),transparent_24%),radial-gradient(circle_at_90%_10%,rgba(8,35,58,0.06),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)]" />

      {/* very soft lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 1400 520"
        fill="none"
      >
        <path
          d="M-80 330 C 170 190, 390 230, 600 310 S 970 420, 1450 180"
          stroke="#27A94F"
          strokeWidth="2"
          strokeDasharray="9 12"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* compact heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex justify-start"
        >
          <div className="relative inline-flex -rotate-2 items-center gap-4 rounded-[1.4rem] border border-green/15 bg-white px-5 py-3 shadow-[0_16px_45px_rgba(16,32,51,0.07)]">
            <span className="h-3 w-3 rounded-full bg-green shadow-[0_0_18px_rgba(39,169,79,0.75)]" />

            <h2 className="text-2xl font-black uppercase tracking-[0.12em] text-navy md:text-3xl">
              Our <span className="text-green">Expertise</span>
            </h2>

            <span className="absolute -bottom-1 left-8 h-[3px] w-20 rounded-full bg-green" />
          </div>
        </motion.div>

        {/* cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-slate-100 bg-white/85 p-5 shadow-[0_16px_45px_rgba(16,32,51,0.06)] backdrop-blur-xl transition hover:border-green/20 hover:shadow-[0_24px_65px_rgba(16,32,51,0.11)]"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-green/0 blur-2xl transition duration-500 group-hover:bg-green/15" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green/10 text-xl text-green transition duration-300 group-hover:bg-green group-hover:text-white">
                      <Icon />
                    </div>

                    <span className="rounded-full bg-green/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-green">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black leading-snug text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-5 h-[3px] w-0 rounded-full bg-green transition-all duration-300 group-hover:w-12" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
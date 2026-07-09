import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaPlane,
  FaMapMarkerAlt,
  FaStar,
  FaUmbrellaBeach,
  FaCity,
  FaMountain,
  FaMosque,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


const SLIDE_TIME = 5000;

const destinations = [
  {
    id: "madinah",
    city: "Madinah Pak",
    country: "Saudi Arabia",
    type: "Spiritual Journey",
    icon: FaMosque,
    image: "/destinations/madinah-pak.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=85",
    desc: "A peaceful spiritual journey with comfortable hotel support, transport guidance and organized travel planning.",
    highlights: ["Ziyarah Guidance", "Hotel Support", "Transport"],
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    type: "Luxury Escape",
    icon: FaCity,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    fallbackImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    desc: "A premium city escape with modern skyline, luxury hotels, shopping, family attractions and unforgettable experiences.",
    highlights: ["Luxury Hotels", "Shopping", "Family Trips"],
  },
  {
    id: "istanbul",
    city: "Istanbul",
    country: "Turkey",
    type: "Culture Trip",
    icon: FaStar,
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85",
    fallbackImage:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85",
    desc: "A beautiful blend of history, culture, food, shopping and scenic city views for families and couples.",
    highlights: ["Historic Places", "Bosphorus Views", "Shopping"],
  },
  {
    id: "kuala-lumpur",
    city: "Kuala Lumpur",
    country: "Malaysia",
    type: "Family Holiday",
    icon: FaUmbrellaBeach,
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=85",
    fallbackImage:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=85",
    desc: "A comfortable family destination with city life, nature, halal-friendly travel options and relaxed holiday planning.",
    highlights: ["Family Friendly", "City Life", "Nature Spots"],
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    type: "Premium City Tour",
    icon: FaCity,
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    fallbackImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    desc: "A premium travel experience with iconic landmarks, shopping streets, family attractions and city sightseeing.",
    highlights: ["Landmarks", "Shopping", "City Tours"],
  },
  {
    id: "baku",
    city: "Baku",
    country: "Azerbaijan",
    type: "Modern Getaway",
    icon: FaMountain,
    image:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1400&q=85",
    fallbackImage:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1400&q=85",
    desc: "A modern getaway with beautiful city views, relaxed travel vibes, family-friendly spots and scenic experiences.",
    highlights: ["City Views", "Family Trip", "Scenic Spots"],
  },
];

const Destinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fly, setFly] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const active = destinations[activeIndex];
  const ActiveIcon = active.icon;

  const resetToMadinah = () => {
    setActiveIndex(0);
    setTimerKey((prev) => prev + 1);
  };

  const changeDestination = (index) => {
    setActiveIndex(index);
    setTimerKey((prev) => prev + 1);
  };

  const nextDestination = () => {
    setActiveIndex((prev) => (prev + 1) % destinations.length);
    setTimerKey((prev) => prev + 1);
  };

  const prevDestination = () => {
    setActiveIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
    setTimerKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextDestination();
    }, SLIDE_TIME);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const handleExploreClick = (event) => {
    event.preventDefault();

    if (fly) return;

    setFly(true);

    setTimeout(() => {
      window.location.href = "/destinations";
    }, 520);
  };

  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-white py-14 text-navy sm:py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_52%,#ffffff_100%)]" />

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_0%,rgba(39,169,79,0.20),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(8,35,58,0.16),transparent_34%),linear-gradient(180deg,rgba(247,250,252,0.95)_0%,rgba(255,255,255,0)_100%)] blur-[2px]" />

      <div className="absolute inset-0 opacity-[0.22]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(8,35,58,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1400 760"
        fill="none"
      >
        <motion.path
          d="M-120 460 C 160 210, 430 320, 620 430 C 850 560, 1080 480, 1510 170"
          stroke="#27A94F"
          strokeWidth="2"
          strokeDasharray="9 14"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-green/15 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)] backdrop-blur-2xl sm:text-xs sm:tracking-[0.22em]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-45 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              Premium Destinations
            </div>

            <h2 className="max-w-3xl text-[34px] font-black leading-tight tracking-tight sm:text-4xl md:text-6xl">
              Places that turn your travel into{" "}
              <span className="text-green">memories</span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-semibold leading-7 text-slate-600 sm:text-base">
            Explore popular destinations with a premium travel planning feel —
            flights, stays, visa guidance and complete journey support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={resetToMadinah}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="relative overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white p-3 shadow-[0_30px_90px_rgba(16,32,51,0.10)] sm:rounded-[2.2rem] sm:p-4 md:rounded-[2.6rem]"
        >
          <div className="relative min-h-[640px] overflow-hidden rounded-[1.45rem] bg-navy sm:min-h-[610px] sm:rounded-[1.8rem] md:min-h-[560px] md:rounded-[2.1rem]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={`${active.city}, ${active.country}`}
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = active.fallbackImage;
                }}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-contain object-top md:object-cover md:object-center"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,34,0.18)_0%,rgba(7,21,34,0.44)_38%,rgba(7,21,34,0.90)_100%)] md:bg-[linear-gradient(90deg,rgba(7,21,34,0.88)_0%,rgba(7,21,34,0.46)_50%,rgba(7,21,34,0.18)_100%)]" />
            <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(7,21,34,0.08)_0%,rgba(7,21,34,0.74)_100%)] md:block" />

            <div className="absolute left-0 right-0 top-0 z-10 h-[4px] bg-white/15">
              <motion.div
                key={timerKey}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "100%" : "100%" }}
                transition={{
                  duration: isPaused ? 0 : SLIDE_TIME / 1000,
                  ease: "linear",
                }}
                className="h-full rounded-full bg-green shadow-[0_0_18px_rgba(39,169,79,0.75)]"
              />
            </div>

            <div className="absolute left-0 right-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(39,169,79,0.20)_0%,rgba(255,255,255,0.08)_45%,transparent_100%)] backdrop-blur-[1px] md:h-40 md:bg-[linear-gradient(180deg,rgba(39,169,79,0.26)_0%,rgba(255,255,255,0.10)_45%,transparent_100%)]" />

            <div className="absolute left-7 right-7 top-7 hidden items-center gap-3 md:flex">
              <span className="h-[2px] flex-1 rounded-full bg-white/18" />
              <motion.div
                animate={{ x: [-8, 8, -8] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-green"
              >
                <FaPlane className="rotate-90" />
              </motion.div>
              <span className="h-[2px] flex-1 rounded-full bg-white/18" />
            </div>

            <div className="absolute right-4 top-4 z-20 flex gap-2 sm:right-6 sm:top-6 sm:gap-3">
              <button
                type="button"
                onClick={prevDestination}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/12 text-white backdrop-blur-2xl transition hover:bg-green hover:text-white sm:h-11 sm:w-11"
                aria-label="Previous destination"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                onClick={nextDestination}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/12 text-white backdrop-blur-2xl transition hover:bg-green hover:text-white sm:h-11 sm:w-11"
                aria-label="Next destination"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="absolute bottom-7 right-7 z-20 hidden gap-2 md:flex">
              {destinations.map((destination, index) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => changeDestination(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-9 bg-green"
                      : "w-2.5 bg-white/40 hover:bg-white"
                  }`}
                  aria-label={`Go to ${destination.city}`}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active.id}-content`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl text-white"
                >
                  <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/12 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-2xl sm:text-xs sm:tracking-[0.2em]">
                    <ActiveIcon className="text-green" />
                    {active.type}
                  </div>

                  <h3 className="text-[42px] font-black leading-none sm:text-5xl md:text-7xl">
                    {active.city}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-green sm:text-sm sm:tracking-[0.2em]">
                    <FaMapMarkerAlt />
                    {active.country}
                  </p>

                  <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/82 sm:text-base md:mt-5 md:text-lg md:leading-8">
                    {active.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5 md:mt-6 md:gap-3">
                    {active.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/14 bg-white/12 px-3.5 py-2 text-[11px] font-black text-white backdrop-blur-xl sm:text-xs sm:px-4"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 md:mt-8">
                    <motion.a
                      href="/destinations"
                      onClick={handleExploreClick}
                      whileHover="hover"
                      whileTap="tap"
                      className="group relative inline-flex min-w-[176px] items-center justify-center overflow-hidden rounded-full border border-green/25 bg-green/15 px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(39,169,79,0.12)] backdrop-blur-xl transition hover:border-green/40 hover:bg-green/25 hover:shadow-[0_18px_45px_rgba(39,169,79,0.20)] md:min-w-[185px] md:text-sm"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(39,169,79,0.14),rgba(255,255,255,0.18),rgba(39,169,79,0.08))]" />

                      <span className="relative z-10 pr-8">
                        Explore Places
                      </span>

                      <motion.span
                        variants={{
                          hover: { x: 8 },
                          tap: { x: 14 },
                        }}
                        animate={fly ? { x: 70, opacity: [1, 1, 0] } : {}}
                        transition={{ duration: 0.42, ease: "easeInOut" }}
                        className="absolute right-5 z-10 inline-flex text-green"
                      >
                        <FaPlane className="rotate-90 text-[13px]" />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
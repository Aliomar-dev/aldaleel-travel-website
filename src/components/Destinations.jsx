import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    id: "madinah-al-munawwarah",
    city: "Madinah Al-Munawwarah",
    country: "Saudi Arabia",
    type: "Spiritual Journey",
    icon: FaMosque,
    image: "/destinations/madinah-pak.jpg",
    fallbackImages: [
      "/destinations/madinah.jpg",
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=85",
    ],
    desc: "A peaceful spiritual journey with comfortable hotel support, transport guidance and organized travel planning.",
    highlights: ["Ziyarah Guidance", "Hotel Support", "Transport"],
  },
  {
    id: "makkah-al-mukarramah",
    city: "Makkah Al-Mukarramah",
    country: "Saudi Arabia",
    type: "Umrah Journey",
    icon: FaMosque,
    image: "/destinations/makkah-al-mukarramah.jpg",
    fallbackImages: [
      "/destinations/makkah.jpg",
      "/destinations/kaaba.jpg",
      "https://images.unsplash.com/photo-1589827577276-2501ef0e9cba?auto=format&fit=crop&w=1600&q=85",
      "https://source.unsplash.com/1600x1000/?makkah,kaaba",
    ],
    desc: "A blessed journey to the holy city with organized Umrah planning, hotel support, transport arrangements and travel guidance.",
    highlights: ["Umrah Planning", "Hotel Support", "Transport"],
  },
  {
    id: "azerbaijan",
    city: "Azerbaijan",
    country: "Azerbaijan",
    type: "Modern Getaway",
    icon: FaMountain,
    image:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1600&q=85",
    fallbackImages: [
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1600&q=85",
    ],
    desc: "A beautiful modern getaway with scenic city views, relaxed travel vibes, family-friendly attractions and memorable holiday experiences.",
    highlights: ["Baku City", "Family Trip", "Scenic Spots"],
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    type: "Luxury Escape",
    icon: FaCity,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    fallbackImages: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    ],
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
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=85",
    fallbackImages: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=85",
    ],
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
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=85",
    fallbackImages: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=85",
    ],
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
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=85",
    fallbackImages: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=85",
    ],
    desc: "A premium travel experience with iconic landmarks, shopping streets, family attractions and city sightseeing.",
    highlights: ["Landmarks", "Shopping", "City Tours"],
  },
];

const Destinations = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = Number(
      sessionStorage.getItem("aldaleel-destination-index")
    );

    return Number.isInteger(savedIndex) &&
      savedIndex >= 0 &&
      savedIndex < destinations.length
      ? savedIndex
      : 0;
  });
  const [timerKey, setTimerKey] = useState(0);
  const [imageAttempt, setImageAttempt] = useState(0);
  const [showImageFallback, setShowImageFallback] = useState(false);

  const active = destinations[activeIndex];
  const ActiveIcon = active.icon;

  const activeImage =
    imageAttempt === 0
      ? active.image
      : active.fallbackImages?.[imageAttempt - 1];

  const resetImage = () => {
    setImageAttempt(0);
    setShowImageFallback(false);
  };

  const changeDestination = (index) => {
    setActiveIndex(index);
    resetImage();
    setTimerKey((prev) => prev + 1);
  };

  const nextDestination = () => {
    setActiveIndex((prev) => (prev + 1) % destinations.length);
    resetImage();
    setTimerKey((prev) => prev + 1);
  };

  const prevDestination = () => {
    setActiveIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
    resetImage();
    setTimerKey((prev) => prev + 1);
  };

  const handleImageError = () => {
    const fallbackCount = active.fallbackImages?.length || 0;

    if (imageAttempt < fallbackCount) {
      setImageAttempt((prev) => prev + 1);
      return;
    }

    setShowImageFallback(true);
  };

  const openTourPackages = () => {
    window.history.replaceState(
      { aldaleelBackSection: "destinations" },
      "",
      "/#destinations"
    );

    navigate("/tour-packages?back=destinations");
  };

  useEffect(() => {
    sessionStorage.setItem(
      "aldaleel-destination-index",
      String(activeIndex)
    );
  }, [activeIndex]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      nextDestination();
    }, SLIDE_TIME);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, timerKey]);

  return (
    <section
      id="destinations"
      className="relative scroll-mt-[110px] overflow-hidden bg-white py-10 text-navy sm:py-12 md:scroll-mt-[125px] md:py-16"
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
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-5 flex flex-col gap-4 md:mb-6"
        >
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-green/15 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)] backdrop-blur-2xl sm:text-xs sm:tracking-[0.22em]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-45" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
            </span>
            Premium Destinations
          </div>

          <div className="grid gap-3 md:grid-cols-[1.12fr_0.88fr] md:items-end">
            <h2 className="max-w-3xl text-[32px] font-black leading-tight tracking-tight sm:text-4xl md:text-6xl">
              Places that turn your travel into{" "}
              <span className="text-green">memories</span>
            </h2>

            <p className="max-w-xl text-sm font-semibold leading-7 text-slate-600 sm:text-base md:justify-self-end md:text-right">
              Explore popular destinations with a premium travel planning feel —
              flights, stays, visa guidance and complete journey support.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-visible rounded-[1.55rem] border border-slate-100 bg-white p-2 shadow-[0_30px_90px_rgba(16,32,51,0.10)] sm:rounded-[2.2rem] sm:p-4 md:rounded-[2.6rem]"
        >
      <button
  type="button"
  onClick={openTourPackages}
  className="
    group absolute z-30 flex flex-col items-center overflow-hidden
    rounded-full border border-white/25
    bg-[#071522]/92
    text-white
    shadow-[0_22px_60px_rgba(16,32,51,0.24)]
    backdrop-blur-2xl
    transition-all duration-300

    /* Mobile */
    right-3
    top-[70%]
    -translate-y-1/2
    px-2 py-3

    /* Desktop */
    md:-right-5
    md:top-1/2
    md:-translate-y-1/2
    md:px-2.5
    md:py-4

    hover:bg-green/90
    hover:shadow-[0_24px_70px_rgba(39,169,79,0.25)]
  "
  aria-label="Open tour packages"
>
  {/* Top Plane */}
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green/15">
    <motion.div
      whileHover={{}}
      className="text-white transition-transform duration-500 group-hover:translate-x-3"
    >
      <FaPlane className="text-xs" />
    </motion.div>
  </span>

  <span className="mt-2 h-8 w-px bg-white/30 transition-colors duration-300 group-hover:bg-white/50" />

  {/* Text */}
  <span className="my-2 text-[9px] font-black uppercase tracking-[0.18em] text-green transition-all duration-300 [writing-mode:vertical-rl] group-hover:text-white group-hover:text-[10px] group-hover:tracking-[0.22em]">
    Tour Packages
  </span>

  <span className="mb-2 h-8 w-px bg-white/30 transition-colors duration-300 group-hover:bg-white/50" />

  {/* Bottom Plane */}
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
    <motion.div
      whileHover={{}}
      className="text-white transition-transform duration-500 group-hover:translate-x-3"
    >
      <FaPlane className="text-xs" />
    </motion.div>
  </span>
</button>

          <div className="relative min-h-[610px] overflow-hidden rounded-[1.25rem] bg-[#071522] sm:min-h-[590px] sm:rounded-[1.8rem] md:min-h-[560px] md:rounded-[2.1rem]">
            <AnimatePresence mode="wait">
              {!showImageFallback && activeImage ? (
                <motion.img
                  key={`${active.id}-${imageAttempt}`}
                  src={activeImage}
                  alt={`${active.city}, ${active.country}`}
                  onError={handleImageError}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute inset-x-0 top-0 h-[66%] w-full object-contain object-top md:inset-0 md:h-full md:object-cover md:object-center"
                />
              ) : (
                <motion.div
                  key={`${active.id}-fallback-bg`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(39,169,79,0.38),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(135deg,#071522_0%,#08233a_44%,#0f3b35_100%)]"
                />
              )}
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,34,0.02)_0%,rgba(7,21,34,0.18)_38%,rgba(7,21,34,0.96)_72%,rgba(7,21,34,1)_100%)] md:bg-[linear-gradient(90deg,rgba(7,21,34,0.88)_0%,rgba(7,21,34,0.48)_52%,rgba(7,21,34,0.16)_100%)]" />
            <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(7,21,34,0.06)_0%,rgba(7,21,34,0.70)_100%)] md:block" />

            <div className="absolute left-0 right-0 top-0 z-10 h-[4px] bg-white/15">
              <motion.div
                key={timerKey}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: SLIDE_TIME / 1000,
                  ease: "linear",
                }}
                className="h-full rounded-full bg-green shadow-[0_0_18px_rgba(39,169,79,0.75)]"
              />
            </div>

            <div className="absolute left-0 right-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(39,169,79,0.12)_0%,rgba(255,255,255,0.03)_45%,transparent_100%)] backdrop-blur-[1px] md:h-40 md:bg-[linear-gradient(180deg,rgba(39,169,79,0.26)_0%,rgba(255,255,255,0.10)_45%,transparent_100%)]" />

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
                <FaPlane className="rotate-360" />
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

            <div className="absolute bottom-0 left-0 right-0 p-5 pr-[72px] sm:p-6 sm:pr-[84px] md:p-8 md:pr-8">
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

                  <h3 className="text-[34px] font-black leading-none sm:text-5xl md:text-7xl">
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
                        className="rounded-full border border-white/14 bg-white/12 px-3.5 py-2 text-[11px] font-black text-white backdrop-blur-xl sm:px-4 sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
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
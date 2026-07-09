import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaNewspaper,
  FaExternalLinkAlt,
  FaPlane,
  FaPassport,
  FaKaaba,
  FaMapMarkedAlt,
  FaRegClock,
  FaShieldAlt,
  FaSyncAlt,
  FaExclamationTriangle,
  FaGlobeAsia,
  FaCheckCircle,
  FaHotel,
  FaCarSide,
  FaLuggageCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const officialSources = [
  {
    name: "Saudi Press Agency",
    short: "SPA",
    url: "https://www.spa.gov.sa/en",
  },
  {
    name: "General Authority of Civil Aviation",
    short: "GACA",
    url: "https://gaca.gov.sa/en/News",
  },
  {
    name: "Visit Saudi Official Travel Guide",
    short: "Visit Saudi",
    url: "https://www.visitsaudi.com/en/plan-your-trip/travel-guide",
  },
  {
    name: "KSA Visa Official Platform",
    short: "KSA Visa",
    url: "https://ksavisa.sa/",
  },
  {
    name: "Saudi eVisa Official Website",
    short: "eVisa",
    url: "https://visa.visitsaudi.com/",
  },
];

const blogArticles = [
  {
    id: "visa-checklist",
    title: "Saudi Visa Checklist Before You Book Your Trip",
    category: "Visa Guide",
    source: "KSA Visa Official Platform",
    readTime: "3 min read",
    icon: FaPassport,
    summary:
      "A clear checklist for travelers before applying for a Saudi visa or confirming travel bookings.",
    points: [
      "Confirm the correct visa type from official platforms.",
      "Check passport validity before applying.",
      "Keep travel dates, hotel details and contact information ready.",
      "Verify final requirements before payment or departure.",
    ],
    article:
      "Before planning a Saudi Arabia trip, the first step is to confirm which visa type matches the purpose of travel. Tourist visits, family visits, business travel and Umrah-related travel may have different requirements. Travelers should check passport validity, personal details, travel dates, hotel information and official instructions before submitting an application. A travel agency can guide customers through the process, but final visa details should always be verified through official Saudi visa platforms.",
    officialLinks: [
      {
        label: "KSA Visa",
        url: "https://ksavisa.sa/",
      },
      {
        label: "Saudi eVisa",
        url: "https://visa.visitsaudi.com/",
      },
    ],
  },
  {
    id: "airport-travel",
    title: "Airport Travel Tips for a Smooth Departure",
    category: "Airport Guide",
    source: "General Authority of Civil Aviation",
    readTime: "3 min read",
    icon: FaLuggageCart,
    summary:
      "Helpful airport guidance for passengers before leaving for the airport and checking in.",
    points: [
      "Check your flight timing before leaving home.",
      "Review baggage rules from the airline.",
      "Keep passport, visa and ticket details ready.",
      "Arrive early during busy travel seasons.",
    ],
    article:
      "A smooth airport experience starts before reaching the terminal. Travelers should confirm flight timing, baggage rules, passport details and visa requirements before departure. During busy seasons, it is better to keep extra time for airport entry, check-in, baggage drop and security. Airline and aviation authority updates should be checked for any changes in operations or passenger instructions.",
    officialLinks: [
      {
        label: "GACA News",
        url: "https://gaca.gov.sa/en/News",
      },
      {
        label: "Saudi Press Agency",
        url: "https://www.spa.gov.sa/en",
      },
    ],
  },
  {
    id: "umrah-planning",
    title: "Smart Umrah Planning: What Families Should Prepare",
    category: "Umrah Travel",
    source: "Visit Saudi / KSA Visa",
    readTime: "4 min read",
    icon: FaKaaba,
    summary:
      "A simple guide for families planning Umrah with flights, hotels and transport arrangements.",
    points: [
      "Choose hotels based on distance and comfort.",
      "Keep documents and booking confirmations together.",
      "Plan airport transfers before arrival.",
      "Verify visa and travel requirements before departure.",
    ],
    article:
      "Umrah travel needs careful planning because families often require comfortable hotels, suitable flight timing and reliable transport. The best approach is to prepare documents early, confirm travel dates, select hotel location carefully and arrange airport transfers before arrival. Travelers should also check official visa and travel guidance before departure to avoid last-minute confusion.",
    officialLinks: [
      {
        label: "Visit Saudi",
        url: "https://www.visitsaudi.com/en",
      },
      {
        label: "KSA Visa",
        url: "https://ksavisa.sa/",
      },
    ],
  },
  {
    id: "flight-booking",
    title: "How to Choose Better Flight Options",
    category: "Airline Guide",
    source: "GACA / Airline Updates",
    readTime: "3 min read",
    icon: FaPlane,
    summary:
      "Understand timing, baggage, transit and route options before finalizing a flight.",
    points: [
      "Compare timing, baggage and transit duration.",
      "Avoid very tight layovers for international trips.",
      "Check airline baggage policies carefully.",
      "Confirm route and airport before payment.",
    ],
    article:
      "A cheaper flight is not always the best option. Travelers should compare route, timing, baggage allowance, airport, transit duration and refund conditions before booking. For families and elderly passengers, comfortable timing and shorter connections can be more important than the lowest fare. Professional travel support helps customers choose a flight option that matches budget, comfort and travel purpose.",
    officialLinks: [
      {
        label: "GACA News",
        url: "https://gaca.gov.sa/en/News",
      },
      {
        label: "Saudi Press Agency",
        url: "https://www.spa.gov.sa/en",
      },
    ],
  },
  {
    id: "hotel-transport",
    title: "Hotels and Transport: Why Location Matters",
    category: "Hotel & Transport",
    source: "Visit Saudi",
    readTime: "3 min read",
    icon: FaHotel,
    summary:
      "A useful guide for choosing hotels and transport based on city, purpose and convenience.",
    points: [
      "Choose hotel location according to your trip purpose.",
      "Check distance from airport, mosque, business area or attraction.",
      "Arrange transport early for families and groups.",
      "Confirm hotel facilities before booking.",
    ],
    article:
      "Hotel location can change the whole travel experience. A hotel near the right area can save time, reduce transport cost and make the journey easier. Families, business travelers and Umrah passengers should check hotel distance, transport availability, room facilities and nearby services before confirming. Good planning helps avoid unnecessary stress after arrival.",
    officialLinks: [
      {
        label: "Visit Saudi Travel Guide",
        url: "https://www.visitsaudi.com/en/plan-your-trip/travel-guide",
      },
    ],
  },
];

const fallbackUpdates = [
  {
    title: "Official Saudi travel and tourism updates",
    source: "Saudi Press Agency",
    category: "Travel News",
    date: "Official source",
    excerpt:
      "Latest government and tourism-related announcements can be verified from Saudi Press Agency.",
    officialUrl: "https://www.spa.gov.sa/en",
  },
  {
    title: "Official aviation and airport sector updates",
    source: "General Authority of Civil Aviation",
    category: "Aviation",
    date: "Official source",
    excerpt:
      "Airport, aviation and passenger-related updates can be checked from GACA official news.",
    officialUrl: "https://gaca.gov.sa/en/News",
  },
  {
    title: "Official Saudi visa requirements and guidance",
    source: "KSA Visa Official Platform",
    category: "Visa",
    date: "Official source",
    excerpt:
      "Travelers can verify visa types, requirements, fees and application guidance from KSA Visa.",
    officialUrl: "https://ksavisa.sa/",
  },
];

const stripHtml = (value = "") => {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
};

const cleanTitle = (title = "") => {
  return title
    .replace(/\s-\sGoogle News$/i, "")
    .replace(/\s-\sSaudi Press Agency$/i, "")
    .replace(/\s-\sSPA$/i, "")
    .replace(/\s-\sGACA$/i, "")
    .replace(/\s-\sVisit Saudi$/i, "")
    .trim();
};

const getCategory = (title = "", excerpt = "") => {
  const text = `${title} ${excerpt}`.toLowerCase();

  if (text.includes("visa")) return "Visa";
  if (text.includes("airport")) return "Airport";
  if (
    text.includes("aviation") ||
    text.includes("airline") ||
    text.includes("flight") ||
    text.includes("riyadh air") ||
    text.includes("flynas") ||
    text.includes("saudia")
  ) {
    return "Aviation";
  }
  if (text.includes("umrah") || text.includes("hajj")) return "Umrah";
  if (
    text.includes("tourism") ||
    text.includes("destination") ||
    text.includes("visit") ||
    text.includes("experience")
  ) {
    return "Tourism";
  }

  return "Travel";
};

const getIcon = (category = "", title = "") => {
  const text = `${category} ${title}`.toLowerCase();

  if (text.includes("visa")) return FaPassport;
  if (text.includes("umrah") || text.includes("hajj")) return FaKaaba;
  if (text.includes("airport")) return FaLuggageCart;
  if (
    text.includes("aviation") ||
    text.includes("airline") ||
    text.includes("flight")
  ) {
    return FaPlane;
  }
  if (text.includes("hotel")) return FaHotel;
  if (text.includes("transport")) return FaCarSide;
  if (text.includes("tourism") || text.includes("travel")) return FaMapMarkedAlt;

  return FaNewspaper;
};

const formatDate = (dateValue) => {
  if (!dateValue) return "Latest update";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) return "Latest update";

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getSourceName = (item) => {
  const title = item?.title || "";
  const author = item?.author || "";
  const combined = `${title} ${author}`.toLowerCase();

  if (combined.includes("gaca")) return "General Authority of Civil Aviation";
  if (combined.includes("ksa visa")) return "KSA Visa Official Platform";
  if (combined.includes("visit saudi")) return "Visit Saudi Official Travel Guide";
  if (combined.includes("evisa")) return "Saudi eVisa Official Website";
  if (combined.includes("saudi press agency") || combined.includes("spa")) {
    return "Saudi Press Agency";
  }

  if (author && author !== "Google News") return author;

  return "Saudi Official Travel Source";
};

const getOfficialUrl = (source = "", title = "", category = "") => {
  const text = `${source} ${title} ${category}`.toLowerCase();

  if (
    text.includes("gaca") ||
    text.includes("aviation") ||
    text.includes("airport")
  ) {
    return "https://gaca.gov.sa/en/News";
  }

  if (text.includes("evisa")) {
    return "https://visa.visitsaudi.com/";
  }

  if (text.includes("visa")) {
    return "https://ksavisa.sa/";
  }

  if (
    text.includes("visit saudi") ||
    text.includes("tourism") ||
    text.includes("travel guide")
  ) {
    return "https://www.visitsaudi.com/en/plan-your-trip/travel-guide";
  }

  return "https://www.spa.gov.sa/en";
};

const getSourceBadge = (source = "") => {
  const text = source.toLowerCase();

  if (text.includes("civil aviation") || text.includes("gaca")) return "GACA";
  if (text.includes("ksa visa")) return "KSA";
  if (text.includes("evisa")) return "eV";
  if (text.includes("visit saudi")) return "VS";
  if (text.includes("press") || text.includes("spa")) return "SPA";

  return "OS";
};

const BlogPage = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [activeArticle, setActiveArticle] = useState(blogArticles[0].id);

  const articlePanelRef = useRef(null);

  const selectedArticle =
    blogArticles.find((article) => article.id === activeArticle) ||
    blogArticles[0];

  const handleArticleSelect = (articleId) => {
    setActiveArticle(articleId);

    if (window.innerWidth < 1024) {
      setTimeout(() => {
        if (!articlePanelRef.current) return;

        const navbarOffset = 110;
        const targetPosition =
          articlePanelRef.current.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 120);
    }
  };

  const rssUrl = useMemo(() => {
    const query =
      '(site:spa.gov.sa OR site:gaca.gov.sa OR site:visitsaudi.com OR site:ksavisa.sa OR site:visa.visitsaudi.com OR site:gaca.gov.sa/en/News) "Saudi Arabia" travel tourism visa airline aviation airport Umrah hotel transport';

    return `https://news.google.com/rss/search?q=${encodeURIComponent(
      query
    )}&hl=en-US&gl=SA&ceid=SA:en`;
  }, []);

  const apiUrl = useMemo(() => {
    return `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      rssUrl
    )}`;
  }, [rssUrl]);

  const fetchLatestUpdates = async () => {
    setLoading(true);
    setFetchError("");

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("News request failed");
      }

      const data = await response.json();

      if (data.status !== "ok" || !Array.isArray(data.items)) {
        throw new Error("Invalid news response");
      }

      const mappedUpdates = data.items.slice(0, 6).map((item) => {
        const plainDescription = stripHtml(item.description || "");
        const title = cleanTitle(item.title || "Saudi Arabia travel update");
        const source = getSourceName(item);
        const category = getCategory(title, plainDescription);

        return {
          title,
          source,
          category,
          date: formatDate(item.pubDate),
          excerpt:
            plainDescription.length > 110
              ? `${plainDescription.slice(0, 110)}...`
              : plainDescription ||
                "Latest travel-related update from an official Saudi source.",
          officialUrl: getOfficialUrl(source, title, category),
        };
      });

      if (!mappedUpdates.length) {
        throw new Error("No latest news found");
      }

      setUpdates(mappedUpdates);
    } catch (error) {
      setFetchError(
        "Live updates could not load right now. Official source cards are shown below."
      );
      setUpdates(fallbackUpdates);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestUpdates();
  }, [apiUrl]);

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
        <FaPlane className="-rotate-12" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-5 md:pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)] backdrop-blur-xl sm:text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
            </span>
            Aldaleel Blog
          </div>

          <h1 className="text-[34px] font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Useful travel articles and{" "}
            <span className="text-green">official updates</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
            Read helpful travel guides first, then check latest Saudi travel,
            visa, airport and aviation updates from official sources.
          </p>
        </motion.div>

        {/* Blog Articles */}
        <div className="mt-10">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
                Blog Articles
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight md:text-4xl">
                Clear guides for travel customers
              </h2>
            </div>

            <p className="max-w-md text-sm font-semibold leading-7 text-slate-600">
              Pick a topic and read a short, useful guide with official links.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[370px_1fr]">
            <div className="grid gap-3">
              {blogArticles.map((article) => {
                const Icon = article.icon;
                const active = article.id === activeArticle;

                return (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => handleArticleSelect(article.id)}
                    className={`group rounded-[1.45rem] border p-4 text-left transition ${
                      active
                        ? "border-green/25 bg-white shadow-[0_20px_65px_rgba(16,32,51,0.09)]"
                        : "border-slate-100 bg-white/75 hover:border-green/20 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl transition ${
                          active
                            ? "bg-green text-white"
                            : "bg-green/10 text-green group-hover:bg-green group-hover:text-white"
                        }`}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-green">
                            {article.category}
                          </p>
                          <span className="text-[11px] font-bold text-slate-400">
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="mt-1 text-base font-black leading-tight text-navy">
                          {article.title}
                        </h3>

                        <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
                          {article.summary}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div ref={articlePanelRef}>
              <AnimatePresence mode="wait">
                <motion.article
                  key={selectedArticle.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-5 shadow-[0_24px_75px_rgba(16,32,51,0.09)] md:p-7"
                >
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green/12 blur-3xl" />
                  <div className="absolute -bottom-20 left-6 h-44 w-44 rounded-full bg-navy/8 blur-3xl" />

                  <div className="relative z-10">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-green/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-green">
                        {selectedArticle.category}
                      </span>

                      <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500">
                        <FaRegClock />
                        {selectedArticle.readTime}
                      </span>

                      <span className="text-xs font-bold text-slate-400">
                        Source: {selectedArticle.source}
                      </span>
                    </div>

                    <h2 className="max-w-3xl text-2xl font-black leading-tight tracking-tight md:text-4xl">
                      {selectedArticle.title}
                    </h2>

                    <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {selectedArticle.article}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {selectedArticle.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#f7fafc] p-4"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-green" />
                          <p className="text-sm font-bold leading-6 text-slate-600">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[1.4rem] border border-green/15 bg-green/8 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-green">
                        Official Reference
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3">
                        {selectedArticle.officialLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-navy shadow-[0_10px_28px_rgba(16,32,51,0.06)] transition hover:-translate-y-0.5 hover:text-green"
                          >
                            {link.label}
                            <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Latest Updates */}
        <div className="mt-12">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
                Latest Updates
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight md:text-4xl">
                Saudi travel news by category
              </h2>
            </div>

            <button
              type="button"
              onClick={fetchLatestUpdates}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#08233a]"
            >
              <FaSyncAlt className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>

          <div className="mb-5 rounded-[1.4rem] border border-slate-100 bg-white/90 p-4 shadow-[0_14px_45px_rgba(16,32,51,0.055)]">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-green" />
              <p className="text-sm font-semibold leading-6 text-slate-600">
                Update cards are fetched from official-source filtered news
                results. The small source button opens the official source page
                directly to avoid broken redirect links.
              </p>
            </div>
          </div>

          {fetchError && (
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold leading-6 text-amber-700">
              <FaExclamationTriangle className="mt-1 shrink-0" />
              {fetchError}
            </div>
          )}

          {loading && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="min-h-[225px] animate-pulse rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_16px_50px_rgba(16,32,51,0.055)]"
                >
                  <div className="h-11 w-11 rounded-2xl bg-slate-100" />
                  <div className="mt-4 h-4 w-4/5 rounded-full bg-slate-100" />
                  <div className="mt-3 h-3 w-full rounded-full bg-slate-100" />
                  <div className="mt-2 h-3 w-5/6 rounded-full bg-slate-100" />
                  <div className="mt-6 h-10 rounded-2xl bg-slate-100" />
                </div>
              ))}
            </div>
          )}

          {!loading && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {updates.map((item, index) => {
                const Icon = getIcon(item.category, item.title);
                const sourceBadge = getSourceBadge(item.source);

                return (
                  <motion.article
                    key={`${item.title}-${index}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                    className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_16px_50px_rgba(16,32,51,0.065)] transition hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(16,32,51,0.11)]"
                  >
                    <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-green/12 blur-3xl transition group-hover:bg-green/20" />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green/10 text-xl text-green transition group-hover:bg-green group-hover:text-white">
                          <Icon />
                        </div>

                        <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-black leading-tight tracking-tight text-navy">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                        {item.excerpt}
                      </p>

                      <div className="mt-auto pt-5">
                        <div className="flex items-center justify-between gap-3 rounded-[1.2rem] border border-slate-100 bg-[#f7fafc] px-3 py-3">
                          <div className="min-w-0">
                            <p className="truncate text-[11px] font-black text-navy">
                              {item.source}
                            </p>
                            <p className="mt-0.5 flex items-center gap-1 text-[11px] font-bold text-slate-500">
                              <FaRegClock />
                              {item.date}
                            </p>
                          </div>

                          <a
                            href={item.officialUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${item.source}`}
                            title={`Open ${item.source}`}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-navy text-[11px] font-black text-green transition hover:-translate-y-0.5 hover:bg-green hover:text-white"
                          >
                            {sourceBadge}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>

        {/* Official Sources */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-10 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_22px_70px_rgba(16,32,51,0.08)] md:p-8"
        >
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-2xl text-green">
                <FaGlobeAsia />
              </div>

              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.24em] text-green">
                Official Sources
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                Verify before you travel
              </h2>

              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                Visa requirements, airline updates and airport instructions can
                change. Always confirm final details from official sources.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {officialSources.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-[#f7fafc] p-4 transition hover:-translate-y-0.5 hover:border-green/25 hover:bg-white hover:shadow-[0_18px_45px_rgba(16,32,51,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-[11px] font-black text-green">
                      {getSourceBadge(source.name)}
                    </span>

                    <div>
                      <p className="text-sm font-black text-navy">
                        {source.name}
                      </p>
                      <p className="mt-1 text-xs font-bold text-slate-500">
                        {source.short}
                      </p>
                    </div>
                  </div>

                  <FaExternalLinkAlt className="shrink-0 text-xs text-green transition group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-[2rem] bg-navy p-6 text-white shadow-[0_28px_85px_rgba(7,21,34,0.18)] md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-green">
                Need Travel Help?
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                Let Aldaleel guide your next journey.
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-7 text-white/62">
                For flights, visas, hotels, Umrah and transport arrangements,
                send your travel request to our team.
              </p>
            </div>

            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-green px-7 py-3.5 text-sm font-black text-white shadow-[0_18px_45px_rgba(39,169,79,0.32)] transition hover:-translate-y-1 hover:bg-[#1f8d40]"
            >
              Get Travel Quote
              <FaPlane className="rotate-45 text-xs" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FaBars,
  FaTimes,
  FaPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronDown,
  FaBuilding,
  FaNewspaper,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [hideOnFooter, setHideOnFooter] = useState(false);

  const location = useLocation();

  const isBookingPage = location.pathname === "/booking";
  const isExpertisePage = location.pathname === "/expertise";
const isAboutPage =
  location.pathname === "/about" ||
  location.pathname === "/company/about-us";  const isBlogPage = location.pathname === "/blog";
  const isTourPackagesPage = location.pathname === "/tour-packages";

  const forceSolidNavbar =
    isBookingPage ||
    isExpertisePage ||
    isAboutPage ||
    isBlogPage ||
    isTourPackagesPage;

  const solidNavbar = pastHero || forceSolidNavbar;

  const sameNavFont = "font-semibold tracking-[-0.01em] font-sans";
  const topBarFont = "font-bold tracking-[0.08em] font-sans";

  useEffect(() => {
    const handleScroll = () => {
      if (forceSolidNavbar) {
        setPastHero(true);
        return;
      }

      const hero = document.getElementById("home");
      const heroHeight = hero ? hero.offsetHeight - 120 : 650;
      setPastHero(window.scrollY > heroHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, forceSolidNavbar]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideOnFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.18,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setOpen(false);
    setCompanyOpen(false);
    setMobileCompanyOpen(false);
  }, [location.pathname]);

  const isActiveLink = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const navLinkClass = (active) =>
    `group relative inline-flex items-center gap-2 py-2 text-[15px] ${sameNavFont} transition-all duration-300 ${
      active ? "text-green" : "text-white/92 hover:text-green"
    }`;

  const activeLineClass = (show) =>
    `absolute -bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-green transition-all duration-300 ${
      show ? "w-7" : "w-0 group-hover:w-7"
    }`;

  const mobileLinkClass = (active) =>
    `relative rounded-2xl px-4 py-3 text-[15px] ${sameNavFont} transition ${
      active ? "text-green" : "text-white/85 hover:bg-white/10 hover:text-green"
    }`;

  return (
    <AnimatePresence>
      {!hideOnFooter && (
        <motion.header
          initial={{ y: -105, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -105, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed left-0 top-0 z-[999] w-full"
        >
          {/* Desktop Top Line */}
          {!forceSolidNavbar && (
            <motion.div
              animate={{
                height: pastHero ? 0 : 30,
                opacity: pastHero ? 0 : 1,
                y: pastHero ? -14 : 0,
              }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="hidden overflow-hidden border-b border-white/10 bg-[#08233a]/92 text-white shadow-[0_10px_28px_rgba(7,21,34,0.22)] backdrop-blur-2xl md:block"
            >
              <div className="relative flex h-[30px] w-full items-center overflow-hidden px-5 text-[11px]">
                <div className="absolute left-5 top-1/2 z-20 flex -translate-y-1/2 items-center">
                  <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-green/25" />
                    <span className="relative h-2 w-2 rounded-full bg-green shadow-[0_0_12px_rgba(39,169,79,0.95)]" />
                  </span>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-14 right-[500px] top-0 overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-white/95 ${topBarFont}`}
                  >
                    TRAVEL WITH EASE&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;TRAVEL
                    WITH US
                  </motion.div>
                </div>

                <div className="absolute right-5 top-0 z-30 flex h-[30px] shrink-0 items-center gap-4 bg-[#08233a]/95 pl-5 backdrop-blur-xl">
                  <a
                    href="mailto:info@aldaleeltravel.com"
                    className={`inline-flex items-center gap-2 text-white/95 transition hover:text-green ${topBarFont}`}
                  >
                    <FaEnvelope className="text-[10px] text-green" />
                    <span>Email:</span>
                    <span>info@aldaleeltravel.com</span>
                  </a>

                  <a
                    href="tel:+966531314557"
                    className={`hidden items-center gap-2 text-white/95 transition hover:text-green lg:inline-flex ${topBarFont}`}
                  >
                    <FaPhoneAlt className="text-[10px] text-green" />
                    +966-53 1314557
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Navbar */}
          <motion.nav
            animate={{
              backgroundColor: solidNavbar
                ? "rgba(8, 35, 58, 0.94)"
                : "rgba(8, 35, 58, 0)",
              borderColor: solidNavbar
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0)",
              boxShadow: solidNavbar
                ? "0 18px 55px rgba(7,21,34,0.22)"
                : "0 0 0 rgba(0,0,0,0)",
              backdropFilter: solidNavbar ? "blur(22px)" : "blur(0px)",
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`mx-auto flex max-w-7xl items-center justify-between border px-5 transition-all duration-300 md:px-6 ${
              solidNavbar
                ? "mt-3 rounded-full py-2.5 md:py-3"
                : "mt-4 rounded-none py-2 md:mt-4"
            }`}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Aldaleel Travel and Tourism"
                className="h-12 w-auto object-contain md:h-14"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-8 lg:flex">
              <NavLink to="/" className={navLinkClass(isActiveLink("/"))}>
                <span className={sameNavFont}>Home</span>
                <span className={activeLineClass(isActiveLink("/"))} />
              </NavLink>

              <NavLink
                to="/expertise"
                className={navLinkClass(isActiveLink("/expertise"))}
              >
                <span className={sameNavFont}>Expertise</span>
                <span className={activeLineClass(isActiveLink("/expertise"))} />
              </NavLink>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setCompanyOpen((prev) => !prev)}
                  className={`group relative inline-flex items-center gap-2 py-2 text-[15px] ${sameNavFont} transition-all duration-300 ${
                    isAboutPage
                      ? "text-green"
                      : "text-white/92 hover:text-green"
                  }`}
                >
                  <span className={sameNavFont}>Company</span>

                  <FaChevronDown
                    className={`text-[11px] transition duration-300 ${
                      companyOpen ? "rotate-180" : ""
                    }`}
                  />

                  <span className={activeLineClass(isAboutPage)} />
                </button>

                <AnimatePresence>
                  {companyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.96 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute left-1/2 top-full mt-4 w-[220px] -translate-x-1/2 overflow-hidden rounded-[1.25rem] border border-white/12 bg-[#08233a]/96 p-2 text-white shadow-[0_24px_70px_rgba(7,21,34,0.28)] backdrop-blur-2xl"
                    >
                      <Link
                        to="/company/about-us"
                        onClick={() => setCompanyOpen(false)}
                        className="group/drop flex items-center gap-3 rounded-[1rem] px-4 py-3 transition hover:bg-white/10"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green/12 text-green transition group-hover/drop:bg-green group-hover/drop:text-white">
                          <FaBuilding />
                        </span>

                        <span>
                          <span
                            className={`block text-sm text-white ${sameNavFont}`}
                          >
                            About Us
                          </span>

                          <span
                            className={`mt-0.5 block text-[11px] text-white/50 ${sameNavFont}`}
                          >
                            Learn about Aldaleel
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/blog"
                className={navLinkClass(isActiveLink("/blog"))}
              >
                <span className={sameNavFont}>Blog</span>
                <span className={activeLineClass(isActiveLink("/blog"))} />
              </NavLink>

              {!isBookingPage && (
                <Link
                  to="/booking"
                  className={`inline-flex items-center gap-2 rounded-full bg-green px-7 py-3 text-[15px] text-white shadow-[0_16px_42px_rgba(39,169,79,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1f8d40] ${sameNavFont}`}
                >
                  <span className={sameNavFont}>Get Travel Quote</span>
                  <FaPlane className="rotate-360 text-xs" />
                </Link>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white shadow-card backdrop-blur-md transition hover:bg-green lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </motion.nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="mx-4 mt-3 overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#08233a]/96 p-4 text-white shadow-premium backdrop-blur-2xl lg:hidden"
              >
                {!forceSolidNavbar && (
                  <div className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-center text-xs text-white backdrop-blur-xl">
                    <motion.div
                      animate={{ x: ["-90%", "90%"] }}
                      transition={{
                        duration: 7.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`whitespace-nowrap ${sameNavFont}`}
                    >
                      Travel With Ease • Travel With Us
                    </motion.div>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className={mobileLinkClass(isActiveLink("/"))}
                  >
                    Home
                  </Link>

                  <Link
                    to="/expertise"
                    onClick={() => setOpen(false)}
                    className={mobileLinkClass(isActiveLink("/expertise"))}
                  >
                    Expertise
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileCompanyOpen((prev) => !prev)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-[15px] ${sameNavFont} transition ${
                      isAboutPage
                        ? "text-green"
                        : "text-white/85 hover:bg-white/10 hover:text-green"
                    }`}
                  >
                    <span className={sameNavFont}>Company</span>

                    <FaChevronDown
                      className={`text-xs transition duration-300 ${
                        mobileCompanyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileCompanyOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -6 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -6 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden rounded-2xl bg-white/8"
                      >
                        <Link
                          to="/about"
                          onClick={() => {
                            setOpen(false);
                            setMobileCompanyOpen(false);
                          }}
                          className={`flex items-center gap-3 rounded-2xl px-5 py-3 text-sm text-white/78 transition hover:bg-white/10 hover:text-green ${sameNavFont}`}
                        >
                          <FaBuilding className="text-green" />
                          About Us
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link
                    to="/blog"
                    onClick={() => setOpen(false)}
                    className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] transition ${
                      isActiveLink("/blog")
                        ? "text-green"
                        : "text-white/85 hover:bg-white/10 hover:text-green"
                    } ${sameNavFont}`}
                  >
                    <FaNewspaper className="text-green" />
                    Blog
                  </Link>

                  {!isBookingPage && (
                    <Link
                      to="/booking"
                      onClick={() => setOpen(false)}
                      className={`mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-green px-4 py-3 text-center text-[15px] text-white ${sameNavFont}`}
                    >
                      Get Travel Quote
                      <FaPlane className="rotate-360 text-xs" />
                    </Link>
                  )}

                  <div className="mt-3 space-y-2 rounded-2xl bg-white/10 p-4 text-sm">
                    <a
                      href="mailto:info@aldaleeltravel.com"
                      className={`flex items-center gap-2 text-white/80 ${sameNavFont}`}
                    >
                      <FaEnvelope className="text-green" />
                      info@aldaleeltravel.com
                    </a>

                    <a
                      href="tel:+966531314557"
                      className={`flex items-center gap-2 text-white/80 ${sameNavFont}`}
                    >
                      <FaPhoneAlt className="text-green" />
                      +966-53 1314557
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
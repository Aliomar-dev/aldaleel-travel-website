import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FaBars,
  FaTimes,
  FaPlane,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [hideOnFooter, setHideOnFooter] = useState(false);

  const location = useLocation();

  const isBookingPage = location.pathname === "/booking";
  const solidNavbar = pastHero || isBookingPage;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isBookingPage) {
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
  }, [location.pathname, isBookingPage]);

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

  const scrollToServicesTop = () => {
    const section = document.getElementById("services");
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setOpen(false);

    if (location.hash === "#services") {
      setTimeout(() => {
        scrollToServicesTop();
      }, 150);
    }
  }, [location.pathname, location.hash]);

  const isActiveLink = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const handleExpertiseClick = (event) => {
    event.preventDefault();

    if (location.pathname === "/") {
      scrollToServicesTop();
    } else {
      window.location.href = "/#services";
    }

    setOpen(false);
  };

  return (
    <AnimatePresence>
      {!hideOnFooter && (
        <motion.header
          initial={{ y: -105, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -105, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed left-0 top-0 z-50 w-full"
        >
          {/* Desktop Top Line - hidden on mobile and booking page */}
          {!isBookingPage && (
            <motion.div
              animate={{
                height: pastHero ? 0 : 36,
                opacity: pastHero ? 0 : 1,
                y: pastHero ? -18 : 0,
              }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="hidden overflow-hidden border-b border-white/10 bg-[#08233a]/90 text-white shadow-[0_12px_35px_rgba(7,21,34,0.24)] backdrop-blur-2xl md:block"
            >
              <div className="relative flex h-[36px] w-full items-center px-5 text-xs font-bold">
                <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden pr-[360px]">
                  <div className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <span className="absolute h-5 w-5 rounded-full bg-green/25 animate-ping" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-green shadow-[0_0_14px_rgba(39,169,79,0.95)]" />
                  </div>

                  <div className="relative h-[36px] min-w-0 flex-1 overflow-hidden">
                    <motion.div
                      animate={{ x: ["-35%", "115%"] }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-bold text-white/95"
                    >
                      Travel With Ease • Travel With Us
                    </motion.div>
                  </div>
                </div>

                <div className="absolute right-5 top-0 z-10 flex h-[36px] shrink-0 items-center gap-5 bg-[#08233a]/95 pl-5 backdrop-blur-xl">
                  <a
                    href="mailto:info@aldaleeltravel.com"
                    className="inline-flex items-center gap-2 text-white/95 transition hover:text-green"
                  >
                    <FaEnvelope className="text-green" />
                    <span>Email:</span>
                    <span>info@aldaleeltravel.com</span>
                  </a>

                  <a
                    href="tel:+966531314557"
                    className="hidden items-center gap-2 text-white/95 transition hover:text-green lg:inline-flex"
                  >
                    <FaPhoneAlt className="text-green" />
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
                ? "mt-3 rounded-full py-3"
                : "mt-4 rounded-none py-2 md:mt-4"
            }`}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/aldaleel-logo-green-white.svg"
                alt="Aldaleel Travel and Tourism"
                className="h-10 w-auto object-contain md:h-11"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => {
                const active = isActiveLink(link.path);
                const showActiveLine = active && link.path !== "/";

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={`group relative inline-flex items-center gap-2 py-2 text-[15px] font-extrabold transition-all duration-300 ${
                      active ? "text-green" : "text-white/92 hover:text-green"
                    }`}
                  >
                    <span>{link.name}</span>

                    <span
                      className={`absolute -bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-green transition-all duration-300 ${
                        showActiveLine ? "w-7" : "w-0 group-hover:w-7"
                      }`}
                    />
                  </NavLink>
                );
              })}

              <a
                href="#services"
                onClick={handleExpertiseClick}
                className="group relative inline-flex items-center gap-2 py-2 text-[15px] font-extrabold text-white/92 transition-all duration-300 hover:text-green"
              >
                <span>Expertise</span>
                <span className="absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-green transition-all duration-300 group-hover:w-7" />
              </a>

              {!isBookingPage && (
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3 text-[15px] font-extrabold text-white shadow-[0_16px_42px_rgba(39,169,79,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1f8d40]"
                >
                  Get Travel Quote
                  <FaPlane className="rotate-45 text-xs" />
                </Link>
              )}
            </div>

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
                {!isBookingPage && (
                  <div className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-center text-xs font-bold text-white backdrop-blur-xl">
                    <motion.div
                      animate={{ x: ["-90%", "90%"] }}
                      transition={{
                        duration: 7.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="whitespace-nowrap font-bold"
                    >
                      Travel With Ease • Travel With Us
                    </motion.div>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const active = isActiveLink(link.path);
                    const showActiveLine = active && link.path !== "/";

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`relative rounded-2xl px-4 py-3 font-bold transition ${
                          active
                            ? "text-green"
                            : "text-white/85 hover:bg-white/10 hover:text-green"
                        }`}
                      >
                        {link.name}

                        <span
                          className={`absolute bottom-2 left-4 h-[2px] rounded-full bg-green transition-all ${
                            showActiveLine ? "w-6" : "w-0"
                          }`}
                        />
                      </Link>
                    );
                  })}

                  <a
                    href="#services"
                    onClick={handleExpertiseClick}
                    className="relative rounded-2xl px-4 py-3 font-bold text-white/85 transition hover:bg-white/10 hover:text-green"
                  >
                    Expertise
                  </a>

                  {!isBookingPage && (
                    <Link
                      to="/booking"
                      onClick={() => setOpen(false)}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-green px-4 py-3 text-center font-extrabold text-white"
                    >
                      Get Travel Quote
                      <FaPlane className="rotate-45 text-xs" />
                    </Link>
                  )}

                  <div className="mt-3 space-y-2 rounded-2xl bg-white/10 p-4 text-sm">
                    <a
                      href="mailto:info@aldaleeltravel.com"
                      className="flex items-center gap-2 font-semibold text-white/80"
                    >
                      <FaEnvelope className="text-green" />
                      info@aldaleeltravel.com
                    </a>

                    <a
                      href="tel:+966531314557"
                      className="flex items-center gap-2 font-semibold text-white/80"
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
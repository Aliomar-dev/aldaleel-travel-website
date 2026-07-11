import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaPlane,
  FaClock,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";
import SEO from "../components/SEO";

const isTourPackagesPage = location.pathname === "/tour-packages";


const TourPackagesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const backSection = params.get("back") || "destinations";

    window.history.pushState(
      { aldaleelTourBackGuard: true },
      "",
      `${location.pathname}${location.search}`
    );

    const handleBrowserBack = () => {
      navigate(`/#${backSection}`, { replace: true });
    };

    window.addEventListener("popstate", handleBrowserBack);

    return () => {
      window.removeEventListener("popstate", handleBrowserBack);
    };
  }, [location.pathname, location.search, navigate]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fafc] pt-[92px] text-navy md:pt-[104px]">
      <SEO
        title="Tour Packages | Aldaleel Travel & Tourism"
        description="Aldaleel Travel & Tourism tour packages will be visible soon with professional travel options for families, groups and business travelers."
        keywords="Aldaleel tour packages, tour packages Riyadh, travel packages Saudi Arabia, family tour packages, international tour packages"
        path="/tour-packages"
      />

      <section className="relative flex min-h-[calc(100vh-92px)] items-center px-5 py-16 md:min-h-[calc(100vh-104px)] md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(39,169,79,0.20),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(8,35,58,0.14),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7fafc_55%,#ffffff_100%)]" />

        <div className="absolute inset-0 opacity-[0.22]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(8,35,58,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
        </div>

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.13]"
          viewBox="0 0 1400 760"
          fill="none"
        >
          <motion.path
            d="M-120 470 C 160 220, 430 330, 620 440 C 850 570, 1080 490, 1510 180"
            stroke="#27A94F"
            strokeWidth="2"
            strokeDasharray="9 14"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        <motion.div
          animate={{
            x: ["-8vw", "28vw", "62vw", "108vw"],
            y: [0, -16, 8, -22],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute top-28 text-2xl text-green"
        >
          <FaPlane className="rotate-360" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white/82 p-5 shadow-[0_30px_90px_rgba(16,32,51,0.10)] backdrop-blur-2xl sm:p-7 md:rounded-[2.5rem] md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="relative mb-5 inline-flex items-center gap-3 overflow-hidden rounded-full border border-green/15 bg-green/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-green sm:text-xs">
                  <motion.span
                    aria-hidden="true"
                    animate={{ x: ["-140%", "160%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 2.3,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(39,169,79,0.18),transparent)]"
                  />

                  <span className="relative z-10 flex h-2.5 w-2.5 rounded-full bg-green shadow-[0_0_14px_rgba(39,169,79,0.65)]" />
                  <span className="relative z-10">Coming Soon</span>
                </div>

                <h1 className="text-[38px] font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                  Tour Packages will be{" "}
                  <span className="text-green">visible soon</span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-slate-600 sm:text-base md:text-lg md:leading-8">
                  We are preparing professional tour package details for popular
                  destinations, including family trips, group tours, business
                  travel options and customized holiday plans.
                </p>

                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-500">
                  Until the packages are published, you can request a custom
                  travel quote and our team will guide you according to your
                  destination, budget and travel dates.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/booking"
                    className="group inline-flex items-center gap-3 rounded-full bg-green px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(39,169,79,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1f8d40]"
                  >
                    Get Travel Quote
                    <FaPlane className="rotate-45 text-sm transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[1.8rem] border border-slate-100 bg-[#071522] p-5 text-white shadow-[0_24px_70px_rgba(16,32,51,0.16)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-green/15 text-green">
                    <FaSuitcaseRolling className="text-3xl" />
                  </div>

                  <h2 className="mt-6 text-2xl font-black tracking-tight">
                    Package Details Under Review
                  </h2>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4">
                      <FaMapMarkedAlt className="text-green" />
                      <span className="text-sm font-semibold text-white/75">
                        Destination-wise plans
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4">
                      <FaClock className="text-green" />
                      <span className="text-sm font-semibold text-white/75">
                        Will be visible soon
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4">
                      <FaPlane className="rotate-360 text-green" />
                      <span className="text-sm font-semibold text-white/75">
                        Flights, hotels and transport support
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green/15 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-navy/10 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TourPackagesPage;
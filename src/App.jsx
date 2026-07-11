import { useEffect, useRef } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Lenis from "lenis";

// Components
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";
import TravelAgentBridge from "./components/TravelAgentBridge";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

// Pages
import ThankYou from "./pages/ThankYou";
import ExpertisePage from "./pages/ExpertisePage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TourPackagesPage from "./pages/TourPackagesPage";

function RouteTopScroll() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef({});

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const currentKey = location.key;

    const getHeaderOffset = () => {
      if (window.innerWidth >= 768) return 118;
      return 96;
    };

    const scrollTo = (top = 0) => {
      const finalTop = Math.max(0, top);

      window.__lenis?.scrollTo?.(finalTop, {
        immediate: true,
        force: true,
        offset: 0,
      });

      window.scrollTo({
        top: finalTop,
        left: 0,
        behavior: "auto",
      });
    };

    const scrollToHash = () => {
      if (!location.hash) return false;

      const id = decodeURIComponent(location.hash.replace("#", ""));
      const target = document.getElementById(id);

      if (!target) return false;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        getHeaderOffset();

      scrollTo(top);
      return true;
    };

    const restoreOrTop = () => {
      if (location.hash) {
        const scrolled = scrollToHash();

        if (scrolled) return;
      }

      if (navigationType === "POP") {
        const saved = scrollPositions.current[currentKey];

        if (saved && typeof saved.y === "number") {
          scrollTo(saved.y);
          return;
        }
      }

      scrollTo(0);
    };

    const timer1 = window.setTimeout(restoreOrTop, 80);
    const timer2 = window.setTimeout(restoreOrTop, 280);
    const timer3 = window.setTimeout(restoreOrTop, 650);
    const timer4 = window.setTimeout(restoreOrTop, 1050);

    return () => {
      scrollPositions.current[currentKey] = {
        x: window.scrollX,
        y: window.scrollY,
      };

      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      window.clearTimeout(timer3);
      window.clearTimeout(timer4);
    };
  }, [
    location.key,
    location.pathname,
    location.search,
    location.hash,
    navigationType,
  ]);

  return null;
}

function HomePage() {
  return (
    <>
  <SEO
  title="Aldaleel Travel & Tourism | Premium Travel Agency in Riyadh"
  description="Professional travel agency in Saudi Arabia offering air ticketing, Smart Umrah, tour packages, hotel reservations, transport services and visa facilitation in Riyadh and beyond."
  keywords="Aldaleel Travel, Aldaleel Travel and Tourism, travel agency, travel agency Saudi Arabia, travel agency Riyadh, air ticketing, flight booking Saudi Arabia, Smart Umrah, Umrah services, tour packages, hotel reservations, transport services, airport transfer, visa facilitation, visa assistance, travel consultant Saudi Arabia"
  path="/"
/>

      <Hero />

      <About />

      <TravelAgentBridge />

      <div className="relative z-30 -mt-8 sm:-mt-10 md:-mt-14">
        <Services />
      </div>

      <Destinations />

      <Testimonials />
    </>
  );
}

function BookingPage() {
  return (
    <>
    <SEO
  title="Get Travel Quote | Aldaleel Travel & Tourism"
  description="Request a custom travel quote from Aldaleel Travel & Tourism for air ticketing, Smart Umrah, tour packages, hotel reservations, transport services and visa facilitation in Saudi Arabia."
  keywords="get travel quote, travel quote Saudi Arabia, travel booking, travel booking Saudi Arabia, travel agency booking, air ticket booking, flight booking, Smart Umrah inquiry, Umrah travel quote, tour package inquiry, hotel reservation inquiry, transport booking, airport transfer booking, visa facilitation inquiry, visa assistance, Aldaleel Travel booking, Aldaleel Travel quote"
  path="/booking"
/>

      <div className="min-h-screen bg-[#f7fafc] pt-[92px] md:pt-[104px]">
        <BookingForm />
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    window.__lenis = lenis;

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <RouteTopScroll />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/tour-packages" element={<TourPackagesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;
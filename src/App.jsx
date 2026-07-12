import { useEffect, useRef } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Lenis from "lenis";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

// Pages
import HomePage from "./pages/HomePage";
import ThankYou from "./pages/ThankYou";
import ExpertisePage from "./pages/ExpertisePage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TourPackagesPage from "./pages/TourPackagesPage";

// Keep your existing RouteTopScroll implementation here unchanged.
// (Paste the same RouteTopScroll function from your current App.jsx.)

function RouteTopScroll() {
  const location = useLocation();

  useEffect(() => {
    window.__lenis?.scrollTo(0, {
      immediate: true,
      force: true,
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return null;
}

function BookingPage() {
  return (
    <div className="min-h-screen bg-[#f7fafc] pt-[92px] md:pt-[104px]">
      <BookingForm />
    </div>
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
  <ScrollToTop />

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
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

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
import ThankYou from "./pages/ThankYou";

function RouteTopScroll() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
}

function HomePage() {
  return (
    <>
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

function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}

function BookingPage() {
  return (
    <div className="min-h-screen bg-[#f7fafc] pt-[92px] md:pt-[104px]">
      <BookingForm />
    </div>
  );
}

function AppContent() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="overflow-hidden">
      <RouteTopScroll />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
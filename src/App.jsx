import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
      <SEO
        title="Aldaleel Travel & Tourism | Premium Travel Agency in Riyadh"
        description="Aldaleel Travel & Tourism is a professional travel agency in Riyadh, Saudi Arabia offering flight bookings, visa guidance, hotel reservations, Smart Umrah, tours and transport arrangements."
        keywords="Aldaleel Travel, travel agency Riyadh, travel agency Saudi Arabia, flights booking Riyadh, visa guidance Riyadh, hotel booking Riyadh, Smart Umrah, Umrah services Saudi Arabia, transport services Riyadh"
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
        title="Get Travel Quote | Aldaleel Travel & Tourism Riyadh"
        description="Request a travel quote from Aldaleel Travel & Tourism for flights, visa guidance, hotel bookings, Smart Umrah, tours and transport arrangements."
        keywords="get travel quote Riyadh, travel booking Riyadh, flight quote Saudi Arabia, Umrah package inquiry, visa guidance inquiry, Aldaleel Travel booking"
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
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;
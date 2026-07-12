
import { useEffect } from "react";

import SEO from "../components/SEO";
import PageSeo from "../components/PageSeo";
import Hero from "../components/Hero";
import About from "../components/About";
import TravelAgentBridge from "../components/TravelAgentBridge";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";

const HomePage = () => {

          <PageSeo page="home" />

useEffect(() => {
    console.log(sessionStorage.getItem("scrollToSection"));
  const sectionId = sessionStorage.getItem("scrollToSection");

  if (!sectionId) {
    return;
  }

  sessionStorage.removeItem("scrollToSection");

  const timer = setTimeout(() => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      110;

    window.__lenis?.scrollTo(top, {
      immediate: true,
      force: true,
    });

    window.scrollTo({
      top,
      behavior: "auto",
    });
  }, 300);

  return () => clearTimeout(timer);
}, []);


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
};

export default HomePage;
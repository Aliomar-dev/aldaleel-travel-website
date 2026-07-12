
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
  let timeoutId;
  let secondTimeoutId;
  let frameId;

  const restoreSection = () => {
    const sectionId = sessionStorage.getItem("scrollToSection");

    if (!sectionId) return;

    const scrollToTarget = () => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      const navbarOffset = window.innerWidth >= 768 ? 104 : 86;
      const targetTop = Math.max(section.offsetTop - navbarOffset, 0);

      window.__lenis?.start?.();

      if (window.__lenis) {
        window.__lenis.scrollTo(targetTop, {
          immediate: true,
          force: true,
          offset: 0,
        });
      }

      window.scrollTo({
        top: targetTop,
        left: 0,
        behavior: "auto",
      });

      secondTimeoutId = window.setTimeout(() => {
        window.scrollTo({
          top: targetTop,
          left: 0,
          behavior: "auto",
        });

        sessionStorage.removeItem("scrollToSection");
      }, 250);
    };

    frameId = window.requestAnimationFrame(() => {
      timeoutId = window.setTimeout(scrollToTarget, 180);
    });
  };

  restoreSection();

  const handlePageShow = () => {
    restoreSection();
  };

  window.addEventListener("pageshow", handlePageShow);

  return () => {
    window.removeEventListener("pageshow", handlePageShow);
    window.cancelAnimationFrame(frameId);
    window.clearTimeout(timeoutId);
    window.clearTimeout(secondTimeoutId);
  };
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
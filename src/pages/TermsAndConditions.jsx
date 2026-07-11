import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaPlane,
  FaShieldAlt,
} from "react-icons/fa";
import SEO from "../components/SEO";

const email = "info@aldaleeltravel.com";
const phone = "+966-53 1314557";

const sections = [
  {
    title: "Use of Our Website",
    text: "This website is provided to share information about Aldaleel Travel & Tourism services and to help customers submit travel inquiries. You agree to use the website for lawful purposes only and not to misuse, disrupt, copy or interfere with the website, forms or content.",
  },
  {
    title: "Travel Inquiry and Quote Requests",
    text: "Submitting a form or contacting us through the website does not automatically confirm any booking. Our team may contact you to review your request, confirm availability, discuss required documents and share the next steps before any travel arrangement is finalized.",
  },
  {
    title: "Flights, Hotels, Visa and Umrah Services",
    text: "Aldaleel Travel & Tourism provides travel support such as air ticketing, visa facilitation guidance, hotel reservations, Smart Umrah planning, tours and transport arrangements. Final approval, availability, pricing and travel permission may depend on airlines, hotels, embassies, government authorities or other third-party service providers.",
  },
  {
    title: "Customer Information",
    text: "You are responsible for providing correct and complete information, including names, contact details, passport information, travel dates and any documents requested for your service. Delays, rejections or extra costs caused by incorrect information may not be the responsibility of Aldaleel Travel & Tourism.",
  },
  {
    title: "Pricing, Payments and Availability",
    text: "Prices, seats, hotel rooms, packages and service availability can change until a booking is confirmed. Any payment terms, refund conditions, cancellation charges or change fees will be shared according to the selected service and the rules of the relevant airline, hotel, authority or supplier.",
  },
  {
    title: "Third-Party Services",
    text: "Some travel services are delivered by third parties such as airlines, hotels, transportation providers, embassies, visa centers and travel platforms. Their own terms, conditions, timings, policies and decisions may apply to your booking or application.",
  },
  {
    title: "Website Content",
    text: "We aim to keep the website content accurate and useful. However, travel requirements, visa rules, airline policies, hotel availability and official procedures may change. Customers should confirm important details directly with our team before making final travel decisions.",
  },
  {
    title: "Limitation of Responsibility",
    text: "Aldaleel Travel & Tourism will try to provide professional support, but we cannot guarantee decisions made by airlines, hotels, embassies, immigration authorities or other third-party providers. We are not responsible for losses caused by incorrect customer information, late documents, government restrictions, supplier changes or circumstances beyond our control.",
  },
  {
    title: "Updates to These Terms",
    text: "We may update these Terms & Conditions when needed to reflect changes in our services, website or business process. The updated version will be posted on this page.",
  },
];

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-navy">
      <SEO
        title="Terms & Conditions | Aldaleel Travel & Tourism"
        description="Read the website terms and conditions for Aldaleel Travel & Tourism services, inquiries, bookings and customer responsibilities."
        keywords="Aldaleel Travel terms, travel agency terms Riyadh, Aldaleel Travel conditions"
        path="/terms-and-conditions"
      />

      <section className="relative overflow-hidden bg-[#071522] px-5 pb-16 pt-32 text-white md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(39,169,79,0.24),transparent_28%),linear-gradient(180deg,#071522_0%,#08233a_100%)]" />

        <motion.div
          animate={{
            x: ["-8vw", "28vw", "64vw", "108vw"],
            y: [0, -18, 10, -24],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute top-24 text-2xl text-green"
        >
          <FaPlane className="rotate-45" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-5xl">
        

          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-green backdrop-blur-xl">
            <FaShieldAlt />
            Website Policy
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/70 md:text-lg">
            These terms explain how customers should use this website and how
            Aldaleel Travel & Tourism handles travel inquiries, booking support
            and service information.
          </p>

          <p className="mt-5 text-sm font-bold text-white/45">
            Last updated: July 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(16,32,51,0.07)] md:p-6">
            <h2 className="text-xl font-black tracking-[-0.03em]">
              Aldaleel Travel & Tourism
            </h2>

            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              For questions about any booking, inquiry or policy details, please
              contact our team directly.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm font-bold text-slate-600 transition hover:border-green/30 hover:bg-green/5 hover:text-navy"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green/10 text-green">
                  <FaEnvelope />
                </span>
                {email}
              </a>

              <a
                href="tel:+966531314557"
                className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm font-bold text-slate-600 transition hover:border-green/30 hover:bg-green/5 hover:text-navy"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green/10 text-green">
                  <FaPhoneAlt />
                </span>
                {phone}
              </a>
            </div>

            <div className="mt-5 rounded-2xl border border-green/15 bg-green/5 p-4">
              <p className="text-xs font-bold leading-6 text-slate-600">
                This page is for website and service information. For legal or
                regulatory advice, please consult a qualified professional.
              </p>
            </div>
          </aside>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(16,32,51,0.055)] md:p-6"
              >
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <FaCheckCircle />
                  </span>

                  <div>
                    <h3 className="text-lg font-black tracking-[-0.03em] text-navy">
                      {section.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-7 text-slate-600 md:text-base md:leading-8">
                      {section.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
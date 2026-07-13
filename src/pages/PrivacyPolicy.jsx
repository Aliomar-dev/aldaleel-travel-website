import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaPlane,
  FaUserShield,
} from "react-icons/fa";
import SEO from "../components/SEO";
import PageSeo from "../components/PageSeo";


const email = "info@aldaleeltravel.com";
const phone = "+966-53 1314557";

const sections = [
  {
    title: "Information We May Collect",
    text: "When you contact Aldaleel Travel & Tourism or submit an inquiry form, we may collect information such as your name, phone number, email address, travel destination, travel dates, service preference and any details you choose to share for your travel request.",
  },
  {
    title: "How We Use Your Information",
    text: "We use your information to respond to your inquiry, prepare travel quotes, guide you about required documents, assist with booking-related communication and provide customer support for Aldaleel Travel & Tourism services.",
  },
  {
    title: "Booking and Travel Documents",
    text: "For some services, customers may be asked to share documents or details required for flights, visa facilitation, hotel reservations, Umrah planning, tours or transport arrangements. These details are used only for the relevant service process.",
  },
  {
    title: "Form Submissions and Communication",
    text: "Website form submissions may be delivered to us through a secure third-party form or email service. We may also communicate with you through email, phone or WhatsApp depending on the contact details you provide.",
  },
  {
    title: "Sharing With Service Providers",
    text: "To complete a travel-related request, necessary information may be shared with relevant service providers such as airlines, hotels, visa centers, embassies, transport providers or travel partners. We share only what is reasonably needed for the requested service.",
  },
  {
    title: "Data Protection",
    text: "We aim to handle customer information responsibly and restrict access to people involved in responding to inquiries or arranging requested services. However, no website or online transmission method can be guaranteed as completely secure.",
  },
  {
    title: "Marketing Communication",
    text: "If you contact us, we may use your details to respond to your request or follow up about related travel services. You may ask us to stop promotional communication at any time by contacting us directly.",
  },
  {
    title: "Cookies and Website Analytics",
    text: "Our website may use basic browser technologies or analytics tools to improve performance, understand general usage and improve the user experience. These tools do not replace direct customer communication for booking confirmations.",
  },
  {
    title: "Your Choices",
    text: "You may contact us to request correction, update or removal of your personal information where possible, subject to booking, service, legal or record-keeping requirements.",
  },
  {
    title: "Policy Updates",
    text: "We may update this Privacy Policy when needed to reflect changes in our website, services or communication process. Updated content will be posted on this page.",
  },
];


const PrivacyPolicy = () => {

        <PageSeo page="privacy" />

        useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const backSection = params.get("back");

  if (backSection) {
    sessionStorage.setItem("scrollToSection", backSection);
  }
}, []);


  return (
    <main className="min-h-screen bg-[#f7fafc] text-navy">
      
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
            <FaUserShield />
            Customer Privacy
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/70 md:text-lg">
            This policy explains how Aldaleel Travel & Tourism may collect, use
            and handle customer information submitted through our website,
            forms and contact channels.
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
              Contact for Privacy Requests
            </h2>

            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              For questions about your personal information or this policy,
              contact Aldaleel Travel & Tourism directly.
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
                We do not sell customer information. Information is used for
                responding to inquiries and arranging requested travel services.
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

export default PrivacyPolicy;
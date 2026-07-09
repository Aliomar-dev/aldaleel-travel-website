import { useState } from "react";
import { motion } from "motion/react";
import {
  FaPlane,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Air Ticketing",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: "1",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const services = [
    "Air Ticketing",
    "Visa Facilitation",
    "Hotel Reservations",
    "Smart Umrah",
    "Transport Services",
    "Complete Travel Package",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus({
      loading: false,
      success: false,
      error: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `New Booking Request - ${formData.service}`,
      from_name: "Aldaleel Travel Website",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      destination: formData.destination,
      departure_date: formData.departureDate,
      return_date: formData.returnDate || "Not provided",
      travelers: formData.travelers,
      message: formData.message || "No extra message",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "Air Ticketing",
          destination: "",
          departureDate: "",
          returnDate: "",
          travelers: "1",
          message: "",
        });

        setStatus({
          loading: false,
          success: true,
          error: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: "Message could not be sent. Please try again.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: "Network error. Please check your internet and try again.",
      });
    }
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#f7fafc] px-4 py-6 text-navy md:px-5 md:py-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(39,169,79,0.12),transparent_25%),radial-gradient(circle_at_88%_10%,rgba(8,35,58,0.09),transparent_25%),linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-2"
          >
            <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-green/15 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-green shadow-[0_12px_34px_rgba(16,32,51,0.055)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-45 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              Booking Request
            </div>

            <h1 className="max-w-xl text-[34px] font-black leading-[1.05] tracking-tight md:text-5xl">
              Get your travel quote from{" "}
              <span className="text-green">Aldaleel</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm font-semibold leading-7 text-slate-600 md:text-base">
              Fill this quick form and your request will be sent directly to
              Aldaleel Travel & Tourism. No mail app will open.
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Fast response",
                "Flights & visa support",
                "Hotels & transport",
                "Smart Umrah planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/85 px-4 py-2.5 text-sm font-black text-slate-700 shadow-[0_12px_34px_rgba(16,32,51,0.045)]"
                >
                  <FaCheckCircle className="text-green" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[1.8rem] border border-white bg-white p-4 shadow-[0_24px_80px_rgba(16,32,51,0.10)] md:p-5"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green/15 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-navy/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-4 rounded-[1.35rem] bg-navy px-5 py-3.5 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-green">
                  Travel Form
                </p>
                <h2 className="mt-1 text-lg font-black">
                  Send Booking Request
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaUser className="text-green" />
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>

                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaPhoneAlt className="text-green" />
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+966..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>

                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaEnvelope className="text-green" />
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>

                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaPlane className="text-green" />
                    Service
                  </span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaMapMarkerAlt className="text-green" />
                    Destination
                  </span>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="Dubai / Madinah / London"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>

                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaUsers className="text-green" />
                    Travelers
                  </span>
                  <input
                    type="number"
                    min="1"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>

                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaCalendarAlt className="text-green" />
                    Departure
                  </span>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>

                <label>
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaCalendarAlt className="text-green" />
                    Return
                  </span>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                    <FaPaperPlane className="text-green" />
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Write any extra details..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold outline-none transition focus:border-green focus:bg-white focus:ring-4 focus:ring-green/10"
                  />
                </label>
              </div>

              {status.error && (
                <div className="mt-3 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                  <FaExclamationTriangle className="mt-0.5 shrink-0" />
                  {status.error}
                </div>
              )}

              {status.success && (
                <div className="mt-3 flex items-start gap-3 rounded-2xl border border-green/20 bg-green/10 px-4 py-3 text-sm font-bold text-green">
                  <FaCheckCircle className="mt-0.5 shrink-0" />
                  Your booking request has been sent successfully.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status.loading}
                whileHover={!status.loading ? { y: -3 } : {}}
                whileTap={!status.loading ? { scale: 0.96 } : {}}
                className="group mt-4 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green px-5 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(39,169,79,0.32)] transition hover:bg-[#1f8d40] disabled:cursor-not-allowed disabled:opacity-65"
              >
                {status.loading ? "Sending..." : "Send Booking Request"}
                <FaPaperPlane className="text-xs transition group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
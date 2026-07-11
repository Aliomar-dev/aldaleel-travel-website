import { motion } from "motion/react";
import { FaStar, FaUserCircle, FaPlane } from "react-icons/fa";

const businessInfo = {
  name: "Aldaleel Travel and Tourism KSA",
  rating: 5.0,
  totalReviews: 17,
  reviewWriteLink: "https://g.page/r/CUqiIlQhhGsrEAE/review",
  reviewListLink:
    "https://www.google.com/search?q=Aldaleel+Travel+and+Tourism+KSA+Google+reviews",
};

const reviews = [
  {
    name: "Qais Bh",
    rating: 5,
    text: "Excellent service from Al Daleel Travel and Tourism. Their team was very professional, supportive, and responsive throughout the entire process. They handled everything smoothly and made the travel experience hassle-free. Highly recommended for visa services, ticket booking, and travel arrangements. Thank you for the great support and customer service.",
    time: "A month ago",
    photo: "",
  },
  {
    name: "Adnan Habeeb",
    rating: 5,
    text: "The Agent at Aldaleel Travel was very helpful in catering the best package for our trip by focusing on the best stay at affordable prices. Keep up the good job!",
    time: "Edited a year ago",
    photo: "",
  },
  {
    name: "Muhammad Omar",
    rating: 5,
    text: "Recommended for your Travel Purposes ⭐",
    time: "Edited a year ago",
    photo: "",
  },
];

const GoogleIcon = ({ className = "h-4 w-4" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.223 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917Z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917Z"
      />
    </svg>
  );
};

const HeadingGoogleBlink = () => {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-[0_8px_22px_rgba(16,32,51,0.10)]">
      <span className="absolute h-5 w-5 animate-ping rounded-full bg-green/20" />
      <GoogleIcon className="relative z-10 h-3.5 w-3.5" />
    </span>
  );
};

const Stars = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1 text-[#f5b301]">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          className={`text-sm ${
            index < Math.round(rating) ? "opacity-100" : "opacity-25"
          }`}
        />
      ))}
    </div>
  );
};

const Cloud = ({ className = "" }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative h-14 w-32 rounded-full bg-white/90 shadow-[0_18px_45px_rgba(16,32,51,0.08)] blur-[0.15px]">
        <span className="absolute -top-5 left-6 h-12 w-12 rounded-full bg-white/95 shadow-[0_10px_25px_rgba(16,32,51,0.04)]" />
        <span className="absolute -top-7 left-14 h-16 w-16 rounded-full bg-white/90 shadow-[0_10px_25px_rgba(16,32,51,0.04)]" />
        <span className="absolute -top-4 right-6 h-10 w-10 rounded-full bg-white/85 shadow-[0_10px_25px_rgba(16,32,51,0.04)]" />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-12 text-navy sm:py-14 md:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(39,169,79,0.10),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(8,35,58,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]" />

      {/* Soft Clouds Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-100">
        <Cloud className="left-[-35px] top-12 scale-90 opacity-95 sm:left-10 sm:top-14 sm:scale-105" />
        <Cloud className="right-[-45px] top-28 scale-90 opacity-90 sm:right-14 sm:top-22 sm:scale-110" />
        <Cloud className="bottom-20 left-[16%] hidden scale-[0.9] opacity-80 md:block" />
        <Cloud className="bottom-10 right-[18%] hidden scale-[0.85] opacity-75 lg:block" />
        <Cloud className="left-[44%] top-[58%] hidden scale-[0.65] opacity-55 lg:block" />

        <motion.div
          animate={{ x: ["-12vw", "112vw"], y: [0, -12, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 text-navy/28 drop-shadow-[0_10px_25px_rgba(8,35,58,0.18)]"
        >
          <FaPlane className="rotate-360 text-2xl" />
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.16]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(8,35,58,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-7 max-w-2xl text-center sm:mb-8"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green/15 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-green shadow-[0_10px_30px_rgba(16,32,51,0.06)] backdrop-blur-xl">
            <HeadingGoogleBlink />
            Google Reviews
          </div>

          <h2 className="text-[30px] font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            What travelers say about{" "}
            <span className="text-green">Aldaleel Travel</span>
          </h2>

          <div className="mx-auto mt-5 inline-flex items-center gap-3 rounded-full border border-slate-100 bg-white/90 px-4 py-2.5 shadow-[0_14px_36px_rgba(16,32,51,0.07)] backdrop-blur-xl">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_22px_rgba(16,32,51,0.09)]">
              <GoogleIcon className="h-5 w-5" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-navy">
                  {businessInfo.rating.toFixed(1)}
                </span>
                <Stars rating={businessInfo.rating} />
              </div>

              <p className="text-[11px] font-bold text-slate-500">
                {businessInfo.totalReviews} Google reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex min-h-[230px] flex-col rounded-[1.45rem] border border-slate-100 bg-white/92 p-5 shadow-[0_18px_55px_rgba(16,32,51,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(16,32,51,0.12)] sm:rounded-[1.6rem] md:min-h-[280px]"
            >
              <div className="mb-4 flex items-center gap-3">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-2xl text-white">
                    <FaUserCircle />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-sm font-black text-navy">
                    {review.name}
                  </h4>

                  <p className="mt-0.5 text-[11px] font-bold text-slate-500">
                    {review.time}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_22px_rgba(16,32,51,0.08)]">
                  <GoogleIcon className="h-4.5 w-4.5" />
                </div>
              </div>

              <Stars rating={review.rating} />

              <p className="mt-4 flex-1 text-sm font-semibold leading-6 text-slate-600">
                “{review.text}”
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-7 text-center sm:mt-8">
          <motion.a
            href={businessInfo.reviewListLink}
            target="_blank"
            rel="noreferrer"
            whileHover="hover"
            whileTap="tap"
            className="group relative inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-full bg-navy px-6 py-3 text-sm font-black text-white shadow-[0_14px_36px_rgba(16,32,51,0.15)] transition hover:-translate-y-1 hover:bg-green"
          >
            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <GoogleIcon className="h-4 w-4" />
            </span>

            <span className="relative z-10 pr-7">View More on Google</span>

            <motion.span
              variants={{
                hover: { x: 8 },
                tap: { x: 14 },
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute right-5 z-10 inline-flex text-white"
            >
              <FaPlane className="rotate-360 text-xs" />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
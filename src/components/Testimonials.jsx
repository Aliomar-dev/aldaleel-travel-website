import { motion } from "motion/react";
import { FaGoogle, FaStar, FaUserCircle, FaPlane } from "react-icons/fa";

const businessInfo = {
  name: "Aldaleel Travel and Tourism KSA",
  rating: 5.0,
  totalReviews: 17,
  profileLink: "https://g.page/r/CUqiIlQhhGsrEAE/review",
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

const HeadingGoogleBlink = () => {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-green/10">
      <span className="absolute h-5 w-5 rounded-full bg-green/30 animate-ping" />
      <FaGoogle className="relative z-10 text-sm" />
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

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-14 text-navy md:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(39,169,79,0.10),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(8,35,58,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green/15 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-green shadow-[0_10px_30px_rgba(16,32,51,0.06)] backdrop-blur-xl">
            <HeadingGoogleBlink />
            Google Reviews
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
            What travelers say about{" "}
            <span className="text-green">Aldaleel Travel</span>
          </h2>

          <div className="mx-auto mt-5 inline-flex items-center gap-3 rounded-full border border-slate-100 bg-white px-4 py-2.5 shadow-[0_14px_36px_rgba(16,32,51,0.07)]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
              <FaGoogle />
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
              className="group flex min-h-[260px] flex-col rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(16,32,51,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(16,32,51,0.12)]"
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

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                  <FaGoogle />
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
        <div className="mt-8 text-center">
          <motion.a
            href={businessInfo.profileLink}
            target="_blank"
            rel="noreferrer"
            whileHover="hover"
            whileTap="tap"
            className="group relative inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-full bg-navy px-6 py-3 text-sm font-black text-white shadow-[0_14px_36px_rgba(16,32,51,0.15)] transition hover:-translate-y-1 hover:bg-green"
          >
            <FaGoogle className="relative z-10" />

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
// src/components/WhyChooseUs.jsx

import { motion } from "motion/react";
import { whyChoose } from "../data/siteData";


const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy to-[#0b2d45] text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="font-bold text-gold">Why Choose Aldaleel</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Smooth travel support with a premium experience
            </h2>
            <p className="mt-6 leading-8 text-white/70">
              From planning to booking, Aldaleel helps customers travel with
              confidence, clarity and comfort.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="rounded-[2rem] bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/15"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-teal">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
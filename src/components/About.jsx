import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } }
};

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-200">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="relative mx-auto max-w-6xl px-6"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            I’m a multidisciplinary creator who bridges design and engineering. My focus is on
            human-centered UI/UX, scalable design systems, and high-quality front-end code.
            I’ve collaborated with startups and brands to build experiences that are visually
            engaging and delightfully usable.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: 'UI/UX Design',
              d: 'Research, wireframing, prototyping, usability testing, and design systems with a focus on accessibility and consistency.'
            },
            {
              t: 'Front-End Development',
              d: 'Modern React-based stacks, component architecture, performance optimization, animations, and delightful micro-interactions.'
            },
            {
              t: 'Web Development',
              d: 'From landing pages to product dashboards, I build responsive, scalable, and maintainable experiences end to end.'
            }
          ].map((item) => (
            <motion.div
              key={item.t}
              variants={fadeUp}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              style={{ perspective: 1000 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.15), transparent 40%)'
                }}
              />
              <h3 className="relative text-lg font-medium">{item.t}</h3>
              <p className="relative mt-2 text-sm text-slate-400">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

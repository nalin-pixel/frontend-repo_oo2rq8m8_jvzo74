import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Rocket, PenTool, Wrench } from 'lucide-react';

const Step = ({ icon: Icon, eyebrow, title, copy, accent = 'from-cyan-400 to-fuchsia-400' }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2"
    >
      {/* Decorative background glow */}
      <div className={`pointer-events-none absolute -inset-x-20 -top-10 h-48 rounded-full bg-gradient-to-r ${accent} opacity-10 blur-3xl`} />

      <div className="relative order-2 md:order-1">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          <Icon size={14} className="text-cyan-300" />
          {eyebrow}
        </span>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h3>
        <p className="mt-3 text-slate-300">{copy}</p>
      </div>

      <div className="relative order-1 md:order-2">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
            background: 'radial-gradient(600px circle at 30% 20%, rgba(34,211,238,0.12), transparent 40%)'
          }} />
          <div className="relative aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900" />
        </div>
      </div>
    </motion.section>
  );
};

const Story = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end end'] });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} id="story" className="relative w-full bg-slate-950 py-10 text-slate-200">
      {/* Progress bar */}
      <div className="sticky top-16 z-40 mx-auto w-full max-w-6xl px-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-fuchsia-400" style={{ width }} />
        </div>
      </div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl px-6 pb-6 pt-20 text-center"
      >
        <p className="inline-flex items-center gap-2 text-sm text-slate-400">
          <Sparkles size={16} className="text-cyan-300" />
          A story-driven process
        </p>
        <h2 className="mt-2 bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
          From idea to impact
        </h2>
        <p className="mt-3 text-slate-300">
          I guide projects through an end-to-end journey—discovery, design, build, and launch—so every detail feels intentional and every interaction feels alive.
        </p>
      </motion.div>

      {/* Steps */}
      <Step
        icon={Sparkles}
        eyebrow="Chapter 1"
        title="Discovery"
        copy="We start by understanding goals, users, and constraints. I turn insights into a clear plan—prioritizing impact and feasibility." 
        accent="from-cyan-400 to-emerald-300"
      />
      <Step
        icon={PenTool}
        eyebrow="Chapter 2"
        title="Design"
        copy="From wireframes to high-fidelity, I craft accessible interfaces and scalable systems. Motion and micro-interactions bring it to life." 
        accent="from-fuchsia-400 to-cyan-300"
      />
      <Step
        icon={Wrench}
        eyebrow="Chapter 3"
        title="Build"
        copy="Production-quality front-end built with performance, semantics, and maintainability in mind—tested and ready for growth." 
        accent="from-emerald-300 to-cyan-400"
      />
      <Step
        icon={Rocket}
        eyebrow="Chapter 4"
        title="Launch"
        copy="Polished, measured, and iterated. I ship with confidence and set the stage for continuous improvement." 
        accent="from-cyan-300 to-fuchsia-400"
      />

      {/* Outro CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl px-6 pb-24 text-center"
      >
        <p className="text-slate-300">Ready to start your chapter?</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-6 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]"
        >
          Let’s collaborate
        </a>
      </motion.div>
    </section>
  );
};

export default Story;

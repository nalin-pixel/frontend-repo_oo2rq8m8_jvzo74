import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for legibility (don't block the 3D scene) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 to-transparent" />

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
        className="relative mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 pt-28 pb-24 md:pt-36 md:pb-40"
      >
        <motion.span variants={fadeUp} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur md:text-sm">
          Available for freelance projects
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
        </motion.span>

        <motion.h1 variants={fadeUp} className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text text-transparent">Your Name</span>.
          <br className="hidden md:block" /> UI/UX Designer • Web Developer • Front‑End Engineer
        </motion.h1>

        <motion.p variants={fadeUp} className="max-w-2xl text-base text-slate-300 md:text-lg">
          I craft delightful, accessible interfaces and performant web experiences. I blend design thinking with modern front‑end engineering to ship polished, user‑first products.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-400/25 transition hover:scale-[1.02] hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Contact Me
          </a>
          <div className="ml-1 flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Floating hint */}
        <motion.div
          variants={fadeUp}
          className="pointer-events-none mt-8 inline-flex items-center gap-2 text-xs text-slate-300/80"
        >
          <MousePointer2 size={14} />
          Interact with the 3D scene
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

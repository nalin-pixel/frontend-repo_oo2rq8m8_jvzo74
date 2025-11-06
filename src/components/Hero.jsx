import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast (doesn't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/70" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center gap-6 px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur md:text-sm">
          Available for freelance projects
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        </span>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Your Name</span>.<br />
          UI/UX Designer • Web Developer • Front‑End Engineer
        </h1>

        <p className="max-w-2xl text-base text-slate-300 md:text-lg">
          I craft delightful, accessible interfaces and performant web experiences. I blend design thinking with modern front‑end engineering to ship polished, user‑first products.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-emerald-400/25 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Contact Me
          </a>
          <div className="ml-1 flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

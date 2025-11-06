import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Design System Kit',
    tags: ['Figma', 'Design System', 'Accessibility'],
    link: '#',
    desc: 'A flexible token-driven DS with components, patterns, and accessibility baked in.'
  },
  {
    title: 'Interactive Portfolio',
    tags: ['React', 'Spline', 'Motion'],
    link: '#',
    desc: 'A playful portfolio with 3D interactions and buttery-smooth transitions.'
  },
  {
    title: 'SaaS Dashboard',
    tags: ['Next.js', 'Tailwind', 'Charts'],
    link: '#',
    desc: 'A modular dashboard with real-time metrics and dark-mode first design.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
            <p className="mt-3 max-w-3xl text-slate-400">
              A snapshot of things I’ve designed and built—spanning product design, web apps,
              and interactive experiments.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10 md:block">
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <ExternalLink size={18} className="text-slate-400 transition group-hover:text-emerald-300" />
                </div>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

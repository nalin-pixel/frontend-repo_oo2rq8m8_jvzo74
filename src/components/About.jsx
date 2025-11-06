import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            I’m a multidisciplinary creator who bridges design and engineering. My focus is on
            human-centered UI/UX, scalable design systems, and high-quality front-end code.
            I’ve collaborated with startups and brands to build experiences that are visually
            engaging and delightfully usable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">UI/UX Design</h3>
            <p className="mt-2 text-sm text-slate-400">
              Research, wireframing, prototyping, usability testing, and design systems with a
              focus on accessibility and consistency.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">Front-End Development</h3>
            <p className="mt-2 text-sm text-slate-400">
              Modern React-based stacks, component architecture, performance optimization,
              animations, and delightful micro-interactions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">Web Development</h3>
            <p className="mt-2 text-sm text-slate-400">
              From landing pages to product dashboards, I build responsive, scalable, and
              maintainable experiences end to end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

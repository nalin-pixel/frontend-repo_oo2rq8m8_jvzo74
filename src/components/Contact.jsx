import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-6xl px-6"
      >
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s build something great</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Have a project in mind or just want to say hello? I’d love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-fuchsia-400/10 blur-2xl" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-lg bg-cyan-400/20 p-2 text-cyan-300">
                    <Mail size={18} />
                  </span>
                  <p className="text-sm text-slate-300">Email me directly at</p>
                </div>
                <a href="mailto:hello@yourdomain.com" className="text-lg font-medium text-white hover:underline">
                  hello@yourdomain.com
                </a>
                <p className="mt-2 text-sm text-slate-400">I typically respond within 1–2 business days.</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-cyan-300"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-cyan-300"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-cyan-300"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-400/25 transition hover:translate-y-[-1px] hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                {submitted ? (
                  'Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

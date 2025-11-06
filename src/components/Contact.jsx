import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, simulate a submit success. This can be wired to a backend later.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s build something great</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Have a project in mind or just want to say hello? I’d love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-emerald-400/20 p-2 text-emerald-300">
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

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-300"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-300"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-300"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-emerald-400/25 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
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
      </div>
    </section>
  );
};

export default Contact;

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-white font-bold text-2xl">Get in touch</h2>
              <p className="mt-2 text-blue-100/85 text-sm">Available for internships, freelance, and collaborative research projects.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/60 text-white px-4 py-2 hover:bg-slate-800/60" href="mailto:travis@example.com">Email</a>
                <a className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/60 text-white px-4 py-2 hover:bg-slate-800/60" href="#">LinkedIn</a>
                <a className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/60 text-white px-4 py-2 hover:bg-slate-800/60" href="#">Resume</a>
              </div>
            </div>
            <form className="space-y-3">
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Name</label>
                <input className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@psu.edu" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Message</label>
                <textarea rows="4" className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Tell me about your project" />
              </div>
              <button type="button" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

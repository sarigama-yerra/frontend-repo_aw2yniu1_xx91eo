export default function Projects() {
  const items = [
    {
      tag: 'Case Study',
      title: 'Campus Navigation App',
      desc: 'Reducing wayfinding friction for new students with accessible patterns and clear visual hierarchy.',
    },
    {
      tag: 'Prototype',
      title: 'Dining Experience Redesign',
      desc: 'Streamlined ordering flows and menu discovery driven by interview insights and usability tests.',
    },
    {
      tag: 'Research',
      title: 'Mental Wellness Tracker',
      desc: 'Synthesizing diary studies into actionable features to support daily reflection habits.',
    },
  ];

  return (
    <section id="work" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-blue-100/80 max-w-2xl">A snapshot of projects spanning research, interaction design, and prototyping.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article key={i} className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-5 hover:border-blue-400/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all">
              <div className="flex items-center gap-2 text-[11px] text-blue-100/70">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                {p.tag}
              </div>
              <h3 className="mt-3 text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{p.desc}</p>
              <a href="#" className="mt-4 inline-flex text-sm text-blue-200 hover:text-white">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-900 pointer-events-none" />
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-blue-100/80 shadow-sm shadow-black/30">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Penn State UX Designer
          </div>

          <h1 className="mt-6 text-4xl/tight sm:text-6xl/tight font-extrabold tracking-tight bg-gradient-to-br from-white via-blue-50 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(59,130,246,0.25)]">
            Designing intuitive, playful experiences
          </h1>

          <p className="mt-5 text-blue-100/90 text-lg max-w-2xl">
            I craft user-centered products that balance clarity and delight. Explore selected projects below and see how I think through problems end-to-end.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all">
              View Projects
            </a>
            <a href="#about" className="inline-flex items-center rounded-full border border-white/15 bg-slate-900/60 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800/60 transition-colors">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

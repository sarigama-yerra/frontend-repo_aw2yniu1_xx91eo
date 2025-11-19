export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-6">
          <h2 className="text-white font-bold text-2xl">About</h2>
          <p className="mt-3 text-blue-100/85">
            I’m Travis, a UX designer at Penn State focused on systems thinking, rapid prototyping, and inclusive design. I love turning research insights into crisp interfaces.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-blue-100/85 text-sm">
            <li className="rounded-lg border border-white/10 bg-slate-950/60 p-3">Wireframing & IA</li>
            <li className="rounded-lg border border-white/10 bg-slate-950/60 p-3">Usability Testing</li>
            <li className="rounded-lg border border-white/10 bg-slate-950/60 p-3">Prototyping</li>
            <li className="rounded-lg border border-white/10 bg-slate-950/60 p-3">Design Systems</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-6">
          <h3 className="text-white font-semibold">Principles</h3>
          <ul className="mt-3 space-y-2 text-blue-100/85 text-sm">
            <li>• Lead with clarity</li>
            <li>• Design for accessibility</li>
            <li>• Prototype to learn</li>
            <li>• Measure impact</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

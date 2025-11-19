export default function VisitorCounter() {
  return (
    <section id="visitor" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-xl">Visitors</h3>
              <p className="text-blue-100/80 text-sm">Live counter updates every time someone lands here.</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 blur-xl rounded-2xl" aria-hidden="true" />
              <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-6 py-4">
                <span className="text-blue-200/80 text-sm">Total</span>
                <span id="visitor-count" className="text-3xl font-bold bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent tracking-tight">
                  —
                </span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-blue-200/70 text-xs">Built with a simple API. You can swap in your AI assistant later without changing the layout.</p>
        </div>
      </div>
      <script>
        {`
          (function(){
            const el = document.getElementById('visitor-count');
            const apiUrl = (window?.ENV && window.ENV.BACKEND_URL) || import.meta?.env?.VITE_BACKEND_URL || '/api/visitors';
            if (!el) return;
            fetch(apiUrl)
              .then(r => r.json())
              .then(data => {
                el.textContent = data.views ?? data.count ?? data.total ?? '0';
              })
              .catch(() => { el.textContent = '—'; });
          })();
        `}
      </script>
    </section>
  );
}

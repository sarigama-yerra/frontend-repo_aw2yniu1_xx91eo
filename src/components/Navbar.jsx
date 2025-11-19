import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-lg shadow-black/20">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#top" className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 ring-2 ring-blue-400/40" />
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">
                Travis Ma
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="#visitor" className="hover:text-white transition-colors">Visitors</a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-blue-100/80">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

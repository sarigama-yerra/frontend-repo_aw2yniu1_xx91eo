import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import VisitorCounter from './components/VisitorCounter'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.12),transparent_40%),_radial-gradient(800px_circle_at_100%_0%,rgba(56,189,248,0.10),transparent_40%),_radial-gradient(800px_circle_at_50%_120%,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Projects />
        <VisitorCounter />
        <About />
        <Contact />
        <footer className="py-10 text-center text-xs text-blue-200/60">© {new Date().getFullYear()} Travis Ma • Designed with care at Penn State</footer>
      </div>
    </div>
  )
}

export default App
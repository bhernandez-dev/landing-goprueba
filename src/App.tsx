import { useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'

const NAV_LINKS = ['Projects', 'Studio', 'Offerings', 'Inquire']

const STATS = [
  { value: '250+', label: 'Brands Transformed' },
  { value: '95%', label: 'Client Retention' },
  { value: '10+', label: 'Years in the Game' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Navbar ── */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        {/* Brand */}
        <span className="font-podium text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
          VANGUARD
        </span>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs font-inter tracking-widest uppercase text-white hover:bg-white/10 transition-all duration-200"
        >
          GET IN TOUCH
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-4 h-0.5 bg-white" />
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-sm transition-all duration-500 flex flex-col ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5">
          <span className="font-podium text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
            VANGUARD
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-1"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Overlay Links */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6 px-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link}
            </a>
          ))}

          {/* Mobile overlay CTA */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-xs font-inter tracking-widest uppercase text-white transition-all duration-500"
            style={{
              transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            GET IN TOUCH
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16">
        {/* Tagline */}
        <div className="animate-fade-up flex items-center gap-3 mb-6 lg:mb-8">
          <Crown className="w-4 h-4 text-white/70 flex-shrink-0" />
          <span className="font-inter text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
            World-Class Digital Collective
          </span>
        </div>

        {/* Main Heading */}
        <div className="animate-fade-up-delay-1">
          <h1
            className="font-podium text-white uppercase leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
          >
            Design.
            <br />
            Disrupt.
            <br />
            Conquer.
          </h1>
        </div>

        {/* Subtext */}
        <p className="animate-fade-up-delay-2 font-inter text-white/70 text-sm sm:text-base leading-relaxed max-w-md mt-6 lg:mt-8">
          We build fierce brand identities
          <br />
          that don't just turn heads —{' '}
          <span className="text-white font-semibold">they lead.</span>
        </p>

        {/* CTA Row */}
        <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 bg-black hover:bg-neutral-900 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs font-inter tracking-widest uppercase transition-colors duration-200"
          >
            SEE OUR WORK
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Award badge — hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3">
            <Award className="w-8 h-8 text-white/50" />
            <div>
              <p className="font-inter text-white/60 text-xs tracking-wider uppercase">
                Top-Rated
              </p>
              <p className="font-inter text-white/60 text-xs tracking-wider uppercase">
                Brand Studio
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="font-inter text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

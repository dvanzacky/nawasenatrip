import { Plane, MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

const exploreLinks = ['Destinations', 'Trips', 'Experiences', 'Blog']
const companyLinks = ['About us', 'Community', 'Sustainability', 'Contact']
const socials = ['Instagram', 'TikTok', 'YouTube']

export default function Footer() {
  return (
    <footer className="relative bg-ocean text-white">
      {/* Gelombang pembuka (warna sama dengan section di atasnya) */}
      <svg
        className="absolute left-0 top-0 h-12 w-full -translate-y-[calc(100%-1px)] md:h-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 L0,70 C240,10 480,110 720,60 C960,10 1200,0 1440,60 L1440,120 Z"
          fill="#0b3b4c"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-10">
        {/* Tagline */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/15 pb-12 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-3xl italic leading-snug text-aqua sm:text-4xl">
              New places. Real people.
              <br />
              Lasting memories.
            </p>
          </div>

          <div className="flex items-center gap-3 text-aqua/80">
            <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
              <path
                d="M2 25 C30 25 40 5 70 12 C90 17 100 8 112 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                strokeLinecap="round"
              />
            </svg>
            <Plane size={26} className="rotate-[-10deg]" />
          </div>
        </div>

        {/* Kolom */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <svg width="34" height="24" viewBox="0 0 34 24" fill="none" className="text-aqua">
                <path
                  d="M2 18c4-1 7-6 9-11 1-3 4-4 6-2 2 2 1 5 0 7 3-2 6-2 8 0 2 2 4 3 7 2"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold tracking-tight">Nawasena</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Small-group trips across Banyuwangi, led by local guides who love
              this land as much as you will.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-aqua">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              {exploreLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-aqua">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak + newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-aqua">
              Stay in touch
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <MapPin size={14} /> Banyuwangi, East Java
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> hello@Nawasena.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +62 812 0000 0000
              </li>
            </ul>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center rounded-full bg-white/10 p-1 pl-4"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aqua text-ocean transition hover:bg-white"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bawah */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} BWI Trip. All rights reserved.</p>

          <ul className="flex items-center gap-5">
            {socials.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
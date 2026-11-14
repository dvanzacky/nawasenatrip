import { useState } from 'react'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import pulauMerah from '../assets/trip-2.jpg'
import baluran from '../assets/trip-3.jpg'
import ijen from '../assets/ijen.jpg'
import plengkung from '../assets/trip-1.jpg'
import tabuhan from '../assets/tabuhan.jpg'
import telukHijau from '../assets/teluk-hijau.jpg'

const NAVBAR_HEIGHT = 72

const destinations = [
  { name: 'Pulau Merah', location: 'Southern coast', image: pulauMerah },
  { name: 'Baluran', location: 'Situbondo border', image: baluran },
  { name: 'Kawah Ijen', location: 'Ijen Plateau', image: ijen },
  { name: 'Plengkung', location: 'Alas Purwo', image: plengkung },
  { name: 'Pulau Tabuhan', location: 'Northern coast', image: tabuhan },
  { name: 'Teluk Hijau', location: 'Meru Betiri', image: telukHijau },
]

// Tujuan tiap menu = id section di App.jsx
const links = [
  { label: 'Trips', href: '#experiences' },
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [destOpen, setDestOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
    setDestOpen(false)
  }

  // Scroll halus ke section (dikurangi tinggi navbar supaya judul tidak tertutup)
  const goTo = (e, href) => {
    e.preventDefault()
    closeMenu()

    const el = document.querySelector(href)
    if (!el) {
      console.warn(`Section "${href}" tidak ditemukan. Cek id di App.jsx.`)
      return
    }

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
  }

  const goTop = (e) => {
    e.preventDefault()
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" onClick={goTop} className="flex items-center gap-2">
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" className="text-ocean">
            <path
              d="M2 18c4-1 7-6 9-11 1-3 4-4 6-2 2 2 1 5 0 7 3-2 6-2 8 0 2 2 4 3 7 2"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-2xl font-bold tracking-tight text-ink">Nawasena</span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {/* Destinations + dropdown (muncul saat hover) */}
          <li className="group relative">
            <a
              href="#trips"
              onClick={(e) => goTo(e, '#trips')}
              className="flex items-center gap-1 py-6 text-sm font-medium text-ink/80 transition group-hover:text-ink"
            >
              Destinations
              <ChevronDown
                size={14}
                className="transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
              />
            </a>

            <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[30rem] -translate-x-1/2 translate-y-2 pt-1 opacity-0 transition duration-200 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/5">
                <div className="grid grid-cols-2 gap-1">
                  {destinations.map((d) => (
                    <a
                      key={d.name}
                      href="#trips"
                      onClick={(e) => goTo(e, '#trips')}
                      className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-mist"
                    >
                      <img
                        src={d.image}
                        alt={d.name}
                        className="h-12 w-12 shrink-0 rounded-xl object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-ink">{d.name}</p>
                        <p className="text-xs text-ink/60">{d.location}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <a
                  href="#trips"
                  onClick={(e) => goTo(e, '#trips')}
                  className="mt-2 flex items-center justify-between rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-ocean transition hover:bg-aqua/50"
                >
                  View all destinations
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </li>

          {/* Link biasa */}
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className="text-sm font-medium text-ink/80 transition hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol desktop */}
        <a
          href="#trips"
          onClick={(e) => goTo(e, '#trips')}
          className="hidden items-center gap-3 rounded-full bg-ocean px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink md:flex"
        >
          Find your trip
          <ArrowRight size={14} />
        </a>

        {/* Tombol hamburger (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-gray-100 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 py-4">
            {/* Destinations (tap untuk buka/tutup di HP) */}
            <li>
              <button
                onClick={() => setDestOpen(!destOpen)}
                className="flex w-full items-center justify-between text-base font-medium text-ink"
              >
                Destinations
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    destOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {destOpen && (
                <ul className="mt-3 grid grid-cols-2 gap-3">
                  {destinations.map((d) => (
                    <li key={d.name}>
                      <a
                        href="#trips"
                        onClick={(e) => goTo(e, '#trips')}
                        className="flex items-center gap-2"
                      >
                        <img
                          src={d.image}
                          alt={d.name}
                          className="h-10 w-10 shrink-0 rounded-lg object-cover"
                        />
                        <span className="text-sm text-ink/80">{d.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => goTo(e, link.href)}
                  className="text-base font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#trips"
            onClick={(e) => goTo(e, '#trips')}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-ocean px-5 py-3 text-sm font-medium text-white"
          >
            Find your trip <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  )
}
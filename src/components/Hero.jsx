import { useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import pulauMerah from '../assets/trip-2.jpg'
import baluran from '../assets/trip-3.jpg'
import ijen from '../assets/ijen.jpg'
import plengkung from '../assets/trip-1.jpg'
import tabuhan from '../assets/tabuhan.jpg'
import telukHijau from '../assets/teluk-hijau.jpg'

const destinations = [
  {
    id: 'pulau-merah',
    name: 'Savana baluran',
    location: 'Southern coast',
    image: pulauMerah,
    desc: 'The most extensive natural grassland on the island of Java, dubbed "Africa van Java" or a miniature Africa.',
  },
  {
    id: 'baluran',
    name: 'Djawatan forest',
    location: 'Benculuk Village',
    image: baluran,
    desc: 'A popular nature tourism destination consisting of a protected forest area and forest-based recreation site, located in Benculuk Village.',
  },
  {
    id: 'ijen',
    name: 'Kawah Ijen',
    location: 'Ijen Plateau',
    image: ijen,
    desc: 'Hike before dawn to see the legendary blue fire, then watch the sunrise over a turquoise crater lake framed by volcanic walls.',
  },
  {
    id: 'plengkung',
    name: 'Baluran National Park',
    location: 'Baluran Regency',
    image: plengkung,
    desc: 'A nature conservation area located on the border of Situbondo and Banyuwangi Regencies, East Java, covering an area of ​​approximately 25,000 hectares.',
  },
  {
    id: 'tabuhan',
    name: 'Pulau Tabuhan',
    location: 'Northern coast',
    image: tabuhan,
    desc: 'A small coral island just off the northern coast, perfect for snorkeling in clear shallow water and relaxing on soft white sand.',
  },
  {
    id: 'teluk-hijau',
    name: 'Teluk Hijau',
    location: 'Meru Betiri',
    image: telukHijau,
    desc: 'A hidden emerald cove inside Meru Betiri National Park, reached by a short jungle trek, with calm turquoise water and a quiet beach.',
  },
]

const mod = (n, m) => ((n % m) + m) % m

/*
  Posisi horizontal tiap "slot" (diukur dari tepi kanan layar).
  -1 = tersembunyi di kiri | 0 = aktif (besar) | 1 = kecil
  2  = kecil, setengah terpotong di tepi kanan | 3, 4 = tersembunyi di kanan
*/
const SLOT_LEFT = {
  '-1': 'calc(100% - var(--s) / 2 - var(--g) * 3 - var(--s) * 2 - var(--a))',
  0: 'calc(100% - var(--s) / 2 - var(--g) * 2 - var(--s) - var(--a))',
  1: 'calc(100% - var(--s) / 2 - var(--g) - var(--s))',
  2: 'calc(100% - var(--s) / 2)',
  3: 'calc(100% - var(--s) / 2 + var(--g) + var(--s))',
  4: 'calc(100% - var(--s) / 2 + var(--g) * 2 + var(--s) * 2)',
}

export default function Hero() {
  const total = destinations.length

  const [step, setStep] = useState(0) // menggerakkan kartu (bisa terus bertambah)
  const [current, setCurrent] = useState(0) // destinasi yang tampil di background + teks
  const busy = useRef(false)

  const active = destinations[current]

  // Geser deretan kartu sebanyak `count` langkah (satu per satu supaya mulus)
  const slide = (dir, count = 1) => {
    if (busy.current) return
    busy.current = true
    setCurrent((c) => mod(c + dir * count, total))

    let done = 0
    const tick = () => {
      setStep((s) => s + dir)
      done += 1
      if (done < count) {
        setTimeout(tick, 350)
      } else {
        setTimeout(() => {
          busy.current = false
        }, 350)
      }
    }
    tick()
  }

  return (
    <section className="relative h-[calc(100svh-72px)] min-h-[720px] w-full overflow-hidden lg:min-h-[620px]">
      {/* Background: semua foto ditumpuk, yang aktif dibuat terlihat */}
      {destinations.map((d) => (
        <img
          key={d.id}
          src={d.image}
          alt={d.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            d.id === active.id ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay supaya teks terbaca */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Deretan kartu (posisi & ukuran dianimasikan, tidak dibuat ulang) */}
      <div className="hero-rail pointer-events-none absolute inset-0 z-10">
        {destinations.map((d, i) => {
          const r = mod(i - step + 1, total) - 1 // posisi relatif: -1 .. total-2
          const slot = Math.min(r, 4)
          const isActive = r === 0
          const visible = r >= 0 && r <= 2

          return (
            <button
              key={d.id}
              onClick={() => r > 0 && slide(1, r)}
              tabIndex={visible ? 0 : -1}
              aria-label={`Show ${d.name}`}
              className={`group absolute overflow-hidden rounded-3xl border-2 text-left shadow-2xl transition-[left,width,height,opacity] duration-700 ease-in-out ${
                visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
              } ${isActive ? 'border-aqua' : 'border-white/50'}`}
              style={{
                left: SLOT_LEFT[slot],
                top: 'var(--cy)',
                width: isActive ? 'var(--a)' : 'var(--s)',
                height: isActive ? 'var(--ah)' : 'var(--sh)',
                transform: 'translateY(-50%)',
              }}
            >
              <img
                src={d.image}
                alt={d.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 lg:p-4">
                <p
                  className={`font-bold text-white ${
                    isActive ? 'text-base lg:text-xl' : 'text-sm'
                  }`}
                >
                  {d.name}
                </p>
                <p className="text-[11px] text-white/75 lg:text-xs">{d.location}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Teks + kontrol */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-start lg:items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 lg:px-10 lg:pt-0">
          <div className="pointer-events-auto max-w-lg">
            {/* Tinggi area teks dikunci supaya tombol panah tidak pernah berpindah posisi */}
            <div className="sm:min-h-[360px] lg:min-h-[385px]">
              <div key={current} className="animate-fade-up">
                <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                  <MapPin size={14} />
                  {active.location}, Banyuwangi
                </p>

                <h1 className="text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {active.name}
                </h1>

                <p className="mt-5 line-clamp-3 max-w-md text-sm leading-relaxed text-white/85 sm:line-clamp-none sm:text-base">
                  {active.desc}
                </p>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-ocean transition hover:bg-white"
                >
                  Explore
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Kontrol panah + penghitung (posisinya selalu tetap) */}
            <div className="mt-10 hidden items-center gap-4 sm:flex">
              <button
                onClick={() => slide(-1)}
                aria-label="Previous destination"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white hover:text-ocean"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => slide(1)}
                aria-label="Next destination"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition hover:bg-white hover:text-ocean"
              >
                <ChevronRight size={18} />
              </button>
              <p className="text-sm font-medium tracking-widest text-white/70">
                <span className="text-white">
                  {String(current + 1).padStart(2, '0')}
                </span>{' '}
                / {String(total).padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lengkungan ombak di bawah */}
      <svg
        className="absolute -bottom-px left-0 z-30 h-16 w-full md:h-24"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,110 1440,40 L1440,121 L0,121 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  )
}
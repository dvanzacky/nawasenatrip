import { useState } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import trip1 from '../assets/trip-1.jpg'
import trip2 from '../assets/trip-2.jpg'
import trip3 from '../assets/trip-3.jpg'

const categories = ['All', 'Beach', 'Nature']

const trips = [
  {
    id: 1,
    image: trip1,
    location: 'Baluran National Park',
    title: 'The ultimate wave escape',
    desc: 'World-class waves, untouched jungle, true island life.',
    category: 'Beach',
  },
  {
    id: 2,
    image: trip2,
    location: 'Pulau Merah',
    title: 'Red sand sunsets',
    desc: 'Golden hours, calm waves, and local seafood.',
    category: 'Beach',
  },
  {
    id: 3,
    image: trip3,
    location: 'Djawatan Forest',
    title: 'Africa van Java',
    desc: 'Wild savanna, wandering deer, and open skies.',
    category: 'Nature',
  },
]

function TripCard({ trip, featured }) {
  return (
    <a
      href="#"
      className={`group relative block overflow-hidden rounded-3xl shadow-lg ${
        featured ? 'min-h-[320px] md:col-span-2 md:row-span-2' : 'min-h-[200px]'
      }`}
    >
      <img
        src={trip.image}
        alt={trip.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <p className="mb-1 flex items-center gap-1 text-xs text-white/90">
            <MapPin size={12} />
            {trip.location}
          </p>
          <h3
            className={`font-bold text-white ${
              featured ? 'text-xl sm:text-2xl' : 'text-base'
            }`}
          >
            {trip.title}
          </h3>
          <p className="mt-1 text-xs text-white/80">{trip.desc}</p>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink transition group-hover:bg-aqua">
          <ArrowRight size={16} />
        </span>
      </div>
    </a>
  )
}

export default function Trips() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? trips : trips.filter((t) => t.category === active)

  return (
    <section className="bg-gradient-to-b from-white to-mist/60 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:px-10">
        {/* Kiri: teks + filter */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean/60">
            Featured Trips
          </p>

          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            12 epic routes
            <br />
            across Banyuwangi
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
            From volcano craters to hidden beaches, these handpicked trips will
            take you to the best spots in the easternmost tip of Java.
          </p>

          {/* Filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                  active === cat
                    ? 'border-ocean bg-ocean text-white'
                    : 'border-ink/15 bg-white text-ink/70 hover:border-ocean'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-ink"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean text-white">
              <ArrowRight size={16} />
            </span>
            View all trips
          </a>
        </div>

        {/* Kanan: kartu */}
        <div className="grid gap-4 md:h-[480px] md:grid-cols-3 md:grid-rows-2">
          {filtered.map((trip, index) => (
            <TripCard key={trip.id} trip={trip} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
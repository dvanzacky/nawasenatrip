import { Waves, Drama, Mountain, Car, ArrowRight } from 'lucide-react'
import exp1 from '../assets/exp-1.jpg'
import exp2 from '../assets/exp-2.jpg'
import exp3 from '../assets/exp-3.jpg'
import exp4 from '../assets/exp-4.jpg'

const experiences = [
  {
    id: 1,
    icon: Waves,
    image: exp1,
    title: 'Snorkeling & Diving',
    desc: 'Explore colorful reefs, marine life and hidden underwater worlds.',
  },
  {
    id: 2,
    icon: Drama,
    image: exp2,
    title: 'Local Culture',
    desc: 'Meet the Osing people, watch Gandrung dance and taste local food.',
  },
  {
    id: 3,
    icon: Mountain,
    image: exp3,
    title: 'Sunrise Hiking',
    desc: 'Climb before dawn and watch the sun rise above the volcanoes.',
  },
  {
    id: 4,
    icon: Car,
    image: exp4,
    title: 'Road Trips',
    desc: 'See more, explore further. Create your own story on the road.',
  },
]

export default function Experiences() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      {/* Header */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean/60">
            More than just sightseeing
          </p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Experiences
            <br />
            beyond the destination
          </h2>
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-sm font-medium text-ink/70 transition hover:text-ink"
        >
          See all experiences
          <ArrowRight size={14} />
        </a>
      </div>

      {/* Kartu */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map(({ id, icon: Icon, image, title, desc }) => (
          <a
            key={id}
            href="#"
            className="group relative block h-80 overflow-hidden rounded-3xl shadow-lg"
          >
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Ikon di kiri atas */}
            <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-ocean shadow">
              <Icon size={20} />
            </span>

            {/* Teks di bawah */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <div>
                <h3 className="text-base font-bold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/80">
                  {desc}
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition group-hover:bg-aqua">
                <ArrowRight size={14} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
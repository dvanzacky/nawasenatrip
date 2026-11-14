import { Leaf, Users, Heart, ShieldCheck } from 'lucide-react'
import mission1 from '../assets/mission-1.jpg'
import mission2 from '../assets/mission-2.jpg'
import mission3 from '../assets/mission-3.jpg'

const values = [
  { icon: Leaf, label: 'Sustainable Travel' },
  { icon: Users, label: 'Local Communities' },
  { icon: Heart, label: 'Small Groups' },
  { icon: ShieldCheck, label: 'Safe & Trusted' },
]

export default function Mission() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Kolase foto */}
        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[480px]">
          {/* Blob dekoratif */}
          <div className="absolute -bottom-4 -left-4 h-44 w-52 rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-aqua/40" />

          {/* Foto 1 */}
          <img
            src={mission1}
            alt="Snorkeling in Banyuwangi"
            className="absolute left-0 top-0 h-[55%] w-[56%] rounded-[2rem_2.5rem_2rem_3rem] object-cover shadow-lg"
          />

          {/* Foto 2 */}
          <img
            src={mission2}
            alt="Sunset at the beach"
            className="absolute right-0 top-8 h-[40%] w-[38%] rounded-[2.5rem_2rem_2.5rem_2rem] object-cover shadow-lg"
          />

          {/* Foto 3 */}
          <img
            src={mission3}
            alt="Friends traveling together"
            className="absolute bottom-0 right-0 h-[42%] w-[86%] rounded-[3rem_2rem_3rem_2.5rem] object-cover shadow-lg"
          />
        </div>

        {/* Teks */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean/60">
            Our Mission
          </p>

          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Meaningful trips for people who care about{' '}
            <span className="font-serif font-normal italic text-ocean">
              the land.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base">
            We&rsquo;re a travel company with a purpose &mdash; connecting
            curious travelers with local communities, breathtaking nature, and
            authentic Banyuwangi experiences. Because great journeys do more
            than fill your camera roll &mdash; they make a positive impact.
          </p>

          {/* 4 ikon nilai */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-ocean ring-1 ring-ocean/10">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-medium text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
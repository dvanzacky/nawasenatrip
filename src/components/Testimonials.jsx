import { useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Alya Rahma',
    initials: 'AR',
    trip: 'Kawah Ijen Sunrise Trek',
    rating: 5,
    text: 'Seeing the blue fire at 3 AM was unreal. Our guide knew every trail and kept the whole group safe and laughing. Easily the best trip I have taken this year.',
  },
  {
    id: 2,
    name: 'Daniel Foster',
    initials: 'DF',
    trip: 'Baluran & Pulau Merah',
    rating: 5,
    text: 'Small group, no rush, and real local stories at every stop. We went from savanna to red-sand beach in one day and it never felt crowded.',
  },
  {
    id: 3,
    name: 'Putri Maharani',
    initials: 'PM',
    trip: 'Pulau Tabuhan Snorkeling',
    rating: 5,
    text: 'The water was crystal clear and the team really cares about the reef. I came for the snorkeling and left with new friends.',
  },
  {
    id: 4,
    name: 'Rizky Pratama',
    initials: 'RP',
    trip: 'Plengkung Surf Escape',
    rating: 5,
    text: 'Wild jungle, long clean waves, and a crew that made a first-timer feel confident. I am already planning my next visit.',
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    initials: 'SL',
    trip: 'Teluk Hijau Hidden Cove',
    rating: 5,
    text: 'The short jungle trek was totally worth it. We had the emerald cove almost to ourselves, and lunch on the beach was perfect.',
  },
  {
    id: 6,
    name: 'Bima Santoso',
    initials: 'BS',
    trip: 'Osing Village Culture Day',
    rating: 5,
    text: 'We cooked with a local family and watched Gandrung dance up close. It felt like visiting friends, not a tour.',
  },
]

const mod = (n, m) => ((n % m) + m) % m

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const total = testimonials.length

  const [step, setStep] = useState(0) // terus bertambah/berkurang = looping tanpa batas
  const busy = useRef(false)

  // Testimoni yang sedang berada di tengah
  const center = mod(step + 1, total)

  // Geser carousel `count` langkah, satu per satu supaya mulus
  const slide = (dir, count = 1) => {
    if (busy.current) return
    busy.current = true

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

  // Loncat ke testimoni tertentu lewat titik indikator (ambil arah terdekat)
  const goTo = (index) => {
    const diff = mod(index - center, total)
    if (diff === 0) return
    if (diff <= total / 2) slide(1, diff)
    else slide(-1, total - diff)
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      {/* Header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean/60">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Loved by travelers who
            <br />
            found a{' '}
            <span className="font-serif font-normal italic text-ocean">
              new perspective.
            </span>
          </h2>
        </div>

        {/* Ringkasan rating */}
        <div className="flex items-center gap-4 rounded-2xl bg-mist px-6 py-4">
          <p className="text-4xl font-bold text-ink">4.9</p>
          <div>
            <Stars count={5} />
            <p className="mt-1 text-xs text-ink/60">from 2,000+ happy travelers</p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div className="testi-rail relative h-[27rem]">
          {testimonials.map((t, i) => {
            const r = mod(i - step + 1, total) - 1 // posisi relatif: -1 .. total-2
            const slot = Math.min(r, 3)
            const isCenter = r === 1
            const visible = r >= 0 && r <= 2

            return (
              <figure
                key={t.id}
                onClick={() => {
                  if (r === 2) slide(1)
                  if (r === 0) slide(-1)
                }}
                className={`absolute flex h-[24rem] flex-col justify-between rounded-3xl p-8 transition-[left,opacity,background-color,box-shadow,transform] duration-700 ease-in-out ${
                  visible ? 'opacity-100' : 'pointer-events-none opacity-0'
                } ${
                  isCenter
                    ? 'bg-ocean text-white shadow-xl'
                    : 'cursor-pointer bg-mist text-ink'
                }`}
                style={{
                  left: `calc((var(--w) + var(--g)) * (${slot} - var(--o)))`,
                  top: '1.5rem',
                  width: 'var(--w)',
                  transform: isCenter ? 'translateY(-1rem)' : 'translateY(0)',
                }}
              >
                <div>
                  <Quote
                    size={36}
                    className={`transition-colors duration-700 ${
                      isCenter ? 'text-aqua' : 'text-ocean/30'
                    }`}
                  />

                  <blockquote
                    className={`mt-5 text-sm leading-relaxed transition-colors duration-700 sm:text-base ${
                      isCenter ? 'text-white/90' : 'text-ink/75'
                    }`}
                  >
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                </div>

                <figcaption>
                  <Stars count={t.rating} />

                  <div className="mt-4 flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-700 ${
                        isCenter ? 'bg-aqua text-ocean' : 'bg-ocean text-white'
                      }`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p
                        className={`text-xs transition-colors duration-700 ${
                          isCenter ? 'text-white/70' : 'text-ink/60'
                        }`}
                      >
                        {t.trip}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>

      {/* Kontrol: panah + titik indikator */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={() => slide(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ocean/30 text-ocean transition hover:bg-ocean hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === center ? 'w-6 bg-ocean' : 'w-2 bg-ocean/25 hover:bg-ocean/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => slide(1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ocean/30 text-ocean transition hover:bg-ocean hover:text-white"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
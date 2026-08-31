import { Star } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    name: "Dita Ramadhani",
    role: "Pelanggan tetap sejak 2019",
    quote:
      "Tempat favorit untuk kerja pagi hari. Kopinya konsisten enak dan staf selalu ingat pesanan saya.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Arya Wicaksana",
    role: "Pecinta specialty coffee",
    quote:
      "Pour over Ethiopia-nya salah satu yang terbaik di kota ini. Rasanya bersih dan aromanya panjang.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sinta Ayu Lestari",
    role: "Sering datang bersama komunitas",
    quote:
      "Suasananya hangat, cocok untuk ngobrol lama. Croissant-nya juga selalu fresh setiap pagi.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-soft py-24 sm:py-32">
      <div className="container-page">
        <div className="text-center max-w-xl mx-auto mb-16">
          <Reveal>
            <p className="text-copper text-sm mb-4">Ulasan Pelanggan</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] text-ink">
              Cerita dari mereka yang datang kembali.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-7">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1} y={22}>
              <figure className="h-full bg-cream rounded-2xl p-7 sm:p-8 flex flex-col">
                <div className="flex gap-1 text-copper mb-5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-ink/75 text-sm sm:text-base leading-relaxed flex-1">
                  "{review.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-medium text-ink">{review.name}</p>
                    <p className="text-xs text-ink/50">{review.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

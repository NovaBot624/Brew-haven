import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ITEMS = [
  {
    name: "Signature Latte",
    desc: "Espresso ganda, susu tim beruap, sentuhan gula aren.",
    price: "32K",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pour Over Ethiopia",
    desc: "Notes bunga jeruk dan beri, diseduh V60 satu per satu.",
    price: "38K",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cold Brew Original",
    desc: "Diseduh dingin 18 jam, halus tanpa rasa asam berlebih.",
    price: "30K",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Butter Croissant",
    desc: "Dipanggang tiap pagi, renyah di luar, lembut di dalam.",
    price: "24K",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Spanish Latte",
    desc: "Espresso dengan susu kental manis, dingin menyegarkan.",
    price: "34K",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Banana Bread",
    desc: "Pisang matang, kenari panggang, sedikit kayu manis.",
    price: "26K",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-cream py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <Reveal>
              <p className="text-copper text-sm mb-4">Menu Andalan</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] text-ink max-w-lg">
                Pilihan yang paling sering dipesan kembali.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-ink/60 max-w-xs text-sm sm:text-base">
              Semua minuman bisa disesuaikan tingkat manis dan jenis susunya.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.08} y={20}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group bg-cream-soft rounded-2xl overflow-hidden shadow-[0_1px_0_0_rgba(23,16,13,0.06)] hover:shadow-soft transition-shadow duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg sm:text-xl text-ink">
                      {item.name}
                    </h3>
                    <span className="text-copper text-sm sm:text-base whitespace-nowrap">
                      Rp {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

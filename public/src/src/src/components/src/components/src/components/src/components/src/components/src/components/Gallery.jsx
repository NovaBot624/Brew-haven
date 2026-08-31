import { motion } from "framer-motion";
import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    alt: "Interior kedai kopi dengan meja kayu dan cahaya alami",
    span: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    alt: "Latte art berbentuk daun di atas cangkir putih",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    alt: "Proses pour over kopi manual",
  },
  {
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=800&q=80",
    alt: "Suasana pelanggan mengobrol santai di kedai",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80",
    alt: "Biji kopi hasil roasting close up",
    span: "sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    alt: "Barista meracik espresso di mesin",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-espresso py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="text-copper text-sm mb-4">Galeri</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] text-cream-soft max-w-lg mb-14">
            Sepenggal suasana di dalam Brew Haven.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 gap-4 sm:gap-5 auto-rows-[160px] sm:auto-rows-[180px]">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 0.07}
              y={16}
              className={`${photo.span ?? ""} ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-full w-full overflow-hidden rounded-xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden bg-espresso"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=80"
          alt="Barista menuang latte art di atas kopi hangat"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-transparent" />
      </motion.div>

      <div className="relative container-page pb-16 pt-32 sm:pb-28 sm:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-copper text-sm sm:text-base mb-5 max-w-md"
        >
          Roastery &amp; ruang duduk di jantung kota
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-cream-soft text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl max-w-3xl"
        >
          Kopi yang diseduh untuk ditemani, bukan diburu.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{ opacity }}
          className="mt-6 text-cream/80 text-base sm:text-lg max-w-md"
        >
          Biji pilihan dari petani lokal, dipanggang kecil-kecil setiap
          minggu, dan diracik satu per satu di depan Anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-cream-soft text-espresso px-6 py-3.5 text-sm sm:text-base font-medium hover:bg-cream transition-colors duration-300"
          >
            Lihat Menu
            <ArrowDownRight size={18} />
          </a>
          <a
            href="#location"
            className="inline-flex items-center gap-2 rounded-full border border-cream-soft/30 text-cream-soft px-6 py-3.5 text-sm sm:text-base hover:bg-cream-soft/10 transition-colors duration-300"
          >
            Kunjungi Kedai
          </a>
        </motion.div>
      </div>
    </section>
  );
}

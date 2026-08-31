import Reveal from "./Reveal";

const STATS = [
  { value: "2015", label: "Dibuka pertama kali" },
  { value: "12", label: "Petani mitra langsung" },
  { value: "6", label: "Metode seduh tersedia" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-soft py-24 sm:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <Reveal className="lg:col-span-5 order-2 lg:order-1" y={30}>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Biji kopi hijau dan hasil roasting di meja kayu"
              className="rounded-2xl w-full h-[420px] sm:h-[500px] object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-espresso text-cream-soft rounded-2xl px-6 py-5 max-w-[220px] shadow-soft">
              <p className="font-display text-2xl">100%</p>
              <p className="text-xs text-cream/70 mt-1 leading-relaxed">
                Biji arabika lokal, disangrai setiap minggu
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-6">
          <Reveal>
            <p className="text-copper text-sm mb-4">Cerita Kami</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-tight text-ink max-w-xl">
              Dari kebun di dataran tinggi, sampai cangkir di tangan Anda.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink/70 text-base sm:text-lg leading-relaxed max-w-xl">
              Brew Haven lahir dari satu keinginan sederhana: menyajikan kopi
              dengan cerita yang jujur. Kami bekerja langsung dengan petani di
              dataran tinggi, menyangrai dalam jumlah kecil agar rasa tetap
              segar, dan menyeduh setiap cangkir dengan perhatian penuh —
              bukan terburu-buru.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-ink/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl text-espresso">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-ink/60 mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

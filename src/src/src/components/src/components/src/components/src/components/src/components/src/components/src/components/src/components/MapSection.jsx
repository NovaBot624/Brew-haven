import { Clock, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function MapSection() {
  return (
    <section id="location" className="bg-cream py-24 sm:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        <Reveal>
          <div className="h-full flex flex-col">
            <p className="text-copper text-sm mb-4">Lokasi</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] text-ink mb-6 max-w-md">
              Singgah di kedai kami, atau hubungi lebih dulu.
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-md mb-8">
              Berada di jalan utama dengan area parkir yang cukup luas dan
              akses mudah dari halte transportasi umum.
            </p>

            <div className="space-y-5 mt-auto">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 w-10 h-10 rounded-full bg-espresso/5 flex items-center justify-center text-espresso">
                  <MapPin size={18} />
                </span>
                <p className="text-sm sm:text-base text-ink/80">
                  Jl. Kenanga Raya No. 24, Bandung, Jawa Barat
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 w-10 h-10 rounded-full bg-espresso/5 flex items-center justify-center text-espresso">
                  <Clock size={18} />
                </span>
                <p className="text-sm sm:text-base text-ink/80">
                  Setiap hari, 07.00 – 22.00 WIB
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 w-10 h-10 rounded-full bg-espresso/5 flex items-center justify-center text-espresso">
                  <Phone size={18} />
                </span>
                <p className="text-sm sm:text-base text-ink/80">
                  +62 812-3456-7890
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={20}>
          <div className="h-[360px] sm:h-[440px] lg:h-full rounded-2xl overflow-hidden shadow-soft">
            <iframe
              title="Lokasi Brew Haven di Google Maps"
              src="https://www.google.com/maps?q=Bandung,Jawa%20Barat&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

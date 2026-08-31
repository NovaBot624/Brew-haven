import { Instagram, Facebook, MessageCircle } from "lucide-react";

const LINK_GROUPS = [
  {
    title: "Jelajah",
    links: [
      { label: "Cerita Kami", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Galeri", href: "#gallery" },
      { label: "Lokasi", href: "#location" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Jam Operasional", href: "#location" },
      { label: "Ulasan Pelanggan", href: "#testimonials" },
      { label: "Hubungi Kami", href: "#location" },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-cream-soft/80">
      <div className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl text-cream-soft mb-4">
            Brew Haven
          </p>
          <p className="text-sm leading-relaxed max-w-xs">
            Kopi yang diseduh dengan cermat, disajikan dalam ruang yang
            hangat — untuk ditemani, bukan diburu.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Brew Haven"
              className="w-10 h-10 rounded-full border border-cream-soft/15 flex items-center justify-center hover:bg-cream-soft/10 transition-colors duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Brew Haven"
              className="w-10 h-10 rounded-full border border-cream-soft/15 flex items-center justify-center hover:bg-cream-soft/10 transition-colors duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Brew Haven"
              className="w-10 h-10 rounded-full border border-cream-soft/15 flex items-center justify-center hover:bg-cream-soft/10 transition-colors duration-300"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="text-sm text-cream-soft mb-4">{group.title}</p>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm hover:text-cream-soft transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-cream-soft/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-soft/50">
          <p>© {new Date().getFullYear()} Brew Haven. Semua hak dilindungi.</p>
          <p>Dibuat dengan React, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

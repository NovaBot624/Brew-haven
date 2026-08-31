import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "Cerita Kami" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Galeri" },
  { href: "#testimonials", label: "Ulasan" },
  { href: "#location", label: "Lokasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-soft/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(23,16,13,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 sm:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#top");
          }}
          className="font-display text-lg sm:text-xl tracking-tight text-ink"
        >
          Brew Haven
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-ink/70 hover:text-ink transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("#location")}
          className="hidden md:inline-flex items-center rounded-full bg-espresso text-cream-soft text-sm px-5 py-2.5 hover:bg-coffee-dark transition-colors duration-300"
        >
          Kunjungi Kami
        </button>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu navigasi"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-cream-soft border-t border-ink/10"
          >
            <ul className="container-page flex flex-col py-4 gap-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 text-ink/80 text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

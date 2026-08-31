import { motion } from "framer-motion";

/**
 * Reveal
 * Reusable scroll-triggered fade/slide wrapper.
 * Keeps motion consistent and subtle across the whole site.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}) {
  const Comp = motion[as] ?? motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

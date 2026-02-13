import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Our Hotels", href: "#hotels" },
  { label: "Procedures", href: "#procedures" },
  { label: "CSR", href: "#csr" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-[0_4px_30px_hsl(220_65%_8%/0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <a href="#" className="flex items-center gap-3 group">
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-display font-bold tracking-[0.15em] text-primary-foreground"
          >
            ITC{" "}
            <span className="text-gradient-gold">Hotels</span>
          </motion.span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <a
                href={link.href}
                className="nav-link-underline text-[11px] font-light tracking-[0.25em] uppercase text-primary-foreground/70 hover:text-gold transition-colors duration-500 pb-1"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          className="md:hidden text-primary-foreground/80 hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-gradient-navy"
          >
            <div className="gold-divider-wide my-0" />
            <ul className="flex flex-col gap-1 px-8 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[11px] tracking-[0.25em] uppercase text-primary-foreground/60 hover:text-gold hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-hotel.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroImg}
        alt="ITC Hotels luxury lobby"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: imgY }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l border-t border-gold/20 hidden md:block" />
      <div className="absolute top-20 right-8 w-20 h-20 border-r border-t border-gold/20 hidden md:block" />
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l border-b border-gold/20 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r border-b border-gold/20 hidden md:block" />

      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="gold-divider-wide mb-8"
        />
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-gold text-[11px] uppercase mb-6 font-light"
        >
          Experience Luxury Redefined
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-primary-foreground leading-[1.1] mb-8"
        >
          Where Timeless
          <br />
          Elegance Meets
          <br />
          <span className="text-gradient-gold italic">Indian Hospitality</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-primary-foreground/50 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto text-elegant leading-relaxed"
        >
          A legacy of over five decades, crafting extraordinary experiences across India's finest destinations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-3 border border-gold/60 text-gold px-10 py-4 text-[11px] tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:border-gold"
          >
            <span className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Discover More</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="gold-divider-wide mt-8"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gold/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

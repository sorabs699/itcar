import { motion } from "framer-motion";
import heroImg from "@/assets/hero-hotel.jpg";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="ITC Hotels luxury lobby"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-hero" />

    <div className="relative z-10 text-center max-w-3xl px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gold text-sm tracking-[0.3em] uppercase mb-4"
      >
        Experience Luxury Redefined
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
      >
        Where Timeless Elegance Meets{" "}
        <span className="text-gradient-gold">Indian Hospitality</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-primary-foreground/70 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto"
      >
        A legacy of over five decades, crafting extraordinary experiences across India's finest destinations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="#about"
          className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-primary transition-all duration-300"
        >
          Discover More
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import hotelResort from "@/assets/hotel-resort.jpg";
import { MapPin, Star } from "lucide-react";

const hotels = [
  { name: "ITC Maurya", location: "New Delhi", rooms: 440, stars: 5 },
  { name: "ITC Grand Chola", location: "Chennai", rooms: 600, stars: 5 },
  { name: "ITC Maratha", location: "Mumbai", rooms: 385, stars: 5 },
  { name: "ITC Royal Bengal", location: "Kolkata", rooms: 456, stars: 5 },
  { name: "ITC Rajputana", location: "Jaipur", rooms: 218, stars: 5 },
  { name: "ITC Windsor", location: "Bengaluru", rooms: 240, stars: 5 },
];

const stats = [
  { value: "100+", label: "Hotels & Resorts" },
  { value: "11,000+", label: "Rooms" },
  { value: "70+", label: "Destinations" },
  { value: "50+", label: "Years of Legacy" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 } as const,
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const HotelsSection = () => (
  <section id="hotels" className="section-padding bg-gradient-section relative overflow-hidden">
    {/* Decorative radial glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(42 70% 55%), transparent 70%)" }} />

    <div className="max-w-6xl mx-auto relative">
      <SectionHeading
        subtitle="Our Portfolio"
        title="Iconic Hotels Across India"
        description="From the majestic palaces of Rajasthan to the coastal retreats of Goa, ITC Hotels offers unparalleled luxury at over 100 destinations."
        light
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={itemVariants}
            className="text-center py-8 premium-card-dark luxury-border"
          >
            <p className="text-3xl md:text-5xl font-display font-bold text-gradient-gold mb-2">{s.value}</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 font-light">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {hotels.map((h) => (
          <motion.div
            key={h.name}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={hotelResort}
                alt={h.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Gold line accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:via-gold transition-all duration-500" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: h.stars }).map((_, si) => (
                  <Star key={si} size={10} className="text-gold fill-gold" />
                ))}
              </div>
              <h3 className="font-display font-semibold text-xl text-primary-foreground mb-1 group-hover:text-gold transition-colors duration-500">
                {h.name}
              </h3>
              <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
                <MapPin size={12} className="text-gold/60" />
                <span className="font-light">{h.location}</span>
                <span className="text-gold/30">·</span>
                <span className="font-light">{h.rooms} Rooms</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HotelsSection;

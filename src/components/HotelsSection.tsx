import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import hotelResort from "@/assets/hotel-resort.jpg";
import { MapPin } from "lucide-react";

const hotels = [
  { name: "ITC Maurya", location: "New Delhi", rooms: 440 },
  { name: "ITC Grand Chola", location: "Chennai", rooms: 600 },
  { name: "ITC Maratha", location: "Mumbai", rooms: 385 },
  { name: "ITC Royal Bengal", location: "Kolkata", rooms: 456 },
  { name: "ITC Rajputana", location: "Jaipur", rooms: 218 },
  { name: "ITC Windsor", location: "Bengaluru", rooms: 240 },
];

const stats = [
  { value: "100+", label: "Hotels & Resorts" },
  { value: "11,000+", label: "Rooms" },
  { value: "70+", label: "Destinations" },
  { value: "50+", label: "Years of Legacy" },
];

const HotelsSection = () => (
  <section id="hotels" className="section-padding bg-primary">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        subtitle="Our Portfolio"
        title="Iconic Hotels Across India"
        description="From the majestic palaces of Rajasthan to the coastal retreats of Goa, ITC Hotels offers unparalleled luxury at over 100 destinations."
        light
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center py-6 border border-gold/20"
          >
            <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-1">{s.value}</p>
            <p className="text-xs tracking-widest uppercase text-primary-foreground/60">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Hotel cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden"
          >
            <img
              src={hotelResort}
              alt={h.name}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-display font-semibold text-lg text-primary-foreground">{h.name}</h3>
              <div className="flex items-center gap-1.5 text-gold text-sm mt-1">
                <MapPin size={14} />
                <span>{h.location}</span>
                <span className="text-primary-foreground/50 ml-2">• {h.rooms} Rooms</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HotelsSection;

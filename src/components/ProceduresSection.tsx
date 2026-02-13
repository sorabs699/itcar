import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ClipboardCheck, ShieldCheck, Award, Utensils, BedDouble, Sparkles } from "lucide-react";

const procedures = [
  { icon: ClipboardCheck, title: "Reservation & Booking", desc: "Seamless digital and concierge-assisted reservation systems across all channels." },
  { icon: ShieldCheck, title: "Safety & Hygiene", desc: "WeAssure programme with rigorous sanitisation protocols exceeding global standards." },
  { icon: Utensils, title: "Culinary Excellence", desc: "Farm-to-fork dining with award-winning master chefs curating authentic Indian and global cuisines." },
  { icon: BedDouble, title: "Guest Experience", desc: "Personalised welcome, 24/7 butler service, and bespoke stay customisation." },
  { icon: Award, title: "Quality Assurance", desc: "ISO-certified processes with continuous training and guest feedback integration." },
  { icon: Sparkles, title: "Sustainable Operations", desc: "LEED Platinum practices in energy, water management and waste reduction across properties." },
];

const ProceduresSection = () => (
  <section id="procedures" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        subtitle="How We Operate"
        title="Our Procedures"
        description="Every aspect of ITC Hotels operations is designed for excellence, sustainability, and an unmatched guest experience."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {procedures.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-4 p-6 bg-card border border-border hover:border-gold/40 transition-colors duration-300"
          >
            <p.icon className="text-gold shrink-0 mt-1" size={24} strokeWidth={1.5} />
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProceduresSection;

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ClipboardCheck, ShieldCheck, Award, Utensils, BedDouble, Sparkles } from "lucide-react";

const procedures = [
  { icon: ClipboardCheck, title: "Reservation & Booking", desc: "Seamless digital and concierge-assisted reservation systems across all channels.", num: "01" },
  { icon: ShieldCheck, title: "Safety & Hygiene", desc: "WeAssure programme with rigorous sanitisation protocols exceeding global standards.", num: "02" },
  { icon: Utensils, title: "Culinary Excellence", desc: "Farm-to-fork dining with award-winning master chefs curating authentic Indian and global cuisines.", num: "03" },
  { icon: BedDouble, title: "Guest Experience", desc: "Personalised welcome, 24/7 butler service, and bespoke stay customisation.", num: "04" },
  { icon: Award, title: "Quality Assurance", desc: "ISO-certified processes with continuous training and guest feedback integration.", num: "05" },
  { icon: Sparkles, title: "Sustainable Operations", desc: "LEED Platinum practices in energy, water management and waste reduction across properties.", num: "06" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 } as const,
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const ProceduresSection = () => (
  <section id="procedures" className="section-padding bg-background relative">
    <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(42 70% 55%) 0.5px, transparent 0)", backgroundSize: "48px 48px" }} />

    <div className="max-w-6xl mx-auto relative">
      <SectionHeading
        subtitle="How We Operate"
        title="Our Procedures"
        description="Every aspect of ITC Hotels operations is designed for excellence, sustainability, and an unmatched guest experience."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {procedures.map((p) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group premium-card luxury-border-hover p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                <p.icon className="text-gold group-hover:scale-110 transition-transform duration-500" size={20} strokeWidth={1.5} />
              </div>
              <span className="text-gold/20 font-display text-2xl font-bold group-hover:text-gold/40 transition-colors duration-500">
                {p.num}
              </span>
            </div>
            <h4 className="font-display font-semibold text-foreground mb-3 tracking-wide">{p.title}</h4>
            <p className="text-sm text-muted-foreground font-light leading-[1.8]">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProceduresSection;

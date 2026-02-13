import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Target, Heart, Shield, Leaf, Users } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Excellence", desc: "Uncompromising standards in every detail of the guest experience." },
  { icon: Shield, title: "Integrity", desc: "Transparent and ethical practices across all operations." },
  { icon: Users, title: "Respect", desc: "Honouring every individual — guests, employees and communities." },
  { icon: Leaf, title: "Sustainability", desc: "Pioneering responsible luxury with LEED Platinum certified hotels." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 } as const,
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const VisionMissionValues = () => (
  <section id="about" className="section-padding bg-background relative">
    {/* Decorative background pattern */}
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(215 60% 18%) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

    <div className="max-w-6xl mx-auto relative">
      <SectionHeading
        subtitle="Who We Are"
        title="Vision, Mission & Core Values"
        description="ITC Hotels is committed to creating enduring value for all stakeholders through responsible luxury."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        {[
          {
            icon: Eye,
            label: "Our Vision",
            text: "To be the leading chain of luxury hotels in India that creates a unique experience rooted in Indian culture and heritage, setting benchmarks in responsible luxury.",
          },
          {
            icon: Target,
            label: "Our Mission",
            text: "To delight guests with world-class hospitality, create lasting value for all stakeholders, and champion environmental stewardship through innovation and sustainable practices.",
          },
        ].map((item) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="premium-card luxury-border-hover p-10 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 bg-gold/5">
                <item.icon className="text-gold" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground tracking-wide">{item.label}</h3>
            </div>
            <p className="text-muted-foreground font-light leading-[1.9] text-elegant text-[15px]">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {coreValues.map((v) => (
          <motion.div
            key={v.title}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group text-center p-8 premium-card luxury-border-hover"
          >
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
              <v.icon className="text-gold group-hover:scale-110 transition-transform duration-500" size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-3 tracking-wide">{v.title}</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default VisionMissionValues;

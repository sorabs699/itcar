import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Eye, Target, Heart, Shield, Leaf, Users } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Excellence", desc: "Uncompromising standards in every detail of the guest experience." },
  { icon: Shield, title: "Integrity", desc: "Transparent and ethical practices across all operations." },
  { icon: Users, title: "Respect", desc: "Honouring every individual — guests, employees and communities." },
  { icon: Leaf, title: "Sustainability", desc: "Pioneering responsible luxury with LEED Platinum certified hotels." },
];

const VisionMissionValues = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        subtitle="Who We Are"
        title="Vision, Mission & Core Values"
        description="ITC Hotels is committed to creating enduring value for all stakeholders through responsible luxury."
      />

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
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
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card border border-border p-8 md:p-10"
          >
            <item.icon className="text-gold mb-4" size={32} strokeWidth={1.5} />
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.label}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-6 bg-muted/50 border border-border hover:border-gold/40 transition-colors duration-300"
          >
            <v.icon className="text-gold mx-auto mb-4" size={28} strokeWidth={1.5} />
            <h4 className="font-display font-semibold text-foreground mb-2">{v.title}</h4>
            <p className="text-sm text-muted-foreground font-light">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionValues;

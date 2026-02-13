import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import csrImg from "@/assets/csr-activity.jpg";
import { TreePine, Droplets, GraduationCap, Heart } from "lucide-react";

const initiatives = [
  { icon: TreePine, title: "Afforestation", desc: "Over 35 million saplings planted through social forestry initiatives across India.", stat: "35M+" },
  { icon: Droplets, title: "Water Stewardship", desc: "Watershed development and rainwater harvesting benefitting communities around hotel properties.", stat: "200+" },
  { icon: GraduationCap, title: "Skill Development", desc: "ITC Hotels' vocational training programmes empowering youth in hospitality and allied trades.", stat: "10K+" },
  { icon: Heart, title: "Community Welfare", desc: "Healthcare, women empowerment, and rural development programmes impacting millions of lives.", stat: "5M+" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 } as const,
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const CSRSection = () => (
  <section id="csr" className="section-padding bg-cream-dark relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, hsl(42 70% 55%), transparent 70%)" }} />

    <div className="max-w-6xl mx-auto relative">
      <SectionHeading
        subtitle="Giving Back"
        title="CSR Activities"
        description="ITC Hotels' commitment to nation-building goes beyond hospitality — creating sustainable livelihoods and environmental value."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/15" />
          <img
            src={csrImg}
            alt="ITC CSR Activities"
            className="relative w-full h-96 object-cover"
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/10 -z-10" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {initiatives.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group flex gap-5 p-5 luxury-border-hover rounded-sm hover:bg-card/50 transition-all duration-500"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 flex flex-col items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-all duration-500">
                  <item.icon className="text-gold mb-0.5" size={18} strokeWidth={1.5} />
                  <span className="text-[8px] tracking-wider text-gold/60 font-light">{item.stat}</span>
                </div>
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1.5 tracking-wide">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-[1.8]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default CSRSection;

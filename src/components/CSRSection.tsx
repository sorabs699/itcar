import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import csrImg from "@/assets/csr-activity.jpg";
import { TreePine, Droplets, GraduationCap, Heart } from "lucide-react";

const initiatives = [
  { icon: TreePine, title: "Afforestation", desc: "Over 35 million saplings planted through social forestry initiatives across India." },
  { icon: Droplets, title: "Water Stewardship", desc: "Watershed development and rainwater harvesting benefitting communities around hotel properties." },
  { icon: GraduationCap, title: "Skill Development", desc: "ITC Hotels' vocational training programmes empowering youth in hospitality and allied trades." },
  { icon: Heart, title: "Community Welfare", desc: "Healthcare, women empowerment, and rural development programmes impacting millions of lives." },
];

const CSRSection = () => (
  <section id="csr" className="section-padding bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        subtitle="Giving Back"
        title="CSR Activities"
        description="ITC Hotels' commitment to nation-building goes beyond hospitality — creating sustainable livelihoods and environmental value."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={csrImg}
            alt="ITC CSR Activities"
            className="w-full h-80 object-cover"
          />
        </motion.div>

        <div className="space-y-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <item.icon className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.5} />
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CSRSection;

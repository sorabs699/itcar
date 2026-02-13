import { motion } from "framer-motion";

interface Props {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7 }}
    className="text-center mb-16"
  >
    <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{subtitle}</p>
    <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="gold-divider mb-6" />
    {description && (
      <p className={`max-w-2xl mx-auto text-base font-light leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;

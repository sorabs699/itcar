import { motion } from "framer-motion";

interface Props {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className="text-center mb-20"
  >
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="gold-divider mb-6"
    />
    <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-4 font-light">{subtitle}</p>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="gold-divider mb-8"
    />
    {description && (
      <p className={`max-w-2xl mx-auto text-base font-light leading-[1.8] text-elegant ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;

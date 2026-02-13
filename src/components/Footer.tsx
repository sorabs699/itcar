import { motion } from "framer-motion";

const Footer = () => (
  <footer id="contact" className="bg-gradient-navy section-padding relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(42 70% 55%) 0.5px, transparent 0)", backgroundSize: "32px 32px" }} />

    <div className="max-w-6xl mx-auto relative">
      {/* Top decorative divider */}
      <div className="gold-divider-wide mb-16" />

      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-display font-bold text-primary-foreground mb-1 tracking-[0.1em]">
            ITC
          </h3>
          <h3 className="text-2xl font-display font-bold text-gradient-gold mb-6 tracking-[0.1em]">
            Hotels
          </h3>
          <p className="text-primary-foreground/40 text-sm font-light leading-[1.9] text-elegant">
            A legacy of responsible luxury, crafting extraordinary experiences rooted in Indian heritage and sustainability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h4 className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-6 font-light">Quick Links</h4>
          <ul className="space-y-3">
            {["About", "Our Hotels", "Procedures", "CSR", "Careers"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className="nav-link-underline text-sm text-primary-foreground/40 hover:text-gold transition-colors duration-500 font-light pb-0.5"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-6 font-light">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/40 font-light">
            <p>ITC Hotels Limited</p>
            <p>Virginia House, 37 J.L. Nehru Road</p>
            <p>Kolkata — 700 071, India</p>
            <div className="gold-divider-wide !mx-0 !w-16 my-4" />
            <p className="hover:text-gold transition-colors duration-300 cursor-pointer">reservations@itchotels.in</p>
            <p className="hover:text-gold transition-colors duration-300 cursor-pointer">+91 33 2288 0000</p>
          </div>
        </motion.div>
      </div>

      <div className="gold-divider-wide mb-6" />
      <p className="text-center text-[10px] text-primary-foreground/25 tracking-[0.2em] uppercase font-light">
        © {new Date().getFullYear()} ITC Hotels · All rights reserved · Prototype for educational purposes
      </p>
    </div>
  </footer>
);

export default Footer;

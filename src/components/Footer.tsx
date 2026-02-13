const Footer = () => (
  <footer id="contact" className="bg-primary section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="text-xl font-display font-bold text-primary-foreground mb-4">
            ITC <span className="text-gold">Hotels</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm font-light leading-relaxed">
            A legacy of responsible luxury, crafting extraordinary experiences rooted in Indian heritage and sustainability.
          </p>
        </div>
        <div>
          <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Our Hotels", "Procedures", "CSR", "Careers"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <p>ITC Hotels Limited</p>
            <p>Virginia House, 37 J.L. Nehru Road</p>
            <p>Kolkata — 700 071, India</p>
            <p className="mt-3">reservations@itchotels.in</p>
            <p>+91 33 2288 0000</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40 tracking-wide">
          © {new Date().getFullYear()} ITC Hotels. All rights reserved. This is a prototype website for educational purposes.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

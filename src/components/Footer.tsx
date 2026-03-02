import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-foreground text-background py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-background/70 font-body">
            Copyright © 2026 - All rights reserved by Appnstruct
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

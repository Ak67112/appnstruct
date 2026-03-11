import { motion } from "framer-motion";

import grinder1 from "@/assets/Grinder 1.png";
import grinder2 from "@/assets/Grinder 2.png";
import grinder3 from "@/assets/Grinder 3.png";
import globalReach from "@/assets/Global Rearch.png";
import huller from "@/assets/Huller.png";
import destoner from "@/assets/DESTONER MACHINE (1).png";
import maintenance from "@/assets/maintence 2.png";
import saral from "@/assets/Saral.png";
import onAllProducts from "@/assets/on all products.png";
import post1 from "@/assets/post 1.png";

const row1 = [grinder1, grinder2, grinder3, globalReach, huller, destoner, maintenance, saral];
const row2 = [onAllProducts, post1, grinder1, grinder2, grinder3, globalReach, huller, destoner];

const CreativesSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background overflow-hidden" data-aos="fade-up">
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <motion.h2 
          className="font-heading font-black text-4xl md:text-6xl text-foreground"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Recent <span className="text-primary">Creatives</span>
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mt-4 text-base md:text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Ready to be wowed? Check out our mind-blowing recent creatives.
        </motion.p>
      </motion.div>

      {/* Row 1 - scroll left */}
      <div className="relative mb-6" data-aos="fade-up" data-aos-duration="400">
        <div className="flex animate-scroll-left w-max gap-4">
          {[...row1, ...row1].map((img, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden border border-border transition-all duration-500"
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay={i * 30}
            >
              <img
                src={img}
                alt="Creative work"
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="relative" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
        <div className="flex animate-scroll-right w-max gap-4">
          {[...row2, ...row2].map((img, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden border border-border transition-all duration-500"
              data-aos="flip-left"
              data-aos-duration="400"
              data-aos-delay={i * 30}
            >
              <img
                src={img}
                alt="Creative work"
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativesSection;

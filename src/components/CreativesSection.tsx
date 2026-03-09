import { motion } from "framer-motion";

import sl1 from "@/assets/sl-1.webp";
import sl2 from "@/assets/sl-2.webp";
import sl3 from "@/assets/sl-3.webp";
import sl4 from "@/assets/sl-4.webp";
import sl5 from "@/assets/sl-5.webp";
import sl6 from "@/assets/sl-6.webp";
import sl7 from "@/assets/sl-7.webp";
import sl8 from "@/assets/sl-8.webp";
import sl10 from "@/assets/sl-10.jpeg";
import sl11 from "@/assets/sl-11.jpeg";
import sl12 from "@/assets/sl-12.jpeg";

const row1 = [sl1, sl2, sl3, sl4, sl5, sl6, sl7, sl8];
const row2 = [sl10, sl11, sl12, sl1, sl2, sl3, sl4, sl5];

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
      <div className="relative mb-6" data-aos="fade-up" data-aos-duration="800">
        <div className="flex animate-scroll-left w-max gap-4">
          {[...row1, ...row1].map((img, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={i * 50}
            >
              <img
                src={img}
                alt="Creative work"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="relative" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <div className="flex animate-scroll-right w-max gap-4">
          {[...row2, ...row2].map((img, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay={i * 50}
            >
              <img
                src={img}
                alt="Creative work"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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

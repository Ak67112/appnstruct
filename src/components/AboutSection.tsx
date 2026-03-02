import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground">
            Raise Your Brand <span className="text-primary">With Us</span>
          </h2>
          <motion.p 
            className="text-muted-foreground mt-6 text-base md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We blend data and creativity to deliver clear results. Our experts use modern tools and research to build brand identities that stand out in competitive markets.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border h-full"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">About Us</h3>
              <p className="text-muted-foreground text-sm">Results-driven digital marketing and IT solutions team helping companies expand their online presence with smart, data-driven campaigns.</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div 
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border h-full"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm">Empower companies with smart digital plans that drive growth through strategic, data-driven, and creative solutions.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div 
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border h-full"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm">Becoming a reliable digital partner providing creativity and long-lasting commercial influence.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-heading font-semibold text-lg mb-2">Elevate</p>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground leading-tight">
              Your Brand<br />
              <span className="text-primary">with Us!</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Looking for the best branding agency in Coimbatore that delivers results? Our team of expert strategists uses the latest tools and develops innovative methods to create data-driven digital marketing plans for your brand. As a leading branding company in Coimbatore, let's build a powerful brand together!
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Start Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import { Megaphone, PenTool, Palette, Globe } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Social Media Marketing",
    description:
      "Instagram, Facebook, and LinkedIn allow us to help you engage your audience and create engaged online communities. Designed to increase conversions, brand awareness, and participation, our social media marketing and paid advertising programs will meet this objective.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Performance Marketing",
    description:
      "We run focused PPC campaigns, Google Ads, and conversion rate optimization techniques to generate qualified leads and boost sales as a results-driven online advertising company.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Including logo design, brand messaging, and positioning approaches that set your company apart, we develop memorable brand identities.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Web Design",
    description:
      "Your virtual storefront is your website. We create mobile-, tablet-, and desktop-compatible fast, SEO-friendly websites. User experience and lead generation are our top priorities in our web development services.",
    icon: Globe,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-grey-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative bg-background rounded-2xl p-8 shadow-sm cursor-pointer overflow-hidden border border-border"
              initial={{ opacity: 0, x: i < 2 ? -60 : 60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.5), 0 20px 40px rgba(0, 0, 0, 0.4)"
              }}
            >
              {/* Large number bg */}
              <span className="absolute -top-4 -right-2 font-heading font-black text-8xl text-muted/30 group-hover:text-primary/30 transition-colors duration-300">
                {service.number}
              </span>

              <div className="relative z-10">
                <motion.div whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 15px rgba(14, 165, 233, 0.6))" }}>
                  <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

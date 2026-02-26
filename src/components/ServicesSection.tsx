import { motion } from "framer-motion";
import { Megaphone, PenTool, CalendarDays } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Media Branding",
    description:
      "Build a thriving online community, engage your audience on major platforms, and drive conversions with our social media management and paid advertising expertise.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Content Marketing",
    description:
      "We create high-quality content like blog posts, articles, and website copy that resonates with your audience and achieves your marketing goals.",
    icon: PenTool,
  },
  {
    number: "10",
    title: "Event Management",
    description:
      "We take the stress out of event planning. Our team will develop a comprehensive plan, manage logistics, and execute flawless events that achieve your goals.",
    icon: CalendarDays,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-grey-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Large number bg */}
              <span className="absolute -top-4 -right-2 font-heading font-black text-8xl text-grey-bg group-hover:text-primary/10 transition-colors duration-300">
                {service.number}
              </span>

              <div className="relative z-10">
                <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
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

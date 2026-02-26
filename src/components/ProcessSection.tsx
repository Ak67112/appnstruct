import { motion } from "framer-motion";
import flowImg from "@/assets/flow.svg";

const steps = [
  {
    title: "Planning",
    description:
      "Based on your goals and target audience, we develop a comprehensive marketing plan that outlines the best digital marketing tactics for your business.",
  },
  {
    title: "Creation",
    description:
      "Our team of experts create high-quality digital assets that resonate with your audience.",
  },
  {
    title: "Execution",
    description:
      "With a robust strategy, we execute your digital marketing initiatives with precision and effectiveness.",
  },
  {
    title: "Analysis",
    description:
      "We meticulously analyze the performance of your campaigns across all channels, using advanced analytics tools to extract actionable insights.",
  },
  {
    title: "Reporting",
    description:
      "We provide clear, concise reports that highlight successes, challenges, and opportunities for improvement.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-grey-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl mx-auto">
            We design, launch, and refine digital marketing strategies to help your brand succeed.
          </p>
        </motion.div>

        {/* Flow chart image on desktop */}
        <motion.div
          className="hidden md:block mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={flowImg} alt="Our process flow" className="w-full max-w-4xl mx-auto" />
        </motion.div>

        {/* Steps cards */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-background rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-sm text-primary-foreground">{i + 1}</span>
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

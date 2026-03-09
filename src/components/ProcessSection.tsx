import { motion } from "framer-motion";
import { Sparkles, Rocket, Target, TrendingUp, FileCheck } from "lucide-react";

const steps = [
  {
    title: "Strategizing",
    icon: FileCheck,
    description:
      "We are aware of your rivals, target market, and objectives. Then we develop a unique digital marketing strategy fit to your demands.",
    colorClass: "from-blue-500 to-cyan-500",
    colorFrom: "#3b82f6",
    colorTo: "#06b6d4"
  },
  {
    title: "Construction",
    icon: Sparkles,
    description:
      "Developing premium digital assets, including content, ads, graphics, and marketing materials that resonate with your audience, our creative team connects with you.",
    colorClass: "from-blue-500 to-sky-500",
    colorFrom: "#3b82f6",
    colorTo: "#0ea5e9"
  },
  {
    title: "Implementation",
    icon: Rocket,
    description:
      "With accuracy and performance monitoring, we execute your campaigns across several digital media.",
    colorClass: "from-primary to-blue-600",
    colorFrom: "#0EA5E9",
    colorTo: "#2563eb"
  },
  {
    title: "Analysis",
    icon: Target,
    description:
      "Using sophisticated analytics technologies, we track campaign success to find areas where improvement is required and to discover what is most effective.",
    colorClass: "from-blue-600 to-indigo-500",
    colorFrom: "#2563eb",
    colorTo: "#6366f1"
  },
  {
    title: "Reporting",
    icon: TrendingUp,
    description:
      "We offer open and honest reports on results, ideas, and prospects for future expansion.",
    colorClass: "from-indigo-500 to-primary",
    colorFrom: "#6366f1",
    colorTo: "#0EA5E9"
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" data-aos="fade-up">
      {/* Animated Background Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <motion.h2 
            className="font-heading font-black text-4xl md:text-6xl text-foreground mb-4"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Our <span className="text-primary">Process</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            To produce results, we adhere to a straightforward yet efficient method.
          </motion.p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-20 md:space-y-32">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const Icon = step.icon;
              
              return (
                <div key={i} className="relative">
                  {/* Center Dot Indicator */}
                  <motion.div
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full items-center justify-center border-4 border-background shadow-xl z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})`
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(14, 165, 233, 0.6)"
                    }}
                  >
                    <span className="text-white font-bold text-xl">{i + 1}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`relative w-full md:w-[45%] ${isEven ? 'md:ml-0 md:mr-auto md:pr-16' : 'md:ml-auto md:mr-0 md:pl-16'}`}
                    initial={{ 
                      opacity: 0, 
                      x: isEven ? -100 : 100,
                      rotateY: isEven ? -45 : 45,
                      scale: 0.8
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      rotateY: 0,
                      scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    data-aos={isEven ? "slide-right" : "slide-left"}
                    data-aos-duration="800"
                    data-aos-delay={i * 100}
                  >
                    <motion.div
                      className={`relative bg-gradient-to-br from-card to-background border-2 border-border rounded-2xl p-8 shadow-lg overflow-hidden group cursor-pointer`}
                      whileHover={{ 
                        scale: 1.05,
                        rotateX: 5,
                        rotateY: isEven ? 5 : -5,
                        boxShadow: "0 20px 60px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.2)"
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        whileHover={{
                          scale: 1.5,
                        }}
                      />

                      {/* Icon */}
                      <motion.div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.colorClass} mb-6 shadow-lg`}
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </motion.div>

                      {/* Number Badge (Mobile) */}
                      <div className="md:hidden absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 sm:top-6 sm:right-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-base sm:text-lg">{i + 1}</span>
                      </div>

                      {/* Content */}
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-3 relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                        {step.description}
                      </p>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${step.colorClass} rounded-full blur-3xl opacity-0 group-hover:opacity-30`}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Flowing Dots Animation */}
                  <motion.div
                    className="hidden md:block absolute top-1/2 left-1/2 w-8 h-8"
                    style={{
                      x: isEven ? -32 : 32,
                      y: -16
                    }}
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-primary`}
                      animate={{
                        x: isEven ? [-40, 0] : [40, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] text-white font-heading font-semibold shadow-lg text-sm md:text-base touch-manipulation cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(14, 165, 233, 0.6)"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <Sparkles className="w-5 h-5" />
            Ready to Start Your Journey?
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

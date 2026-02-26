import { motion } from "framer-motion";
import ipadImg from "@/assets/ipad.svg";
import headImg from "@/assets/head.png";
import graphImg from "@/assets/graph.png";

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Text Content */}
      <motion.div
        className="text-center z-10 px-6 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg md:text-xl font-body text-foreground mb-2">Start Your</p>
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight">
          Digital Marketing
        </h1>
        <div className="flex flex-wrap items-baseline justify-center gap-x-3 mt-1">
          <span className="text-sm md:text-base text-muted-foreground font-body">
            Team Up With Best Digital Marketing Company In Coimbatore.
          </span>
          <span className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-foreground">
            Journey Today
          </span>
        </div>
      </motion.div>

      {/* iPad Image */}
      <motion.div
        className="relative z-10 mt-8 w-full max-w-4xl px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={ipadImg} alt="iPad showcasing digital marketing" className="w-full" />
      </motion.div>

      {/* Decorative images */}
      <motion.img
        src={headImg}
        alt=""
        className="absolute top-24 right-0 w-32 md:w-48 opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5 }}
      />
      <motion.img
        src={graphImg}
        alt=""
        className="absolute bottom-20 left-0 w-28 md:w-40 opacity-15 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.7 }}
      />
    </section>
  );
};

export default HeroSection;

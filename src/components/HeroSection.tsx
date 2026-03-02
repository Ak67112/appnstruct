import { motion } from "framer-motion";
import ipadImg from "@/assets/ipad.svg";
import headImg from "@/assets/head.png";
import graphImg from "@/assets/graph.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Background Models */}
      {/* Rotating Cube Wireframe */}
      <motion.div
        className="hidden lg:block absolute top-1/4 right-1/4 w-24 h-24 lg:w-32 lg:h-32 pointer-events-none opacity-20"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 border-2 border-primary/30" style={{ transform: "translateZ(64px)" }} />
        <div className="absolute inset-0 border-2 border-primary/30" style={{ transform: "translateZ(-64px)" }} />
        <div className="absolute inset-0 border-2 border-primary/30" style={{ transform: "rotateY(90deg) translateZ(64px)" }} />
        <div className="absolute inset-0 border-2 border-primary/30" style={{ transform: "rotateY(90deg) translateZ(-64px)" }} />
        <div className="absolute inset-0 border-2 border-primary/30" style={{ transform: "rotateX(90deg) translateZ(64px)" }} />
        <div className="absolute inset-0 border-2 border-primary/30" style={{ transform: "rotateX(90deg) translateZ(-64px)" }} />
      </motion.div>

      {/* Rotating Pyramid */}
      <motion.div
        className="hidden lg:block absolute bottom-1/3 left-1/4 w-32 h-32 lg:w-40 lg:h-40 pointer-events-none opacity-15"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div 
          className="absolute w-0 h-0 border-l-[80px] border-r-[80px] border-b-[120px] border-l-transparent border-r-transparent border-b-blue-500/40"
          style={{ transform: "translateZ(40px) translateX(-80px)" }}
        />
        <div 
          className="absolute w-0 h-0 border-l-[80px] border-r-[80px] border-b-[120px] border-l-transparent border-r-transparent border-b-primary/40"
          style={{ transform: "rotateY(90deg) translateZ(40px) translateX(-80px)" }}
        />
      </motion.div>

      {/* Hexagonal Ring */}
      <motion.div
        className="hidden md:block absolute top-1/3 left-1/3 w-20 h-20 md:w-24 md:h-24 pointer-events-none opacity-25"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateZ: [0, 360],
          rotateX: [0, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-12 h-1 bg-gradient-to-r from-primary to-blue-500"
            style={{
              transform: `rotate(${angle}deg) translateY(-24px)`,
              transformOrigin: "center",
            }}
          />
        ))}
      </motion.div>

      {/* Grid Plane */}
      <motion.div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] lg:w-[600px] lg:h-[300px] pointer-events-none opacity-10"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(75deg) translateZ(-100px)",
          backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Torus/Ring */}
      <motion.div
        className="hidden md:block absolute top-2/3 right-1/3 w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-blue-500/30 pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [45, -45, 45],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-2 rounded-full border-2 border-primary/40" />
      </motion.div>
      {/* Text Content - Fade Up with Zoom */}
      <motion.div
        className="text-center z-10 px-6 mt-8"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.p
          className="text-lg md:text-2xl font-body text-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Step Into the Future with
        </motion.p>

        <motion.h1 
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          style={{
            textShadow: "0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.2)",
            filter: "drop-shadow(0 0 15px rgba(14, 165, 233, 0.25))"
          }}
        >
          Advanced Digital and IT Services
        </motion.h1>

        <motion.p 
          className="text-base md:text-lg text-muted-foreground font-body mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Collaborate with a premier digital marketing team that understands your brand, audience, and objectives.
        </motion.p>

        {/* Glowing CTA Button */}
        <motion.button
          onClick={scrollToContact}
          className="mt-8 md:mt-12 px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-primary via-blue-500 to-primary text-white font-bold rounded-full text-base md:text-lg relative overflow-hidden touch-manipulation"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(14, 165, 233, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: "0 0 15px rgba(14, 165, 233, 0.3), 0 0 30px rgba(14, 165, 233, 0.2)",
            backgroundSize: "200% 100%",
            animation: "gradientShift 3s ease infinite"
          }}
        >
          <motion.span
            className="relative z-10"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0.8)",
                "0 0 20px rgba(255, 255, 255, 1)",
                "0 0 10px rgba(255, 255, 255, 0.8)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Get Started Now
          </motion.span>
          
          {/* Glowing border animation */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 10px 1px rgba(14, 165, 233, 0.3)",
                "0 0 20px 2px rgba(14, 165, 233, 0.4)",
                "0 0 10px 1px rgba(14, 165, 233, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      {/* Glowing Orbs Background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />


      {/* iPad Image - Center with Parallax & Rotation */}
     
      {/* Decorative Image - Fade Down with Rotation */}
      <motion.img
        src={headImg}
        alt=""
        className="absolute top-24 right-0 w-32 md:w-48 opacity-15 pointer-events-none"
        initial={{ opacity: 0, y: -40, x: 40, rotate: -10 }}
        animate={{
          opacity: [0.1, 0.4, 0.1],
          y: [0, -17, 0],
          x: [0, 10, 0],
          rotate: [-10, 5, -10],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Decorative Image - Fade Up with Scale & Rotation */}
      <motion.img
        src={graphImg}
        alt=""
        className="absolute bottom-20 left-0 w-28 md:w-40 opacity-12 pointer-events-none"
        initial={{ opacity: 0, y: 40, x: -30, rotate: 10 }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [10, -5, 10],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* Additional Floating Decorative Circle with Glow */}
      <motion.div
        className="hidden sm:block absolute top-1/3 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
          y: [0, -30, 0],
          boxShadow: [
            "0 0 10px rgba(14, 165, 233, 0.2)",
            "0 0 20px rgba(14, 165, 233, 0.3)",
            "0 0 10px rgba(14, 165, 233, 0.2)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />

      {/* Additional Floating Decorative Circle with Glow */}
      <motion.div
        className="hidden sm:block absolute top-1/2 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0EA5E9]/20 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.3, 1],
          y: [0, 20, 0],
          x: [0, 10, 0],
          boxShadow: [
            "0 0 8px rgba(14, 165, 233, 0.25)",
            "0 0 15px rgba(14, 165, 233, 0.35)",
            "0 0 8px rgba(14, 165, 233, 0.25)"
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </section>
  );
};

export default HeroSection;
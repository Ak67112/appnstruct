import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Users, 
  Heart, 
  Zap,
  Coffee,
  Code,
  Palette,
  Megaphone,
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning and advancement opportunities",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Work with talented and passionate individuals",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Work on cutting-edge projects and technologies",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description: "Competitive salary, health benefits, and more",
    color: "from-green-500 to-teal-500"
  },
];

const jobs = [
  {
    id: 1,
    title: "Senior Digital Marketing Strategist",
    icon: Megaphone,
    location: "Coimbatore, India",
    type: "Full-time",
    description: "Lead strategic marketing campaigns for top-tier clients. Drive growth through data-driven insights and creative solutions.",
    skills: ["SEO", "SEM", "Analytics", "Campaign Management"],
  },
  {
    id: 2,
    title: "Creative Designer",
    icon: Palette,
    location: "Coimbatore, India / Remote",
    type: "Full-time",
    description: "Create stunning visuals and engaging content. Transform brands through innovative design thinking.",
    skills: ["Adobe Suite", "Figma", "Brand Design", "UI/UX"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    icon: Code,
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, performant web applications. Work with modern frameworks and cutting-edge technologies.",
    skills: ["React", "TypeScript", "Tailwind", "Animation"],
  },
];

const Careers = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with 3D Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating 3D Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Briefcase className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto" strokeWidth={1.5} />
            </motion.div>

            <motion.h1 
              className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-foreground mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join Our <span className="text-primary">Amazing Team</span>
            </motion.h1>

            <motion.p 
              className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Be part of something extraordinary. Shape the future of digital marketing with passionate innovators.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Share your CV with us at <span className="text-primary font-semibold">hr@appnstruct.com</span>
            </motion.p>

            <motion.button
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-full text-base md:text-lg shadow-2xl touch-manipulation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px) rotateX(0deg)",
              }}
              onClick={() => {
                const subject = encodeURIComponent("Share Your CV - Appnstruct Careers");
                const body = encodeURIComponent(
                  `Hello HR Team,\n\nI am interested in joining your amazing team at Appnstruct. I am attaching my CV for your review and would appreciate the opportunity to discuss how I can contribute to your organization.\n\nI look forward to hearing from you.\n\nBest regards`
                );
                window.location.href = `mailto:hr@appnstruct.com?subject=${subject}&body=${body}`;
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
              }}
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with 3D Cards */}
      <section className="py-24 bg-grey-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Why <span className="text-primary">Work With Us?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We believe in creating an environment where talent thrives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onHoverStart={() => setHoveredBenefit(i)}
                onHoverEnd={() => setHoveredBenefit(null)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="relative bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <motion.div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 md:mb-6`}
                    animate={hoveredBenefit === i ? {
                      rotateY: 360,
                      scale: [1, 1.2, 1],
                    } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <benefit.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>

                  {/* 3D Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={hoveredBenefit === i ? { x: "100%" } : { x: "-100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Find your perfect role and make an impact
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div
                  className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg cursor-pointer overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(14, 165, 233, 0.3)",
                  }}
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <motion.div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center flex-shrink-0"
                      animate={{
                        rotateY: selectedJob === job.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <job.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 md:gap-4 mb-4 text-sm md:text-base">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      className="w-full sm:w-auto px-5 md:px-6 py-2.5 md:py-3 bg-primary text-white font-semibold rounded-lg text-sm md:text-base touch-manipulation"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const subject = encodeURIComponent(`Application for ${job.title}`);
                        const body = encodeURIComponent(
                          `Hello HR Team,\n\nI am interested in applying for the following position:\n\nPosition: ${job.title}\nLocation: ${job.location}\nType: ${job.type}\n\nI am excited about this opportunity and would like to learn more.\n\nBest regards`
                        );
                        window.location.href = `mailto:hr@appnstruct.com?subject=${subject}&body=${body}`;
                      }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-grey-bg relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-full text-lg shadow-2xl inline-flex items-center gap-3"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(14, 165, 233, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Get In Touch
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

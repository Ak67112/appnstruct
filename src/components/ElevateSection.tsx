import { motion } from "framer-motion";
import { BarChart3, PieChart, Share2 } from "lucide-react";

const ElevateSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Cards */}
          <motion.div
            className="flex flex-col gap-6 relative h-auto lg:h-96"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative circle */}
            <motion.div 
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-2 border-primary/20 pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />

            {/* Card 1 - Follower Growth */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 relative z-10 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ translateY: -5, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-foreground font-bold text-lg">Follower Growth</h3>
                  <p className="text-sm text-muted-foreground">450 New Followers</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex gap-1 items-end justify-center h-24">
                <div className="w-4 h-12 bg-primary rounded-sm" />
                <div className="w-4 h-16 bg-primary rounded-sm" />
                <div className="w-4 h-10 bg-primary rounded-sm" />
                <div className="w-4 h-20 bg-primary rounded-sm" />
                <div className="w-4 h-14 bg-primary rounded-sm" />
              </div>
            </motion.div>

            {/* Card 2 - Accounts Reached */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ translateY: -5, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-foreground font-bold text-lg">Accounts Reached</h3>
                  <p className="text-sm text-muted-foreground flex gap-3">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full" />
                      Non - Followers
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Followers
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="w-full h-full rounded-full border-8 border-muted-foreground flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-8 border-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

          
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-primary font-semibold mb-2">Elevate</p>
              <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
                Your Brand <span className="text-primary">with Us!</span>
              </h2>
            </motion.div>

            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Looking for the best branding agency in Coimbatore that delivers results? Our team of expert strategists uses the latest tools and develops innovative methods to create data-driven digital marketing plans for your brand. As a leading branding company in Coimbatore, let's build a powerful brand together!
            </motion.p>

            <motion.button
              onClick={scrollToContact}
              className="w-fit px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary via-blue-500 to-primary text-white font-bold rounded-lg text-sm md:text-base relative overflow-hidden touch-manipulation"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.6), 0 0 60px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)",
                backgroundSize: "200% 100%",
                animation: "gradientShift 3s ease infinite"
              }}
            >
              Start Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElevateSection;

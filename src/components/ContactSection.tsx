import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Contact Request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@appnstruct.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <motion.h2 
            className="font-heading font-black text-4xl md:text-6xl text-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join Our <span className="text-primary">Community</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Give us a call. Our Door is always open!
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground font-body text-base focus:outline-none focus:border-primary focus:shadow-[0_3px_15px_rgba(14,165,233,0.3)] transition-all duration-300"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground font-body text-base focus:outline-none focus:border-primary focus:shadow-[0_3px_15px_rgba(14,165,233,0.3)] transition-all duration-300"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground font-body text-base focus:outline-none focus:border-primary focus:shadow-[0_3px_15px_rgba(14,165,233,0.3)] transition-all duration-300 resize-none"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] text-white font-heading font-semibold text-sm md:text-base transition-all duration-300 touch-manipulation w-full md:w-auto justify-center"
            style={{
              animation: "gradientShift 3s ease infinite",
              boxShadow: "0 0 20px rgba(14, 165, 233, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 35px rgba(14, 165, 233, 0.7), 0 8px 30px rgba(0, 0, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <Send size={16} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

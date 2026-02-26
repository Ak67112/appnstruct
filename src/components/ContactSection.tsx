import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", number: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", number: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground">
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Give us a call. Our Door is always open!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground font-body text-base focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Number"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground font-body text-base focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground font-body text-base focus:outline-none focus:border-primary transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

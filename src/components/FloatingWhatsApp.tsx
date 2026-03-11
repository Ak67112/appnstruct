import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon-logo-svgrepo-com.svg";

const FloatingWhatsApp = () => {
  const phoneNumber = "+919384902475";
  const message = "Hello! I'd like to know more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-14 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        animate={{
          boxShadow: [
            "0 0 15px rgba(34, 197, 94, 0.4)",
            "0 0 25px rgba(34, 197, 94, 0.6)",
            "0 0 15px rgba(34, 197, 94, 0.4)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
      </motion.div>
    </motion.a>
  );
};

export default FloatingWhatsApp;

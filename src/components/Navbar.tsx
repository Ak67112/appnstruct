import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About us", href: "about" },
  { label: "Services", href: "services" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Careers", href: "/careers" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `/${id}`);
  }
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo & Company Branding */}
        {isHomePage ? (
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImg} 
              alt="Appnstruct Logo" 
              className="h-16 sm:h-20 w-auto"
            />
          </button>
        ) : (
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Appnstruct Logo" 
              className="h-16 sm:h-20 w-auto"
            />
          </Link>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ) : isHomePage ? (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ) : (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setTimeout(() => scrollToSection(link.href), 100);
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            )
          ))}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors touch-manipulation cursor-pointer"
            >
              Reach Us
            </button>
          ) : (
            <Link
              to="/"
              className="ml-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors touch-manipulation"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => scrollToSection("contact"), 100);
              }}
            >
              Reach Us
            </Link>
          )}
        </div>

      
        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-foreground font-medium py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : isHomePage ? (
                  <button
                    key={link.label}
                    onClick={() => {
                      scrollToSection(link.href);
                      setMobileOpen(false);
                    }}
                    className="text-foreground font-medium py-2 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={`/${link.href}`}
                    className="text-foreground font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                      setTimeout(() => scrollToSection(link.href), 100);
                      setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              {isHomePage ? (
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setMobileOpen(false);
                  }}
                  className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold text-center touch-manipulation cursor-pointer"
                >
                  Reach Us
                </button>
              ) : (
                <Link
                  to="/"
                  className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold text-center touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                    setTimeout(() => scrollToSection("contact"), 100);
                    setMobileOpen(false);
                  }}
                >
                  Reach Us
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

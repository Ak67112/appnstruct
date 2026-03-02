import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#top", isHash: true },
  { label: "About us", href: "#about", isHash: true },
  { label: "Services", href: "#services", isHash: true },
  { label: "Portfolio", href: "#portfolio", isHash: true },
  { label: "Careers", href: "/careers", isHash: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
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
          <a href="#top" className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Appnstruct Logo" 
              className="h-16 sm:h-20 w-auto"
            />
            
          </a>
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
            link.isHash ? (
              isHomePage ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              )
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            )
          ))}
          {isHomePage ? (
            <a
              href="#contact"
              className="ml-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors touch-manipulation"
            >
              Reach Us
            </a>
          ) : (
            <Link
              to="/#contact"
              className="ml-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors touch-manipulation"
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
                link.isHash ? (
                  isHomePage ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-foreground font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={`/${link.href}`}
                      className="text-foreground font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-foreground font-medium py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              {isHomePage ? (
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold text-center touch-manipulation"
                  onClick={() => setMobileOpen(false)}
                >
                  Reach Us
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold text-center touch-manipulation"
                  onClick={() => setMobileOpen(false)}
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

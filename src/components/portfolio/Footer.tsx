import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 sm:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-foreground font-serif font-medium text-xl sm:text-2xl tracking-tight group"
          >
            <span className="text-accent group-hover:text-foreground transition-colors duration-300">V</span>ishal
            <span className="text-muted">.</span>
          </a>

          {/* Copyright */}
          <p className="text-accent text-sm tracking-wide flex items-center justify-center gap-1.5">
            © {currentYear} Vishal Sarde. All rights reserved. Made with
            <Heart className="w-3.5 h-3.5 text-accent fill-accent/20" />
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-none border border-border text-muted hover:text-foreground hover:border-accent transition-all duration-300"
          >
            <span className="text-white text-sm font-medium tracking-wide uppercase">Back to top</span>
            <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

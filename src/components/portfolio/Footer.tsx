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
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
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
            <div className="hidden md:block w-px h-6 bg-border" />
            <p className="text-accent text-sm tracking-wide flex items-center gap-1.5 text-center">
              © {currentYear} Vishal Sarde. All rights reserved. Made with
              <Heart className="w-3.5 h-3.5 text-accent fill-accent/20" />
            </p>
          </div>

          {/* Quick Links */}
          {/* 
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["About", "Projects", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-white hover:text-foreground transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          */}

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

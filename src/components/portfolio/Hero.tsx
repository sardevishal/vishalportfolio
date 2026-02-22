import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Rich Glowing Background Elements */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-glow z-0" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-glow z-0" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/10 -z-0 hidden lg:block border-l border-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-12"
            >
              <span className="w-12 h-px bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                Available for worldwide projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl sm:text-8xl md:text-9xl font-serif tracking-tight leading-[0.9] mb-8"
            >
              <span className="text-foreground">Vishal</span>
              <br />
              <span className="accent-gradient">Sarde</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-md text-lg text-muted-foreground leading-relaxed mb-12"
            >
              Building <span className="text-foreground italic">smart cloud systems</span> and
              <span className="text-foreground italic"> beautiful websites</span> that are elegant user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center gap-12"
            >
              <button
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-accent w-fit"
              >
                <span>Selected Works</span>
                <div className="relative w-12 h-px bg-accent group-hover:w-24 transition-all duration-500" />
              </button>

              <div className="flex items-center gap-6 text-muted-foreground">
                <a href="https://github.com/sardevishal" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com/in/vishalsarde" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
                <a href="mailto:contact@vishalsarde.com" className="hover:text-accent transition-all duration-300">
                  <Mail size={18} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative aspect-[4/5] w-full max-w-sm glass-card overflow-hidden group"
            >
              {/* Abstract background element */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                <span className="text-[20rem] font-serif italic text-accent select-none group-hover:scale-110 transition-transform duration-1000">VS</span>
              </div>

              <div className="absolute bottom-12 left-12 right-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent/80 mb-4 font-bold">Focus</p>
                <p className="text-xl font-serif italic leading-relaxed text-foreground">
                  Cloud Computing<br />
                  Modern Web Apps<br />
                  AI & Smart Systems<br />
                  Secure Networks
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-10 hidden lg:block"
      >
        <button
          onClick={scrollToAbout}
          className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group rotate-90 origin-left translate-x-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
          <div className="w-12 h-px bg-border group-hover:w-24 transition-all duration-500" />
        </button>
      </motion.div>
    </section>
  );
}

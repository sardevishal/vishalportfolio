import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Youtube, Mail } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -z-0 hidden lg:block" />
      
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
              {/*<span className="text-accent italic">Sarde</span>*/}
              <span className="italic">Sarde</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-md text-lg text-muted-foreground leading-relaxed mb-12"
            >
              Bridging the gap between <span className="text-white italic">complex machine learning</span> architectures and
              <span className="text-white italic"> elegant user experiences</span> for global clients.
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
                <a href="https://github.com/sardevishal" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com/in/vishalsarde" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
                <a href="mailto:contact@vishalsarde.com" className="hover:text-foreground transition-colors">
                  <Mail size={18} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative aspect-[4/5] w-full max-w-sm bg-muted overflow-hidden"
            >
               {/* Abstract background element */}
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                 <span className="text-[20rem] font-serif italic text-accent select-none">VS</span>
               </div>
               
               <div className="absolute bottom-12 left-12 right-12">
                 <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">Focus</p>
                 <p className="text-xl font-serif italic leading-relaxed">
                   Cloud Computing<br />
                   Machine Learning<br />
                   Creative Development<br />
                   System Architecture
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

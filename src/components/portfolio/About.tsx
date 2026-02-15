import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Shield,
  Trophy,
  GraduationCap,
  Brain,
  Globe,
  Cloud,
} from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "AWS Certified",
    description: "Solution Architect Associate",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "AI & Explainable ML",
  },
  {
    icon: Globe,
    title: "Full-Stack Dev",
    description: "React, Next.js, Flask",
  },
  {
    icon: Code2,
    title: "8+ Projects",
    description: "ML, Web, Cloud & Security",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Network & Threat Analysis",
  },
  {
    icon: Trophy,
    title: "5th Rank",
    description: "Build-A-Thon National",
  },
  {
    icon: GraduationCap,
    title: "8.91 CGPA",
    description: "B.E. Information Technology",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative group cursor-crosshair"
          >
            <div className="relative aspect-[4/5] rounded-none overflow-hidden bg-muted">
              <img
                src="/vishal.jpg"
                alt="Vishal Sarde"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700" />

              <div className="absolute top-0 left-0 bg-accent text-accent-foreground px-6 py-3 text-[9px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500">
                Full-Stack Developer
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-foreground flex items-center justify-center p-8 text-background"
            >
              <div className="text-center">
                <p className="font-serif text-3xl italic leading-tight mb-2">
                  Curiosity
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">Driven</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-4 block"
            >
              The Story So Far
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-serif text-foreground mb-6 leading-tight"
            >
              Blending technical <span className="italic text-accent">precision</span> with creative <span className="italic text-accent">vision</span>.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                As an Information Technology student and AWS Certified Solutions Architect,
                I prioritize building scalable cloud infrastructures and intelligent
                Machine Learning systems that excel in performance and security.
              </p>
              <p>
                From architecting secure cloud environments to building explainable AI,
                I bridge the gap between complex engineering and real-world application.
                Currently based in Pune, India, working with a global perspective.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-12 border-t border-border pt-10">
              {highlights.slice(0, 4).map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="group"
                >
                  <p className="text-foreground font-serif text-3xl mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</p>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-bold">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

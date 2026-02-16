import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Database,
  Cloud,
  Globe,
  Settings
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Flask", level: 85 },
      { name: "MongoDB / Supabase", level: 85 },
      { name: "MySQL / PostgreSQL", level: 82 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    title: "AWS Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS EC2 / S3 / VPC", level: 90 },
      { name: "AWS IAM / CloudWatch", level: 85 },
      { name: "Serverless (Lambda)", level: 75 },
      { name: "Cloud Architecture", level: 88 },
      { name: "Linux / Shell Scripting", level: 82 },
    ],
  },
  {
    title: "Development Tools",
    icon: Settings,
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker / Containerization", level: 70 },
      { name: "Postman / API Testing", level: 88 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "CI/CD Pipelines", level: 75 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 md:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold">
              Expertise
            </span>
            <span className="w-12 h-px bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-serif text-foreground leading-tight"
          >
            Skills & <span className="italic text-accent">Technologies</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="relative p-10 bg-muted/5 border border-border/50 backdrop-blur-sm group hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 bg-background border border-border group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <group.icon size={24} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif text-foreground leading-tight">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-10">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-muted-foreground text-xs uppercase tracking-widest font-bold">
                        {skill.name}
                      </span>
                      <span className="text-accent text-xs font-medium tracking-tighter">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-px bg-border/40 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: skill.level / 100 } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 0.3 + groupIndex * 0.1 + skillIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 bg-accent origin-left"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center text-muted-foreground text-sm italic tracking-wide"
        >
          Specialized in architecting AWS environments and building high-performance web applications.
        </motion.p>
      </div>
    </section>
  );
}

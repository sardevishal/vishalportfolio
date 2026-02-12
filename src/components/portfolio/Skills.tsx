import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Supervised / Unsupervised Learning", level: 85 },
      { name: "scikit-learn / NumPy / Pandas", level: 82 },
      { name: "Explainable AI (SHAP)", level: 78 },
      { name: "Feature Engineering", level: 80 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React / Next.js / Tailwind", level: 85 },
      { name: "Node.js / Express / Flask", level: 88 },
      { name: "MySQL / MongoDB / Supabase", level: 88 },
      { name: "REST APIs / Git", level: 90 },
    ],
  },
  {
    title: "Android Development",
    skills: [
      { name: "Java / XML", level: 88 },
      { name: "Android SDK", level: 85 },
      { name: "REST API Integration", level: 82 },
      { name: "MVC / MVVM Architecture", level: 75 },
    ],
  },
  {
    title: "Cloud & Backend",
    skills: [
      { name: "AWS (EC2, S3, VPC, IAM)", level: 82 },
      { name: "Python / Flask / FastAPI", level: 88 },
      { name: "MySQL / SQLite / MongoDB", level: 88 },
      { name: "Linux / AWS CLI", level: 78 },
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Wireshark / Nmap", level: 85 },
      { name: "Network Traffic Analysis", level: 82 },
      { name: "SIEM Platforms", level: 78 },
      { name: "Incident Response", level: 80 },
    ],
  },
];

const technologies = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "HTML",
  "CSS",
  "XML",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Flask",
  "FastAPI",
  "PHP",
  "Android SDK",
  "Android Studio",
  "scikit-learn",
  "NumPy",
  "Pandas",
  "SHAP",
  "OpenAI API",
  "AWS EC2",
  "AWS S3",
  "AWS VPC",
  "AWS IAM",
  "RDS",
  "DynamoDB",
  "MySQL",
  "SQLite",
  "MongoDB",
  "Supabase",
  "Wireshark",
  "Nmap",
  "SIEM",
  "REST APIs",
  "Git",
  "GitHub",
  "Linux",
  "VS Code",
  "Postman",
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
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-px bg-accent" />
              <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold">
                Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-serif text-foreground leading-tight"
            >
              A <span className="italic text-accent">versatile</span> toolkit for complex <span className="italic text-accent">challenges</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed lg:max-w-md"
          >
            Spanning machine learning, full-stack development, and cybersecurity, my technical foundations are built on both academic rigor and hands-on implementation.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-32">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-serif text-foreground mb-10 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-bold">
                        {skill.name}
                      </span>
                      <span className="text-accent text-[10px] font-medium tracking-widest">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-border relative overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: skill.level / 100 } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
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

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-16"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.02 }}
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

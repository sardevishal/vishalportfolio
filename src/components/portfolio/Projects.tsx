import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AWS Web Infrastructure",
    subtitle: "Cloud-Based Application Hosting",
    category: "Cloud & DevOps",
    description:
      "Architected and deployed a highly available web infrastructure using AWS EC2, S3, and VPC. Implemented granular access control via IAM, optimized networking with public/private subnets, and established real-time monitoring using CloudWatch for performance and security.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["AWS EC2", "AWS VPC", "S3", "IAM", "CloudWatch"],
    liveUrl: "#",
    githubUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Resume Relevance AI",
    subtitle: "Automated HR-Tech Solution",
    category: "Full-Stack Web",
    description:
      "Developed an AI-powered HR platform that semantically analyzes resumes against job descriptions. Built with Next.js and OpenAI API, it generates weighted relevance scores, skill gap analysis, and ATS-friendly enhancement suggestions to streamline recruitment.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI API", "Supabase", "Express", "Node.js"],
    liveUrl: "#",
    githubUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "SPPU Study Material Portal",
    subtitle: "Centralized Academic Archive",
    category: "Full-Stack Web",
    description:
      "Created a comprehensive academic portal using Flask and MongoDB GridFS for secure storage and semester-wise categorization of PDFs. Features high-speed search, role-based authentication, and a responsive UI optimized for both web and mobile access.",
    image:
      "https://images.unsplash.com/photo-1544650030-3c51ad3544ef?w=800&h=600&fit=crop",
    tags: ["Flask", "MongoDB", "GridFS", "Python", "REST APIs"],
    liveUrl: "#",
    githubUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Alumni Connect Network",
    subtitle: "Professional Networking Platform",
    category: "Full-Stack Web",
    description:
      "A dynamic professional networking portal built with PHP and MySQL, facilitating secure student-alumni interactions. Developed both the web platform and the Android client, integrating them via custom-built REST APIs for a seamless cross-platform experience.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    tags: ["PHP", "MySQL", "Android (Java)", "REST APIs", "Web Design"],
    liveUrl: "#",
    githubUrl: "",
    featured: true,
  },
  {
    id: 5,
    title: "SentinelTLS",
    subtitle: "Secure Traffic Analysis",
    category: "Security & ML",
    description:
      "Engineered an anomaly detection system focused on encrypted network traffic. Using Isolation Forest and Random Forest algorithms, it identifies potential malware and data exfiltration patterns with 92% accuracy, leveraging Explainable AI (SHAP) for transparent threat reporting.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    tags: ["Python", "Machine Learning", "Cybesecurity", "Isolation Forest", "SHAP"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal/SentinelTLS",
    featured: true,
  },
  {
    id: 6,
    title: "Website Safety Verifier",
    subtitle: "Blockchain-Enhanced Security",
    category: "Security & Web",
    description:
      "A browser-integrated security tool that uses AI and blockchain verification to ensure website authenticity and prevent credential theft. This project earned 5th rank nationally at the Build-A-Thon Hackathon for its innovative approach to user safety.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["Blockchain", "Browser Extension", "AI Security", "Web APIs"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal/Personal_Data_Guardian",
    featured: true,
    achievement: "🏆 5th Rank - Build-A-Thon National Hackathon",
  },
  {
    id: 7,
    title: "Student Dropout Predictor",
    subtitle: "Predictive Academic Analytics",
    category: "Data Science & Web",
    description:
      "Designed a predictive modeling system for SIH 2025 to identify at-risk students using behavioral and academic data. Implemented a dashboard for real-time risk assessment and designed an offline SMS/IVR alert system for low-connectivity regions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Python", "scikit-learn", "Data Analytics", "SIH 2025"],
    liveUrl: "#",
    githubUrl: "",
    featured: false,
  },
  {
    id: 8,
    title: "Automation Utility Suite",
    subtitle: "Backend Workflow Optimization",
    category: "Python Development",
    description:
      "A collection of specialized Python scripts designed to automate complex backend workflows, including heavy file processing, API stress testing, and database migrations. Optimized for speed and reliability in production environments.",
    image:
      "https://images.unsplash.com/photo-1518433278981-16757d477c78?w=800&h=600&fit=crop",
    tags: ["Python", "Automation", "REST APIs", "MySQL", "Optimization"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal/ECOFLOW",
    featured: false,
  },
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-6 block"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-serif text-foreground leading-tight"
            >
              Crafting <span className="italic text-accent">intelligence</span> into digital experiences.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-x-8 gap-y-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`group relative text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${filter === cat
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <span>{cat}</span>
                <div className={`absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300 ${filter === cat ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </button>
            ))}
          </motion.div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-muted mb-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-700" />

                {project.achievement && (
                  <div className="absolute top-0 left-0 bg-accent text-accent-foreground px-6 py-3 text-[9px] uppercase tracking-[0.3em] font-bold">
                    {project.achievement}
                  </div>
                )}

                <div className="absolute bottom-8 right-8 flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <Github size={18} strokeWidth={1.5} />
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-4">
                    <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block">
                      {project.category}
                    </span>
                    <h3 className="text-4xl font-serif text-foreground leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="pt-2">
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                      <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Trophy } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SentinelTLS",
    subtitle: "Encrypted Traffic Threat Detection",
    category: "Machine Learning",
    description:
      "Developed an ML-based anomaly detection system using Isolation Forest and Random Forest to identify malware and data exfiltration in encrypted network traffic. Achieved 92% detection accuracy and incorporated explainable AI techniques for model transparency.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    tags: [
      "Python",
      "Machine Learning",
      "Isolation Forest",
      "Random Forest",
      "Explainable AI",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: true,
  },
  {
    id: 2,
    title: "Student Dropout Predictor",
    subtitle: "AI-Based Prediction System",
    category: "Machine Learning",
    description:
      "Designed an explainable ML prototype for SIH 2025 to identify at-risk students using academic and behavioral indicators. Applied SHAP for transparent predictions and proposed offline-first deployment (SMS/IVR) for rural accessibility.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    tags: ["Python", "scikit-learn", "SHAP", "Machine Learning", "SIH 2025"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: true,
  },
  {
    id: 3,
    title: "Resume Relevance Checker",
    subtitle: "Automated AI-Powered HR Tool",
    category: "Full-Stack Web",
    description:
      "AI-powered HR-Tech platform built with Next.js, Express, OpenAI API, and Supabase to semantically match resumes with job descriptions, generating relevance scores, missing skill analysis, and ATS-friendly improvement suggestions.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    tags: ["Next.js", "Express", "OpenAI API", "Supabase", "LLM"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: true,
  },
  {
    id: 4,
    title: "Website Safety Verifier",
    subtitle: "Blockchain-Based Security Tool",
    category: "Security Tool",
    description:
      "Developed a browser extension using AI and blockchain to verify website security and detect credential misuse. Secured 5th rank among national participants in Build-A-Thon hackathon.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    tags: ["AI", "Blockchain", "Browser Extension", "Security"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: true,
    achievement: "🏆 5th Rank - Build-A-Thon National Hackathon",
  },
  {
    id: 5,
    title: "SPPU Study Portal",
    subtitle: "Academic Material Management System",
    category: "Full-Stack Web",
    description:
      "Flask + MongoDB (GridFS) academic portal for semester-wise PDF storage, search, and retrieval with user authentication, metadata handling, and secure file downloads. Extended to mobile with Android-friendly layouts.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    tags: ["Flask", "MongoDB", "GridFS", "REST APIs", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: true,
  },
  {
    id: 6,
    title: "Alumni Connect Portal",
    subtitle: "Web & Mobile Platform",
    category: "Full-Stack Web",
    description:
      "PHP-MySQL portal enabling secure alumni-student interaction with authentication, dynamic database queries, and session management. Also built Android-side UI and logic with REST API integration.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    tags: ["PHP", "MySQL", "Android", "Java", "REST APIs"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: false,
  },
  {
    id: 7,
    title: "AWS Web Deployment",
    subtitle: "Cloud-Based Application Hosting",
    category: "Cloud",
    description:
      "Deployed a cloud-hosted web application using EC2 and VPC networking. Implemented access control using IAM, designed VPC architecture with public/private subnets, and monitored performance using CloudWatch.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["AWS EC2", "VPC", "IAM", "CloudWatch", "S3"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: false,
  },
  {
    id: 8,
    title: "Backend Utility Scripts",
    subtitle: "Python Automation Tools",
    category: "Python Backend",
    description:
      "Implemented Python scripts for file processing, API testing, and database operations to automate repetitive backend tasks. Includes data validation, optimization, and Flask API integration utilities.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tags: ["Python", "Flask", "Automation", "REST APIs", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/sardevishal",
    featured: false,
  },
];

const categories = [
  "All",
  "Machine Learning",
  "Full-Stack Web",
  "Security Tool",
  "Cloud",
  "Python Backend",
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
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
                className={`group relative text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
                  filter === cat
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{cat}</span>
                <div className={`absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300 ${
                  filter === cat ? "w-full" : "w-0 group-hover:w-full"
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    <Github size={18} strokeWidth={1.5} />
                  </a>
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

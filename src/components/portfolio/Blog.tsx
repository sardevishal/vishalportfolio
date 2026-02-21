import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Detecting Malware in Encrypted Traffic with Machine Learning",
    excerpt:
      "A deep dive into building SentinelTLS - a real-time threat detection system using Isolation Forest and Random Forest algorithms to identify malware and data exfiltration in encrypted network traffic with 92% accuracy.",
    category: "Machine Learning",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "/assets/blog/blog-1.jpg",
    tags: ["Machine Learning", "Python", "scikit-learn"],
    featured: true,
  },
  {
    id: 2,
    title: "Explainable AI with SHAP: Making ML Models Transparent",
    excerpt:
      "Learn how to use SHAP (SHapley Additive exPlanations) to interpret machine learning models. A practical guide from building the Student Dropout Prediction System for SIH 2025.",
    category: "Machine Learning",
    date: "2024-11-28",
    readTime: "7 min read",
    image: "/assets/blog/blog-2.jpg",
    tags: ["SHAP", "Explainable AI", "Python"],
    featured: true,
  },
  {
    id: 3,
    title: "Building AI-Powered HR-Tech with Next.js and OpenAI",
    excerpt:
      /*"How I built an automated resume relevance check system using Next.js, Express, and OpenAI API to semantically match resumes with job descriptions and generate ATS-friendly feedback.", */
      "I talk about how I used AI to help HR teams find the right candidates for any job faster.",
    category: "Web Development",
    date: "2024-11-10",
    readTime: "9 min read",
    image: "/assets/blog/blog-3.jpg",
    tags: ["Next.js", "OpenAI", "Supabase"],
    featured: false,
  },
  {
    id: 4,
    title: "Flask + MongoDB: Building Scalable Academic Portals",
    excerpt:
      /*"A comprehensive guide to building the SPPU Study Material Portal using Flask, MongoDB GridFS for file storage, and implementing secure authentication and metadata handling.", */
      "A guide on how I built a fast and easy website for students to find their study materials.",
    category: "Web Development",
    date: "2024-10-22",
    readTime: "10 min read",
    image: "/assets/blog/blog-4.jpg",
    tags: ["Flask", "MongoDB", "Python"],
    featured: false,
  },
  {
    id: 5,
    title: "From Hackathon to Production: Building a Blockchain Security Tool",
    excerpt:
      "Lessons learned from developing a blockchain-based website safety verifier that secured 5th rank in Build-A-Thon National Hackathon. Tips for aspiring developers.",
    category: "Career",
    date: "2024-10-05",
    readTime: "5 min read",
    image: "/assets/blog/blog-5.jpg",
    tags: ["Blockchain", "Hackathon", "Career"],
    featured: false,
  },
  {
    id: 6,
    title: "Network Traffic Analysis with Wireshark: A Practical Guide",
    excerpt:
      /*      "Learn how to analyze network traffic, identify suspicious patterns, and detect potential security threats using Wireshark and Nmap from my experience at 1Stop.ai.", */
      "I share a practical guide on how to watch over a network and find potential security threats.",
    category: "Cybersecurity",
    date: "2024-09-18",
    readTime: "8 min read",
    image: "/assets/blog/blog-6.jpg",
    tags: ["Wireshark", "Nmap", "Security"],
    featured: false,
  },
];

// Categories for filtering
const projectCategories = [
  "All",
  "Machine Learning",
  "Web Development",
  "Cybersecurity",
  "Career",
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section
      id="blog"
      className="relative py-16 sm:py-20 md:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-px bg-accent" />
              <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold">
                Blog
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-serif text-foreground leading-tight"
            >
              {/*Sharing <span className="italic text-accent">insights</span> on the future of <span className="italic text-accent">technology</span>. */}
              Sharing my <span className="italic text-accent">thoughts</span> and stories about <span className="italic text-accent">modern technology</span>.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-x-8 gap-y-4"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group relative text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${activeCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <span>{category}</span>
                <div className={`absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300 ${activeCategory === category ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </button>
            ))}
          </motion.div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-700" />

                <div className="absolute top-0 left-0 bg-foreground text-background px-4 py-2 text-[9px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Read Article
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] font-bold text-accent">
                  <span>{post.category}</span>
                  <span className="w-px h-2 bg-border" />
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-serif text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-border/50">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-foreground text-background text-xs uppercase tracking-[0.3em] font-bold rounded-none hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <span>View All Articles</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

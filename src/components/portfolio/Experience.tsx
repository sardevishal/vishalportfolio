import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Trophy } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Cyber Security Intern",
    company: "1Stop.ai",
    location: "Remote",
    period: "March 2025 – April 2025",
    description:
      "I worked on watching network traffic and helped find security weak spots. I also worked on making systems stronger and safer from online attacks.",
    achievements: [
      "Analyzed network traffic using Wireshark and Nmap",
      "Assisted in incident response and vulnerability assessments",
      "Contributed to system hardening and security improvement initiatives",
    ],
  },
  {
    type: "work",
    title: "Software Development Intern",
    company: "TechnoWings IT Solutions",
    location: "Solapur, Maharashtra",
    period: "June 2023 – July 2023",
    description:
      "I developed parts of mobile apps for Android phones. I created the screens that users see, set up how they move through the app, and connected the app to online data sources.",
    achievements: [
      "Built Android application modules using Java and Android Studio",
      "Implemented UI components, navigation flows, and form handling",
      "Integrated REST APIs and performed debugging using Logcat",
      "Collaborated with backend developers to align API responses with mobile UI",
    ],
  },
  {
    type: "training",
    title: "Cloud Computing & AWS Training",
    company: "Meraki Training Institute",
    location: "Pune, Maharashtra",
    period: "August 2025 – 2026",
    description:
      "Hands-on training where I learned how to use AWS cloud tools to build websites, manage security, and monitor how systems are working.",
    achievements: [
      "Launched and managed Linux EC2 instances with key pairs and security groups",
      "Designed VPC architecture with public/private subnets and Internet Gateway",
      "Hosted static websites using Amazon S3 with versioning and lifecycle policies",
      "Implemented IAM users, roles, and policies following least-privilege principles",
    ],
  },
  {
    type: "education",
    title: "B.E. Information Technology",
    company: "JSPMs Jayawantrao Sawant College of Engineering (JSCOE)",
    location: "Pune, Maharashtra",
    period: "Aug 2024 – May 2027",
    description:
      "Currently pursuing Bachelor of Engineering in Information Technology under SPPU with excellent academic performance.",
    achievements: [
      "CGPA: 8.91/10",
      "Focus on Android Development, Cloud & Cybersecurity",
      "Active participation in hackathons and tech events",
    ],
  },
  {
    type: "education",
    title: "Diploma in Information Technology",
    company: "SVERI's College of Engineering (Polytechnic)",
    location: "Pandharpur, Solapur",
    period: "July 2021 – May 2024",
    description:
      "Completed Diploma in Information Technology under MSBTE with distinction.",
    achievements: [
      "Percentage: 89.56%",
      "Lead Coordinator - Talent Hunt Event (200+ participants)",
      "Built Alumni Connect Web Portal for the college",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified solutions architect – associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
  },
  {
    name: "SQL Intermediate",
    issuer: "HackerRank",
    year: "2024",
  },
  {
    name: "Adobe India Hackathon",
    issuer: "Adobe",
    year: "Participant",
  },
];

const achievements = [
  {
    title: "Build-A-Thon National Hackathon",
    description: "Secured 5th rank for blockchain-based security solution",
    icon: Trophy,
  },
  {
    title: "Lead Coordinator - Talent Hunt",
    description: "Managed 200+ participants across multiple competitions",
    icon: Award,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-6 block"
          >
            History
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl font-serif text-foreground leading-tight"
          >
            A journey of <span className="italic text-accent">continuous</span> growth and <span className="italic text-accent">learning</span>.
          </motion.h2>
        </div>

        <div ref={ref} className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-24 items-start"
            >
              <div className="space-y-4">
                <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold">
                  {exp.period}
                </span>
                <div className="flex items-center gap-3">
                  {exp.type === "work" ? (
                    <Briefcase size={16} className="text-muted-foreground" />
                  ) : exp.type === "training" ? (
                    <Award size={16} className="text-muted-foreground" />
                  ) : (
                    <GraduationCap size={16} className="text-muted-foreground" />
                  )}
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-serif text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-accent/80 font-serif italic">
                    {exp.company} — {exp.location}
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="w-1 h-1 bg-accent mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Awards Section */}
        <div className="mt-48 grid lg:grid-cols-2 gap-24 border-t border-border pt-24">
          <div>
            <h3 className="text-3xl font-serif text-foreground mb-12 italic text-accent">Certifications</h3>
            <div className="space-y-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex justify-between items-end border-b border-border pb-4 group">
                  <div>
                    <p className="text-lg text-foreground group-hover:text-accent transition-colors">{cert.name}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-serif text-foreground mb-12 italic text-accent">Recognitions</h3>
            <div className="space-y-8">
              {achievements.map((ach) => (
                <div key={ach.title} className="flex justify-between items-end border-b border-border pb-4 group">
                  <div>
                    <p className="text-lg text-foreground group-hover:text-accent transition-colors">{ach.title}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{ach.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Achievement</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

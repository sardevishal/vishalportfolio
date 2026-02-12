import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vishalsarde2@gmail.com",
    href: "mailto:vishalsarde2@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8983632732",
    href: "tel:+918983632732",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sardevishal",
    username: "@sardevishal",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-sarde-679b63328/",
    username: "/in/vishal-sarde",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCnKT35g4BPF7aYcTXWY-4aA",
    username: "@vishal_sarde",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:vishalsarde2@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Simulate delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Opening email client!", {
      description: "Please send the email to complete your message.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-6 block"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-serif text-foreground leading-tight mb-12"
            >
              Let's create something <span className="text-accent italic">extraordinary</span> together.
            </motion.h2>

            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="text-xl text-foreground hover:text-accent transition-colors font-serif italic"
                    >
                      {item.value}
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="pt-12 border-t border-border">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-8">
                  Follow
                </p>
                <div className="flex flex-wrap gap-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <social.icon size={16} />
                      <span className="uppercase tracking-widest text-[10px]">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30"
                    placeholder="Vishal Sarde"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30"
                    placeholder="vishal@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30"
                  placeholder="Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/30 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-foreground text-background text-xs uppercase tracking-[0.3em] font-bold rounded-none hover:bg-accent hover:text-accent-foreground transition-all duration-300 disabled:opacity-50"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

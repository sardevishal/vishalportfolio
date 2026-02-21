import { createFileRoute } from "@tanstack/react-router";
import {
  Navigation,
  Hero,
  About,
  Skills,
  Projects,
  Blog,
  Experience,
  Contact,
  Footer,
} from "@/components/portfolio";

export const Route = createFileRoute("/_public/")({
  component: Portfolio,
  head: () => ({
    meta: [
      {
        title: "Vishal Sarde | Cloud Architect & Web Developer",
      },
      {
        name: "description",
        content:
          "Portfolio of Vishal Sarde - Cloud Architect & Web Developer specialized in building secure, scalable applications and elegant digital experiences.",
      },
    ],
  }),
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

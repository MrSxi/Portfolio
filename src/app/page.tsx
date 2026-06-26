import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
}

import About from "../components/About";
import Project from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="container mx-auto" >
      <About />
      <Project />
      <Skills/>
      <Experience/>
      <Certification/>
      <Contact/>
    </main>
  );
}

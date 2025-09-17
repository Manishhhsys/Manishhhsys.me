import { DotPattern } from "@/components/magicui/dot-pattern";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import { Aboutme } from "@/components/aboutmr";
import Footer from "@/components/footer";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-full ">
      
      <GridPattern className="absolute inset-0 h-full w-full -z-10 [mask-image:radial-gradient(circle,white,transparent)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:100%]  "  strokeDasharray="0"/>
      <div className=" relative z-10 w-full max-w-5xl md:ml-0 lg:mx-auto transition-all duration-500 ease-in-out ">
        <Navbar />
        <Hero />
         <section id="projects" className="scroll-mt-20">
    <Projects />
  </section>
      <section id="about-me">
          <Aboutme />
      </section>
        
        <Footer />
      </div>
    </div>
  );
}

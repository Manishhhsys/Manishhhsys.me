

import { DotPattern } from "@/components/magicui/dot-pattern";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import { Aboutme } from "@/components/aboutmr";
export default function Home() {
  return (
      <div className="md:px-50">
        {/* <DotPattern className=" md:px-50"></DotPattern> */}
        <Navbar ></Navbar>
        <Hero></Hero>
        <Projects></Projects>
        <Aboutme></Aboutme>
      </div>
  );
}

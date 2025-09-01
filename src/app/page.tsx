

import { DotPattern } from "@/components/magicui/dot-pattern";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
export default function Home() {
  return (
      <div className="md:px-50">
        <Navbar ></Navbar>
        <DotPattern className=" md:px-50"></DotPattern>
        <Hero></Hero>
      </div>
  );
}

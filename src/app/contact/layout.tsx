import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen max-w-full">
      <GridPattern
        className="absolute inset-0 h-full w-full -z-10 [mask-image:radial-gradient(circle,white,transparent)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:100%]"
        strokeDasharray="0"
      />
      <div className="relative z-10 w-full max-w-5xl lg:mx-auto  md:px-0 transition-all duration-500 ease-in-out">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

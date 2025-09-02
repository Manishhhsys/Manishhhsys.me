"use client"

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

function Projects() {
  return (
    <div className="w-full h-full ml-7">
      <div className="sm:text-lg font-medium pb-4">Projects</div>

      <div className="w-[80%] sm:w-[90%]">
        <Card className="w-full flex flex-col sm:flex-row items-center overflow-hidden rounded-lg">
          {/* Left Image */}
          <div className="relative w-full sm:w-1/2 h-48">
            <Image
              src={"/Generated Image August 31, 2025 - 8_22PM.jpeg"}
              alt="test"
              fill
              className="object-cover sm:rounded-lg sm:ml-2 mb-2 rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full sm:w-1/2 flex flex-col p-4 gap-4">
            <CardContent className="p-0">
              <CardTitle className="mb-2">Project Title</CardTitle>
              <CardDescription>Hiiii</CardDescription>
            </CardContent>

            {/* Desktop Footer (Live + GitHub inline) */}
            <CardFooter className="p-0 gap-2 hidden sm:flex">
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://your-live-link.com", "_blank")
                }
              >
                Live Demo
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/your-repo", "_blank")
                }
              >
                GitHub
              </Button>
            </CardFooter>

            {/* Mobile Footer (GitHub in its own row) */}
            <CardFooter className="p-0 flex sm:hidden">
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/your-repo", "_blank")
                }
                className="w-full"
              >
                GitHub
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Projects

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
import { projectinfo } from "@/config/projectconfig"

function Projects() {
  return (
    <div className="w-full h-full ml-7">
      <div className="sm:text-lg font-medium pb-4">Projects</div>

      {projectinfo.map((data, index) => (
        <div key={index} className="w-[80%] sm:w-[90%] mb-6">
          <Card className="w-full flex flex-col sm:flex-row items-center overflow-hidden rounded-lg bg-card text-card-foreground shadow-md">
            
            {/* Image Section */}
            <div className="relative w-full sm:w-1/2 h-48 bg-muted flex items-center justify-center m-2 rounded-lg">
              <Image
                src={data.imageurl}
                alt={data.title}
                fill
                className="object-contain rounded-lg p-2"
              />
            </div>

            {/* Content Section */}
            <div className="w-full sm:w-1/2 flex flex-col p-4 gap-4">
              <CardContent className="p-0">
                <CardTitle className="mb-2">{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {data.icons.map((Icon, key) => (
                    <div
                      key={key}
                      className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 text-sm font-medium"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Desktop Footer */}
              <CardFooter className="p-0 gap-2 hidden sm:flex">
                {data.liveurl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(data.liveurl, "_blank")}
                  >
                    Live Demo
                  </Button>
                )}
                {data.github && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(data.github, "_blank")}
                  >
                    GitHub
                  </Button>
                )}
              </CardFooter>

              {/* Mobile Footer */}
              <CardFooter className="p-0 flex sm:hidden">
                {data.github && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(data.github, "_blank")}
                    className="w-full"
                  >
                    GitHub
                  </Button>
                )}
              </CardFooter>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Projects

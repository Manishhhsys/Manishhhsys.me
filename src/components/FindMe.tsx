"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, X } from "lucide-react"

export function FindMe() {
  return (
    <div className="flex gap-3 w-full h-full ml-7 flex-col">
      <div className="font-medium mb-2">Find me around the web:</div>
      <div className="flex gap-3">
       
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            window.open("https://github.com/Manishhhsys", "_blank")
          }}
          className="rounded-full"
        >
          <Github className="h-5 w-5" />
        </Button>

        
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            window.open("https://www.linkedin.com/in/manishhhsys/", "_blank")
          }}
          className="rounded-full"
        >
          <Linkedin className="h-5 w-5" />
        </Button>

       
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            window.location.href = "mailto:manishku073@gmail.com"
          }}
          className="rounded-full"
        >
          <Mail className="h-5 w-5" />
        </Button>

       
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            window.open("https://x.com/manishhhsys", "_blank")
          }}
          className="rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

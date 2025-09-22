"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import React from "react"
import { LucideDownload, LucideSend } from "lucide-react"
import { Button } from "./ui/button"
import { GlowLine } from "./ui/glow-line"
import { FindMe } from "./FindMe"

export default function Hero() {
  return (
    <div>
      <div className="w-full h-full
     flex items-center justify-start px-5 py-5 m-5 ">
        <div className="mr-5">
          <Avatar className="size-24">
            <AvatarImage src="/Generated Image August 31, 2025 - 8_22PM.jpeg" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
        </div>
        <div className="h-full w-full flex flex-col gap-2">
          <div className="text-2xl font-bold">
            Manish Kumar
          </div>
          <div className="italic">
            <Link href="https://x.com/manishhhsys" rel="noopener noreferrer" target="_blank">@manishhhsys</Link>
          </div>
        </div >

      </div>
      <div className="w-full h-full px-2 py-2 ml-7 sm:text-lg text-md font-medium ">Turning ideas into full-stack web apps.</div>
        <div className="w-full h-10 px-2 py-2 ml-7 gap-5 flex">
          <Button variant={"default"} onClick={() => {
            window.open("https://x.com/manishhhsys", "_blank")
          }}>Open For Work <LucideSend></LucideSend></Button>
          <Button variant={"default"}  onClick={()=>{
            window.open("https://drive.google.com/file/d/1RMER7oAW9vni0qqSa91HLt_S72q36IdA/view?usp=sharing","_blank")
          }}>Download CV <LucideDownload></LucideDownload></Button>
        </div>
        <GlowLine></GlowLine>
        <FindMe></FindMe>
        <GlowLine></GlowLine>
    </div>
  )
}

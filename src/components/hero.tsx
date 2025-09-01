"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import React from "react"

export default function Hero() {
  return (
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
  )
}

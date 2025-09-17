'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { navbarConfig } from '@/config/navbarconfig'
import { Button } from './ui/button'
import { LucideSun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="w-full h-13 bg-sidebar-accent gap-3 flex justify-between items-center sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      
      
      <NavigationMenu>
        <NavigationMenuList>
          {navbarConfig.navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
              
                <Link href={item.href} scroll={true}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

     
      <div className="w-[10%] flex justify-end items-center mx-2 my-2">
        {mounted && (
          <Button
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <LucideSun /> : <Moon />}
          </Button>
        )}
      </div>
    </div>
  )
}

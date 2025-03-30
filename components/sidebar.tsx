"use client"

import { useState } from "react"
import { Calendar, Home, Music, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard")

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "dashboard", icon: Calendar, label: "Dashboard" },
    { id: "music", icon: Music, label: "Music" },
    { id: "settings", icon: Settings, label: "Settings" },
  ]

  return (
    <div className="w-16 md:w-20 h-full bg-[#15151f]/80 backdrop-blur-md border-r border-[#ffffff]/5 flex flex-col items-center py-6 z-10">
      <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-10">
        <div className="w-6 h-6 rounded-full bg-cyan-400 animate-pulse" />
      </div>

      <nav className="flex-1 flex flex-col items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={cn(
              "relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
              activeItem === item.id
                ? "bg-cyan-500/20 text-cyan-400"
                : "bg-[#ffffff]/5 text-[#ffffff]/60 hover:bg-[#ffffff]/10",
            )}
          >
            <item.icon size={20} />
            {activeItem === item.id && (
              <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-cyan-400 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}


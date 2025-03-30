"use client"

import { useState, useEffect } from "react"
import { Sun } from "lucide-react"

interface TopBarProps {
  currentTime: Date
}

export function TopBar({ currentTime }: TopBarProps) {
  const [greeting, setGreeting] = useState("Good Morning")

  useEffect(() => {
    const hour = currentTime.getHours()
    if (hour < 12) setGreeting("Good Morning")
    else if (hour < 18) setGreeting("Good Afternoon")
    else setGreeting("Good Evening")
  }, [currentTime])

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  const formattedDate = currentTime.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="h-20 border-b border-[#ffffff]/5 bg-[#15151f]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-xl md:text-2xl font-bold">
        <span className="text-[#ffffff]/80">{greeting},</span> <span className="text-cyan-400">Joe</span>
      </h1>

      <div className="hidden md:flex flex-col items-center">
        <div className="text-xl font-bold text-[#ffffff]/90">{formattedTime}</div>
        <div className="text-sm text-[#ffffff]/60">{formattedDate}</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#1a1a2e] px-3 py-1.5 rounded-full">
          <Sun size={18} className="text-yellow-400" />
          <span className="font-medium">72°F</span>
        </div>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
          <span className="text-sm font-bold">JD</span>
        </div>
      </div>
    </header>
  )
}


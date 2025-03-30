"use client"

import { useState, useEffect } from "react"
import { TaskList } from "./components/task-list"
import { ScheduleCard } from "./components/schedule-card"
import { CalendarWidget } from "./components/calendar-widget"
import { TrafficMap } from "./components/traffic-map"
import { WeatherWidget } from "./components/weather-widget"
import { TopBar } from "./components/top-bar"
import { Sidebar } from "./components/sidebar"

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex h-screen w-full bg-[#101018] text-[#ffffff] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar currentTime={currentTime} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <TaskList />
              <ScheduleCard />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <CalendarWidget />
              <TrafficMap />
              <WeatherWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


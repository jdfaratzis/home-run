"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const events = [
  { date: new Date(2025, 2, 15), title: "Project Deadline", time: "All day" },
  { date: new Date(2025, 2, 15), title: "Team Lunch", time: "12:30 PM" },
  { date: new Date(2025, 2, 18), title: "Client Meeting", time: "2:00 PM" },
]

export function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 15)) // March 15, 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 2, 15))

  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayOfWeek = firstDayOfMonth.getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(year, month, day))
  }

  const selectedDateEvents = events.filter(
    (event) =>
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear(),
  )

  const days = []
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return (
    <div className="rounded-2xl bg-[#15151f]/80 backdrop-blur-md border border-[#ffffff]/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)] calendar-widget">
      <div className="p-5 border-b border-[#ffffff]/5 flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center">
          <span className="text-cyan-400 mr-2">•</span> Calendar
        </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={prevMonth}
            className="w-8 h-8 rounded-full bg-[#ffffff]/5 flex items-center justify-center hover:bg-[#ffffff]/10 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="font-medium">
            {MONTHS[month]} {year}
          </div>
          <button
            onClick={nextMonth}
            className="w-8 h-8 rounded-full bg-[#ffffff]/5 flex items-center justify-center hover:bg-[#ffffff]/10 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-[#ffffff]/60">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <button
              key={index}
              disabled={day === null}
              onClick={() => day !== null && handleDateClick(day)}
              className={cn(
                "h-10 rounded-lg flex items-center justify-center text-sm transition-all",
                day === null ? "invisible" : "hover:bg-[#ffffff]/10",
                day === selectedDate.getDate() &&
                  month === selectedDate.getMonth() &&
                  year === selectedDate.getFullYear()
                  ? "bg-cyan-500/20 text-cyan-400 font-medium"
                  : "bg-[#ffffff]/5",
              )}
            >
              {day}
              {day !== null &&
                events.some(
                  (event) =>
                    event.date.getDate() === day &&
                    event.date.getMonth() === month &&
                    event.date.getFullYear() === year,
                ) && <span className="absolute bottom-1 w-1 h-1 rounded-full bg-cyan-400"></span>}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-medium text-[#ffffff]/70">
            Events for {selectedDate.toLocaleDateString([], { month: "long", day: "numeric" })}
          </h3>

          {selectedDateEvents.length > 0 ? (
            <div className="space-y-2">
              {selectedDateEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-lg bg-[#ffffff]/5 border border-[#ffffff]/10">
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm text-[#ffffff]/50">{event.time}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3 rounded-lg bg-[#ffffff]/5 border border-[#ffffff]/10 text-[#ffffff]/50 text-sm">
              No events scheduled
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


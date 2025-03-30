"use client"

import { Check, Clock, FileText } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const tasks = [
  {
    id: 1,
    title: "Finish dashboard design",
    completed: false,
    icon: FileText,
    priority: "high",
  },
  {
    id: 2,
    title: "Team meeting",
    completed: false,
    icon: Clock,
    time: "11:00 AM",
    priority: "medium",
  },
  {
    id: 3,
    title: "Review project proposal",
    completed: false,
    icon: FileText,
    priority: "low",
  },
]

export function TaskList() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([])

  const toggleTask = (id: number) => {
    setCompletedTasks((prev) => (prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]))
  }

  return (
    <div className="rounded-2xl bg-[#15151f]/80 backdrop-blur-md border border-[#ffffff]/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)] task-list">
      <div className="p-5 border-b border-[#ffffff]/5">
        <h2 className="text-xl font-bold flex items-center">
          <span className="text-cyan-400 mr-2">•</span> Tasks
        </h2>
      </div>

      <div className="p-5 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl transition-all duration-300",
              completedTasks.includes(task.id) ? "bg-green-500/10 line-through text-[#ffffff]/50" : "bg-[#ffffff]/5",
            )}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                completedTasks.includes(task.id) ? "border-green-500 bg-green-500/20" : "border-[#ffffff]/20",
              )}
            >
              {completedTasks.includes(task.id) && <Check size={14} className="text-green-500" />}
            </button>

            <div className="flex-1">
              <div className="font-medium">{task.title}</div>
              {task.time && <div className="text-sm text-[#ffffff]/50">{task.time}</div>}
            </div>

            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                task.priority === "high"
                  ? "bg-red-500/20 text-red-400"
                  : task.priority === "medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400",
              )}
            >
              <task.icon size={16} />
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-[#ffffff]/5">
        <button className="w-full py-2 rounded-lg bg-[#ffffff]/5 hover:bg-[#ffffff]/10 transition-all duration-300 text-sm font-medium">
          View All Tasks
        </button>
      </div>
    </div>
  )
}


import { Video, Brain, MapPin } from "lucide-react"

const scheduleEvents = [
  {
    id: 1,
    time: "10:00 AM",
    title: "Team Meeting",
    location: "Zoom Call",
    icon: Video,
    color: "blue",
  },
  {
    id: 2,
    time: "12:30 PM",
    title: "Brainstorming Session",
    location: "Conference Room",
    icon: Brain,
    color: "purple",
  },
  {
    id: 3,
    time: "3:00 PM",
    title: "Client Presentation",
    location: "Downtown Office",
    icon: MapPin,
    color: "green",
  },
]

export function ScheduleCard() {
  return (
    <div className="rounded-2xl bg-[#15151f]/80 backdrop-blur-md border border-[#ffffff]/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)] schedule">
      <div className="p-5 border-b border-[#ffffff]/5">
        <h2 className="text-xl font-bold flex items-center">
          <span className="text-cyan-400 mr-2">•</span> Today's Schedule
        </h2>
      </div>

      <div className="p-5 space-y-4">
        {scheduleEvents.map((event) => (
          <div key={event.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium text-[#ffffff]/70">{event.time}</div>
              <div className="flex-1 w-px bg-gradient-to-b from-[#ffffff]/20 to-transparent my-2"></div>
            </div>

            <div className="flex-1 p-4 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    event.color === "blue"
                      ? "bg-blue-500/20 text-blue-400"
                      : event.color === "purple"
                        ? "bg-purple-500/20 text-purple-500"
                        : "bg-green-500/20 text-green-400"
                  }`}
                >
                  <event.icon size={16} />
                </div>
                <div>
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm text-[#ffffff]/50">{event.location}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


import { Cloud, CloudRain, Sun, Sunrise, Sunset } from "lucide-react"

const hourlyForecast = [
  { time: "Now", temp: 72, icon: Sun },
  { time: "1PM", temp: 74, icon: Sun },
  { time: "2PM", temp: 75, icon: Sun },
  { time: "3PM", temp: 74, icon: Cloud },
  { time: "4PM", temp: 72, icon: Cloud },
  { time: "5PM", temp: 70, icon: CloudRain },
  { time: "6PM", temp: 68, icon: CloudRain },
]

export function WeatherWidget() {
  return (
    <div className="rounded-2xl bg-[#15151f]/80 backdrop-blur-md border border-[#ffffff]/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)] weather-widget">
      <div className="p-5 border-b border-[#ffffff]/5">
        <h2 className="text-xl font-bold flex items-center">
          <span className="text-cyan-400 mr-2">•</span> Weather
        </h2>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">72°F</div>
            <div className="text-[#ffffff]/60">Partly Cloudy</div>
            <div className="text-sm text-[#ffffff]/60 mt-1">San Francisco, CA</div>
          </div>

          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/20 to-blue-400/20 flex items-center justify-center">
            <Sun size={40} className="text-yellow-400 animate-pulse" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-[#ffffff]/60 text-sm">
          <div className="flex items-center gap-1">
            <Sunrise size={16} />
            <span>6:42 AM</span>
          </div>
          <div className="flex items-center gap-1">
            <Sunset size={16} />
            <span>7:58 PM</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm font-medium text-[#ffffff]/70 mb-3">Hourly Forecast</div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {hourlyForecast.map((item, index) => (
              <div key={index} className="flex flex-col items-center min-w-[50px]">
                <div className="text-sm text-[#ffffff]/70">{item.time}</div>
                <div className="my-2">
                  <item.icon
                    size={20}
                    className={
                      item.icon === Sun
                        ? "text-yellow-400"
                        : item.icon === CloudRain
                          ? "text-blue-400"
                          : "text-[#ffffff]/70"
                    }
                  />
                </div>
                <div className="text-sm font-medium">{item.temp}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


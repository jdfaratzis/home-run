import { MapPin } from "lucide-react"

export function TrafficMap() {
  return (
    <div className="rounded-2xl bg-[#15151f]/80 backdrop-blur-md border border-[#ffffff]/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)] traffic-map">
      <div className="p-5 border-b border-[#ffffff]/5">
        <h2 className="text-xl font-bold flex items-center">
          <span className="text-cyan-400 mr-2">•</span> Traffic
        </h2>
      </div>

      <div className="relative">
        <div className="h-48 bg-[#1a1a2e] relative overflow-hidden">
          {/* Simplified map visualization */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#ffffff]/20"></div>
            <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-[#ffffff]/20"></div>
            <div className="absolute top-0 bottom-0 left-2/4 w-0.5 bg-[#ffffff]/20"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-[#ffffff]/20"></div>
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-[#ffffff]/20"></div>
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-[#ffffff]/20"></div>
          </div>

          {/* Route visualization */}
          <div className="absolute top-1/2 left-6 right-6 h-3 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 transform -translate-y-1/2 opacity-70"></div>

          {/* Start point */}
          <div className="absolute top-1/2 left-6 w-6 h-6 rounded-full bg-blue-500/80 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#ffffff]"></div>
          </div>

          {/* End point */}
          <div className="absolute top-1/2 right-6 w-6 h-6 rounded-full bg-cyan-500/80 transform -translate-y-1/2 translate-x-1/2 flex items-center justify-center">
            <MapPin size={14} className="text-[#ffffff]" />
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#ffffff]/60">Estimated Time</div>
              <div className="text-2xl font-bold text-[#ffffff]">28 min</div>
            </div>

            <div className="text-right">
              <div className="text-sm text-[#ffffff]/60">Distance</div>
              <div className="text-lg font-medium text-[#ffffff]">12.4 miles</div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs text-[#ffffff]/60">Clear</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="text-xs text-[#ffffff]/60">Moderate</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-xs text-[#ffffff]/60">Heavy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


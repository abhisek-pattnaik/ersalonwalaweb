
export default function Booking_overview() {
  return (
     <>
    <div className="bg-[#0b111e] text-white p-7 rounded-2xl w-full border border-slate-800 shadow-2xl font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-medium tracking-wide text-slate-200">Bookings Overview</h2>
        <button className="p-2 bg-[#171f33] rounded-lg border border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-700/40 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </button>
      </div>

      {/* Chart Container */}
      <div className="relative h-64 w-full">
        {/* Tooltip */}
        <div className="absolute top-[18%] left-[68%] -translate-x-1/2 bg-[#141c2e]/90 border border-slate-700/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] flex flex-col items-start z-10">
          <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase mb-0.5">
            Oct 14 Peak
          </span>
          <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            284 Bookings
          </span>
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-[#141c2e] border-r border-b border-slate-700/80"></div>
        </div>

        {/* SVG Area Chart */}
        <svg
          viewBox="0 0 800 280"
          className="w-full h-full overflow-visible select-none"
        >
          <defs>
            {/* Gradient fill under the curve */}
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.0" />
            </linearGradient>

            {/* Linear gradient for the line itself */}
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.1" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#3b82f6" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Area Chart Path */}
          <path
            d="M 0,180 C 150,220 250,100 400,200 C 520,270 610,60 680,180 L 800,280 L 0,280 Z"
            fill="url(#areaGradient)"
          />

          {/* Line Chart Path */}
          <path
            d="M 0,180 C 150,220 250,100 400,200 C 520,270 610,60 680,180"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Active Peak Indicator Dot */}
          <circle 
            cx="680" 
            cy="180" 
            r="6" 
            className="fill-blue-400 stroke-[#0b111e] stroke-2 animate-pulse" 
          />
        </svg>
      </div>
    </div> 
   
   </>
  )
}

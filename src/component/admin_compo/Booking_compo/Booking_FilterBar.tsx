
export default function Booking_FilterBar() {
  return (
    <div className=" flex items-center justify-center p-2 font-sans">
      
      {/* Filter Bar Container */}
      <div className="w-full  bg-[#0f1523] border border-[#1e2738] rounded-2xl p-2 flex flex-col md:flex-row md:items-center justify-between ">
        
        {/* Left Section: Filters Label */}
        <div className="flex items-center gap-3 text-slate-400">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="text-sm font-medium">Filters:</span>
        </div>

        {/* Center Section: Filter Items */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* City Pill */}
          <div className="flex items-center px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300">
            City: Dubai
          </div>

          {/* Outlet Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3 cursor-pointer hover:bg-[#1f2a40] transition-colors">
            <span>Outlet: Marina HQ</span>
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Date Range Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Oct 12 - Oct 19, 2023</span>
          </div>

          {/* Type Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3 cursor-pointer hover:bg-[#1f2a40] transition-colors">
            <span>Type: All Bookings</span>
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Status Pill */}
          <div className="flex items-center px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300">
            Status: Confirmed
          </div>

        </div>

        {/* Right Section: Reset Filters */}
        <button className="flex items-center justify-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors py-2 px-3 hover:bg-sky-500/10 rounded-xl">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1022 12h-4.5" />
          </svg>
          Reset Filters
        </button>

      </div>
      
    </div>
  )
}

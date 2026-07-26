
export default function Recent_complinc_Audit() {
  return (
    <div className="md:p-2  flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-7xl">
        
        {/* Left Section - Recent Compliance Audit */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:col-span-2 backdrop-blur-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-white">Recent Compliance Audit</h2>
              <a 
                href="#" 
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors group"
              >
                View Full Log 
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">&rarr;</span>
              </a>
            </div>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/50 px-5 py-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300 font-medium text-sm md:text-base">
                    <span className="text-slate-500 font-normal">"Luxe Precision"</span> License Verified
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">2 Hours Ago</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/50 px-5 py-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span className="text-slate-300 font-medium text-sm md:text-base">
                    <span className="text-slate-500 font-normal">"Velocity Barbers"</span> Subscription Expired
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">5 Hours Ago</span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/50 px-5 py-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="text-slate-300 font-medium text-sm md:text-base">
                    New Salon Registration: <span className="text-slate-500 font-normal">"Cyber Fade"</span>
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Network Health */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-between text-center backdrop-blur-sm min-h-[300px]">
          <div className="flex flex-col items-center w-full">
            <div className="relative mb-5">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Network Health</h3>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed mb-6">
              Your current salon ecosystem is performing at <span className="text-emerald-400 font-semibold">98.2%</span> efficiency with minimal document backlog.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full mt-auto">
            <div className="h-1.5 w-full bg-slate-950 border border-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                style={{ width: '98.2%' }}
              ></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

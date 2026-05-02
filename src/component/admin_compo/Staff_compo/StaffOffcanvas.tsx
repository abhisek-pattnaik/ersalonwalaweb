export default function StaffOffcanvas({ isOpen, onClose }: { isOpen: boolean,onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={()=>{onClose()} }
      />

      {/* Offcanvas Panel */}
      <div className="relative w-full max-w-xl h-full bg-[#0b0f19]/85 border-l border-slate-800/80 p-6 md:p-8 overflow-y-auto shadow-2xl">
        
        {/* Close Button Header */}
        <div className="flex justify-end mb-4">
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-white bg-slate-950/60 border border-slate-900 hover:border-slate-800 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Profile Header Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-900/80 mb-8">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
              alt="Profile" 
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-slate-800/60 shadow-xl" 
            />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0b0f19]"></span>
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-1.5 flex-wrap justify-center sm:justify-start">
              <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 bg-slate-800/60 border border-slate-700/40 text-slate-300 rounded-lg uppercase">
                Active
              </span>
              <span className="text-xs text-slate-500">Joined Nov 2023</span>
            </div>
            <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Change profile photo
            </button>
          </div>
        </div>

        {/* Form Fields Section */}
        <div className="space-y-6">
          
          {/* Full Name & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[9px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                defaultValue="Alexander Wright" 
                className="w-full px-4 py-3 bg-[#0f172a]/60 border border-slate-800/80 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-[9px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                Role
              </label>
              <div className="relative">
                <select 
                  defaultValue="Senior Stylist" 
                  className="w-full px-4 py-3 bg-[#0f172a]/60 border border-slate-800/80 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 appearance-none transition-all"
                >
                  <option>Senior Stylist</option>
                  <option>Master Barber</option>
                  <option>Colorist Specialist</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[9px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.547 2.2a1 1 0 01-.32 1.006l-1.406 1.135a11.366 11.366 0 004.832 4.832l1.135-1.406a1 1 0 011.006-.32l2.2.547a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C8.477 20.98 3.02 15.523 3 10V5z" />
                  </svg>
                </span>
                <input 
                  type="tel" 
                  defaultValue="+1 (555) 0123" 
                  className="w-full pl-11 pr-4 py-3 bg-[#0f172a]/60 border border-slate-800/80 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12z" />
                  </svg>
                </span>
                <input 
                  type="email" 
                  defaultValue="alex.wrlon.com" 
                  className="w-full pl-11 pr-4 py-3 bg-[#0f172a]/60 border border-slate-800/80 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Assigned Outlet & Specialization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[9px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                Assigned Outlet
              </label>
              <div className="relative">
                <select 
                  defaultValue="Downtown Flagship" 
                  className="w-full px-4 py-3 bg-[#0f172a]/60 border border-slate-800/80 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 appearance-none transition-all"
                >
                  <option>Downtown Flagship</option>
                  <option>Marina HQ</option>
                  <option>Tech Hub Salon</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-bold tracking-widest text-slate-500 uppercase mb-2">
                Specialization
              </label>
              <input 
                type="text" 
                defaultValue="Precision Cutting, Balayage" 
                className="w-full px-4 py-3 bg-[#0f172a]/60 border border-slate-800/80 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all"
              />
            </div>
          </div>

          {/* Working Hours & Shifts */}
          <div className="p-5 bg-[#0f172a]/40 border border-slate-900/60 rounded-2xl mt-4">
            <h4 className="text-[10px] font-bold tracking-wider text-slate-400 mb-4">WORKING HOURS</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[9px] font-bold text-slate-500 mb-1.5 uppercase">Start Time</label>
                <div className="relative">
                  <input 
                    type="time" 
                    defaultValue="09:00" 
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/40"
                  />
                  <span className="absolute inset-y-0 right-4 flex items-center text-slate-600 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-bold text-slate-500 mb-1.5 uppercase">End Time</label>
                <div className="relative">
                  <input 
                    type="time" 
                    defaultValue="18:00" 
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-900 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-blue-500/40"
                  />
                  <span className="absolute inset-y-0 right-4 flex items-center text-slate-600 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Shift Days */}
            <div className="flex flex-wrap gap-1.5">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                <button 
                  key={idx} 
                  className={`text-xs font-medium px-3 py-2 rounded-xl border transition-all ${
                    ['Thu', 'Fri'].includes(day) 
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                      : 'bg-slate-950/40 text-slate-500 border-slate-900/60 hover:text-slate-300'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Staff Status Toggle */}
          <div className="flex items-center justify-between p-5 bg-[#0f172a]/40 border border-slate-900/60 rounded-2xl">
            <div>
              <h5 className="text-sm font-semibold text-white mb-0.5">Staff Status</h5>
              <p className="text-[10px] text-slate-500 leading-relaxed max-w-xs">
                Enable or disable booking for this staff member
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Action Footer */}
          <div className="flex gap-3 pt-4 border-t border-slate-900/80 mt-8">
            <button 
              onClick={()=>{onClose()} }
              className="flex-1 py-3 text-sm font-semibold text-slate-400 bg-slate-950/60 border border-slate-900 rounded-xl hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-[0_4px_20px_-4px_rgba(59,130,246,0.5)] transition-all">
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
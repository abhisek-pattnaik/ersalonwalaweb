
export default function Fraches_card() {
  const stats = [
    {
      id: 1,
      title: 'Total Franchise Partners',
      value: '42',
      badge: '+12%',
      badgeColor: 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Active Partners',
      value: '38',
      badge: 'Active',
      badgeColor: 'text-amber-500 bg-amber-950/40 border border-amber-800/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Pending Approval',
      value: '4',
      badge: 'Action Needed',
      badgeColor: 'text-amber-500 bg-amber-950/40 border border-amber-800/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Total Outlets',
      value: '310',
      badge: 'Global Network',
      badgeColor: 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
  ];
  return (
   <>
   <div className=" p-1 w-full font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#101726] border border-slate-800/80 p-6 rounded-2xl shadow-xl flex flex-col justify-between h-44 transition-all duration-200 hover:border-slate-700/60"
          >
            {/* Top Row: Icon and Badge */}
            <div className="flex justify-between items-start">
              <div className="p-3 bg-[#172133] rounded-xl border border-slate-800/40 shadow-inner">
                {stat.icon}
              </div>
              <span className={`text-[11px] font-semibold tracking-wide px-3 py-1 rounded-md ${stat.badgeColor}`}>
                {stat.badge}
              </span>
            </div>

            {/* Bottom Row: Title and Value */}
            <div>
              <p className="text-[10px] font-medium tracking-widest text-slate-500 uppercase mb-2">
                {stat.title}
              </p>
              <p className="text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}


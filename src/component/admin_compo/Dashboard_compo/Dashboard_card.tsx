
export default function Dashboard_card() {
     const statsData = [
    {
      id: 1,
      title: 'Total Salons',
      value: '128',
      badge: '+12%',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <circle cx="6" cy="6" r="3"/>
          <path d="M8.12 8.12 12 12"/>
          <circle cx="18" cy="6" r="3"/>
          <circle cx="6" cy="18" r="3"/>
          <path d="M18 9a4 4 0 0 0-4 4v1"/>
          <path d="m14 15-4-4"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Franchise Partners',
      value: '42',
      badge: '+5%',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Total Outlets',
      value: '310',
      badge: 'Steady',
      badgeColor: 'text-slate-400 bg-slate-500/10 border border-slate-500/20',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Total Bookings',
      value: '4,829',
      badge: '+24%',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Revenue Overview',
      value: '$142,500',
      badge: '+18%',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <rect width="20" height="14" x="2" y="5" rx="2"/>
          <line x1="2" x2="22" y1="10" y2="10"/>
        </svg>
      ),
    },
  ];
  return (
    <>
    <div className=" p-2 w-full font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#101726] border border-slate-800/80 p-6 rounded-2xl shadow-xl flex flex-col justify-between h-40 transition-all duration-200 hover:border-slate-700/60"
          >
            {/* Top Row: Icon and Badge */}
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-[#172133] rounded-xl border border-slate-800/40 shadow-inner">
                {stat.icon}
              </div>
              <span className={`text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-md ${stat.badgeColor}`}>
                {stat.badge}
              </span>
            </div>

            {/* Bottom Row: Title and Value */}
            <div>
              <p className="text-[10px] font-medium tracking-widest text-slate-500 uppercase mb-1">
                {stat.title}
              </p>
              <p className="text-2xl font-bold tracking-tight text-white">
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

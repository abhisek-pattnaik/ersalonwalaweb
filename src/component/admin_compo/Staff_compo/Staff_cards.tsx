
export default function Staff_cards() {
  const staffData = [
  {
    id: 1,
    title: 'TOTAL STAFF',
    value: '124',
    change: '+4 this month',
    changeColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'ACTIVE STAFF',
    value: '98',
    change: '82% utilization',
    changeColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'ON LEAVE',
    value: '12',
    change: 'Returning soon',
    changeColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'INACTIVE STAFF',
    value: '14',
    change: 'Require review',
    changeColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];
  return (
    <div className=" p-2 md:p-2 font-sans">
      
      {/* Header Section */}
      {/* <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
          Staff Management
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          Track employee utilization, availability, and human resource compliance.
        </p>
      </div> */}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffData.map((stat) => (
          <div 
            key={stat.id}
            className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-900/60"
          >
            {/* Top row with icon and percentage */}
            <div className="flex items-center justify-between mb-8">
              <div className={`p-3 rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-medium ${stat.changeColor}`}>
                {stat.change}
              </span>
            </div>

            {/* Metric Information */}
            <div>
              <p className="text-[10px] font-bold tracking-widest text-slate-500 mb-2">
                {stat.title}
              </p>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}

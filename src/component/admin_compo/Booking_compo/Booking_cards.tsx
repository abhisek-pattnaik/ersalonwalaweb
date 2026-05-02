
export default function Booking_cards() {
    const statsData = [
  {
    id: 1,
    title: 'TOTAL BOOKINGS',
    value: '1,284',
    change: '+12% vs last week',
    changeColor: 'text-emerald-400',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'COMPLETED',
    value: '942',
    change: '+8%',
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
    title: 'PENDING BOOKINGS',
    value: '156',
    change: 'Active now',
    changeColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'CANCELLED',
    value: '42',
    change: '-2.4%',
    changeColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];
  return (
    <>
   
    <div className=" p-2 md:p-2 font-sans">
      
      {/* Header Section */}
      {/* <div className="mb-10">
        <h2 className="text-1xl md:text-4xl font-bold text-white tracking-tight mb-2">
          Booking Management
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Real-time overview of salon operations and client scheduling.
        </p>
      </div> */}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
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

            {/* Metric Info */}
            <div>
              <p className="text-[10px] font-bold tracking-widest text-slate-500 mb-2">
                {stat.title}
              </p>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </>
  )
}

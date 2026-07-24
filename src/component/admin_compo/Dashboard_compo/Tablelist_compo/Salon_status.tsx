
export default function Salon_status() {
  const stats = [
    {
      id: 1,
      label: 'Active Salons',
      value: 112,
      color: 'bg-emerald-400',
    },
    {
      id: 2,
      label: 'Pending Salons',
      value: 12,
      color: 'bg-amber-500',
    },
    {
      id: 3,
      label: 'Rejected Salons',
      value: 4,
      color: 'bg-rose-300',
    },
  ];
  return (
    <>
    <div className="w-full lg:w-80 font-sans gap-2">
      <div className="space-y-2">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center bg-[#0f172a] border border-slate-800 rounded-xl p-4 transition-all duration-200 hover:border-slate-700 hover:bg-[#151f32] w-full lg:w-80"
          >
            {/* Vertical Indicator Bar */}
            <div className={`w-1.5 h-10 rounded-full ${stat.color} mr-5 shadow-[0_0_8px_rgba(0,0,0,0.2)]`} />

            {/* Content Section */}
            <div>
              <p className="text-sm/6 uppercase tracking-widest text-slate-500 font-semibold mb-1">
                {stat.label}
              </p>
              <p className="text-1xl font-bold tracking-wide text-white">
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


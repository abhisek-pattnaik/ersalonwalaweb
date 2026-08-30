
export default function Revenue_overview() {
  const chartData = [
    { id: 1, date: '11/05', value: 100, height: '40%', active: false },
    { id: 2, date: '12/05', value: 18200, height: '60%', active: false },
    { id: 3, date: '13/05', value: 15100, height: '48%', active: false },
    { id: 4, date: '14/05', value: 22400, height: '72%', active: false },
    { id: 5, date: '15/05', value: 24829, height: '85%', active: true },
    { id: 6, date: '16/05', value: 19800, height: '64%', active: false },
    { id: 7, date: '17/05', value: 16500, height: '84%', active: false },
  ];
  return (
    <>
      <div className="bg-[#0f172a] text-white p-6 rounded-2xl w-full max-w-3xl border border-slate-800 shadow-2xl font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-lg font-medium text-slate-300">Revenue Overview</h2>
        <div className="flex items-center text-xs text-slate-400 bg-[#1e293b] px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-700/50 transition border border-slate-700/30">
          Last 30 Days
          <svg 
            className="w-3.5 h-3.5 ml-2 text-slate-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Chart Body */}
      <div className="flex items-end justify-between h-64 px-6 gap-4 w-full overflow-auto">
        {chartData.map((data) => (
          <div key={data.id} className="relative flex flex-col items-center group w-full h-full justify-end ">
            
            {/* Custom Tooltip for the Active State */}
            {data.active && (
              <div className="absolute -top-16 bg-[#1b2533] border border-slate-700 px-3.5 py-2.5 rounded-xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5)] flex flex-col items-center z-10">
                <span className="text-[10px] text-slate-400 mb-0.5">{data.date}</span>
                <span className="text-sm font-semibold tracking-wide text-white">
                  ${data.value.toLocaleString()}
                </span>
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#1b2533] border-r border-b border-slate-700"></div>
              </div>
            )}

            {/* Chart Bar */}
            <div
              className={`w-12 md:w-14 rounded-t-xl transition-all duration-300 ease-in-out ${
                data.active
                  ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'bg-[#1a2333] border-t border-slate-800 hover:bg-[#253247]'
              }`}
              style={{ height: data.height }}
            ></div>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

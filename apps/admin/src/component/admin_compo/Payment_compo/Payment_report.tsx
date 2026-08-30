
export default function Payment_report() {
  const weeklyData = [
    { day: 'MON', gross: 45, previous: 60 },
    { day: 'TUE', gross: 35, previous: 55 },
    { day: 'WED', gross: 60, previous: 45 },
    { day: 'THU', gross: 55, previous: 50 },
    { day: 'FRI', gross: 75, previous: 40 },
    { day: 'SAT', gross: 50, previous: 65 },
    { day: 'SUN', gross: 30, previous: 75 },
  ];

  return (
    <div className="  text-gray-200 p-2 font-sans">
      {/* Filters and Action Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-[#0d111d] p-4 rounded-xl border border-[#1f293d] flex-wrap">
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          {['All Cities', 'All Outlets', 'Oct 01 - Oct 31, 2023', 'All Status'].map((filter, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#131b2e] px-4 py-2.5 rounded-lg border border-[#1f293d] text-sm text-gray-300 min-w-[160px] cursor-pointer hover:border-gray-500 transition-colors"
            >
              <span>{filter}</span>
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all w-full md:w-auto">
          Export Report
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Overview Section */}
        <div className="lg:col-span-2 bg-[#0d111d] p-6 rounded-2xl border border-[#1f293d]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Revenue Overview</h3>
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span>GROSS VOLUME</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-600"></span>
                <span>PREVIOUS PERIOD</span>
              </div>
            </div>
          </div>

          {/* Bar Chart Grid */}
          <div className="flex items-end justify-between h-64 px-2 pt-8 border-t border-[#1a202c]">
            {weeklyData.map((d, i) => (
              <div key={i} className="flex flex-col items-center flex-1 mx-2 relative group">
                <div className="w-full h-44 relative flex items-end justify-center">
                  {/* Previous Period Bar */}
                  <div
                    className="absolute w-9 md:w-12 bg-[#162138] rounded-t-sm"
                    style={{ height: `${d.previous}%` }}
                  ></div>
                  {/* Gross Volume Bar */}
                  <div
                    className="absolute w-9 md:w-12 bg-blue-500/80 rounded-t-sm hover:bg-blue-500 transition-all cursor-pointer"
                    style={{ height: `${d.gross}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-400 mt-4 tracking-wider">
                  {d.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Breakdown Section */}
        <div className="bg-[#0d111d] p-6 rounded-2xl border border-[#1f293d] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide mb-8">Commission Breakdown</h3>
          </div>
          
          {/* Donut Chart Area */}
          <div className="flex flex-col items-center justify-center my-6 relative">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div 
                className="w-40 h-40 rounded-full flex flex-col items-center justify-center" 
                style={{ background: 'conic-gradient(#2563eb 0% 74%, #1e293b 74% 100%)' }}
              >
                <div className="w-32 h-32 bg-[#0d111d] rounded-full flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">$21.3k</span>
                  <span className="text-[10px] tracking-widest text-gray-500 mt-1 uppercase">Total Fees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend Area */}
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
                <span className="text-gray-400">Franchise Fees</span>
              </div>
              <span className="font-semibold text-white">74%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-gray-600 rounded-sm"></span>
                <span className="text-gray-400">Processing Fees</span>
              </div>
              <span className="font-semibold text-white">26%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

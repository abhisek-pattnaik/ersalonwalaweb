export default function CMS_Banner_cards() {
  const stats = [
    {
      title: "ACTIVE BANNERS",
      value: "8",
      subtext: "+2 this month",
      type: "success",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "SCHEDULED",
      value: "3",
      subtext: "Next push: tomorrow",
      type: "default",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "PUBLISHED PAGES",
      value: "12",
      subtext: "All live",
      type: "success",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "DRAFTS",
      value: "4",
      subtext: "Requires review",
      type: "warning",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5M16.242 7.758a3 3 0 114.242 4.242L10.5 21H6v-4.5L16.242 7.758z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex items-center justify-center font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#0d111d] border border-[#1f293d] rounded-2xl p-6 flex flex-col justify-between h-44 transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] group"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                {stat.title}
              </span>
              <div className="p-1.5 rounded-lg bg-[#121826] border border-[#1a2333] text-gray-400 group-hover:text-sky-400 transition-colors">
                {stat.icon}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-white tracking-tight">
                {stat.value}
              </h2>
              <div className="flex items-center gap-2 mt-4 text-xs font-medium">
                {stat.type === 'success' && (
                  <span className="text-green-400 flex items-center gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    {stat.subtext}
                  </span>
                )}
                {stat.type === 'warning' && (
                  <span className="text-amber-400/80 bg-amber-500/10 px-2.5 py-1 rounded-md">
                    {stat.subtext}
                  </span>
                )}
                {stat.type === 'default' && (
                  <span className="text-gray-400/80 bg-gray-800/60 px-2.5 py-1 rounded-md">
                    {stat.subtext}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

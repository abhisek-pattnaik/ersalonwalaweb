
export default function Payemnt_cards() {
const metrics = [
    {
      title: "TOTAL REVENUE",
      amount: "$142,580.00",
      subtitle: "+12.5% from last month",
      type: "success",
      active: false
    },
    {
      title: "FRANCHISE COMMISSION",
      amount: "$21,387.00",
      subtitle: "15% Flat platform fee",
      type: "info",
      active: false
    },
    {
      title: "OUTLET EARNINGS",
      amount: "$121,193.00",
      subtitle: "8 active franchises",
      type: "success",
      active: false
    },
    {
      title: "PENDING PAYOUTS",
      amount: "$8,450.00",
      subtitle: "Due by Friday, 12th Oct",
      type: "warning",
      active: true // Highlights the active card with a blue border
    }
  ];

  return (
    <div className=" p-2 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`bg-[#0d111d] border ${
              metric.active
                ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.12)]'
                : 'border-[#1f293d]'
            } rounded-2xl p-6 flex flex-col justify-between h-44 transition-all duration-300 ease-in-out hover:border-gray-600`}
          >
            <div>
              <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                {metric.title}
              </span>
              <h2 className="text-2xl font-bold text-white mt-2 tracking-tight">
                {metric.amount}
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm font-medium">
              {/* Conditional rendering for icons and subtext styling */}
              {metric.type === 'success' && (
                <span className="flex items-center text-green-400 gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-md">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {metric.subtitle}
                </span>
              )}
              {metric.type === 'info' && (
                <span className="flex items-center text-gray-400 gap-1.5 bg-gray-800/60 px-2.5 py-1 rounded-md">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {metric.subtitle}
                </span>
              )}
              {metric.type === 'warning' && (
                <span className="flex items-center text-amber-500 gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-md">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {metric.subtitle}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
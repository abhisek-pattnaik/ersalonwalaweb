
export default function Payment_status_data() {
  const transactions = [
    {
      customer: "James Wilson",
      salon: "Luxury Spas - Soho",
      bookingId: "BK-2023-0881",
      amount: "$145.00",
      fee: "-$21.75 Comm.",
      status: "PAID",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      customer: "Elena Rodriguez",
      salon: "The Grooming Lounge",
      bookingId: "BK-2023-0879",
      amount: "$85.00",
      fee: "-$12.75 Comm.",
      status: "PENDING",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      customer: "Michael Chen",
      salon: "Zen Wellness Center",
      bookingId: "BK-2023-0875",
      amount: "$210.00",
      fee: "-$31.50 Comm.",
      status: "REFUNDED",
      statusColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
    }
  ];

  const recentPayouts = [
    { salon: "Central Grooming", date: "Transferred Oct 22", amount: "$1,890" },
    { salon: "Elite Style Co.", date: "Transferred Oct 21", amount: "$2,100" },
    { salon: "City Salon Hub", date: "Transferred Oct 19", amount: "$3,440" }
  ];

  return (
    <div className="  text-gray-200 p-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        {/* Recent Transactions Section */}
        <div className="lg:col-span-2 bg-[#0d111d] rounded-2xl border border-[#1f293d] p-6 flex flex-col justify-between min-h-[450px]">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white tracking-wide">Recent Transactions</h3>
              <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 tracking-wider">
                VIEW ALL
              </button>
            </div>

            {/* Table Header for Desktop */}
            <div className="hidden md:grid grid-cols-4 text-[10px] tracking-widest text-gray-500 uppercase pb-4 border-b border-[#1a202c] mb-2 px-4">
              <div>Customer / Salon</div>
              <div>Booking ID</div>
              <div>Amount / Fee</div>
              <div>Status</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#1a202c]">
              {transactions.map((tx, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 py-5 px-4 items-center hover:bg-[#121826] transition-colors rounded-lg"
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{tx.customer}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{tx.salon}</div>
                  </div>
                  
                  <div className="text-xs text-gray-400 md:self-center">
                    <span className="md:hidden text-[10px] text-gray-500 uppercase block mb-0.5">Booking ID</span>
                    {tx.bookingId}
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-white">{tx.amount}</div>
                    <div className="text-xs text-sky-400 mt-0.5">{tx.fee}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${tx.statusColor} uppercase tracking-wider inline-block`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Footer */}
          <div className="flex justify-between items-center border-t border-[#1a202c] pt-6 text-xs text-gray-500 mt-6">
            <div>Showing 10 of 1,280 transactions</div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-[#131b2e] border border-[#1f293d] rounded text-gray-400 hover:bg-[#1f293d]">
                Previous
              </button>
              <button className="px-3 py-1.5 bg-[#131b2e] border border-[#1f293d] rounded text-gray-400 hover:bg-[#1f293d]">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Payout History Section */}
        <div className="bg-[#0d111d] rounded-2xl border border-[#1f293d] p-6 flex flex-col justify-between min-h-[450px]">
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white tracking-wide">Payout History</h3>
              <p className="text-xs text-gray-400 mt-0.5">Transfers to outlet banks</p>
            </div>

            {/* Upcoming Payout Card */}
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 block">
              Upcoming
            </span>
            <div className="bg-[#101728] border border-blue-500/40 rounded-xl p-5 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.06)] relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-gray-400">Luxury Spas Soho</span>
                  <div className="text-2xl font-bold text-white mt-1">$4,250.00</div>
                  <span className="text-[10px] text-gray-400 block mt-2">Next cycle: Oct 28</span>
                </div>
                <div className="flex flex-col items-end justify-between h-full">
                  <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                    Pending
                  </span>
                  <svg className="w-5 h-5 text-gray-500 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M5 10h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Recent Completed List */}
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 block">
              Recent Completed
            </span>
            <div className="space-y-3">
              {recentPayouts.map((payout, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3.5 bg-[#121826] rounded-lg border border-[#1a202c]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 8" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{payout.salon}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{payout.date}</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-white">{payout.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full mt-6 bg-[#131b2e] border border-[#1f293d] hover:border-gray-600 text-white font-semibold text-xs py-3 rounded-lg transition-colors tracking-widest">
            DOWNLOAD STATEMENT
          </button>
        </div>

      </div>
    </div>
  );
}

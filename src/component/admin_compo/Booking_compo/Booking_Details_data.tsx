
export default function Booking_Details_data() {
  const bookings = [
    {
      id: '#BK-9281',
      name: 'Julianne Moore',
      contact: '+33 1 20 133 4567',
      outlet: 'Marina HQ',
      type: 'VIP',
      dateTime: 'Oct 19, 2023 - 14:30',
      status: 'Completed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: '#BK-9280',
      name: 'Marcus King',
      contact: '+33 1 20 133 4580',
      outlet: 'Downtown',
      type: 'Standard',
      dateTime: 'Oct 19, 2023 - 15:00',
      status: 'Pending',
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  ];

  const activities = [
    {
      id: 1,
      text: 'Booking #BK-9281 confirmed by Marina HQ',
      time: '15 minutes ago',
      meta: 'System Auto-Assign',
      type: 'confirmed'
    },
    {
      id: 2,
      text: 'Stylist David Chen assigned to Booking #9275',
      time: '15 minutes ago',
      meta: 'Master Stylist',
      type: 'assigned'
    },
    {
      id: 3,
      text: 'Booking #BK-9268 cancelled by customer',
      time: '1 hour ago',
      meta: 'Reason: Travel conflict',
      type: 'cancelled'
    }
  ];

  return (
    <div className=" text-slate-300 p-1 md:p-2 font-sans">
      
      {/* Page Header */}
     

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Data Table & Activity Log */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Table Section */}
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-950/60 text-[10px] font-bold tracking-widest text-slate-500 uppercase border-b border-slate-900">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Outlet / Type</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900/40 text-sm">
                  {bookings.map((booking) => (
                    <tr 
                      key={booking.id} 
                      className="hover:bg-slate-900/50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 font-medium text-slate-400">{booking.id}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-white">{booking.name}</div>
                        <div className="text-xs text-slate-500">{booking.contact}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-white">{booking.outlet}</div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                          booking.type === 'VIP' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/10' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {booking.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">{booking.dateTime}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${booking.statusColor}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-base font-semibold text-white mb-6">Recent Activity</h2>
            
            <div className="space-y-6">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  {/* Indicator Icon */}
                  <div className={`p-2 rounded-xl flex items-center justify-center border ${
                    activity.type === 'confirmed' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : activity.type === 'assigned' 
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium text-slate-300">{activity.text}</p>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                    <span className="text-xs text-slate-500">{activity.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Details Sidebar */}
        <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm h-fit">
          <div className="flex flex-col items-center text-center pb-6 border-b border-slate-900/60 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
              alt="Julianne Moore" 
              className="w-16 h-16 rounded-2xl object-cover mb-4 ring-2 ring-slate-800" 
            />
            <h3 className="text-lg font-bold text-white mb-1">Julianne Moore</h3>
            <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-1">
              VIP Client
            </span>
            <p className="text-xs text-slate-500">12 Visits</p>
          </div>

          {/* Selected Services */}
          <div className="mb-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
              Selected Services
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-slate-950/60 p-4 rounded-xl border border-slate-900">
                <div>
                  <h5 className="text-sm font-medium text-slate-300">Precision Haircut</h5>
                  <p className="text-xs text-slate-500">Level 5 Senior Stylist</p>
                </div>
                <span className="text-sm font-semibold text-white">$85.00</span>
              </div>
              
              <div className="flex justify-between items-center bg-slate-950/60 p-4 rounded-xl border border-slate-900">
                <div>
                  <h5 className="text-sm font-medium text-slate-300">Beard Sculpting</h5>
                  <p className="text-xs text-slate-500">Lineup + Steam</p>
                </div>
                <span className="text-sm font-semibold text-white">$45.00</span>
              </div>
            </div>
          </div>

          {/* Stylist Assigned */}
          <div className="mb-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
              Stylist Assigned
            </h4>
            <div className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-900 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100" 
                    alt="David Chen" 
                    className="w-10 h-10 rounded-xl object-cover" 
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950"></span>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white">David Chen</h5>
                  <p className="text-xs text-slate-500">Master Stylist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment & Time Summary */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-slate-950/80 rounded-xl border border-slate-900 mb-6">
            <div>
              <span className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                Payment
              </span>
              <span className="text-lg font-extrabold text-white">$130.00</span>
              <p className="text-[10px] text-slate-500 mt-0.5">Via Apple Pay</p>
            </div>
            <div>
              <span className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                Time
              </span>
              <span className="text-sm font-bold text-white block">14:30 - 15:45</span>
              <p className="text-[10px] text-slate-500 mt-0.5">Total 75 mins</p>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
              Booking Notes
            </h4>
            <p className="text-xs text-slate-400 italic leading-relaxed bg-slate-950/40 border border-slate-900/60 p-4 rounded-xl">
              "Client prefers cold sparkling water on arrival. Low taper on the sides, maintain length on top."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-3 text-sm font-semibold text-slate-400 bg-slate-950/60 border border-slate-900 hover:text-white hover:bg-slate-900 rounded-xl transition-all">
              Reschedule
            </button>
            <button className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_4px_20px_-4px_rgba(59,130,246,0.5)] rounded-xl transition-all">
              Check In
            </button>
          </div>

        </div>
        
      </div>
    </div>
  );
}

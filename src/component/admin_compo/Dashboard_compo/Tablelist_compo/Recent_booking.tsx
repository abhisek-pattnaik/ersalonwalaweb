
export default function Recent_booking() {
  const bookings = [
    {
      id: 1,
      name: 'John Smith',
      initials: 'JS',
      avatarBg: 'bg-blue-500',
      outlet: 'Downtown Central',
      date: 'Oct 24, 2023 • 14:00',
      type: 'Haircut & Styling',
      status: 'Confirmed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
    },
    {
      id: 2,
      name: 'Emma Davis',
      initials: 'ED',
      avatarBg: 'bg-slate-600',
      outlet: 'Westside Premium',
      date: 'Oct 24, 2023 • 15:30',
      type: 'Full Grooming',
      status: 'Pending',
      statusColor: 'text-amber-400 bg-amber-500/10 border border-amber-500/20',
    },
    {
      id: 3,
      name: 'Mark Wilson',
      initials: 'MW',
      avatarBg: 'bg-slate-600',
      outlet: 'Main Street Elite',
      date: 'Oct 24, 2023 • 11:15',
      type: 'Shave & Facial',
      status: 'Confirmed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
    },
    {
      id: 4,
      name: 'Lisa Huang',
      initials: 'LH',
      avatarBg: 'bg-slate-600',
      outlet: 'Downtown Central',
      date: 'Oct 23, 2023 • 17:45',
      type: 'Color Treatment',
      status: 'Cancelled',
      statusColor: 'text-rose-400 bg-rose-500/10 border border-rose-500/20',
    },
  ];
  return (
   <>
   <div className="bg-[#0b111e] text-white p-8 rounded-2xl w-full border border-slate-800/60 shadow-2xl font-sans ml-2">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-medium tracking-wide text-slate-200">Recent Bookings</h2>
        <button className="text-xs text-blue-400 hover:text-blue-300 font-medium tracking-wide transition">
          View All
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-slate-500 border-b border-slate-800/60">
              <th className="pb-4 px-4 font-semibold">Customer Name</th>
              <th className="pb-4 px-4 font-semibold">Outlet</th>
              <th className="pb-4 px-4 font-semibold">Date</th>
              <th className="pb-4 px-4 font-semibold">Booking Type</th>
              <th className="pb-4 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/30">
            {bookings.map((booking) => (
              <tr key={booking.id} className="group hover:bg-[#11192a]/60 transition-colors">
                {/* Customer Name */}
                <td className="py-5 px-4 flex items-center gap-3.5 whitespace-nowrap">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white ${booking.avatarBg} shadow-sm`}>
                    {booking.initials}
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{booking.name}</span>
                </td>

                {/* Outlet */}
                <td className="py-5 px-4 text-sm text-slate-400 tracking-tight">
                  {booking.outlet}
                </td>

                {/* Date */}
                <td className="py-5 px-4 text-sm text-slate-400 tracking-tight">
                  {booking.date}
                </td>

                {/* Booking Type */}
                <td className="py-5 px-4 whitespace-nowrap">
                  <span className="text-xs px-3 py-1.5 bg-[#141b2c] border border-slate-800 rounded-full text-slate-400">
                    {booking.type}
                  </span>
                </td>

                {/* Status */}
                <td className="py-5 px-4 whitespace-nowrap">
                  <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${booking.statusColor}`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </>
  )
}
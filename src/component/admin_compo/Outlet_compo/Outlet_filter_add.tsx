
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faEye, 
  faPen, 
  faBan 
} from '@fortawesome/free-solid-svg-icons';

export default function Outlet_filter_add() {
  
  const outlets = [
    {
      name: "Chelsea Precision",
      id: "ES-CH-001",
      partner: "Marcus Wright",
      location: "242 W 23rd St, NY",
      timings: "09:00 - 21:00",
      staff: "12",
      status: "ACTIVE",
      statusColor: "text-[#34d399] bg-[#34d399]/10 border-[#34d399]/20"
    },
    {
      name: "Soho Loft Studio",
      id: "ES-SO-042",
      partner: "Julianna Reed",
      location: "52 Greene St, NY",
      timings: "10:00 - 20:00",
      staff: "08",
      status: "PENDING",
      statusColor: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/20"
    },
    {
      name: "Brooklyn High-End",
      id: "ES-BR-015",
      partner: "Dominic Torretto",
      location: "120 Wythe Ave, BK",
      timings: "09:00 - 22:00",
      staff: "15",
      status: "ACTIVE",
      statusColor: "text-[#34d399] bg-[#34d399]/10 border-[#34d399]/20"
    },
    {
      name: "Financial District HQ",
      id: "ES-FD-002",
      partner: "Sarah Chen",
      location: "100 Wall St, NY",
      timings: "08:00 - 20:00",
      staff: "20",
      status: "ACTIVE",
      statusColor: "text-[#34d399] bg-[#34d399]/10 border-[#34d399]/20"
    }
  ];

  return (<>
     
    <div className=" text-slate-300   font-sans antialiased">
      {/* Main Table Card */}
      <div className="bg-[#131b2e] border border-[#1e293b] rounded-xl overflow-hidden">
        {/* Table Header Section */}
        <div className="px-6 py-6 border-b border-[#1e293b] flex justify-between items-center">
          <div>
            <h2 className="text-white text-lg font-semibold tracking-tight">Outlet Directory</h2>
          </div>
          <div className="text-[#64748b] text-xs">
            Showing 48 Outlets
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-400">
            <thead className="text-[#64748b] uppercase bg-[#0f1524] tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-4 font-medium">Outlet Name</th>
                <th className="px-6 py-4 font-medium">Partner</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Timings</th>
                <th className="px-6 py-4 font-medium">Staff</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right pr-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e293b]">
              {outlets.map((outlet, index) => (
                <tr key={index} className="hover:bg-[#0f1524]/40 transition-colors">
                  {/* Name and ID */}
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">{outlet.name}</span>
                      <span className="text-[10px] text-slate-500 mt-0.5">ID: {outlet.id}</span>
                    </div>
                  </td>

                  {/* Partner */}
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-300">
                    {outlet.partner}
                  </td>

                  {/* Location */}
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <span>{outlet.location}</span>
                      <span className="p-1.5 rounded bg-[#1e293b]/60 border border-[#2d3748] text-[#64748b] flex items-center justify-center">
                        <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-slate-400" />
                      </span>
                    </div>
                  </td>

                  {/* Timings */}
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-300">
                    {outlet.timings}
                  </td>

                  {/* Staff */}
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-300 font-medium">
                    {outlet.staff}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border tracking-wider uppercase ${outlet.statusColor}`}>
                      {outlet.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5 whitespace-nowrap text-right pr-8">
                    <div className="flex items-center justify-end gap-3 text-slate-400">
                      <button className="p-1 hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:text-red-400 transition-colors">
                        <FontAwesomeIcon icon={faBan} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="px-6 py-4 border-t border-[#1e293b] flex justify-between items-center text-xs">
          <button className="text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
            &lt; Previous
          </button>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-white font-semibold text-xs cursor-pointer">1</span>
            <span className="px-3 py-1.5 rounded hover:bg-[#1e293b] text-slate-400 cursor-pointer text-xs transition-colors">2</span>
            <span className="px-3 py-1.5 rounded hover:bg-[#1e293b] text-slate-400 cursor-pointer text-xs transition-colors">3</span>
          </div>

          <button className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
   
    </>
  );
};

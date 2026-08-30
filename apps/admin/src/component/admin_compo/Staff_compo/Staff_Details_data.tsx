import { useState } from "react";
import StaffOffcanvas from "./StaffOffcanvas";

export default function Staff_Details_data() {
  const [isOpen,setIsOpen]=useState(false)
  const staff = [
    {
      id: 1,
      name: 'Marcus Thorne',
      email: 'marcus.t@salon.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      role: 'Senior Stylist',
      outlet: 'Skyline Mall',
      hours: '09:00 - 18:00',
      status: 'Active',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 2,
      name: 'Elena Rodriguez',
      email: 'e.rodriguez@salon.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      role: 'Master Barber',
      outlet: 'Downtown Branch',
      hours: '10:00 - 19:00',
      status: 'Active',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 3,
      name: 'Julian Vane',
      email: 'j.vane@salon.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      role: 'Colorist Specialist',
      outlet: 'Tech Hub Salon',
      hours: '11:00 - 20:00',
      status: 'On Leave',
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (<>
    <div className=" min-h-screen text-slate-300 p-2 md:p-2 font-sans">
      
      {/* Filters Bar */}
      <div className="w-full bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-slate-400">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="text-sm font-medium">Filters:</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Custom Selects */}
          {['All Outlets', 'All Roles', 'Status: All'].map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between px-4 py-2 bg-[#10172a] border border-[#1e293b] rounded-xl text-xs sm:text-sm text-slate-300 gap-3 cursor-pointer hover:bg-slate-900/80 transition-colors"
            >
              <span>{item}</span>
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          ))}
        </div>

        <button className="text-xs text-slate-500 hover:text-white transition-colors py-2 px-3 rounded-xl">
          Clear all filters
        </button>
      </div>

      {/* Main Content Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Staff Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/60 text-[10px] font-bold tracking-widest text-slate-500 uppercase border-b border-slate-900">
                    <th className="px-6 py-4">Staff Member</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Outlet</th>
                    <th className="px-6 py-4">Hours</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900/40 text-sm">
                  {staff.map((member) => (
                    <tr 
                      key={member.id} 
                      className="hover:bg-slate-900/50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3.5">
                          <img 
                            src={member.avatar} 
                            alt={member.name} 
                            className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-800" 
                          />
                          <div>
                            <div className="font-medium text-white">{member.name}</div>
                            <div className="text-xs text-slate-500">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-400">{member.role}</td>
                      <td className="px-6 py-4 text-slate-400">{member.outlet}</td>
                      <td className="px-6 py-4 text-slate-400">{member.hours}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${member.statusColor}`}>
                          {member.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="bg-slate-950/40 px-6 py-4 border-t border-slate-900/60 flex items-center justify-between text-xs text-slate-500">
              <div>Showing 1-3 of 126 staff members</div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-slate-900 border border-slate-800/80 rounded-lg text-slate-400 hover:text-white transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold rounded-lg">
                  1
                </button>
                <button className="px-3 py-1.5 bg-slate-900 border border-slate-800/80 text-slate-400 rounded-lg hover:text-white transition-colors">
                  2
                </button>
                <button className="px-3 py-1.5 bg-slate-900 border border-slate-800/80 rounded-lg text-slate-400 hover:text-white transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile & Insights Sidebar */}
        <div className="space-y-6">
          
          {/* Profile Summary Card */}
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex justify-end mb-2">
              <button className="text-slate-600 hover:text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center text-center pb-6 border-b border-slate-900/80 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
                alt="Elena Rodriguez" 
                className="w-16 h-16 rounded-2xl object-cover mb-4 ring-2 ring-slate-800/60 shadow-lg" 
              />
              <h3 className="text-lg font-bold text-white mb-1">Elena Rodriguez</h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Master Barber & Educator
              </p>
              
              {/* Analytics Summary */}
              <div className="grid grid-cols-3 gap-6 w-full max-w-sm border-t border-slate-900/80 pt-4">
                <div>
                  <div className="text-sm font-bold text-white">4.9</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Rating</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">8y</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Experience</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">1.2k</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Reviews</div>
                </div>
              </div>
            </div>

            {/* Specialization Pills */}
            <div className="mb-6">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Viking Fades', 'Beard Sculpting', 'Razor Work'].map((spec, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-3 py-1.5 bg-slate-950/60 border border-slate-900 rounded-lg text-slate-300 font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <button 
             onClick={()=>{setIsOpen(true)}}
             className="w-full py-3 bg-slate-950/60 border border-slate-900 hover:bg-slate-900 text-sm font-semibold rounded-xl text-white transition-all">
              View Full Profile and Edite
            </button>
          </div>

          {/* Insights Card */}
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Staff Insights
              </h4>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-slate-400">Average Performance</span>
                <span className="text-xs font-extrabold text-white">94%</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                <div className="h-full bg-blue-500 w-[94%] rounded-full shadow-lg shadow-blue-500/30"></div>
              </div>
            </div>

            <div>
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                Next Week's Leave
              </h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center px-4 py-3 bg-slate-950/40 border border-slate-900 rounded-xl text-xs">
                  <span className="font-medium text-slate-300">Thomas Wright</span>
                  <span className="text-amber-400 font-semibold">3 Days</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3 bg-slate-950/40 border border-slate-900 rounded-xl text-xs">
                  <span className="font-medium text-slate-300">Sarah Connor</span>
                  <span className="text-amber-400 font-semibold">1 Day</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <StaffOffcanvas isOpen={isOpen} onClose={()=>{setIsOpen(false)}}/>
    </>
  );
}
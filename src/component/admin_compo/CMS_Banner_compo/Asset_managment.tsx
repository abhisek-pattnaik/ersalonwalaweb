import { useState } from "react";
import CreateSalonPageOffcanvas from "./CreateSalonPageOffcanvas";
import CreateBannerOffcanvas from "./CreateBannerOffcanvas";

export default function Asset_managment() {
  const [isOpen,setIsOpen]=useState(false)
  const [isbannerOpen,setIsBannerOpen]=useState(false)

  const campaigns = [
    { name: "Autumn Revitalization", placement: "Home Hero", timeline: "Sep 15 - Oct 31", status: "Active", statusColor: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    { name: "Signature Product Launch", placement: "Promo Bar", timeline: "Oct 01 - Oct 15", status: "Scheduled", statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { name: "Technical Workshop Series", placement: "Sidebar", timeline: "Evergreen", status: "Active", statusColor: "text-sky-400 bg-sky-500/10 border-sky-500/20" }
  ];

  const pages = [
    { name: "About Us", type: "Static Content", updated: "2 days ago", status: "Published", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { name: "Technical Services", type: "Service Grid", updated: "4 hours ago", status: "Published", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { name: "Privacy Policy", type: "Legal", updated: "Jan 12, 2024", status: "Draft", statusColor: "text-gray-400 bg-gray-500/10 border-gray-500/20" }
  ];

  return (<>
    <div className=" text-gray-200  font-sans">
      <div className="max-w-7xl mx-auto space-y-8"> 
        {/*Assest Management part*/}
        <div className="w-full px-2 py-2 md:px-1 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Left Section: Title & Subtitle */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Asset Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage your digital presence
          </p>
        </div>

        {/* Right Section: Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Create Page Button */}
          <button 
            onClick={()=>setIsOpen(true)}
            className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-[#111723] hover:bg-gray-800/80 border border-gray-800/80 rounded-lg text-xs font-medium text-gray-300 transition-all shadow-sm duration-200 w-full md:w-auto">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.8" 
              stroke="currentColor" 
              className="w-4 h-4 text-gray-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Create Page
          </button>

          {/* Create Banner Button */}
          <button 
            onClick={()=>setIsBannerOpen(true)}
            className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-blue-500/10 duration-200 w-full md:w-auto">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create Banner
          </button>
        </div>

        </div>
       </div>
       
        {/* Content Campaigns and CMS Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            {/* Campaigns Table */}
            <div className="bg-[#0d111d] p-6 rounded-2xl border border-[#1f293d]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white tracking-wide">Active Banner Campaigns</h3>
                <button className="text-xs font-semibold text-blue-400 hover:text-blue-300">View All</button>
              </div>

              <div className="hidden md:grid grid-cols-4 text-[10px] tracking-widest text-gray-500 uppercase pb-3 border-b border-[#1a202c] mb-2 px-3">
                <div>Banner Asset</div>
                <div>Placement</div>
                <div>Timeline</div>
                <div>Status</div>
              </div>

              <div className="divide-y divide-[#1a202c]">
                {campaigns.map((c, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-3 items-center hover:bg-[#121826] rounded-xl transition-colors">
                    <div className="text-sm font-semibold text-white">{c.name}</div>
                    <div className="text-xs text-gray-400">
                      <span className="md:hidden text-[10px] text-gray-500 uppercase block mb-0.5">Placement</span>
                      {c.placement}
                    </div>
                    <div className="text-xs text-gray-400">
                      <span className="md:hidden text-[10px] text-gray-500 uppercase block mb-0.5">Timeline</span>
                      {c.timeline}
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${c.statusColor} uppercase tracking-wider inline-block`}>
                        {c.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CMS Content Table */}
            <div className="bg-[#0d111d] p-6 rounded-2xl border border-[#1f293d]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white tracking-wide">CMS Content Pages</h3>
              </div>

              <div className="hidden md:grid grid-cols-4 text-[10px] tracking-widest text-gray-500 uppercase pb-3 border-b border-[#1a202c] mb-2 px-3">
                <div>Page Name</div>
                <div>Type</div>
                <div>Last Updated</div>
                <div>Status</div>
              </div>

              <div className="divide-y divide-[#1a202c]">
                {pages.map((p, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-3 items-center hover:bg-[#121826] rounded-xl transition-colors">
                    <div className="text-sm font-semibold text-white">{p.name}</div>
                    <div className="text-xs text-gray-400">
                      <span className="md:hidden text-[10px] text-gray-500 uppercase block mb-0.5">Type</span>
                      {p.type}
                    </div>
                    <div className="text-xs text-gray-400">
                      <span className="md:hidden text-[10px] text-gray-500 uppercase block mb-0.5">Last Updated</span>
                      {p.updated}
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${p.statusColor} uppercase tracking-wider inline-block`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Preview Pane */}
          <div className="bg-[#0d111d] p-6 rounded-2xl border border-[#1f293d] flex flex-col justify-between min-h-[550px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] tracking-widest text-gray-500 uppercase font-semibold">Live Preview</span>
                <span className="text-[10px] font-medium text-sky-400 px-2.5 py-1 rounded-md bg-sky-500/10">Active</span>
              </div>
              
              <div 
                className="relative rounded-xl overflow-hidden border border-[#1f293d] h-96 bg-cover bg-center shadow-lg" 
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1521575107034-e0fa6b571433?auto=format&fit=crop&w=600&q=80)' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-sky-400 font-bold uppercase tracking-wider mb-2">Featured Event</span>
                  <h4 className="text-xl font-bold text-white leading-tight mb-3">Revitalize Your Inner Engineer</h4>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    Experience the fusion of art and science in every cut. Limited slots available for our Autumn Masterclass.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#1a202c] pt-6 space-y-4 text-xs">
              <div className="flex justify-between items-center text-gray-400">
                <span>Target Channel</span>
                <span className="text-white font-medium">Desktop Web</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Animation Speed</span>
                <span className="text-white font-medium">0.8s Ease-Out</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>CTR (Projected)</span>
                <span className="text-green-400 font-bold">4.2%</span>
              </div>
              
              <button className="w-full mt-2 bg-[#131b2e] border border-[#1f293d] hover:border-gray-600 text-white font-semibold text-xs py-3 rounded-lg transition-colors tracking-widest cursor-pointer">
                TEST LAYOUT RESPONSE
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <CreateSalonPageOffcanvas isOpen={isOpen} onClose={() => {setIsOpen(false)}} />
    <CreateBannerOffcanvas isbanerOpen={isbannerOpen} onbannerClose={()=>{setIsBannerOpen(false)}}/>
    </>
  );
}

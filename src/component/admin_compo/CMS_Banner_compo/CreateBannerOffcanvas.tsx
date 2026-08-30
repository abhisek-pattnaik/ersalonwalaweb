import { useState } from "react";
export default function CreateBannerOffcanvas({ isbanerOpen = true, onbannerClose }:{isbanerOpen:boolean,onbannerClose:()=>void}) {
  const [title, setTitle] = useState('');
  const [placement, setPlacement] = useState('homepage-hero');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState(false);

  if (!isbanerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-xl h-full bg-[#0b0f19] text-gray-300 flex flex-col border-l border-gray-900 shadow-2xl animate-slide-in">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-800/60 flex items-center justify-between bg-[#0e1422]">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Create New Banner
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Design and schedule your next salon promotion
            </p>
          </div>
          <button
            onClick={()=>{onbannerClose()}}
            className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-gray-800/80 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          
          {/* Banner Creative */}
          <div className="space-y-3">
            <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Banner Creative
            </label>
            <div className="border-2 border-dashed border-gray-800 hover:border-gray-700 bg-[#0e1422] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#161d2d] flex items-center justify-center mb-4 text-gray-400 group-hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-white mb-1">
                Drag & drop your image
              </p>
              <p className="text-[11px] text-gray-500">
                PNG, JPG up to 10MB - Recommended 1920x600px
              </p>
            </div>
          </div>

          {/* Banner Title */}
          <div className="space-y-3">
            <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Banner Title
            </label>
            <input
              type="text"
              placeholder="e.g. Anniversary Special Sale 2024"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#0e1422] border border-gray-800/80 rounded-lg px-3.5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-800 transition-all"
            />
          </div>

          {/* Placement Selection */}
          <div className="space-y-3">
            <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Placement Selection
            </label>
            <div className="relative">
              <select
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
                className="w-full bg-[#0e1422] border border-gray-800/80 rounded-lg px-3.5 py-3.5 text-sm text-white focus:outline-none focus:border-gray-600 transition-all appearance-none pr-10"
              >
                <option value="homepage-hero">Homepage Hero Slider</option>
                <option value="promo-bar">Promo Bar</option>
                <option value="sidebar">Sidebar</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Start & End Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#0e1422] border border-gray-800/80 rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-gray-600 transition-all placeholder-gray-600 [&::-webkit-calendar-picker-indicator]:opacity-0"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-[#0e1422] border border-gray-800/80 rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-gray-600 transition-all placeholder-gray-600 [&::-webkit-calendar-picker-indicator]:opacity-0"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Status */}
          <div className="bg-[#0e1422] border border-gray-800/60 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xs font-semibold text-white mb-0.5">
                Campaign Status
              </h3>
              <p className="text-[10px] text-gray-500">
                Enable banner immediately after saving
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={status}
                onChange={() => setStatus(!status)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 peer-checked:after:bg-white"></div>
            </label>
          </div>

        </div>

        {/* Footer Buttons */}
        <div className="px-6 py-4 border-t border-gray-800/60 bg-[#0e1422] flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            onClick={()=>{onbannerClose()}}
            className="px-4 py-2.5 rounded-lg border border-gray-800 text-xs font-medium text-gray-400 hover:bg-gray-900/50 hover:text-white transition-all w-full sm:w-auto text-center"
          >
            Save Draft
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-xs font-semibold text-white shadow-lg shadow-blue-500/10 transition-all w-full sm:w-auto text-center">
            Publish Campaign
          </button>
        </div>

      </div>

      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
    </div>
  );
}
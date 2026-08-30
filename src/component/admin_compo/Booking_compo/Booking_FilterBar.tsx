import './Booking.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSliders,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function Booking_FilterBar() {
   const [isOpen, setIsOpen] = useState(false);
  
  return (<>
    <div className=" flex items-center justify-center p-1 font-sans" id="filter-section">
      
      {/* Filter Bar Container */}
      <div className="w-full  bg-[#0f1523] border border-[#1e2738] rounded-2xl p-2 flex flex-col md:flex-row md:items-center justify-between ">
        
        {/* Left Section: Filters Label */}
        <div className="flex items-center gap-3 text-slate-400">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="text-sm font-medium">Filters:</span>
        </div>

        {/* Center Section: Filter Items */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* City Pill */}
          <div className="flex items-center px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300">
            City: Dubai
          </div>

          {/* Outlet Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3 cursor-pointer hover:bg-[#1f2a40] transition-colors">
            <span>Outlet: Marina HQ</span>
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Date Range Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Oct 12 - Oct 19, 2023</span>
          </div>

          {/* Type Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3 cursor-pointer hover:bg-[#1f2a40] transition-colors">
            <span>Type: All Bookings</span>
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Status Pill */}
          <div className="flex items-center px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300">
            Status: Confirmed
          </div>

        </div>

        {/* Right Section: Reset Filters */}
        <button className="flex items-center justify-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors py-2 px-3 hover:bg-sky-500/10 rounded-xl">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1022 12h-4.5" />
          </svg>
          Reset Filters
        </button>

      </div>
      
    </div>
    <div>
       <button 
          onClick={():void => setIsOpen(true)}
        className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium text-sm active:scale-95 transition-transform"
        id="fillter-button"
        >
              <FontAwesomeIcon icon={faSliders} className="w-4 h-4" /> Filter
        </button>
    </div>
      {isOpen && (
            <div className="fixed inset-0 z-50 flex flex-col justify-end">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsOpen(false)}
              />
    
              {/* Drawer Sheet */}
              <div className="relative bg-[#111827] text-white w-full rounded-t-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col z-10 animate-in slide-in-from-bottom duration-300">
                {/* Grab Handle */}
                <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />
    
                {/* Header */}
                <div className="flex justify-between items-center  pb-4 mb-4">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center w-8 h-8"
                  >
                    <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                  </button>
                </div>
    
                {/* Scrollable Body */}
                <div className="overflow-y-auto space-y-6 flex-1 pr-1">
               
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
          
          {/* City Pill */}
          <div className="flex items-center px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300">
            City: Dubai
          </div>

          {/* Outlet Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3 cursor-pointer hover:bg-[#1f2a40] transition-colors">
            <span>Outlet: Marina HQ</span>
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Date Range Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Oct 12 - Oct 19, 2023</span>
          </div>

          {/* Type Pill */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300 gap-3 cursor-pointer hover:bg-[#1f2a40] transition-colors">
            <span>Type: All Bookings</span>
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Status Pill */}
          <div className="flex items-center px-4 py-2 bg-[#171f33] border border-[#2a374d] rounded-xl text-xs sm:text-sm text-slate-300">
            Status: Confirmed
          </div>

        </div>
                  </div>
    
                
               
              
      
  
                </div>
    
                {/* Footer Action Buttons */}
                <div className="pt-4 mt-4  flex gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}
    </>
  )
}

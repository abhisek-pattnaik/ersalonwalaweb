import { 
  faPlus, 
  faXmark,
  faChevronDown, 
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Outlet_modal from './Outlet_modal';
import './Outlet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSliders
} from '@fortawesome/free-solid-svg-icons';
export default function Fillter_and_newoutlet() {
    const [isOpen,setIsOpen]=useState(false)
    const [isFillterOpen, setIsFillterOpen] = useState(false);
    const open_Outlet_form=()=>{
        setIsOpen(true)
    }
  return (
    <>
      {/* Top Filter and Actions Bar */}
      <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8" >
        <div className="flex flex-wrap items-center gap-6 w-full md:w-auto" id="outliet-fillter">
          {/* Filter 1: City */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest text-[#64748b] uppercase font-semibold">City</label>
            <div className="relative">
              <select className="bg-[#131b2e] border border-[#1e293b] text-white text-sm rounded-md px-3 py-2 pr-10 focus:outline-none focus:border-[#334155] appearance-none w-36 cursor-pointer">
                <option>All Cities</option>
              </select>
              <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* Filter 2: Area */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest text-[#64748b] uppercase font-semibold">Area</label>
            <div className="relative">
              <select className="bg-[#131b2e] border border-[#1e293b] text-white text-sm rounded-md px-3 py-2 pr-10 focus:outline-none focus:border-[#334155] appearance-none w-36 cursor-pointer">
                <option>All Areas</option>
              </select>
              <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* Filter 3: Status */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest text-[#64748b] uppercase font-semibold">Status</label>
            <div className="relative">
              <select className="bg-[#131b2e] border border-[#1e293b] text-white text-sm rounded-md px-3 py-2 pr-10 focus:outline-none focus:border-[#334155] appearance-none w-36 cursor-pointer">
                <option>All Statuses</option>
              </select>
              <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
          </div>
        </div>
       
        {/* Action Button */}
        <button 
          onClick={open_Outlet_form}
          className=" w-auto bg-[#38bdf8] hover:bg-[#0ea5e9] text-slate-950 font-medium text-sm px-4 py-2.5 rounded-md flex items-center gap-2 transition-all shadow-sm"
          id="outlet-button"
          >
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          <span>New Outlet</span>
        </button>
      </div>
       <div>
           <button 
            onClick={():void => setIsFillterOpen(true)}
           className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium text-sm active:scale-95 transition-transform"
           id="fillter-button"
           >
                 <FontAwesomeIcon icon={faSliders} className="w-4 h-4" /> Filter Directory
           </button>
        </div>

         {isFillterOpen && (
                    <div className="fixed inset-0 z-50 flex flex-col justify-end">
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsFillterOpen(false)}
                      />
            
                      {/* Drawer Sheet */}
                      <div className="relative bg-[#111827] text-white w-full rounded-t-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col z-10 animate-in slide-in-from-bottom duration-300">
                        {/* Grab Handle */}
                        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />
            
                        {/* Header */}
                        <div className="flex justify-between items-center  pb-4 mb-4">
                          <h2 className="text-lg font-bold">Filters Directory</h2>
                          <button
                            onClick={() => setIsFillterOpen(false)}
                            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center w-8 h-8"
                          >
                            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                          </button>
                        </div>
            
                        {/* Scrollable Body */}
                        <div className="overflow-y-auto space-y-6 flex-1 pr-1">
                              <div>
                                      <div className="flex flex-col gap-2.5">
                                        <label className="text-[10px] tracking-widest text-[#64748b] uppercase font-semibold">City</label>
                                        <div className="relative">
                                          <select className="bg-[#131b2e] border border-[#1e293b] text-white text-sm rounded-md px-3 py-4 pr-10 focus:outline-none focus:border-[#334155] appearance-none w-full cursor-pointer">
                                            <option>All Cities</option>
                                          </select>
                                          <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                        </div>
                                      </div>

                                      {/* Filter 2: Area */}
                                      <div className="flex flex-col gap-2.5">
                                        <label className="text-[10px] tracking-widest text-[#64748b] uppercase font-semibold">Area</label>
                                        <div className="relative">
                                          <select className="bg-[#131b2e] border border-[#1e293b] text-white text-sm rounded-md px-3 py-4 pr-10 focus:outline-none focus:border-[#334155] appearance-none w-full cursor-pointer">
                                            <option>All Areas</option>
                                          </select>
                                          <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                        </div>
                                      </div>

                                      {/* Filter 3: Status */}
                                      <div className="flex flex-col gap-2.5">
                                        <label className="text-[10px] tracking-widest text-[#64748b] uppercase font-semibold">Status</label>
                                        <div className="relative">
                                          <select className="bg-[#131b2e] border border-[#1e293b] text-white text-sm rounded-md px-3 py-4 pr-10 focus:outline-none focus:border-[#334155] appearance-none w-full cursor-pointer">
                                            <option>All Statuses</option>
                                          </select>
                                          <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                        </div>
                                      </div> 
                              </div>
                        </div>
            
                        {/* Footer Action Buttons */}
                        <div className="pt-4 mt-4  flex gap-3">
                          <button
                            onClick={() => setIsFillterOpen(false)}
                            className="flex-1 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                          >
                            Apply Filters
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
      <Outlet_modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />


    </>
  )
}

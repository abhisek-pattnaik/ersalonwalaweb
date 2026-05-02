import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faChevronDown, 
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Outlet_modal from './Outlet_modal';
export default function Fillter_and_newoutlet() {
    const [isOpen,setIsOpen]=useState(false)
    const open_Outlet_form=()=>{
        setIsOpen(true)
    }
  return (
    <>
      {/* Top Filter and Actions Bar */}
      <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-6 w-full md:w-auto">
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
          className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-slate-950 font-medium text-sm px-4 py-2.5 rounded-md flex items-center gap-2 transition-all shadow-sm">
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          <span>New Outlet</span>
        </button>
      </div>
      <Outlet_modal isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
    </>
  )
}

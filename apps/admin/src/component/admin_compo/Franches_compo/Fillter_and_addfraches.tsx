import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Add_FranchiesModel from './Add_FranchiesModel';
export default function Fillter_and_addfraches() {
 const [isOpenmodel,setIsOpenmodel]=useState(false)
  const Addnewpatner=()=>{
     setIsOpenmodel(true)
  }
  return (
    <>
     <div className=" p-2  flex flex-col gap-6 font-sans">
  <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-4">
    
    <div className="flex bg-[#111827] p-1.5 rounded-xl border border-gray-800">
      <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#1F2A40] rounded-lg shadow">
        All Partners
      </button>
      <button className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg">
        By Region
      </button>
      <button className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg">
        By Performance
      </button>
    </div>

    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg hover:opacity-90 transition duration-200"
     onClick={Addnewpatner}
    >
      <span>+</span> Add Franchise Partner
    </button>
  </div>

  <div className="w-full max-w-7xl mx-auto bg-[#111827] border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-auto md:flex-1 md:max-w-4xl">
      
      <div className="flex flex-col">
        <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Assigned City</label>
        <div className="relative">
          <select className="w-full md:w-64 bg-[#1F2A40] text-gray-200 border border-gray-800 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-cyan-500 appearance-none text-sm">
            <option>All Cities</option>
            <option>New York</option>
            <option>London</option>
            <option>Mumbai</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Status</label>
        <div className="relative">
          <select className="w-full md:w-64 bg-[#1F2A40] text-gray-200 border border-gray-800 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-cyan-500 appearance-none text-sm">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Outlet Volume</label>
        <div className="relative">
          <select className="w-full md:w-64 bg-[#1F2A40] text-gray-200 border border-gray-800 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-cyan-500 appearance-none text-sm">
            <option>Any Number</option>
            <option>1 - 10</option>
            <option>11 - 50</option>
            <option>50+</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
    </div>

    <div className="flex items-center gap-2 self-end md:self-center mt-3">
      <button className="p-3.5 bg-[#1F2A40] border border-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
        </svg>
      </button>
      <button className="p-2.5 bg-[#1F2A40] border border-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition duration-200">
        <FontAwesomeIcon icon={faSync} spin />
      </button>
    </div>
    
  </div>
</div>
{/* <AddFranchiseModal isOpen={isOpenmodel} onClose={()=>setIsOpenmodel(false)}/> */}
    <Add_FranchiesModel isOpen={isOpenmodel} onClose={()=>setIsOpenmodel(false)}/>
    </>
  )
}

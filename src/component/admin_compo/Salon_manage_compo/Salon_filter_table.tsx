import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore,
  faCircleCheck,
  faClipboardList,
  faCircleXmark,
  faPlus,
  faBuilding,
  faChevronDown,
  faArrowUpRightFromSquare,
  faEllipsis,
  faShieldHalved,
  faTriangleExclamation,
  faPen,
  faClock,
  faCircleDot,
  faSliders,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SalonDetailsModal from './SalonDetailsModal';
import './Salon_manage.css'
export default function Salon_filter_table() {
  const [isOpen, setisOpen] = useState(false);
   const [isFillterOpen, setIsFillterOpen] = useState(false);
  return (<>
    <div className=" text-gray-200 p-2 font-sans">
      {/* 1. Header Section */}
      <div className="flex justify-between items-center mb-10  pb-2">
        <div>
          {/* <h1 className="text-3xl font-bold text-white mb-1">Salon Management</h1>
          <p className="text-sm text-gray-400">
            Manage, verify, and monitor all salon partners across the ecosystem.
          </p> */}
        </div>
        <button
          onClick={() => setisOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm shadow-md transition-all duration-200"
        >
          <FontAwesomeIcon icon={faPlus} /> Add New Salon
        </button>
      </div>

      {/* 2. Metrics / Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 shadow-md flex flex-col justify-between h-36">
          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Total Salons
              </span>
              <FontAwesomeIcon icon={faStore} className="text-gray-500 text-lg" />
            </div>
            <div className="text-3xl font-bold text-white">1,284</div>
          </div>
          <div className="text-xs text-green-400 flex items-center gap-1.5 mt-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
            +12.5% vs last month
          </div>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 shadow-md flex flex-col justify-between h-36">
          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Active Salons
              </span>
              <FontAwesomeIcon icon={faCircleCheck} className="text-gray-500 text-lg" />
            </div>
            <div className="text-3xl font-bold text-white">1,150</div>
          </div>
          <div className="text-xs text-blue-400 flex items-center gap-1.5 mt-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Live across all regions
          </div>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 shadow-md flex flex-col justify-between h-36">
          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Pending Approvals
              </span>
              <FontAwesomeIcon icon={faClipboardList} className="text-gray-500 text-lg" />
            </div>
            <div className="text-3xl font-bold text-blue-400">42</div>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-2">
            Avg. 4h response time
          </div>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 shadow-md flex flex-col justify-between h-36">
          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Rejected Salons
              </span>
              <FontAwesomeIcon icon={faCircleXmark} className="text-gray-500 text-lg" />
            </div>
            <div className="text-3xl font-bold text-red-400">92</div>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-2">
            Non-compliance history
          </div>
        </div>
      </div>

      {/* 3. Filter Directory & Verification Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {/* Filter Directory */}
        <div className="bg-[#111827] p-5 rounded-xl border border-gray-800 md:col-span-2" id="salon-fillter" >
          <div className="flex justify-between items-center mb-6" >
            <h2 className="text-base font-semibold text-white">Filter Directory</h2>
            <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Reset Filters</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                By City
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                  <option>All Cities</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                By Type
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                  <option>All Types</option>
                  <option>Independent</option>
                  <option>Franchise</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Subscription
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                  <option>All Plans</option>
                  <option>Starter</option>
                  <option>Pro</option>
                  <option>Enterprise</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Status
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
 
         
          
      {/* Filter bottom model */}
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
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div>
                                          <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                                            By City
                                          </label>
                                          <div className="relative">
                                            <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                                              <option>All Cities</option>
                                              <option>New York</option>
                                              <option>San Francisco</option>
                                            </select>
                                            <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                                          </div>
                                        </div>

                                        <div>
                                          <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                                            By Type
                                          </label>
                                          <div className="relative">
                                            <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                                              <option>All Types</option>
                                              <option>Independent</option>
                                              <option>Franchise</option>
                                            </select>
                                            <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                                          </div>
                                        </div>

                                        <div>
                                          <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                                            Subscription
                                          </label>
                                          <div className="relative">
                                            <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                                              <option>All Plans</option>
                                              <option>Starter</option>
                                              <option>Pro</option>
                                              <option>Enterprise</option>
                                            </select>
                                            <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                                          </div>
                                        </div>

                                        <div>
                                          <label className="block text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                                            Status
                                          </label>
                                          <div className="relative">
                                            <select className="w-full px-3 py-2.5 bg-[#1e293b] border border-gray-800 rounded-lg text-xs text-gray-300 appearance-none focus:outline-none focus:border-blue-500 pr-8">
                                              <option>All Status</option>
                                              <option>Active</option>
                                              <option>Pending</option>
                                              <option>Rejected</option>
                                            </select>
                                            <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                                          </div>
                                        </div>
                                      </div>
                                </div>
                    
                                {/* Footer Action Buttons */}
                               
                                  <button
                                    onClick={() => setIsFillterOpen(false)}
                                    className="flex-1  bg-blue-600 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
                                  >
                                    Apply Filters
                                  </button>
                                
                              </div>
                            </div>
                          )}
      {/* Verification Hub */}
      
                   <button 
                    onClick={():void => setIsFillterOpen(true)}
                   className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-medium text-sm active:scale-95 transition-transform w-50"
                   id="fillter-button"
                   >
                         <FontAwesomeIcon icon={faSliders} className="w-4 h-4" /> Filter Directory
                   </button>
      
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-base font-semibold text-white">Verification Hub</h2>
              <span className="text-[9px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-bold tracking-wider">CURRENT SELECT</span>
            </div>
            <p className="text-xs text-gray-400 mb-6">Reviewing: "The Tech Cut Studio" #S-4912</p>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <button className="p-3 bg-[#1e293b] rounded-lg border border-gray-800 text-center hover:border-gray-600 transition-colors flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon icon={faShieldHalved} className="text-gray-400 text-base" />
              <span className="text-[10px] font-medium text-gray-400">ID Proof</span>
            </button>
            <button className="p-3 bg-[#1e293b] rounded-lg border border-gray-800 text-center hover:border-gray-600 transition-colors flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon icon={faClipboardList} className="text-gray-400 text-base" />
              <span className="text-[10px] font-medium text-gray-400">License</span>
            </button>
            <button className="p-3 bg-[#1e293b] rounded-lg border border-gray-800 text-center hover:border-gray-600 transition-colors flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon icon={faBuilding} className="text-gray-400 text-base" />
              <span className="text-[10px] font-medium text-gray-400">Cert.</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Directory Table Section */}
      <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#161b22] text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-800">
                <th className="px-6 py-4">Salon Name</th>
                <th className="px-6 py-4">Owner Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Assigned Outlet</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Docs</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm text-gray-300">
              {/* Row 1 */}
              <tr className="hover:bg-gray-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 font-medium text-white">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">L</span>
                    <div>
                      <div>Luxe Precision</div>
                      <div className="text-xs text-gray-500">ID: SAL-8821</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Alex Rivera</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-[9px] font-bold tracking-wider">INDEPENDENT</span>
                </td>
                <td className="px-6 py-4 text-gray-500">– N/A –</td>
                <td className="px-6 py-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block mr-2"></span> Enterprise
                </td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-base" />
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-green-500/10 text-green-400 rounded-full text-[9px] font-bold tracking-wider">ACTIVE</span>
                </td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-3 text-gray-500">
                  <button className="hover:text-white p-1 rounded transition-colors"><FontAwesomeIcon icon={faCircleDot} /></button>
                  <button className="hover:text-white p-1 rounded transition-colors"><FontAwesomeIcon icon={faPen} /></button>
                  <button className="hover:text-white p-1 rounded transition-colors"><FontAwesomeIcon icon={faEllipsis} /></button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 font-medium text-white">
                    <span className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs">T</span>
                    <div>
                      <div>The Tech Cut Studio</div>
                      <div className="text-xs text-gray-500">ID: SAL-4912</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Jordan Smith</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-900/50 text-blue-400 rounded-full text-[9px] font-bold tracking-wider">FRANCHISE</span>
                </td>
                <td className="px-6 py-4">NYC Central Outlet</td>
                <td className="px-6 py-4">
                  <span className="w-2 h-2 rounded-full bg-orange-500 inline-block mr-2"></span> Pro
                </td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon icon={faClock} className="text-blue-400 text-base" />
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[9px] font-bold tracking-wider">PENDING</span>
                </td>
                <td className="px-6 py-4 text-right gap-2">
                  <button className="px-3 py-1 text-[10px] bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 mr-2 transition-colors">APPROVE</button>
                  <button className="px-3 py-1 text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 font-semibold rounded hover:bg-red-500 hover:text-white transition-colors">REJECT</button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 font-medium text-white">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">V</span>
                    <div>
                      <div>Velocity Barbers</div>
                      <div className="text-xs text-gray-500">ID: SAL-3105</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Elena Vance</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-[9px] font-bold tracking-wider">INDEPENDENT</span>
                </td>
                <td className="px-6 py-4 text-gray-500">– N/A –</td>
                <td className="px-6 py-4">
                  <span className="w-2 h-2 rounded-full bg-gray-400 inline-block mr-2"></span> Starter
                </td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-400 text-base" />
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-red-500/10 text-red-400 rounded-full text-[9px] font-bold tracking-wider">REJECTED</span>
                </td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-3 text-gray-500">
                  <button className="hover:text-white p-1 rounded transition-colors"><FontAwesomeIcon icon={faClock} /></button>
                  <button className="hover:text-white p-1 rounded text-blue-400 transition-colors"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#161b22] px-6 py-4 flex justify-between items-center text-xs text-gray-400 border-t border-gray-800">
          <div>Showing 1-10 of 1,284 salons</div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 bg-[#1e293b] border border-gray-800 rounded text-gray-500 hover:text-white transition-colors">&lt;</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded font-semibold">1</button>
            <button className="px-3 py-1 bg-[#1e293b] border border-gray-800 rounded hover:bg-gray-800 transition-colors text-gray-300">2</button>
            <button className="px-3 py-1 bg-[#1e293b] border border-gray-800 rounded hover:bg-gray-800 transition-colors text-gray-300">3</button>
            <button className="px-3 py-1 bg-[#1e293b] border border-gray-800 rounded text-gray-500 hover:text-white transition-colors">&gt;</button>
          </div>
        </div>
      </div>

      {/* 5. Chelsea Precision Card Section */}
     

      {/* 6. Modal Overlay Container */}
     
      
    </div>
    <SalonDetailsModal isOpen={isOpen} onClose={()=>{setisOpen(false)}}/>
    </>
  );
};

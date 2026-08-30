import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faBuilding,
  faChevronDown,
  faLocationDot,
  faClock,
  faFloppyDisk,
  faPhone,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export default function Outlet_modal({ isOpen = true, onClose }:{isOpen:boolean,onClose:()=>void}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#0f172a] text-gray-100 w-full max-w-4xl rounded-xl shadow-2xl border border-gray-800 overflow-hidden font-sans">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
              <FontAwesomeIcon icon={faBuilding} className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Add New Outlet</h2>
              <p className="text-sm text-gray-400 mt-0.5">Configure a new precision salon node.</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Outlet Name
              </label>
              <input
                type="text"
                placeholder="e.g. Engineer Salon - Downtown Hub"
                className="w-full px-4 py-3 bg-[#1e293b] border border-gray-800 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Franchise Partner
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-[#1e293b] border border-gray-800 rounded-lg text-sm text-gray-400 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all pr-10">
                    <option>Select Partner</option>
                    <option>Partner 1</option>
                    <option>Partner 2</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Status
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-[#1e293b] border border-gray-800 rounded-lg text-sm text-gray-200 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all pr-10">
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Full Address
              </label>
              <textarea
                rows={3}
                placeholder="Street, Building, Floor..."
                className="w-full px-4 py-3 bg-[#1e293b] border border-gray-800 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Contact Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-10 pr-4 py-3 bg-[#1e293b] border border-gray-800 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Staff Count
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
                  </span>
                  <input
                    type="number"
                    defaultValue={12}
                    className="w-full pl-10 pr-4 py-3 bg-[#1e293b] border border-gray-800 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Operating Hours */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            {/* Map Area */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Google Map Location
              </label>
              <div className="relative h-48 bg-[#1e293b] border border-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
                {/* Simplified Map Background */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-gray-700 to-gray-900">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path d="M0,100 Q100,50 200,100 T400,100" stroke="white" strokeWidth="12" fill="none" />
                    <path d="M0,150 Q150,80 300,150" stroke="white" strokeWidth="6" fill="none" />
                  </svg>
                </div>
                
                <button className="relative z-10 flex items-center space-x-2 px-5 py-2.5 bg-[#0f172a]/90 border border-gray-700 rounded-full text-sm font-medium text-white shadow-lg hover:bg-gray-800 transition-colors">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-blue-400" />
                  <span>SET PIN</span>
                </button>
              </div>
            </div>

            {/* Operating Hours Area */}
            <div className="bg-[#1e293b] border border-gray-800 rounded-xl p-5">
              <div className="flex items-center space-x-2 mb-5">
                <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">
                  Operating Hours
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">Opening</label>
                  <input
                    type="time"
                    defaultValue="09:00"
                    className="w-full px-4 py-2.5 bg-[#0f172a] border border-gray-800 rounded-lg text-sm text-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase">Closing</label>
                  <input
                    type="time"
                    defaultValue="21:00"
                    className="w-full px-4 py-2.5 bg-[#0f172a] border border-gray-800 rounded-lg text-sm text-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <label className="flex items-center space-x-3 cursor-pointer select-none mt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border-gray-700 text-blue-600 bg-[#0f172a] focus:ring-blue-500"
                />
                <span className="text-xs text-gray-400">Apply to all weekdays</span>
              </label>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end items-center space-x-4 pt-4 border-t border-gray-800/60 mt-auto">
              <button 
                onClick={()=>{onClose()}}
                className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Discard Changes
              </button>
              <button 
                className="flex items-center space-x-2 px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faFloppyDisk} className="w-4 h-4" />
                <span>Save Button</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

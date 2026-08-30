import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faArrowUpRightFromSquare, 
  faEllipsis 
} from '@fortawesome/free-solid-svg-icons';
export default function Outlet_utilization() {
 return (
  <div className="mt-1 bg-[#0d1117] text-gray-100 rounded-xl overflow-hidden shadow-xl border border-gray-800 font-sans">
      {/* Top Map Section */}
      <div className="relative h-44 bg-gradient-to-b from-[#161b22] to-[#0d1117] flex items-center justify-center overflow-hidden border-b border-gray-800">
        <div className="absolute top-0 w-[150%] h-44 rounded-b-[100%] bg-[#161b22] border-b border-gray-800 flex items-center justify-center">
          {/* Road Network Lines (Stylistic Representation) */}
          <svg className="w-full h-full opacity-10" viewBox="0 0 500 200" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50 150 C 100 50, 400 50, 550 150" strokeWidth="6" />
            <path d="M50 200 C 150 100, 350 100, 450 200" strokeWidth="4" />
          </svg>
        </div>
        
        {/* Map Marker */}
        <div className="absolute z-10 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full shadow-lg border-2 border-gray-900/40">
          <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Title and External Link */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-200">Chelsea Precision</h2>
            <p className="text-sm text-gray-400 mt-1">242 W 23rd St, New York, NY 10011</p>
          </div>
          <button className="p-2 hover:bg-gray-800 rounded-md transition-colors text-gray-400 hover:text-gray-200">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
          </button>
        </div>

        {/* Contact and Staff Count Cards */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-[#161b22] p-4 rounded-lg border border-gray-800">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Contact
            </span>
            <span className="block text-sm font-medium text-gray-300 mt-2">
              +1 (212) 555-0198
            </span>
          </div>
          <div className="bg-[#161b22] p-4 rounded-lg border border-gray-800">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Staff Count
            </span>
            <span className="block text-sm font-medium text-gray-300 mt-2">
              12 Specialized Engineers
            </span>
          </div>
        </div>
      </div>

      {/* Outlet Utilization Section */}
      <div className="border-t border-gray-800 p-6 bg-[#0d1117]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base font-semibold text-gray-200">Outlet Utilization</h3>
          <button className="text-gray-500 hover:text-gray-300 p-1 rounded">
            <FontAwesomeIcon icon={faEllipsis} className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bars */}
        <div className="space-y-5">
          {/* Appointment Capacity */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Appointment Capacity</span>
              <span className="text-blue-400 font-semibold">88%</span>
            </div>
            <div className="w-full h-2 bg-[#161b22] rounded-full overflow-hidden border border-gray-900">
              <div className="h-full bg-blue-500 w-[88%] rounded-full"></div>
            </div>
          </div>

          {/* Staff Availability */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Staff Availability</span>
              <span className="text-blue-400 font-semibold">72%</span>
            </div>
            <div className="w-full h-2 bg-[#161b22] rounded-full overflow-hidden border border-gray-900">
              <div className="h-full bg-blue-500 w-[72%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

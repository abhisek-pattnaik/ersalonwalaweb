import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faPen, 
  faGear, 
  faMoon, 
  faSun, 
  faGlobe, 
  faDollarSign 
} from '@fortawesome/free-solid-svg-icons';
export default function Application_prefrence() {
  return (
    <div className="  text-white p-2 md:p-2 flex flex-col items-center justify-center font-sans gap-8">
      
      {/* Top Section: Profile and Personal Information */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
       
       
      </div>

      {/* Bottom Section: Application Preferences */}
      <div className="max-w-7xl w-full bg-[#111827] border border-gray-800 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-8 text-gray-400 text-sm">
          <FontAwesomeIcon icon={faGear} className="w-5 h-5 text-blue-400" />
          <span>Application Preferences</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-6">
          {/* Appearance Column */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
              Appearance
            </h3>

            {/* Dark Mode */}
            <div className="flex items-center justify-between p-4 bg-[#1F2937] border border-blue-500 rounded-xl">
              <div className="flex items-center gap-3 text-sm">
                <FontAwesomeIcon icon={faMoon} className="w-4 h-4 text-gray-400" />
                <span className="text-gray-200">Dark Mode</span>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-9 h-5 bg-gray-600 rounded-full appearance-none checked:bg-blue-500 relative outline-none cursor-pointer transition-all before:content-[''] before:absolute before:h-3 before:w-3 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:translate-x-4 before:transition-all"
              />
            </div>

            {/* Light Mode */}
            <div className="flex items-center justify-between p-4 bg-[#1F2937] border border-gray-700 rounded-xl opacity-75">
              <div className="flex items-center gap-3 text-sm">
                <FontAwesomeIcon icon={faSun} className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Light Mode</span>
              </div>
              <input
                type="checkbox"
                className="w-9 h-5 bg-gray-600 rounded-full appearance-none checked:bg-blue-500 relative outline-none cursor-pointer transition-all before:content-[''] before:absolute before:h-3 before:w-3 before:bg-white before:rounded-full before:top-1 before:left-1 before:transition-all"
              />
            </div>
          </div>

          {/* Localization Column */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
              Localization
            </h3>

            {/* Default Language */}
            <div>
              <label className="block text-xs text-gray-400 mb-2">Default Language</label>
              <div className="relative">
                <select className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition appearance-none pr-10">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
                <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Currency Display */}
            <div>
              <label className="block text-xs text-gray-400 mb-2">Currency Display</label>
              <div className="relative">
                <select className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition appearance-none pr-10">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
                <FontAwesomeIcon icon={faDollarSign} className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Notifications Column */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
              Notifications
            </h3>

            {/* Email Notifications */}
            <div className="flex items-center justify-between p-3 border-b border-gray-800 pb-4">
              <span className="text-sm text-gray-300">Email Notifications</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
              />
            </div>

            {/* Desktop Alerts */}
            <div className="flex items-center justify-between p-3 border-b border-gray-800 pb-4">
              <span className="text-sm text-gray-300">Desktop Alerts</span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
              />
            </div>

            {/* Marketing Communications */}
            <div className="flex items-center justify-between p-3 pb-4">
              <span className="text-sm text-gray-300">Marketing Communications</span>
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

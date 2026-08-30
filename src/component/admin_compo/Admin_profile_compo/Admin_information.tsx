import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPen } from '@fortawesome/free-solid-svg-icons';
export default function Admin_information() {
  return (
    <div className="  text-white p-2 md:p-2 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Profile Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center md:text-left md:items-start justify-between h-full">
          <div className="w-full flex flex-col items-center md:items-center">
            {/* Avatar Section */}
            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                alt="Alexander Rossi"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#1E293B] shadow-xl"
              />
              <button className="absolute bottom-1 right-1 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors shadow-md">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>

            {/* Name and Role */}
            <h2 className="text-2xl font-bold mb-2">Alexander Rossi</h2>
            <span className="bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              SUPER ADMIN
            </span>

            {/* Info List */}
            <div className="w-full space-y-4 text-sm text-gray-400 border-t border-gray-800 pt-6">
              <div className="flex justify-between md:flex-col md:gap-1">
                <span className="text-gray-500">Email</span>
                <span className="text-gray-200 truncate max-w-[200px] md:max-w-full">
                  a.rossi@engineersalon.com
                </span>
              </div>
              <div className="flex justify-between md:flex-col md:gap-1">
                <span className="text-gray-500">Phone</span>
                <span className="text-gray-200">+1 (555) 012-3456</span>
              </div>
              <div className="flex justify-between md:flex-col md:gap-1">
                <span className="text-gray-500">Last Login</span>
                <span className="text-gray-200">2 hours ago</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-medium transition duration-200 flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPen} />
            Edit Profile
          </button>
        </div>

        {/* Right Information Form */}
        <div className="md:col-span-2 bg-[#111827] border border-gray-800 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-8 text-gray-400 text-sm">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-blue-400" />
            <span>Personal Information</span>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition"
                  defaultValue="Alexander Rossi"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition"
                  defaultValue="a.rossi@engineersalon.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition"
                  defaultValue="+1 (555) 012-3456"
                />
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                  Timezone
                </label>
                <select className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition">
                  <option>Eastern Time (US & Canada)</option>
                  <option>Pacific Time (US & Canada)</option>
                  <option>Central Time (US & Canada)</option>
                  <option>Greenwich Mean Time</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                Address
              </label>
              <textarea
                rows={3}
                className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-blue-500 transition resize-none"
                defaultValue="721 Precision Way, Suite 402, Manhattan, NY 10001"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4 border-t border-gray-800">
              <button
                type="submit"
                className="bg-[#1F2937] hover:bg-gray-700 border border-gray-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition duration-200 flex items-center gap-2 shadow-sm"
              >
                Update Information
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}

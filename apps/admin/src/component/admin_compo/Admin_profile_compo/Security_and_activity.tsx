import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShield, 
  faClock, 
  faLaptop, 
  faMobile 
} from '@fortawesome/free-solid-svg-icons';
export default function Security_and_activity() {
  const activities = [
    {
      device: 'Chrome on MacOS',
      details: 'Version 118.0.0.0',
      ip: '192.168.1.104',
      date: 'Oct 24, 2023 • 10:24 AM',
      status: 'CURRENT',
      type: 'desktop'
    },
    {
      device: 'iPhone 15 Pro',
      details: 'Mobile Safari',
      ip: '24.156.88.12',
      date: 'Oct 23, 2023 • 08:45 PM',
      status: 'SUCCESS',
      type: 'mobile'
    },
    {
      device: 'Firefox on Windows',
      details: 'Version 119.0.1',
      ip: '104.28.156.33',
      date: 'Oct 22, 2023 • 11:12 AM',
      status: 'SUCCESS',
      type: 'desktop'
    }
  ];

  return (
    <div className=" text-white p-2 md:p-2 flex items-center justify-center font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Left Section: Security Settings */}
        <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 flex flex-col justify-between h-full min-h-[420px]">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FontAwesomeIcon icon={faShield} className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-medium text-gray-200">Security Settings</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Current Password</label>
                <input
                  type="password"
                  defaultValue="........"
                  className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3.5 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">New Password</label>
                <input
                  type="password"
                  defaultValue="........"
                  className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3.5 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Confirm Password</label>
                <input
                  type="password"
                  defaultValue="........"
                  className="w-full bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3.5 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>
          </div>

          <button className="w-full mt-10 bg-[#1E293B] hover:bg-[#334155] border border-[#334155] text-white py-3.5 rounded-xl text-sm font-semibold transition duration-200 text-center shadow">
            Save Password
          </button>
        </div>

        {/* Right Section: Activity History */}
        <div className="lg:col-span-2 bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-medium text-gray-200">Activity History</h2>
            </div>
            <button className="text-sm text-gray-400 hover:text-white transition">View All</button>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-[#1E293B]">
                  <th className="pb-4 font-semibold">Device Info</th>
                  <th className="pb-4 font-semibold">IP Address</th>
                  <th className="pb-4 font-semibold">Date & Time</th>
                  <th className="pb-4 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {activities.map((item, index) => (
                  <tr key={index} className="text-sm text-gray-300">
                    <td className="py-5 flex items-center gap-4">
                      {item.type === 'desktop' ? (
                        <FontAwesomeIcon icon={faLaptop} className="w-5 h-5 text-gray-400 shrink-0" />
                      ) : (
                        <FontAwesomeIcon icon={faMobile} className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                      <div>
                        <div className="font-medium text-white">{item.device}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.details}</div>
                      </div>
                    </td>
                    <td className="py-5 text-gray-400">{item.ip}</td>
                    <td className="py-5 text-gray-400">{item.date}</td>
                    <td className="py-5 text-right">
                      <span
                        className={`text-xs px-3 py-1 rounded font-medium border ${
                          item.status === 'CURRENT'
                            ? 'bg-[#1E293B] text-gray-300 border-[#334155]'
                            : 'bg-[#1E293B] text-gray-400 border-[#334155]'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {activities.map((item, index) => (
              <div key={index} className="bg-[#161F33] p-4 rounded-xl border border-[#1E293B] space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    {item.type === 'desktop' ? (
                      <FontAwesomeIcon icon={faLaptop} className="w-5 h-5 text-gray-400" />
                    ) : (
                      <FontAwesomeIcon icon={faMobile} className="w-5 h-5 text-gray-400" />
                    )}
                    <div>
                      <div className="font-medium text-white text-sm">{item.device}</div>
                      <div className="text-xs text-gray-500">{item.details}</div>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                      item.status === 'CURRENT'
                        ? 'bg-[#1E293B] text-gray-300 border-[#334155]'
                        : 'bg-[#1E293B] text-gray-400 border-[#334155]'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 border-t border-[#1E293B] pt-3">
                  <div>
                    <span className="text-gray-500 block text-[10px] mb-1">IP ADDRESS</span>
                    {item.ip}
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 block text-[10px] mb-1">DATE & TIME</span>
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
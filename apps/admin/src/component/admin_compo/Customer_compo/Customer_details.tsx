import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUp, 
  faChevronDown, 
  faRotateLeft, 
  faDownload, 
  faPlus, 
  faEllipsisVertical, 
  faChevronLeft, 
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function Customer_details() {
  const customersData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    initials: 'SJ',
    tier: 'PLATINUM MEMBER',
    tierColor: 'text-blue-400',
    phone: '+971 50 123 4567',
    email: 'sarah.j@example.com',
    location: 'Dubai Marina',
    bookings: 42,
    bookingStatus: 'High Frequency',
    wallet: 'AED 450.00',
    points: '1,240 Pts',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    initials: 'MT',
    tier: 'GOLD MEMBER',
    tierColor: 'text-yellow-500',
    phone: '+971 52 987 6543',
    email: 'm.thorne@business.ae',
    location: 'Downtown Dubai',
    bookings: 18,
    bookingStatus: 'Monthly',
    wallet: 'AED 125.50',
    points: '543 Pts',
    status: 'Active',
  },
  {
    id: 3,
    name: "Liam O'Connell",
    initials: 'LO',
    tier: 'SUSPENDED',
    tierColor: 'text-red-500',
    phone: '+971 58 555 0192',
    email: 'liam.o@mail.com',
    location: 'JLT',
    bookings: 3,
    bookingStatus: 'Policy Breach',
    wallet: 'AED 0.00',
    points: '0 Pts',
    status: 'Blocked',
  }
]
const [selectedCustomer, setSelectedCustomer] = useState(customersData[0]);

  return (
    <div className="min-h-screen  text-gray-200 font-sans p-6">
      {/* Top Accent Line */}
     
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Total Customers', value: '12,482', change: '+12%', color: 'text-green-500' },
            { title: 'Active Customers', value: '8,914', change: '+5%', color: 'text-green-500' },
            { title: 'New Customers', value: '1,205', change: '+28%', color: 'text-green-500' },
            { title: 'Blocked Customers', value: '42', change: '0%', color: 'text-gray-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-[#131A29] p-6 rounded-xl border border-[#1F293D] flex flex-col justify-between h-32">
              <div className="flex justify-between items-center text-gray-400">
                <span className="text-xs uppercase tracking-wider">{stat.title}</span>
                <span className={`text-xs flex items-center ${stat.color}`}>
                  <FontAwesomeIcon icon={faArrowUp} className="w-3.5 h-3.5 mr-1" /> {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mt-1">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-[#131A29] p-4 rounded-xl border border-[#1F293D] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {['All Cities', 'Booking History', 'Loyalty Status'].map((filter, index) => (
              <div key={index} className="relative w-full md:w-56">
                <select className="w-full bg-[#0B0F19] text-gray-300 border border-[#1F293D] rounded-lg px-4 py-2.5 pr-8 appearance-none focus:outline-none focus:border-[#3B82F6]">
                  <option>{filter}</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button className="bg-[#3B82F6] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition w-full md:w-auto">
              Apply Filters
            </button>
            <button className="bg-transparent text-gray-400 hover:text-white p-2.5 rounded-lg border border-[#1F293D] transition">
              <FontAwesomeIcon icon={faRotateLeft} className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Table Panel */}
          <div className="lg:col-span-3 bg-[#131A29] border border-[#1F293D] rounded-xl p-6 flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Customer Database</h2>
                  <p className="text-xs text-gray-400 mt-1">Showing 1-10 of 12,482 customers</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center border border-[#1F293D] px-3 py-2 text-xs font-medium rounded text-gray-300 hover:bg-gray-800 transition gap-1.5">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4" /> Export CSV
                  </button>
                  <button className="flex items-center border border-[#1F293D] px-3 py-2 text-xs font-medium rounded text-gray-300 hover:bg-gray-800 transition gap-1.5">
                    <FontAwesomeIcon icon={faPlus} className="w-4 h-4" /> New Customer
                  </button>
                </div>
              </div>

              {/* Table Body */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="text-[10px] uppercase text-gray-400 border-b border-[#1F293D]">
                    <tr>
                      <th className="py-4 px-4 font-semibold">Customer Name</th>
                      <th className="py-4 px-4 font-semibold">Contact Info</th>
                      <th className="py-4 px-4 font-semibold">Location</th>
                      <th className="py-4 px-4 font-semibold">Bookings</th>
                      <th className="py-4 px-4 font-semibold">Wallet / Points</th>
                      <th className="py-4 px-4 font-semibold">Status</th>
                      <th className="py-4 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-xs">
                    {customersData.map((customer) => (
                      <tr 
                        key={customer.id} 
                        onClick={() => setSelectedCustomer(customer)}
                        className="hover:bg-[#1a2333] transition cursor-pointer"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-xs">
                              {customer.initials}
                            </div>
                            <div>
                              <div className="font-medium text-white">{customer.name}</div>
                              <div className={`text-[10px] ${customer.tierColor} mt-0.5`}>{customer.tier}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-white flex items-center gap-1.5">{customer.phone}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5">{customer.email}</div>
                        </td>
                        <td className="py-4 px-4 text-gray-400">{customer.location}</td>
                        <td className="py-4 px-4">
                          <div className="text-white font-medium">{customer.bookings}</div>
                          <div className="text-[10px] text-green-500 mt-0.5">{customer.bookingStatus}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-white font-medium">{customer.wallet}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5">{customer.points}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] border ${
                            customer.status === 'Active' 
                              ? 'bg-emerald-950/40 text-emerald-400 border-emerald-900' 
                              : 'bg-red-950/40 text-red-400 border-red-900/50'
                          }`}>
                            {customer.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button className="text-gray-400 hover:text-white p-1">
                            <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center border-t border-[#1F293D] pt-4 mt-6">
              <span className="text-xs text-gray-400">Showing 1-10 of 12,482 customers</span>
              <div className="flex items-center space-x-1">
                <button className="p-1 px-2 text-xs text-gray-400 hover:bg-gray-800 rounded border border-[#1F293D]">
                  <FontAwesomeIcon icon={faChevronLeft} className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 px-2.5 text-xs bg-[#3B82F6] font-bold text-white rounded">1</button>
                <button className="p-1 px-2.5 text-xs text-gray-400 hover:bg-gray-800 rounded border border-[#1F293D]">2</button>
                <button className="p-1 px-2.5 text-xs text-gray-400 hover:bg-gray-800 rounded border border-[#1F293D]">3</button>
                <button className="p-1 px-2 text-xs text-gray-400 hover:bg-gray-800 rounded border border-[#1F293D]">
                  <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar / Profile Panel */}
          <div className="space-y-6">
            {/* User Profile Card */}
            <div className="bg-[#131A29] border border-[#1F293D] rounded-xl p-6 text-center">
              <div className="relative w-16 h-16 mx-auto mb-3">
                <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-xl">
                  {selectedCustomer.initials}
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#131A29] rounded-full"></span>
              </div>
              <h3 className="text-lg font-bold text-white">{selectedCustomer.name}</h3>
              <p className="text-xs text-gray-400 mt-1">Platinum Member since Oct 2022</p>
              
              <div className="grid grid-cols-2 gap-4 mt-6 border-t border-[#1F293D] pt-6">
                <div>
                  <div className="text-[10px] uppercase text-gray-400 tracking-wider font-semibold">Total Spent</div>
                  <div className="text-sm font-semibold text-white mt-1">AED 8,240</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-gray-400 tracking-wider font-semibold">Loyalty Points</div>
                  <div className="text-sm font-semibold text-cyan-400 mt-1">1,240</div>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-[#131A29] border border-[#1F293D] rounded-xl p-6">
              <h4 className="text-sm font-semibold text-white mb-4">Recent Bookings</h4>
              <div className="space-y-4">
                {[
                  { month: 'MAR', title: 'Luxury Spa & Fade', location: 'Dubai Marina', cost: 'AED 350' },
                  { month: 'FEB', title: 'Classic Styling', location: 'Downtown', cost: 'AED 180' }
                ].map((booking, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-800 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 font-bold text-[10px]">
                        {booking.month}
                      </div>
                      <div>
                        <div className="font-medium text-white">{booking.title}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{booking.location}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-white">{booking.cost}</div>
                      <span className="text-[9px] text-emerald-400">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full text-center text-xs text-cyan-400 mt-6 hover:underline">
                View Full History
              </button>
            </div>

            {/* Preferred Locations */}
            <div className="bg-[#131A29] border border-[#1F293D] rounded-xl p-6">
              <h4 className="text-sm font-semibold text-white mb-4">Preferred Locations</h4>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Dubai Marina Branch</span>
                    <span className="text-white font-medium">82% of visits</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[82%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Downtown Branch</span>
                    <span className="text-white font-medium">18% of visits</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3B82F6] w-[18%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-[#131A29] border border-[#1F293D] rounded-xl p-6">
              <h4 className="text-sm font-semibold text-white mb-4">Payment History</h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Payment</span>
                  <span className="font-medium text-white">AED 350.00 (Visa)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Refunds Issued</span>
                  <span className="font-medium text-white">0</span>
                </div>
                <div className="flex justify-between border-t border-gray-800 pt-3">
                  <span className="text-gray-400">Avg. Ticket Size</span>
                  <span className="font-bold text-white">AED 215.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
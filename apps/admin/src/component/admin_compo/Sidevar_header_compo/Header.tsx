
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
     faBars,
  faSearch,
  faBell,
  faCog as faSettings,

 } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
  navigatedata: string;
  onToggleMobileSidebar: () => void;
}

export default function Header({ navigatedata, onToggleMobileSidebar }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
            <header className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  {/* Left Section */}
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Mobile Menu Button */}
                    <button
                      onClick={onToggleMobileSidebar}
                      className="lg:hidden text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                    </button>
    
                    {/* Navigation Data */}
                    <div className="flex items-center text-sm font-medium">
                      <h1 className="text-white font-bold text-base md:text-lg">
                        {navigatedata === "Offer and Coupons" ? "Offers / Coupons" : navigatedata}
                      </h1>
                    </div>
    
                    {/* Search Bar */}
                    <div className="hidden md:block flex-1 max-w-md ml-4">
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
                        />
                        <input
                          type="search"
                          placeholder={navigatedata === "Offer and Coupons" ? "Search offers or codes..." : "Search analytics for report"}
                          className="w-full bg-gray-800 text-white placeholder-gray-500 
                                   pl-10 pr-4 py-2 rounded-3xl border border-gray-700
                                   focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                                   transition-all duration-200 rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
    
                  {/* Right Section */}
                  <div className="flex items-center space-x-3">
                    {/* Notification Icon */}
                    <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                      <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
                      <span className="absolute top-1 right-1 w-2 h-2 bg-blue-300 rounded-full"></span>
                    </button>
    
                    {/* Setting Icon */}
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                      <FontAwesomeIcon icon={faSettings} className="w-5 h-5" />
                    </button>
    
                    {/* Profile Image */}
                    <div className="flex items-center space-x-3 ml-2" onClick={()=>{ navigate("/admin/profile")}}>
                       <div className="hidden md:block">
                        <p className="text-white text-sm font-medium">Dhiren naidu</p>
                        <p className="text-gray-500 text-xs">Administrator</p>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                        <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" className="w-14 h-9 rounded-full object-cover" />
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </header>
           
    </>
  )
}


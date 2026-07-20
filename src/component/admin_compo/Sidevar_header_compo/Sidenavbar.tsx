import { useEffect } from 'react'
import { useState } from 'react'
import '../CSS/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignOutAlt,
  faTachometerAlt,
  faChartLine,
  faStore,
  faCut,
  faCalendarAlt,
  faUsers,
  faShoppingCart,
  faCreditCard,
  faTicketAlt,
  faImage,
  faCog as faSettings,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Header from './Header'
import { useNavigate} from 'react-router-dom';

import Rander_admin_page from '../Rander_admin_page'

export default function Sidenavbar ({rednderdata}:{rednderdata:string}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const navigate=useNavigate()
  useEffect(()=>{
   setActiveMenu(rednderdata)
  },[])
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
 console.log(activeMenu)
  const handleMenuClick = (label:string) => {
    setActiveMenu(label)
    navigate(`/admin/${label}`)
  };
  const menuItems = [
  { icon: faTachometerAlt, label: 'Dashboard', path: '/' },
  { icon: faChartLine, label: 'Finances Management', path: '/finances' },
  { icon: faStore, label: 'Outlet Management', path: '/outlet' },
  { icon: faCut, label: 'Salon Management', path: '/salon' },
  { icon: faCalendarAlt, label: 'Booking Management', path: '/bookings' },
  { icon: faUsers, label: 'Staff Management', path: '/staff' },
  { icon: faShoppingCart, label: 'Customer', path: '/customers' },
  { icon: faCreditCard, label: 'Payments', path: '/payments' },
  { icon: faTicketAlt, label: 'Offer and Coupons', path: '/offers' },
  { icon: faImage, label: 'CMS and Banner', path: '/cms' },
  { icon: faSettings, label: 'Settings', path: '/settings' },
];
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64' : 'w-20'} 
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          bg-gray-900 border-r border-gray-800 shadow-2xl`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className={`flex items-center space-x-3 ${!isSidebarOpen && 'lg:justify-center lg:w-full'}`}>
            <div className="w-8 h-8 bg-blue-400  rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            {isSidebarOpen && (<>
              <div className="block">
              <span className="text-white font-bold text-lg">Enginear Salon</span>
              <p className="text-blue-400 font-bold text-sm/2">TECNICAL ARTIST</p>
              </div>
              </>
            )}
            
          </div>
          <button
            onClick={toggleSidebar}
            className="hidden lg:block text-gray-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item.label)}
                className={`w-full flex items-center space-x-3 px-3 py-2  transition-all duration-200
                  ${activeMenu === item.label
                    ? 'bg-gradient-to-r from-gray-600 to-gray-900 text-blue-400 shadow-lg border-r-4 border-blue-600 font-bold'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  } ${!isSidebarOpen && 'lg:justify-center'}`}
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                {isSidebarOpen && <span className="text-sm">{item.label}</span>}
              </button>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer - Logout */}
        <div className="border-t border-gray-800 p-4">
          <button
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg 
              text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all duration-200
              ${!isSidebarOpen && 'lg:justify-center'}`}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        {/* <Header navigatedata={rednderdata} />
        <Render_admin_page navigatedata={rednderdata}/> */}
        <Header navigatedata={rednderdata}/>
        <Rander_admin_page navigatedata={rednderdata}/>
      </div>
      </div>
      </>
  )
}

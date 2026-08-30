import { useState } from "react";
import "./OfferFilter.css";
import { FiChevronDown, FiFilter } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXmark,  
  faCheck 
} from '@fortawesome/free-solid-svg-icons';
const OfferFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(100);
    const [inStockOnly, setInStockOnly] = useState(false);
   
 
    console.log(isOpen)
    return (<>
        <div className="offer-filter">

            <div className="filter-item">
                <select>
                    <option>Select City</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                </select>
                <FiChevronDown className="filter-icon" />
            </div>

            <div className="filter-item">
                <select>
                    <option>All Outlets</option>
                    <option>Outlet 1</option>
                    <option>Outlet 2</option>
                </select>
                <FiChevronDown className="filter-icon" />
            </div>

            <div className="filter-item">
                <select>
                    <option>Offer Type</option>
                    <option>Flat Discount</option>
                    <option>Percentage</option>
                    <option>BOGO</option>
                </select>
                <FiChevronDown className="filter-icon" />
            </div>

            <div className="filter-item">
                <select>
                    <option>Status</option>
                    <option>Active</option>
                    <option>Scheduled</option>
                    <option>Expired</option>
                </select>
                <FiChevronDown className="filter-icon" />
            </div>

            <button className="apply-btn">
                <FiFilter size={14} />
                Apply
            </button>

        </div>
        <div className="fillter-offcanvas">
          <button
          onClick={():any => setIsOpen(true)}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium text-sm active:scale-100 transition-transform"
            >
            <FiFilter size={14} />
           <span>Filter</span>
          </button>

        </div>
        {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end ">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={():any => setIsOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative bg-[#0b111e] w-full  rounded-t-2xl p-6 shadow-2xl max-h-[100vh] flex flex-col z-0   text-white">
            {/* Grab Handle */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />

            {/* Header */}
            <div className="flex justify-between items-center  pb-4 mb-4">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={():any => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center w-8 h-8"
              >
                <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto space-y-2 flex-1 pr-1">
              {/* Category Filter */}
            

              {/* Price Range Filter */}
               <div>
                    

            <div className="filter-item1">
                <select>
                    <option>Select City</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                </select>
                <FiChevronDown className="filter-icon" />
            </div>

            <div className="filter-item1">
                <select>
                    <option>All Outlets</option>
                    <option>Outlet 1</option>
                    <option>Outlet 2</option>
                </select>
                <FiChevronDown className="filter-icon" />
            </div>

            <div className="filter-item1">
                <select>
                    <option>Offer Type</option>
                    <option>Flat Discount</option>
                    <option>Percentage</option>
                    <option>BOGO</option>
                </select>
                <FiChevronDown className="filter-icon" />
            </div>

            <div className="filter-item1">
                <select>
                    <option>Status</option>
                    <option>Active</option>
                    <option>Scheduled</option>
                    <option>Expired</option>
                </select>
                <FiChevronDown className="filter-icon" />
                </div>
               </div>

              {/* Toggle Option */}
           
            </div>

            {/* Footer Action Buttons */}
            <div className="pt-4 mt-4  flex gap-3">
             
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors "
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
        </>
    );
};

export default OfferFilter;
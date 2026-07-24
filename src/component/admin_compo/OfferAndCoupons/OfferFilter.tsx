import "./OfferFilter.css";
import { FiChevronDown, FiFilter } from "react-icons/fi";

const OfferFilter = () => {
    return (
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
    );
};

export default OfferFilter;
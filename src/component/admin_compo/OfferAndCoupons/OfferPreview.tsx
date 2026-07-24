import { useState } from "react";
import "./OfferPreview.css";
import {
    FiCopy,
    FiPercent,
    FiMapPin,
    FiCalendar,
    FiCheck,
} from "react-icons/fi";
import salonBanner from "../../../assets/salon_offer_preview.png";

const OfferPreview = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("SUMMER25");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="offer-preview-card">

            <div className="preview-banner">

                <img
                    src={salonBanner}
                    alt="Offer Banner"
                />

                <div className="banner-overlay">

                    <span className="preview-badge">
                        OFFER PREVIEW
                    </span>

                    <h2>Summer Luxe Special</h2>

                </div>

            </div>

            <div className="offer-content">

                <label>COUPON CODE</label>

                <div className="coupon-box">

                    <span>SUMMER25</span>

                    <button onClick={handleCopy} title="Copy code">
                        {copied ? <FiCheck style={{ color: "#10b981" }} /> : <FiCopy />}
                    </button>

                </div>

                <div className="offer-details">

                    <div className="detail-item">
                        <FiPercent />
                        <div>
                            <strong>25% Discount</strong>
                            <p>Applicable on all premium hair engineering and styling services.</p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <FiCalendar />
                        <div>
                            <strong>Valid Until August 31, 2024</strong>
                            <p>Duration: 90 Days Remaining</p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <FiMapPin />
                        <div>
                            <strong>New York & London Outlets</strong>
                            <p>Available across 12 selected technical hubs.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="offer-footer">

                <button className="duplicate-btn">
                    Duplicate
                </button>

                <button className="analytics-btn">
                    View Analytics
                </button>

            </div>

        </div>
    );
};

export default OfferPreview;
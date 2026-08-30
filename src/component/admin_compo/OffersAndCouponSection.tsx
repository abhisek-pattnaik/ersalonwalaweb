import OfferFilter from "./OfferAndCoupons/OfferFilter";
import OfferPreview from "./OfferAndCoupons/OfferPreview";
import OfferStats from "./OfferAndCoupons/OfferStats";
import OfferTable from "./OfferAndCoupons/OfferTable";
import QuickInsights from "./OfferAndCoupons/QuickInsights";
import "./CSS/OffersAndCouponSection.css";

const OffersAndCouponSection = () => {
    return (
        <div className="offers-page">

            {/* Top Statistics */}
            <OfferStats />

            {/* Filters */}
            <OfferFilter />

            {/* Middle Section */}
            <div className="offers-content">

                {/* Left */}
                <div className="offers-left">
                    <OfferTable />
                </div>

                {/* Right */}
                <div className="offers-right">
                    <OfferPreview />
                    <QuickInsights />
                </div>

            </div>

        </div>
    );
};

export default OffersAndCouponSection;
import Footer from "@/components/home/Footer";
import GetStarted from "@/components/bussiness/GetStarted";
import PrecisionTools from "@/components/bussiness/PrecisionTools";
import BusinessGrowth from "@/components/bussiness/BusinessGrowth";
import StatsSection from "@/components/bussiness/StatsSection";
import FeedbackSection from "@/components/bussiness/FeedbackSection";
import PricingPlans from "@/components/service/PricingPlans";
import SalonGallery from "@/components/service/SalonGallery";
import FAQSection from "@/components/service/FAQSection";
import BookSection from "@/components/service/BookSection";

export default function ForBusinessPage() {
    return (
        <div className="bussiness-container">
            <GetStarted />
            <PrecisionTools />
            <BusinessGrowth />
            <StatsSection />
            <PricingPlans />
            <SalonGallery />
            <FeedbackSection />
            <FAQSection />
            <BookSection />
            <Footer />
        </div>
    );
}
import "./Service.css";
import heroStylistImg from "@/assets/hero_stylist.png";
import ServiceHeaderPoster from "@/components/service/ServiceHeaderPoster";
import OurService from "@/components/service/OurService";
import FAQSection from "@/components/service/FAQSection";
import FeedbackSection from "@/components/service/FeedbackSection";
import BookSection from "@/components/service/BookSection";
import DownloadSection from "@/components/home/DownloadSection";
import Footer from "@/components/home/Footer";

export default function ServicePage() {
    return (
        <div className="service-container">
            <ServiceHeaderPoster image={heroStylistImg} />
            <OurService />
            <DownloadSection />
            <FAQSection />
            <FeedbackSection />
            <BookSection />
            <Footer />
        </div>
    );
}

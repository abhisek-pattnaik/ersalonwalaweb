import heroStylistImg from "@/assets/hero_stylist.png";
import EngineerSection from "@/components/home/EngineerSection";
import Footer from "@/components/home/Footer";
import SalonGallery from "@/components/service/SalonGallery";
import ServiceHeaderPoster from "@/components/service/ServiceHeaderPoster";
import AboutFounder from "@/components/team/AboutFounder";
import BookSection from "@/components/service/BookSection";
import FeedbackSection from "@/components/bussiness/FeedbackSection";

export default function TeamPage() {
    return (
        <div className="team-container">
            <ServiceHeaderPoster image={heroStylistImg} title="Meet Our Expert Team" description="There are many variation of passages are Ipsum available, majority have suffered alteration in some form." />
            <EngineerSection />
            <AboutFounder />
            <SalonGallery />
            <FeedbackSection />
            <BookSection />
            <Footer />
        </div>
    );
}
import Footer from "@/components/home/Footer";
import heroStylistImg from "@/assets/hero_stylist.png";
import ServiceHeaderPoster from "@/components/service/ServiceHeaderPoster";
import OurService from "@/components/service/OurService";
import DramaticTransformations from "@/components/gallery/DramaticTransformations";
import FeedbackSection from "@/components/service/FeedbackSection";
import SalonGallery from "@/components/service/SalonGallery";
import BookSection from "@/components/service/BookSection";

export default function GalleryPage() {
    return (
        <div className="gallery-container">
            <ServiceHeaderPoster image={heroStylistImg} title="Our Work Gallery" description="There are many variation of passages are Ipsum available, majority have suffered alteration in some form." />
            <OurService />
            <DramaticTransformations />
            <FeedbackSection />
            <SalonGallery />
            <BookSection />
            <Footer />
        </div>
    );
}
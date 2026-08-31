import Footer from "@/components/home/Footer";
import heroStylistImg from "@/assets/hero_stylist.png";
import ServiceHeaderPoster from "@/components/service/ServiceHeaderPoster";
import Pillers from "@/components/about/Pillars";
import AboutFounder from "@/components/team/AboutFounder";
import StatsSection from "@/components/bussiness/StatsSection";
import DownloadSection from "@/components/home/DownloadSection";
import FeedbackSection from "@/components/service/FeedbackSection";
import BookSection from "@/components/service/BookSection";


export default function AboutPage() {
    return (
        <div className="about-container">
            <ServiceHeaderPoster image={heroStylistImg} title="About Engineer Salon" description="There are many variation of passages are Ipsum available, majority have suffered alteration in some form." />
            <Pillers />
            <AboutFounder />
            <StatsSection isNeedThreeSteps={false} />
            <DownloadSection />
            <FeedbackSection/>
            <BookSection />
            <Footer />
        </div>
    );
}
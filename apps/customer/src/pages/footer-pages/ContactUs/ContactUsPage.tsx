import ServiceHeaderPoster from "@/components/service/ServiceHeaderPoster";
import heroStylistImg from "@/assets/hero_stylist.png";
import WorkingDay from "@/components/contact/WorkingDay";
import Footer from "@/components/home/Footer";
import LocationMap from "@/components/contact/LocationMap";
import SendMessage from "@/components/contact/SendMessage";
import FAQSection from "@/components/service/FAQSection";
import DownloadSection from "@/components/home/DownloadSection";
import BookSection from "@/components/service/BookSection";


export default function ContactUsPage() {
    return (
        <div className="contact-page-container">
            <ServiceHeaderPoster image={heroStylistImg} title="Contact Engineer Salon" description="There are many variation of passages are Ipsum available, majority have suffered alteration in some form." />
              <WorkingDay/>
              <LocationMap/>
              <SendMessage/>
              <DownloadSection />
              <FAQSection/>
              <BookSection />
              <Footer/>
        </div>
    );
}   
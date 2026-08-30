import "./Service.css";
import heroStylistImg from "@/assets/hero_stylist.png";
import ServiceHeaderPoster from "@/components/service/ServiceHeaderPoster";
import OurService from "@/components/service/OurService";

export default function ServicePage() {
    return (
        <div className="service-container">
            <ServiceHeaderPoster image={heroStylistImg} />
            <OurService />
        </div>
    );
}


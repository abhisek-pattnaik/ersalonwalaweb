import "./Service.css";
import masterStylistImg from "@/assets/master_stylist.png";
import ServiceHeaderPoster from "@/components/service/ServiceHeaderPoster";

export default function ServicePage() {
    return (
        <div className="service-container">
            <ServiceHeaderPoster image={masterStylistImg} />
        </div>
    )
}



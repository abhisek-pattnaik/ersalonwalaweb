import "./ServiceHeaderPoster.css";
import masterStylistImg from "@/assets/master_stylist.png";

interface ServiceHeaderPosterProps {
    image?: string;
    title?: string;
    description?: string;
}

export default function ServiceHeaderPoster({
    image = masterStylistImg,
    title = "Find a service close to you",
    description = "There are many variation of passages are Ipsum available, majority have suffered alteration in some form.",
}: ServiceHeaderPosterProps) {
    return (
        <section className="hero">
            <img src={bannerImage} alt="Barber Shop" className="hero-image" />

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>
                    Find a service
                    <br />
                    close to you
                </h1>

                <p>
                    There are many variation of passages are Ipsum available,
                    <br />
                    majority have suffered alteration in some form.
                </p>
            </div>
        </section>
    );
};


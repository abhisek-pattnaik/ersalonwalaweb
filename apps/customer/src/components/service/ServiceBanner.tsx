import "./ServiceBanner.css";

interface ServiceBannerProps {
    title?: string;
    description?: string;
    image: string;
}

export default function ServiceBanner({
    title = "Find a service close to you",
    description = "There are many variation of passages are Ipsum available, majority have suffered alteration in some form.",
    image,
}: ServiceBannerProps) {
    return (
        <div className="service-banner-container">
            <section className="service-banner">
                <img src={image} alt="Salon" className="banner-image" />

                <div className="banner-overlay"></div>

                <div className="banner-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </section>
        </div>
    );
}
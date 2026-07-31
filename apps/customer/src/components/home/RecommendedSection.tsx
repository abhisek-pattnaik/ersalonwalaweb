import "swiper/css";
import "./RecommendedSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

import { Star, MapPin } from "lucide-react";

const salons = [
    {
        id: 1,
        name: "Luxe Salon Studio",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
        address: "Downtown CT, 2700, North Ontario",
        reviews: "169 Reviews",
    },
    {
        id: 2,
        name: "Master Barber & Spa",
        image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800",
        address: "1777 West St. Fort Worth, 33001",
        reviews: "128 Reviews",
    },
    {
        id: 3,
        name: "Glow & Grace Studio",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
        address: "2207 Street, Fort Myers, 33901",
        reviews: "210 Reviews",
    },
    {
        id: 4,
        name: "Prestige Grooming Club",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
        address: "2201 Main St, Fort Myers, 33901",
        reviews: "85 Reviews",
    },
    {
        id: 5,
        name: "Urban Beauty Bar",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
        address: "444 Tech Park, Silicon Valley",
        reviews: "342 Reviews",
    },
    {
        id: 6,
        name: "Elite Hair Design",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
        address: "100 Fashion Ave, New York",
        reviews: "194 Reviews",
    }
];

export default function RecommendedSection() {
    return (
        <section className="recommended">

            <span className="subtitle">OUR SERVICES</span>

            <h2>Recommended</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin
                neque.
            </p>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation
                modules={[Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {salons.map((salon) => (
                    <SwiperSlide key={salon.id}>
                        <div className="salon-card">

                            <img src={salon.image} alt={salon.name} />

                            <div className="card-content">

                                <div className="rating">
                                    <Star size={14} fill="#FFD54A" color="#FFD54A" />
                                    4.5
                                    <span>{salon.reviews}</span>
                                </div>

                                <h3>{salon.name}</h3>

                                <div className="address">
                                    <MapPin size={14} />
                                    {salon.address}
                                </div>

                                <button>BOOK NOW</button>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
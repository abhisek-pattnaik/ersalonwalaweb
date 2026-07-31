import "swiper/css";
import "./TestimonialSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

interface Testimonial {
    id: number;
    name: string;
    username: string;
    review: string;
    role: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Arjun T.",
        username: "@arjundrops",
        review:
            "The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive.",
        role: "Verified Client",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 2,
        name: "Meena R.",
        username: "@meenaskitchen",
        review:
            "Best facial & organic skincare treatment in town. Highly recommend their recommended salons! My skin has never felt better.",
        role: "Verified Client",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 3,
        name: "Varun K.",
        username: "@varun.adsguy",
        review:
            "Super easy booking and zero waiting time at the salon. Loved the engineer stylist approach. The precision is just crazy.",
        role: "Verified Client",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 4,
        name: "Divya S.",
        username: "@divya.ecom",
        review:
            "Always my go-to salon platform. Clean UI, honest reviews, and premium stylists that actually listen to what you want.",
        role: "Verified Client",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 5,
        name: "Rahul M.",
        username: "@rahul.tech",
        review:
            "The convenience of having top-tier stylists at my fingertips is amazing. It saves me so much time trying to find a good salon.",
        role: "Verified Client",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200",
    },
];

const TestimonialSection = () => {
    return (
        <section className="testimonial-section">
            <div className="testimonial-header">
                <div className="line"></div>
                <span>Student Stories</span>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1.2 },
                    640: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial-card">
                            <img src={item.image} alt={item.name} className="avatar" />

                            <h3>{item.name}</h3>

                            <p className="username">{item.username}</p>

                            <p className="review">{item.review}</p>

                            <button>{item.role}</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialSection;
import React, { useState, useEffect } from "react";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import "./OurService.css";

import facialImg from "@/assets/facial_treatment.png";
import heroStylistImg from "@/assets/hero_stylist.png";
import masterStylistImg from "@/assets/master_stylist.png";

interface ServiceItem {
    id: number;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    title: string;
    address: string;
    isFeatured?: boolean;
}

const servicesData: ServiceItem[] = [
    {
        id: 1,
        category: "Hair",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        reviews: 104,
        title: "Salon Name",
        address: "Brookpark Ext, 27085, North Olmsted, 44070",
        isFeatured: true,
    },
    {
        id: 2,
        category: "Hair",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        reviews: 104,
        title: "Salon Name",
        address: "2267 Main st, Fort Myers, 33901",
        isFeatured: false,
    },
    {
        id: 3,
        category: "Hair",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        reviews: 104,
        title: "Deluxe room",
        address: "2267 Main st, Fort Myers, 33901",
        isFeatured: false,
    },
    {
        id: 4,
        category: "Hair",
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        reviews: 104,
        title: "Meeting room",
        address: "2267 Main st, Fort Myers, 33901",
        isFeatured: false,
    },
    {
        id: 5,
        category: "Nails",
        image: facialImg,
        rating: 4.8,
        reviews: 86,
        title: "Luxury Nails Spa",
        address: "105 Ocean Drive, Miami, 33139",
        isFeatured: true,
    },
    {
        id: 6,
        category: "Skin Care",
        image: heroStylistImg,
        rating: 4.9,
        reviews: 142,
        title: "Glow Skin Studio",
        address: "442 Sunset Blvd, Los Angeles, 90028",
        isFeatured: false,
    },
    {
        id: 7,
        category: "Spa",
        image: masterStylistImg,
        rating: 4.7,
        reviews: 95,
        title: "Serenity Day Spa",
        address: "880 Broadway, New York, 10003",
        isFeatured: false,
    },
];

const categories = ["Hair", "Nails", "Skin Care", "Spa", "Massage", "Bridal Makeup"];

export default function OurService() {
    const [activeTab, setActiveTab] = useState("Hair");
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) setItemsPerPage(1);
            else if (window.innerWidth <= 900) setItemsPerPage(2);
            else if (window.innerWidth <= 1200) setItemsPerPage(3);
            else setItemsPerPage(4);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredServices = servicesData.filter(
        (service) => service.category === activeTab
    );

    // If current tab has fewer than 4 items, fall back to all items for demonstration
    const displayList = filteredServices.length > 0 ? filteredServices : servicesData;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + 1, Math.max(0, displayList.length - itemsPerPage)));
    };

    return (
        <section className="our-services-section">
            <div className="our-services-container">

                {/* Section Header */}
                <div className="services-header-content">
                    <span className="services-subheading">OUR SERVICES</span>
                    <h2 className="services-main-title">Best For You</h2>
                    <p className="services-description">
                        Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
                    </p>
                </div>

                {/* Category Navigation Tabs */}
                <div className="tabs-wrapper">
                    <div className="category-tabs-pill">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`tab-pill-btn ${activeTab === cat ? "active" : ""}`}
                                onClick={() => {
                                    setActiveTab(cat);
                                    setStartIndex(0);
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel Container with Cards */}
                <div className="carousel-main-container">
                    <button
                        className="carousel-arrow prev-arrow"
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <div className="cards-slider-grid">
                        {displayList.slice(startIndex, startIndex + itemsPerPage).map((service) => (
                            <div key={service.id} className="service-item-card">
                                <div className="card-image-box">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = heroStylistImg;
                                        }}
                                    />
                                </div>

                                <div className="card-details-content">
                                    <div className="rating-review-row">
                                        <div className="rating-box">
                                            <Star size={16} className="star-icon" />
                                            <span>{service.rating}</span>
                                        </div>
                                        <span className="reviews-text">{service.reviews} reviews</span>
                                    </div>

                                    <h3 className="card-salon-name">{service.title}</h3>

                                    <div className="address-row">
                                        <MapPin size={15} className="pin-icon" />
                                        <span>{service.address}</span>
                                    </div>

                                    <button
                                        className={`book-now-btn ${service.isFeatured ? "featured" : ""}`}
                                    >
                                        BOOK NOW
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-arrow next-arrow"
                        onClick={handleNext}
                        disabled={startIndex >= Math.max(0, displayList.length - itemsPerPage)}
                        aria-label="Next"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

            </div>
        </section>
    );
}

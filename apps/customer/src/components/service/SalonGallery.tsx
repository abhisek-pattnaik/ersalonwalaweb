import React from 'react';
import './SalonGallery.css';

const images = [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Washing hair
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Salon mirrors
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Blow dry
    "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Treatment
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Curling
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"  // Scissors
];

export default function SalonGallery() {
    return (
        <section className="salon-gallery-section">
            <div className="gallery-curve-top"></div>

            <div className="gallery-images">
                {images.map((src, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={src} alt={`Salon gallery ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="gallery-curve-bottom"></div>
        </section>
    );
}

import React from 'react';
import { Calendar } from 'lucide-react';
import './BookSection.css';

export default function BookSection() {
    return (
        <section className="book-section">
            <div className="book-container">
                <h2 className="book-title">
                    Ready for Your Next<br />Transformation?
                </h2>
                
                <button className="book-btn">
                    Book Your Session Now
                    <Calendar size={18} className="book-icon" />
                </button>
                
                <p className="book-subtitle">
                    Join the exclusive circle of Engineer Salon clients.
                </p>
                
                <div className="book-divider"></div>
            </div>
        </section>
    );
}

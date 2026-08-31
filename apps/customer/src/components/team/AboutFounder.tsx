import React from 'react';
import './AboutFounder.css';
import heroStylistImg from "../../assets/hero_stylist.png";

export default function AboutFounder() {
    return (
        <section className="about-founder-section">
            <div className="about-founder-container">
                <div className="about-founder-card">
                    
                    <div className="founder-image-wrapper">
                        <img src={heroStylistImg} alt="Founder" className="founder-image" />
                    </div>

                    <div className="founder-content">
                        <span className="founder-subtitle">ABOUT THE FOUNDER</span>
                        <h2 className="founder-title">
                            It's the bridge between<br />service companies<br />and consumers.
                        </h2>
                        <p className="founder-description">
                            ServiceMarket.dk is a Copenhagen-based technology<br />
                            company known for our overview platform. Our aim is to<br />
                            simplify and improve everyday life for citizens in Denmark.<br />
                            One platform that brings together all services in an easy and<br />
                            controlled environment.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

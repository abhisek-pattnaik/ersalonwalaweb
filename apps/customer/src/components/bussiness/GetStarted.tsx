import React from 'react';
import './GetStarted.css';
import dashboardImg from '@/assets/MainContentArea.png';

export default function GetStarted() {
    return (
        <section className="business-get-started-section">
            <div 
                className="bgs-background-img" 
                style={{ backgroundImage: `url(${dashboardImg})` }}
            ></div>
            <div className="bgs-overlay"></div>
            
            <div className="bgs-container">
                <div className="bgs-content">
                    <h1 className="bgs-title">
                        Grow Your Salon Business with <span className="bgs-highlight">Engineer Salon</span>
                    </h1>
                    <p className="bgs-description">
                        The ultimate precision-engineered platform designed for high-end salons. Automate your workflow, delight your clients, and scale your revenue with clinical efficiency.
                    </p>
                    <div className="bgs-buttons">
                        <button className="bgs-btn primary">Get Started</button>
                        <button className="bgs-btn secondary">Book Demo</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

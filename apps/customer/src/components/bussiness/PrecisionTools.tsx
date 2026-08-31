import React from 'react';
import './PrecisionTools.css';
import { Calendar, Users, TrendingUp, Network, BookUser, Ticket } from 'lucide-react';

export default function PrecisionTools() {
    const tools = [
        {
            icon: <Calendar className="pt-icon" />,
            title: "Online Booking",
            description: "Intuitive 24/7 self-service scheduling for your clients on any device.",
            iconBg: "#e0f2fe",
            iconColor: "#0284c7"
        },
        {
            icon: <Users className="pt-icon" />,
            title: "Staff Management",
            description: "Optimize schedules, track commissions, and manage performance benchmarks.",
            iconBg: "#f3e8ff",
            iconColor: "#9333ea"
        },
        {
            icon: <TrendingUp className="pt-icon" />,
            title: "Revenue Reports",
            description: "Deep-dive analytics and automated reporting to track your business growth.",
            iconBg: "#ffedd5",
            iconColor: "#ea580c"
        },
        {
            icon: <Network className="pt-icon" />,
            title: "Multi-Outlet",
            description: "Centralized control for salon chains and luxury beauty franchises.",
            iconBg: "#e0e7ff",
            iconColor: "#4f46e5"
        },
        {
            icon: <BookUser className="pt-icon" />,
            title: "Customer Management",
            description: "Detailed client profiles, history tracking, and personalized marketing.",
            iconBg: "#fce7f3",
            iconColor: "#db2777"
        },
        {
            icon: <Ticket className="pt-icon" />,
            title: "Offers & Coupons",
            description: "Powerful discount engine to drive off-peak demand and reward loyalty.",
            isActive: true
        }
    ];

    return (
        <section className="precision-tools-section">
            <div className="pt-container">
                <div className="pt-header">
                    <h2 className="pt-title">Precision Tools for Modern Salons</h2>
                    <p className="pt-subtitle">
                        Every feature is designed with both the stylist and the client in mind, bridging the gap between engineering and beauty.
                    </p>
                </div>
                
                <div className="pt-grid">
                    {tools.map((tool, index) => (
                        <div 
                            key={index} 
                            className="pt-card"
                            style={{ 
                                '--icon-bg': tool.iconBg,
                                '--icon-color': tool.iconColor
                            } as React.CSSProperties}
                        >
                            <div className="pt-icon-wrapper">
                                {tool.icon}
                            </div>
                            <h3 className="pt-card-title">{tool.title}</h3>
                            <p className="pt-card-description">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

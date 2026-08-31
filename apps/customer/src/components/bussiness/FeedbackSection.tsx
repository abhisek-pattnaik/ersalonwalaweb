import React from 'react';
import './FeedbackSection.css';

interface FeedbackItem {
    name: string;
    handle: string;
    quote: string;
    avatar: string;
    stylist: string;
}

const feedbacks: FeedbackItem[] = [
    {
        name: "Arjun T.",
        handle: "@arjun.drops",
        quote: `"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive."`,
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Arjun",
        stylist: "Sarah Jenkins"
    },
    {
        name: "Meena R.",
        handle: "@meenas.kitchen",
        quote: `"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive."`,
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Meena",
        stylist: "Sarah Jenkins"
    },
    {
        name: "Varun K.",
        handle: "@varun.adsguy",
        quote: `"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive."`,
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Varun",
        stylist: "Sarah Jenkins"
    },
    {
        name: "Divya S.",
        handle: "@divya.ecom",
        quote: `"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive."`,
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Divya",
        stylist: "Sarah Jenkins"
    }
];

export default function FeedbackSection() {
    return (
        <section className="business-feedback-section">
            <div className="business-feedback-container">
                <div className="business-feedback-header">
                    <h2 className="business-feedback-title">
                        Real Client<br />Feedback.
                    </h2>
                    <div className="business-feedback-subtitle-container">
                        <div className="business-feedback-line"></div>
                        <span className="business-feedback-subtitle">Student Stories</span>
                    </div>
                </div>
                
                <div className="business-feedback-grid">
                    {feedbacks.map((item, idx) => (
                        <div className="business-feedback-card" key={idx}>
                            <div className="business-feedback-avatar-container">
                                <img src={item.avatar} alt={item.name} className="business-feedback-avatar" />
                            </div>
                            <h3 className="business-feedback-name">{item.name}</h3>
                            <p className="business-feedback-handle">{item.handle}</p>
                            <p className="business-feedback-quote">{item.quote}</p>
                            <div className="business-feedback-stylist-btn">
                                {item.stylist}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

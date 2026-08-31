import React from 'react';
import './FeedbackSection.css';

const feedbacks = [
    {
        name: "Arjun T.",
        handle: "@arjun.drops",
        quote: "\"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive.\"",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Arjun",
        stylist: "Sarah Jenkins"
    },
    {
        name: "Meena R.",
        handle: "@meenas.kitchen",
        quote: "\"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive.\"",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Meena",
        stylist: "Sarah Jenkins"
    },
    {
        name: "Varun K.",
        handle: "@varun.adsguy",
        quote: "\"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive.\"",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Varun",
        stylist: "Sarah Jenkins"
    },
    {
        name: "Divya S.",
        handle: "@divya.ecom",
        quote: "\"The level of technical skill here is unmatched. It's not just a haircut, it's architectural design for your hair. Truly impressive.\"",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Divya",
        stylist: "Sarah Jenkins"
    }
];

export default function FeedbackSection() {
    return (
        <section className="feedback-section">
            <div className="feedback-header">
                <h2 className="feedback-title">Real Client<br/>Feedback.</h2>
                <div className="feedback-subtitle-container">
                    <div className="feedback-line"></div>
                    <span className="feedback-subtitle">Student Stories</span>
                </div>
            </div>
            
            <div className="feedback-grid">
                {feedbacks.map((item, idx) => (
                    <div className="feedback-card" key={idx}>
                        <div className="feedback-avatar-container">
                            <img src={item.avatar} alt={item.name} className="feedback-avatar" />
                        </div>
                        <h3 className="feedback-name">{item.name}</h3>
                        <p className="feedback-handle">{item.handle}</p>
                        <p className="feedback-quote">{item.quote}</p>
                        <div className="feedback-stylist-btn">
                            {item.stylist}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

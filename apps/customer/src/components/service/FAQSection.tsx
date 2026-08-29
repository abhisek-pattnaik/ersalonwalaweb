import React, { useState } from 'react';
import { ChevronDown, Scissors } from 'lucide-react';
import './FAQSection.css';
import heroStylistImg from '@/assets/hero_stylist.png';
import masterStylistImg from '@/assets/master_stylist.png';
import facialTreatmentImg from '@/assets/facial_treatment.png';

const faqs = [
    { question: "What is ER sallon enginner?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How does it work?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How much does it cost?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What if I already have a benefits scheme in place?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Do I need another broker?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How much does it cost?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What if I already have a benefits scheme in place?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-left">
                    <span className="faq-badge">FAQ</span>
                    <h2 className="faq-title">What would you like to know about Us</h2>
                    
                    <div className="faq-collage">
                        <div className="collage-img img-1">
                            <img src={heroStylistImg} alt="Hair washing" />
                        </div>
                        <div className="collage-img img-2">
                            <img src={masterStylistImg} alt="Salon tools" />
                        </div>
                        <div className="collage-img img-3">
                            <img src={facialTreatmentImg} alt="Spa treatments" />
                        </div>
                        <div className="collage-img img-4">
                            <img src={facialTreatmentImg} alt="Facial massage" />
                        </div>
                        
                        {/* Floating scissor icons */}
                        <div className="floating-icon icon-1">
                            <Scissors size={20} strokeWidth={1.5} />
                        </div>
                        <div className="floating-icon icon-2">
                            <Scissors size={20} strokeWidth={1.5} />
                        </div>
                        <div className="floating-icon icon-3">
                            <Scissors size={20} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                <div className="faq-right">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <span>{faq.question}</span>
                                    <ChevronDown size={20} className="faq-icon" />
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

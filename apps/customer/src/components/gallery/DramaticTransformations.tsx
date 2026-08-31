import React, { useState } from 'react';
import './DramaticTransformations.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import beforeImg from "../../assets/master_stylist.png";
import afterImg from "../../assets/hero_stylist.png";

export default function DramaticTransformations() {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <section className="transformations-section">
            <div className="section-title">
                <h2>Dramatic Transformations</h2>
                <p>The science of change. Witness the results of our systematic approach.</p>
            </div>

            <div className="slider-container">
                {/* After Image (Background) */}
                <img src={afterImg} alt="After Transformation" className="image-after" />
                
                {/* Before Image (Clipped) */}
                <img 
                    src={beforeImg} 
                    alt="Before Transformation" 
                    className="image-before" 
                    style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                />

                {/* Range Input (Invisible but functional) */}
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={sliderValue} 
                    onChange={handleSliderChange} 
                    className="slider-input"
                />

                {/* Custom Slider Handle */}
                <div className="slider-handle" style={{ left: `${sliderValue}%` }}>
                    <div className="slider-handle-button">
                        <ChevronLeft size={16} color="#000" />
                        <ChevronRight size={16} color="#000" />
                    </div>
                </div>

                {/* Labels */}
                <div className="label-badge label-before" style={{ opacity: sliderValue > 25 ? 1 : 0 }}>
                    Before
                </div>
                <div className="label-badge label-after" style={{ opacity: sliderValue < 75 ? 1 : 0 }}>
                    After
                </div>
            </div>
        </section>
    );
}

import heroStylistImg from '@/assets/hero_stylist.png';
import facialImg from '@/assets/facial_treatment.png';
import masterStylistImg from '@/assets/master_stylist.png';
import './header.css';

const HeaderSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-watermark">
                Engineer<br />Salon wala.
            </div>

            <div className="hero-scissor-scatter">
                <span className="scatter-icon s1">✂️</span>
                <span className="scatter-icon s2">✂️</span>
                <span className="scatter-icon s3">✂️</span>
                <span className="scatter-icon s4">✂️</span>
            </div>

            <div className="hero-grid">
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Precision <span className="scissor-icon">✂️</span>
                        <br />
                        Engineering
                        <br />
                        Meets <span className="serif-italic">Organic</span>
                        <br />
                        <span className="serif-italic">Beauty.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <div className="hero-actions">
                        <a href="#download" className="btn-hero-primary">
                            Download Our App
                        </a>
                    </div>
                </div>

                <div className="hero-collage">
                    <div className="collage-circle-main">
                        <img src={heroStylistImg} alt="Stylist at work" />
                    </div>
                    <div className="collage-pill-sub1">
                        <img src={facialImg} alt="Facial treatment" />
                    </div>
                    <div className="collage-pill-sub2">
                        <img src={masterStylistImg} alt="Master barber" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
import { useState } from "react";
import { Image } from "lucide-react";
import "./AppBanner.css";

const AppBanner = () => {
    const [enabled, setEnabled] = useState(true);

    return (
        <>
            <div className="banner-card">
                <div className="banner-header">
                    <div className="banner-title">
                        <Image size={15} className="banner-icon" />
                        <h3>App Banners</h3>
                    </div>

                    <p>Manage customer-facing popups.</p>
                </div>

                <div className="promotion-box">

                    <div className="promotion-header">
                        <div>
                            <h4>Promotion</h4>
                            <span>Popup</span>
                        </div>

                        <button
                            className={`toggle ${enabled ? "active" : ""}`}
                            onClick={() => setEnabled(!enabled)}
                        >
                            <span className="thumb"></span>
                        </button>
                    </div>

                    <div className="banner-image">
                        <img
                            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600"
                            alt="Banner"
                        />

                        <div className="banner-overlay">
                            Active: Summer Glow 20% Off
                        </div>
                    </div>

                    <button className="creative-btn">
                        CHANGE CREATIVE
                    </button>

                </div>
            </div>
        </>
    );
};

export default AppBanner;
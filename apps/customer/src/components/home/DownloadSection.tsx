import "./DownloadSection.css";


import phoneImage from "../../assets/mobile_image.svg";

const appStore = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
const playStore = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

const DownloadSection = () => {
    return (
        <section className="download-section">
            <div className="download-container">

                <div className="download-content">

                    <h2>
                        Your Personal <br />
                        Salon <br />
                        Engineered for <br />
                        Ease.
                    </h2>

                    <div className="store-buttons">
                        <a href="#">
                            <img src={appStore} alt="App Store" />
                        </a>

                        <a href="#">
                            <img src={playStore} alt="Google Play" />
                        </a>
                    </div>

                </div>

                <div className="phone-wrapper">
                    <img
                        src={phoneImage}
                        alt="Salon App"
                        className="phone-image"
                    />
                </div>

            </div>
        </section>
    );
};

export default DownloadSection;
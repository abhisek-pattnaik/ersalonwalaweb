import { Link } from "react-router-dom";
import SocialMediaFooter from "./SocialMediaFooter";
import FooterBottomCopyRight from "./FooterBottomCopyRight";
import "./Footer.css";

const Footer = () => {
    const handleNavClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="main-footer">
            <div className="customer-footer">
                <SocialMediaFooter />
                <div className="footer-container">
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <Link to="/" onClick={handleNavClick}>Home</Link>
                        <Link to="/about" onClick={handleNavClick}>About Us</Link>
                        <Link to="/services" onClick={handleNavClick}>Services</Link>
                        <Link to="/team" onClick={handleNavClick}>Team</Link>
                        <Link to="/contact" onClick={handleNavClick}>Contact Us</Link>
                        <Link to="/gallery" onClick={handleNavClick}>Gallery</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Utility Pages</h4>
                        <Link to="/privacy-policy" onClick={handleNavClick}>Privacy Policy</Link>
                        <Link to="/terms-of-use" onClick={handleNavClick}>Terms of Use</Link>
                    </div>

                    <div className="footer-col keep-in-touch-col">
                        <h4>Keep in Touch</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-label">Address :</span>
                                <span className="contact-value">Mariendalsvej 50D 2 2000<br/>Frederiksberg.</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Mail :</span>
                                <a href="mailto:support@servicemarket.com" className="contact-value">support@servicemarket.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Phone :</span>
                                <a href="tel:+221234567900" className="contact-value">(+22) 123 - 4567 - 900</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottomCopyRight />
        </footer>
    );
};

export default Footer;
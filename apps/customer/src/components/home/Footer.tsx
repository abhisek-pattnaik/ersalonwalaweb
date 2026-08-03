import { Link } from "react-router-dom";
import SocialMediaFooter from "./SocialMediaFooter";
import FooterBottomCopyRight from "./FooterBottomCopyRight";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="customer-footer">
                <SocialMediaFooter />
                <div className="footer-container">
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/salons">All Salons</Link>
                        <Link to="/my-bookings">My Bookings</Link>
                        <Link to="/profile">Profile</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <span>Haircut & Styling</span>
                        <span>Organic Skincare</span>
                        <span>Spa & Massage</span>
                        <span>Nail & Henna Care</span>
                    </div>

                    <div className="footer-col">
                        <h4>Contact & Support</h4>
                        <span>📧 support@ersalonwala.com</span>
                        <span>📞 +91 (800) 123-4567</span>
                        <span>📍 Downtown Tech Park, India</span>
                    </div>
                </div>
            </div>
            <FooterBottomCopyRight />
        </footer>
    );
};

export default Footer;
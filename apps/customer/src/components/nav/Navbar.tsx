import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/ersalonlogoweb.svg";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">

          <Link to="/" className="logo">
            <img src={logo} alt="ER Salonwala" />
          </Link>

          <div className={`menu ${isOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/business" onClick={() => setIsOpen(false)}>For Business</Link>

            <button className="download-btn mobile-btn">
              Download Our App
            </button>
          </div>

          <button className="download-btn desktop-btn">
            Download Our App
          </button>

          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </nav>
      </div>
    </header>
  );
}
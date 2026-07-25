import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="customer-header">
      <div className="header-container">
        <Link to="/" className="brand-logo">
          <span className="brand-highlight">Er</span>Salonwala<span className="brand-dot">.</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <button onClick={() => scrollToSection('services')} className="nav-item-btn">
            Services
          </button>
          <button onClick={() => scrollToSection('recommended')} className="nav-item-btn">
            Recommended
          </button>
          <button onClick={() => scrollToSection('mobile-app')} className="nav-item-btn">
            Mobile App
          </button>
          <button onClick={() => scrollToSection('engineers')} className="nav-item-btn">
            Engineers
          </button>
          <Link to="/salons" className={`nav-item ${location.pathname === '/salons' ? 'active' : ''}`}>
            All Salons
          </Link>
        </nav>
        <div className="header-actions">
          <Link to="/salons" className="btn-book-now">
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

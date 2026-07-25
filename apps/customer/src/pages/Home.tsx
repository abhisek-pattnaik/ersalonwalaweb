import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroStylistImg from '../assets/hero_stylist.png';
import facialImg from '../assets/facial_treatment.png';
import masterStylistImg from '../assets/master_stylist.png';
import './Pages.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Hair Cut');

  const categories = [
    { name: 'Waxing', icon: '✨' },
    { name: 'Spa', icon: '🌸' },
    { name: 'Nails', icon: '💅' },
    { name: 'Hair Cut', icon: '✂️' },
    { name: 'Hair Treatment', icon: '💇‍♀️' },
    { name: 'Massage', icon: '💆‍♂️' }
  ];

  const recommendedSalons = [
    {
      id: '1',
      name: 'Luxe Salon Studio',
      location: 'Downtown, Sector 5',
      rating: 4.9,
      reviews: 128,
      price: '₹499',
      image: heroStylistImg
    },
    {
      id: '2',
      name: 'Master Barber & Spa',
      location: 'West End Plaza',
      rating: 4.8,
      reviews: 95,
      price: '₹699',
      image: masterStylistImg
    },
    {
      id: '3',
      name: 'Glow & Grace Studio',
      location: 'Central Mall',
      rating: 4.9,
      reviews: 210,
      price: '₹899',
      image: facialImg
    },
    {
      id: '4',
      name: 'Prestige Grooming Club',
      location: 'Heights Road',
      rating: 4.7,
      reviews: 85,
      price: '₹399',
      image: heroStylistImg
    }
  ];

  const testimonials = [
    {
      name: 'Anand S.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Precision haircut and top-tier hospitality! Booking through ErSalonWala was seamless.'
    },
    {
      name: 'Nisha R.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Best facial & organic skincare treatment in town. Highly recommend their recommended salons!'
    },
    {
      name: 'Tarun K.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Super easy booking and zero waiting time at the salon. Loved the engineer stylist approach.'
    },
    {
      name: 'Bhavna M.',
      role: 'Verified Client',
      stars: '⭐⭐⭐⭐⭐',
      comment: 'Always my go-to salon platform. Clean UI, honest reviews, and premium stylists.'
    }
  ];

  const engineers = [
    {
      name: 'Alex Morgan',
      role: 'Master Barber & Stylist',
      exp: '10+ Yrs Experience',
      rating: '⭐ 4.9',
      image: masterStylistImg
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Hair Artist',
      exp: '8+ Yrs Experience',
      rating: '⭐ 4.9',
      image: heroStylistImg
    },
    {
      name: 'Vikram Singh',
      role: 'Spa & Skincare Specialist',
      exp: '12+ Yrs Experience',
      rating: '⭐ 5.0',
      image: facialImg
    }
  ];

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-watermark">Engineered Salonwala.</div>
        <div className="hero-grid">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Precision Engineering Meets <span className="serif-italic">Organic Beauty.</span>
            </h1>
            <p className="hero-subtitle">
              Tailored treatments and scientific precision for your personal grooming needs. Discover top-rated salons near you.
            </p>
            <div className="hero-actions">
              <Link to="/salons" className="btn-hero-primary">
                Book Appointment
              </Link>
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

      {/* SECTION 2: EXPERIENCED IN MAKING YOU BEAUTIFUL */}
      <section className="experienced-section">
        <div className="section-header">
          <h2>We are Experienced in making you very beautiful</h2>
          <p>Combine science and artistry to deliver customized salon results for every client.</p>
        </div>

        <div className="beauty-gallery-grid">
          <div className="gallery-card card-large">
            <img src={facialImg} alt="Skincare facial" />
            <div className="card-overlay">
              <h3>Facial & Skincare</h3>
            </div>
          </div>
          <div className="gallery-card">
            <img src={heroStylistImg} alt="Hair Styling" />
            <div className="card-overlay">
              <h3>Precision Hair Care</h3>
            </div>
          </div>
          <div className="gallery-card">
            <img src={masterStylistImg} alt="Grooming" />
            <div className="card-overlay">
              <h3>Beard & Grooming</h3>
            </div>
          </div>
          <div className="gallery-card">
            <img src={facialImg} alt="Spa Massage" />
            <div className="card-overlay">
              <h3>Organic Spa Massage</h3>
            </div>
          </div>
          <div className="gallery-card card-wide">
            <img src={heroStylistImg} alt="Nail & Henna Art" />
            <div className="card-overlay">
              <h3>Luxury Nail & Henna</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CURATED EXPERIENCES */}
      <section className="curated-section" id="services">
        <div className="section-header">
          <h2>Curated Experiences</h2>
          <p>Explore tailored treatments categorized for your specific personal care needs.</p>
        </div>

        <div className="categories-stage">
          <div className="categories-pills">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`category-pill ${activeCategory === cat.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <span className="pill-icon">{cat.icon}</span>
                <span className="pill-name">{cat.name}</span>
              </button>
            ))}
          </div>
          <div className="pedestal-glow"></div>
        </div>
      </section>

      {/* SECTION 4: RECOMMENDED SALONS */}
      <section className="recommended-section" id="recommended">
        <div className="section-header">
          <span className="tag-line">LOOKING FOR THE BEST</span>
          <h2>Recommended</h2>
          <p>Curated list of top-rated salon partners nearest to your location.</p>
        </div>

        <div className="salons-cards-grid">
          {recommendedSalons.map((salon) => (
            <div key={salon.id} className="salon-card-item">
              <div className="card-img-wrapper">
                <img src={salon.image} alt={salon.name} />
                <span className="rating-badge">⭐ {salon.rating}</span>
              </div>
              <div className="card-info">
                <h3>{salon.name}</h3>
                <p className="location-text">📍 {salon.location}</p>
                <div className="card-footer">
                  <span className="price-tag">{salon.price}</span>
                  <Link to={`/book/${salon.id}`} className="btn-card-action">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: MOBILE APP PROMO */}
      <section className="app-promo-section" id="mobile-app">
        <div className="app-card-box">
          <div className="app-text-content">
            <h2>Your Personal Salon Engineered for Ease.</h2>
            <p>
              Download the ErSalonWala app to explore live stylist availability, book instant appointments, and manage rewards.
            </p>
            <div className="app-badges">
              <button className="store-btn">
                <span> App Store</span>
              </button>
              <button className="store-btn">
                <span>▶ Google Play</span>
              </button>
            </div>
          </div>
          <div className="app-mockup-graphics">
            <div className="phone-mockup phone-front">
              <div className="mockup-screen">
                <div className="screen-header">ErSalonWala App</div>
                <div className="screen-card">
                  <span>⭐ 4.9 Top Stylists</span>
                  <h4>Booking Confirmed</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLIENT FEEDBACK */}
      <section className="feedback-section">
        <div className="section-header">
          <h2>Real Client Feedback.</h2>
        </div>

        <div className="feedback-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="feedback-card">
              <div className="feedback-stars">{t.stars}</div>
              <p className="feedback-text">"{t.comment}"</p>
              <div className="feedback-author">
                <h4>{t.name}</h4>
                <span className="verified-badge">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: MEET THE ENGINEERS */}
      <section className="engineers-section" id="engineers">
        <div className="section-header">
          <h2>Meet the Engineers</h2>
          <p>Engineers of hair & skin design, our master stylists at Salonwala.</p>
        </div>

        <div className="engineers-grid">
          {engineers.map((eng, idx) => (
            <div key={idx} className="engineer-card">
              <div className="engineer-img-wrapper">
                <img src={eng.image} alt={eng.name} />
                <span className="eng-rating">{eng.rating}</span>
              </div>
              <div className="engineer-details">
                <h3>{eng.name}</h3>
                <span className="engineer-role">{eng.role}</span>
                <p className="engineer-exp">{eng.exp}</p>
                <Link to="/salons" className="btn-eng-book">
                  Book Me
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: TRANSFORMATION CTA */}
      <section className="cta-banner-section">
        <div className="cta-inner">
          <h2>Ready for Your Next Transformation?</h2>
          <Link to="/salons" className="btn-hero-primary">
            Book Appointment
          </Link>
          <p className="cta-sub">ErSalonWala. Precision Meets Organic Beauty.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="customer-footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <div className="brand-logo">
              <span className="brand-highlight">Er</span>Salonwala<span className="brand-dot">.</span>
            </div>
            <p>Scientific precision meets organic beauty. Your trusted online salon platform.</p>
          </div>

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

        <div className="footer-bottom">
          <p>© 2026 ErSalonWala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

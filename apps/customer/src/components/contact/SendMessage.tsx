import React from 'react';
import './SendMessage.css';
import bgImage from '@/assets/hero_stylist.png'; // Using existing asset as background

export default function SendMessage() {
  return (
    <section className="send-message-section">
      <div 
        className="send-message-wrapper" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="send-message-glass">
          
          <div className="send-message-content">
            <span className="sm-subtitle">Start Your Grooming</span>
            <h2 className="sm-title">Send a<br/>Message</h2>
            <p className="sm-description">
              Yes, we offer complimentary valet parking for<br/>
              all our clients. Secured street parking<br/>
              is also available throughout the Design District.
            </p>
          </div>

          <form className="send-message-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row two-cols">
              <input type="text" placeholder="Full Name" className="sm-input" />
              <input type="tel" placeholder="Phone Number" className="sm-input" />
            </div>
            
            <div className="form-row">
              <input type="email" placeholder="Email Address" className="sm-input full-width" />
            </div>
            
            <div className="form-row">
              <textarea placeholder="Message:" className="sm-input sm-textarea full-width"></textarea>
            </div>
            
            <div className="form-submit-row">
              <button type="submit" className="sm-submit-btn">Submit</button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

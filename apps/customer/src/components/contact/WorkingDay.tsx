import React from 'react';
import './WorkingDay.css';

const schedule = [
  { day: 'Monday (Today)', hours: '09:00 AM — 08:00 PM', isToday: true },
  { day: 'Tuesday', hours: '09:00 AM — 08:00 PM', isToday: false },
  { day: 'Wednesday', hours: '09:00 AM — 08:00 PM', isToday: false },
  { day: 'Thursday', hours: '09:00 AM — 08:00 PM', isToday: false },
  { day: 'Friday', hours: '09:00 AM — 08:00 PM', isToday: false },
  { day: 'Saturday', hours: '10:00 AM — 06:00 PM', isToday: false },
  { day: 'Sunday', hours: 'Closed', isToday: false, isClosed: true },
];

export default function WorkingDay() {
  return (
    <div className="working-day-section">
      <div className="schedule-card">
        {schedule.map((item, index) => (
          <div 
            key={item.day} 
            className={`schedule-row ${item.isToday ? 'row-today' : ''} ${index !== schedule.length - 1 ? 'row-border' : ''}`}
          >
            <span className="schedule-day">{item.day}</span>
            <span className={`schedule-hours ${item.isClosed ? 'text-closed' : ''}`}>
              {item.hours}
            </span>
          </div>
        ))}
      </div>

      <div className="contact-cards-container">
        <div className="contact-info-card">
          <span className="info-label">Phone:</span>
          <span className="info-value">+91 98765 43210</span>
        </div>
        
        <div className="contact-info-card card-highlight">
          <span className="info-label">Email:</span>
          <div className="email-value-wrapper">
            <span className="info-value">hello@brandname.com</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </div>
        </div>
        
        <div className="contact-info-card">
          <span className="info-label">Studio Address:</span>
          <span className="info-value">Sector 29, Gurgaon</span>
        </div>
      </div>
    </div>
  );
}

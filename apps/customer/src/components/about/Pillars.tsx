import React from "react";
import "./Pillars.css";

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    title: "Luxury\nExperience",
    description:
      "Every touchpoint is designed for comfort, from our ergonomic seating to our premium refreshment lounge.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 10V8a5 5 0 0 1 10 0v2M5 10h14v9H5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 14h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Certified\nExperts",
    description:
      "Our team undergoes rigorous training and bi-annual certification to stay at the cutting edge of hair science.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l7 3v5c0 4.5-2.8 7.7-7 10-4.2-2.3-7-5.5-7-10V6l7-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12l1.7 1.7 3.5-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Clean &\nHygienic",
    description:
      "We maintain hospital-grade sanitation protocols to ensure the safety and health of every guest.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8 4h8M9 4v4l-3 4v6h12v-6l-3-4V4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13h6M10 16h4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Client\nFocused",
    description:
      "Your satisfaction is our metric of success. We offer personalized consultations for every single service.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="8"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5 20c.7-3.4 3.2-5.2 7-5.2s6.3 1.8 7 5.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Pillars: React.FC = () => {
  return (
    <section className="pillars-section">
      <div className="pillars-container">
        <header className="pillars-header">
          <h2>The Pillars of Our Craft</h2>

          <p>
            Exceptional quality is not an accident; it is the result of
            focused intent.
          </p>
        </header>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <article className="pillar-card" key={index}>
              <div className="pillar-icon">{pillar.icon}</div>

              <h3>
                {pillar.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < pillar.title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>

              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
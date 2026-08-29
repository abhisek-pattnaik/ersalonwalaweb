import "./PricingPlans.css";

interface Plan {
  name: string;
  price?: string;
  priceSuffix?: string;
  description?: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹1,549",
    priceSuffix: "/month",
    features: [
      "Online Booking",
      "Up to 3 Staff Members",
      "Basic Analytics",
      "SMS Reminders",
    ],
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "₹6,449",
    priceSuffix: "/month",
    features: [
      "Unlimited Booking",
      "Unlimited Staff",
      "Advanced Inventory",
      "Marketing Automation",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom",
    features: [
      "Custom API Access",
      "Multi-location Dashboard",
      "Dedicated Success Manager",
      "White-label Options",
    ],
    buttonText: "Contact Sales",
  },
];

export default function PricingPlans() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">

        <h2 className="pricing-title">
          Plans for Every Ambition
        </h2>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              className={`plan-card ${
                plan.popular ? "popular" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="plan-content">

                <div className="plan-name">
                  {plan.name}
                </div>

                {plan.price ? (
                  <div className="plan-price">
                    <span className="price">
                      {plan.price}
                    </span>

                    <span className="price-suffix">
                      {plan.priceSuffix}
                    </span>
                  </div>
                ) : (
                  <div className="custom-price">
                    Custom
                  </div>
                )}

                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="check">
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="plan-button">
                  {plan.buttonText}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}   
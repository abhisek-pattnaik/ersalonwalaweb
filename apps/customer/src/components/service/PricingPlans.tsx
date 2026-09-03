import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routes";
import "./PricingPlans.css";

interface Plan {
  name: string;
  price?: string;
  amount?: number;
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
    amount: 1549,
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
    amount: 6449,
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

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PricingPlans() {
  const navigate = useNavigate();
  const handlePayment = (plan: Plan) => {
    // Enterprise doesn't have a fixed price
    if (!plan.amount) {
      navigate(ROUTES.CONTACT);
      console.log("Contact Sales Redirect");
      return;
    }

    const options = {
      key: "rzp_test_TTuRSHdm7blWDJ",

      // Razorpay expects amount in paise
      amount: plan.amount * 100,

      currency: "INR",

      name: "ER Salon Wala",

      description: `${plan.name} Plan`,

      handler: (response: any) => {
        console.log("Payment Successful");
        console.log("Payment ID:", response.razorpay_payment_id);
        // console.log("Order ID:", response.razorpay_order_id);
        console.log("Signature:", response.razorpay_signature);
      },

      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">

        <h2 className="pricing-title">
          Plans for Every Ambition
        </h2>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              className={`plan-card ${plan.popular ? "popular" : ""
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

                <button
                  className="plan-button"
                  onClick={() => handlePayment(plan)}
                >
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
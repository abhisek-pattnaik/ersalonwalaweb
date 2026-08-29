import { Check } from "lucide-react";
import "./BusinessGrowth.css";

interface GrowthFeature {
  title: string;
  description: string;
}

const features: GrowthFeature[] = [
  {
    title: "Manage staff with ease",
    description:
      "Smart scheduling that respects staff breaks while maximizing chair utilization.",
  },
  {
    title: "Increase bookings effortlessly",
    description:
      "Our optimized booking flow converts visitors into clients faster than any other platform.",
  },
  {
    title: "Reduce costly no-shows",
    description:
      "Automated SMS and Email reminders with deposit collection options.",
  },
];

export default function BusinessGrowth() {
  return (
    <section className="business-growth">
      <div className="business-growth-container">
        <h2>Business Growth Engineered for Beauty</h2>

        <div className="growth-grid">
          {features.map((feature) => (
            <div className="growth-item" key={feature.title}>
              <div className="growth-icon">
                <Check size={10} strokeWidth={2.5} />
              </div>

              <div className="growth-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
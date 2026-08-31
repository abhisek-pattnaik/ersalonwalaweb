import { useEffect, useState } from "react";
import "./StatsSection.css";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

interface StatsSelectionProps {
  isNeedThreeSteps?: boolean;
}

function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth animation
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function StatsSection({ isNeedThreeSteps = true }: StatsSelectionProps) {
  return (
    <section className="stats-section">
      <div className="stats-container">

        {/* ================= STATS ================= */}

        <div className="stats-grid">

          {/* Years Experience */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp
                end={10}
                duration={2200}
                suffix="+"
              />
            </div>

            <div className="stat-label">
              YEARS EXPERIENCE
            </div>
          </div>

          {/* Happy Clients */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp
                end={15000}
                duration={3000}
                suffix="+"
              />
            </div>

            <div className="stat-label">
              HAPPY CLIENTS
            </div>
          </div>

          {/* Expert Stylists */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp
                end={24}
                duration={2200}
              />
            </div>

            <div className="stat-label">
              EXPERT STYLISTS
            </div>
          </div>

          {/* Salon Awards */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp
                end={8}
                duration={2200}
              />
            </div>

            <div className="stat-label">
              SALON AWARDS
            </div>
          </div>

        </div>

        {/* ================= THREE STEPS ================= */}
        {isNeedThreeSteps && (
          <div className="steps-card">

          <h2>
            Launch in Three Simple Steps
          </h2>

          <div className="steps-line">

            {/* Step 1 */}
            <div className="step">
              <div className="step-number">
                1
              </div>

              <h3>
                Join Platform
              </h3>

              <p>
                Register your business in under
                2 minutes and join the Elite
                Engineer network.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step">
              <div className="step-number">
                2
              </div>

              <h3>
                Set Up Salon
              </h3>

              <p>
                Upload your service menu, staff
                profiles, and brand imagery to
                our elegant templates.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step">
              <div className="step-number">
                3
              </div>

              <h3>
                Get Bookings
              </h3>

              <p>
                Go live and start receiving
                instant notifications of new
                premium client bookings.
              </p>
            </div>

          </div>
        </div>
        )}

      </div>
    </section>
  );
}
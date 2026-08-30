import "./FranchiseSection.css";
import salonImage from "../../assets/francise_image.svg";

const FranchiseSection = () => {
  return (
    <section className="franchise">
      {/* Left Card */}

      <div className="partner-card card">
        <h2>
          Become a <br />
          Franchise <br />
          Partner
        </h2>

        <p>
          Start your own premium salon with our proven business model.
          Get complete support, branding, technology, marketing,
          and operational guidance.
        </p>

        <img src={salonImage} alt="Salon" />

        <button>Become a Partner</button>
      </div>

      {/* Right */}

      <div className="right-section">

        {/* Top */}

        <div className="choose-card card">
          <div className="choose-header">
            <h2>Why Choose Engineer Salon?</h2>

            <div className="icon">
              ✂️
            </div>
          </div>

          <hr />

          <div className="benefits">

            <ul>
              <li>
                Launch your salon with a proven business model backed by
                complete setup and operational support.
              </li>
            </ul>

            <ul>
              <li>
                Receive professional branding, marketing assistance,
                and continuous business guidance to grow faster.
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="bottom-grid">

          <div className="investment card">

            <p className="small-title">
              Investment Starts From
            </p>

            <h1>₹8 Lakhs</h1>

            <ul>
              <li>Premium Interior Support</li>
              <li>Complete Salon Setup</li>
              <li>Branding Kit</li>
              <li>Technology Included</li>
            </ul>

            <div className="note">
              Everything you need to launch and grow your salon business.
              ⭐
            </div>

          </div>

          <div className="stats">

            <div className="stat-card">
              <h1>150+</h1>
              <span>Happy Franchise Partners</span>
            </div>

            <div className="stat-card">
              <h1>25+ Cities</h1>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FranchiseSection;
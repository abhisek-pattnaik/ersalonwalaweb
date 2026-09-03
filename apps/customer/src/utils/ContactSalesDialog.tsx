import "./ContactSalesDialog.css";

interface ContactSalesDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSalesDialog({
  isOpen,
  onClose,
}: ContactSalesDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div
        className="contact-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="contact-header">
          <div className="contact-icon">💬</div>

          <h2>Contact Sales</h2>

          <p>
            Interested in our Enterprise plan?
            <br />
            Our team is happy to help you.
          </p>
        </div>

        <div className="contact-details">

          <a
            href="tel:+919876543210"
            className="contact-item"
          >
            <div className="contact-item-icon">📞</div>

            <div>
              <span className="contact-label">
                Phone
              </span>

              <span className="contact-value">
                +91 98765 43210
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-item-icon">💬</div>

            <div>
              <span className="contact-label">
                WhatsApp
              </span>

              <span className="contact-value">
                Chat with our team
              </span>
            </div>
          </a>

          <a
            href="mailto:sales@ersalonwala.com"
            className="contact-item"
          >
            <div className="contact-item-icon">✉️</div>

            <div>
              <span className="contact-label">
                Email
              </span>

              <span className="contact-value">
                sales@ersalonwala.com
              </span>
            </div>
          </a>

          <div className="contact-item">
            <div className="contact-item-icon">📍</div>

            <div>
              <span className="contact-label">
                Office
              </span>

              <span className="contact-value">
                Gurugram, Haryana, India
              </span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">🕐</div>

            <div>
              <span className="contact-label">
                Business Hours
              </span>

              <span className="contact-value">
                Monday – Saturday, 9:00 AM – 6:00 PM
              </span>
            </div>
          </div>

        </div>

        <div className="contact-footer">
          <p>
            We're ready to discuss your business requirements
            and find the right solution for you.
          </p>
        </div>

      </div>
    </div>
  );
}
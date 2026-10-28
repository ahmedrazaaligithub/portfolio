import { useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: "..." }

  // send email function
  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_rlz9unf", // Service ID
        "template_r28f0vs", // Template ID
        form.current,
        "vjUsTrkpRIuacG_cL", // Public Key
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "✅ Message sent successfully!",
          });
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setStatus({
            type: "error",
            message: "❌ Failed to send message. Please try again.",
          });
          console.error("EmailJS Error:", error);
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
      data-section="contact"
    >
      <div className="shell">
        <p className="eyebrow">05 / Contact Me</p>
        <h2 id="contact-title" className="contact-heading">
          Let’s build
          <br />
          <span>what’s next.</span>
        </h2>
        <div className="contact-layout">
          <div className="contact-copy">
            <p>Feel free to reach out by filling the form below</p>
            <a
              className="contact-email"
              href="mailto:muhammadahmedraza16@gmail.com"
            >
              muhammadahmedraza16@gmail.com
            </a>
            <p className="contact-location">Karachi, Pakistan</p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            aria-busy={loading}
          >
            <div className="field">
              <label htmlFor="contact-name">Your Name (required)</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Your Email (required)</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="field field-wide">
              <label htmlFor="contact-subject">Subject (required)</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
              />
            </div>
            <div className="field field-wide">
              <label htmlFor="contact-message">Your Message (required)</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project…"
                required
              />
            </div>
            <div className="field-wide">
              <button className="button" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <FiArrowUpRight aria-hidden="true" />
              </button>
            </div>
            <p
              className="form-status field-wide"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {status?.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

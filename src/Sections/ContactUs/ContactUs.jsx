import { useRef, useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: "..." }

  // send email function
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    console.log(form.current);
    emailjs
      .sendForm(
        "service_rlz9unf",       // Service ID
        "template_r28f0vs",      // Template ID
        form.current,
        "vjUsTrkpRIuacG_cL"      // Public Key
      )
      .then(
        () => {
          setStatus({ type: "success", message: "✅ Message sent successfully!" });
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setStatus({ type: "error", message: "❌ Failed to send message. Please try again." });
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      name="contact"
      className={`py-16 sm:py-20 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center pb-8 sm:pb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
            Contact Me
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            Feel free to reach out by filling the form below ✨
          </p>
        </div>

        {/* Contact Card */}
        <div
          className={`rounded-2xl shadow-xl p-6 sm:p-8 transition duration-500 ${theme === "dark"
            ? "bg-bg-dark border border-gray-700"
            : "bg-white border border-gray-200"
            }`}
        >
          <form ref={form} onSubmit={sendEmail} className="grid gap-5 sm:gap-6">

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                data-aos="fade-up"
                type="text"
                name="name"   // ✅ must match template
                placeholder="Your Name"
                required
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-dark border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-bg-dark placeholder-gray-500 focus:ring-blue"
                  }`}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                data-aos="fade-up"
                type="email"
                name="email"   // ✅ must match template
                placeholder="Your Email"
                required
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-dark border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-bg-dark placeholder-gray-500 focus:ring-blue"
                  }`}
              />
            </div>

            {/* Subject */}
            {<div className="relative">
              <FaTag className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                data-aos="fade-up"
                type="text"
                name="subject"   // ✅ must match template
                placeholder="Subject"
                required
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-dark border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-bg-dark placeholder-gray-500 focus:ring-blue"
                  }`}
              />
            </div>}

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute top-4 left-4 text-gray-400 text-sm sm:text-base" />
              <textarea
                data-aos="fade-up"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 transition ${theme === "dark"
                  ? "bg-dark border-gray-700 text-white placeholder-gray-400 focus:ring-blue"
                  : "bg-gray-50 border-gray-300 text-bg-dark placeholder-gray-500 focus:ring-blue"
                  }`}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full shadow-lg font-semibold cursor-pointer transition transform hover:scale-105 ${theme === "dark"
                  ? "bg-blue text-light hover:bg-blue"
                  : "bg-blue text-white hover:bg-blue"
                  } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : <><FaPaperPlane /> Send Message</>}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && (
            <p
              className={`mt-4 text-center font-medium ${status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

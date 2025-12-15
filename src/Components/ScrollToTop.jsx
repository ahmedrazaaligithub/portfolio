import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Check scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // 300px scroll ke baad show
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 lg:bottom-8 right-5 lg:right-8 bg-blue text-white p-3 rounded-tr-2xl rounded-bl-2xl shadow-lg hover:bg-blue transition-transform hover:scale-110 z-50 cursor-pointer overflow-hidden"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

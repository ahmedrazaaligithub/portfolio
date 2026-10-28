import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return visible ? (
    <a className="back-top" href="#hero" aria-label="Back to top">
      <FiArrowUp aria-hidden="true" />
    </a>
  ) : null;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the page has actually rendered before scrolling
      const timeout = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }, 100); 

      return () => clearTimeout(timeout);
    } else {
      // If no hash, go to top of page on route change
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]); // Trigger on hash or page change

  return null;
};

export default ScrollToHash;
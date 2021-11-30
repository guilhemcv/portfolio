import React, {useState, useEffect } from "react";
import arrow from "../../assets/images/up-arrow.png";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="scroll-to-top vibrate-1">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img src={arrow} width="50px" alt='Go to top'/>
        </div>}
    </div>
  )
}

export default ScrollToTop;
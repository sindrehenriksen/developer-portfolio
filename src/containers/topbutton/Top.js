import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }

  useEffect(() => {
    function onScroll() {
      scrollFunction();
    }

    function onLoad() {
      scrollFunction();
    }

    window.onscroll = onScroll;
    window.onload = onLoad;

    // Cleanup function
    return () => {
      window.onscroll = null;
      window.onload = null;
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}

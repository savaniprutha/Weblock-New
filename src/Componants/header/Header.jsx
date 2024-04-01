import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.5; 
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div>
          <img src={scrolled ? "./image/home/logo-2.png" : "./image/home/image 48.png"} alt="Company Logo" width="100" />
        </div>
        <nav>
          <a href="#">Company</a>
          <a href="#">Services</a>
          <a href="#">Technology</a>
          <a href="#">Staff-Augmentation</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
    </>
  );
}

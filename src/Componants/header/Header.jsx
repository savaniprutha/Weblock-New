import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

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
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Company</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/service">Service</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact"> Technology</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact"> Staff-Augmentation</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact"> Contact  Us</Link>
          </li>
          
        </ul>
      </header>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <div className="nav-bar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">My Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/cart">
                <HiShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;

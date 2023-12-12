import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="banner">
        <img src="../Logo.jpg" />
        <h1>Welcome to Flora Tan Art</h1>
      </div>
      <div className="home">
        <div class="text-box">
          <p>ART BY</p>
          <h1>FLORA</h1>
          <h3>
            JOIN ME AS I TRANSLATE EMOTIONS INTO VISUAL STORIES, WEAVING VISIONS
            ONTO CANVAS.
          </h3>
          <ul className="row">
            <li>
              <Link to="/gallery">My Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">
                Connect with Me <FaArrowRightLong />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;

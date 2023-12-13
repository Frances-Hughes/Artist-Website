import React, { useEffect, useState } from "react";

function Gallery() {
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible12, setIsVisible12] = useState(false);
  const [isVisible14, setIsVisible14] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const box8 = document.querySelector(".box8");
      const box12 = document.querySelector(".box12");
      const box14 = document.querySelector(".box14");

      if (box8 && scrollPosition > box8.getBoundingClientRect().bottom) {
        setIsVisible8(true);
      }

      if (box12 && scrollPosition > box12.getBoundingClientRect().bottom) {
        setIsVisible12(true);
      }

      if (box14 && scrollPosition > box14.getBoundingClientRect().bottom) {
        setIsVisible14(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Delayed animations on page load
  useEffect(() => {
    const delayBox5 = setTimeout(() => {
      setIsVisible8(true);
    }, 500);

    const delayBox8 = setTimeout(() => {
      setIsVisible12(true);
    }, 4000);

    const delayBox12 = setTimeout(() => {
      setIsVisible14(true);
    }, 6000);

    return () => {
      clearTimeout(delayBox5);
      clearTimeout(delayBox8);
      clearTimeout(delayBox12);
    };
  }, []);

  return (
    <div className="container">
      <div className="box1">
        <div className={`fadeInUp ${isVisible8 ? "fadeInUp" : ""}`}>
          <h2 className={isVisible8 ? "delayed-animation" : ""}>
            Painting name
          </h2>
          <p className={isVisible8 ? "delayed-animation" : ""}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            officia ducimus. Quos corrupti repellat odio, magni debitis ullam
            obcaecati doloremque maiores ducimus eius. Non, autem? Magni ex
            natus libero sequi!
          </p>
        </div>
      </div>
      <div className="box2">
        <img src="https://cdn.shopify.com/s/files/1/1159/6308/products/SeattleSkyline_product_480x480.jpg?v=1632226278" />
      </div>
      <div className="box3"></div>
      <div className="box4"></div>
      <div className={`box5 ${isVisible8 ? "fadeInUp" : ""}`}>
        <div>
          <h2 className={isVisible8 ? "delayed-animation" : ""}>
            Painting name
          </h2>
          <p className={isVisible8 ? "delayed-animation" : ""}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            officia ducimus. Quos corrupti repellat odio, magni debitis ullam
            obcaecati doloremque maiores ducimus eius. Non, autem? Magni ex
            natus libero sequi!
          </p>
        </div>
      </div>
      <div className="box6">
        <img src="https://cdn.shopify.com/s/files/1/1159/6308/products/SeattleSkyline_product_480x480.jpg?v=1632226278" />
      </div>
      <div className="box7">
        <img src="https://cdn.shopify.com/s/files/1/1159/6308/products/SeattleSkyline_product_480x480.jpg?v=1632226278" />
      </div>
      <div className={`box8 ${isVisible12 ? "fadeInUp" : ""}`}>
        <div>
          <h2 className={isVisible12 ? "delayed-animation" : ""}>
            Painting name
          </h2>
          <div className={`fadeInUp ${isVisible12 ? "delayed-animation" : ""}`}>
            <p className={isVisible12 ? "delayed-animation" : ""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              officia ducimus. Quos corrupti repellat odio, magni debitis ullam
              obcaecati doloremque maiores ducimus eius. Non, autem? Magni ex
              natus libero sequi!
            </p>
          </div>
        </div>
      </div>
      <div className="box9"></div>
      <div className="box10"></div>
      <div className="box11">
        <img src="https://cdn.shopify.com/s/files/1/1159/6308/products/SeattleSkyline_product_480x480.jpg?v=1632226278" />
      </div>
      <div className={`box12 ${isVisible14 ? "fadeInUp" : ""}`}>
        <div>
          <div className={`fadeInUp ${isVisible14 ? "delayed-animation" : ""}`}>
            <h2 className={isVisible14 ? "delayed-animation" : ""}>
              Painting name
            </h2>
            <p className={isVisible14 ? "delayed-animation" : ""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              officia ducimus. Quos corrupti repellat odio, magni debitis ullam
              obcaecati doloremque maiores ducimus eius. Non, autem? Magni ex
              natus libero sequi!
            </p>
          </div>
        </div>
      </div>
      <div className="box13"></div>
      <div className={`box14 ${isVisible14 ? "fadeInUp" : ""}`}>
        <div>
          <h2 className={isVisible14 ? "delayed-animation" : ""}>
            Painting name
          </h2>
          <p className={isVisible14 ? "delayed-animation" : ""}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            officia ducimus. Quos corrupti repellat odio, magni debitis ullam
            obcaecati doloremque maiores ducimus eius. Non, autem? Magni ex
            natus libero sequi!
          </p>
        </div>
      </div>
      <div className="box15">
        <img src="https://cdn.shopify.com/s/files/1/1159/6308/products/SeattleSkyline_product_480x480.jpg?v=1632226278" />
      </div>
    </div>
  );
}

export default Gallery;

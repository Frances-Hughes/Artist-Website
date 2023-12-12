import React, { useState, useEffect } from "react";
const Gallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch data from your API or JSON file
    fetch("/path/to/galleryData.json")
      .then((response) => response.json())
      .then((data) => setArtworks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="gallery-container">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artwork-item">
          <img src={`/path/to/images/${artwork.image}`} alt={artwork.title} />
          <div className="artwork-info">
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
            <p className="price">{artwork.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

{
  /* <section className="features">
  <div className="feature">
    <h2>Feature 1</h2>
    <p>Hello and welcome </p>
  </div>
  <div className="feature">
    <h2>Feature 2</h2>
    <p>Description of Feature 2.</p>
  </div>
  <div className="feature">
    <h2>Feature 3</h2>
    <p>Description of Feature 3.</p>
  </div>
</section>; */
}

import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentImage, setCurrentImage] = useState(null);

  
  const images = [
    { name: "Image 1", src: "Temp/public/images/IMG-20241211-WA0015.jpg" },
    { name: "Image 2", src: "/images/IMG-20241211-WA0016.jpg" },
    { name: "Image 3", src: "/images/IMG-20241211-WA0017.jpg" },
    { name: "Image 4", src: "/images/IMG-20241211-WA0024.jpg" },
  ];

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to the Landing Page</h1>
      </header>
      <div className="content">
        <aside className="links">
          <ul>
            {images.map((img, index) => (
              <li key={index}>
                <button onClick={() => handleImageClick(img.src)}>
                  {img.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="image-display">
          {currentImage ? (
            <img src={currentImage} alt="Selected" />
          ) : (
            <p>Click on a link to view the image.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

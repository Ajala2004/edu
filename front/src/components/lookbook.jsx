import React from "react";
import "./lookbook.css";

const lookbookItems = [
  {
    id: 1,
    image: "/3.jpg",
    title: "No Limits Hoodie",
  },
  {
    id: 2,
    image: "/7.jpg",
    title: "Culture is Eternal Shirt",
  },
  {
    id: 3,
    image: "/4.jpg",
    title: "Trucker Cap",
  },
  {
    id: 4,
    image: "/1.jpg",
    title: "Style isn't temporary",
  },
  {
    id: 5,
    image: "/5.jpg",
    title: "XOX Beanie",
  },
  {
    id: 6,
    image: "/6.jpg",
    title: "Culture is Eternal Shirt",
  },
 
];

const Lookbook = () => {
  return (
    <div className="lookbook-container">
      <header className="lookbook-header">
        <h1>Collections</h1>
        <p>Style redefined. See how our bold designs shine on the streets.</p>
      </header>
      <div className="lookbook-masonry">
        {lookbookItems.map((item) => (
          <div key={item.id} className="lookbook-item">
            <img src={item.image} alt={item.title} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lookbook;
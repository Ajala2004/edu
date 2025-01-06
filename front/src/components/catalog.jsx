import React from "react";
import products from "../datas/catalog.json"; // Product data
import "./catalog.css"; // Import updated CSS

const AllProducts = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          {/* Product Image */}
          <img
            src={`/public/${product.image}`}
            alt={product.name}
            className="product-image"
          />

          {/* Product Details */}
          <div className="product-details">
            {/* Design Info */}
            <div className="design-info">
              {/* <span> Culture is Eternal</span> */}
              {/* <span>Color: {product.color}</span> */}
            </div>

            {/* Product Name */}
            <div className="product-name">{product.name}</div>

            {/* Product Price */}
            <div className="product-price">₦{product.price.toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
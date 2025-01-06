import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h1 className="main-title">XOX Beautiful Culture</h1>
          <p className="tagline">
            More than a streetwear brand, it's a movement.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="about-cards">
          <div className="card">
            <h2 className="card-title">Mission</h2>
            <p className="card-text">
              To inspire a global community through streetwear that reflects
              authenticity, creativity, and the essence of urban lifestyle.
            </p>
          </div>
          <div className="card">
            <h2 className="card-title">Vision</h2>
            <p className="card-text">
              To redefine modern streetwear by creating apparel that not only
              looks good but feels meaningful. XOX Beautiful Culture fosters a
              culture of self-expression and individuality.
            </p>
          </div>
          <div className="card">
            <h2 className="card-title">Core Values</h2>
            <ul className="card-list">
              <li>
                <b>Authenticity:</b> Stay true to who you are.
              </li>
              <li>
                <b>Community:</b> Celebrate diversity and inclusion.
              </li>
              <li>
                <b>Quality:</b> Deliver premium streetwear that stands the test
                of time.
              </li>
            </ul>
          </div>
        </div>

        {/* Our Products */}
        <div className="products-section">
          <h2 className="section-title">Our Products</h2>
          <div className="product-list">
            <p>
              <b>Hoodies:</b> Bold, sleek designs that make a statement.
            </p>
            <p>
              <b>T-Shirts:</b> Comfortable, stylish, and perfect for any
              occasion.
            </p>
            <p>
              <b>Trucker Caps:</b> Designed for city hustlers and dreamers.
            </p>
            <p>
              <b>Tank Tops:</b> Minimal yet edgy for ultimate versatility.
            </p>
            <p>
              <b>Beanies:</b> Perfect for colder days, blending comfort and
              style.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="choose-us-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="choose-text">
            XOX Beautiful Culture stands out by combining modern designs with
            high-quality materials. Every piece is crafted with precision,
            ensuring durability, comfort, and timeless appeal. You're not just
            wearing fashion – you're wearing a culture.
          </p>
        </div>

        {/* Contact Us */}
        <div className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <p>
            <b>Email:</b> xoxbeautifulculture@gmail.com
          </p>
          <p>
            <b>Instagram:</b>{" "}
            <a
              href="https://instagram.com/xoxbeautifulculture"
              target="_blank"
              rel="noopener noreferrer"
            >
              @xoxbeautifulculture
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
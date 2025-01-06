import React from "react";
import "./hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: "/133.jpg",
      heading:"Culture Isn't Temporary",
      writeup:" XOX Beautiful Culture is more than just a streetwear brand- it's a movement. Rooted in individuality, self-expression,and urban culture, we create bold and timeless apparel thatresonates with those who dare to dream."
    },
    {
      image: "/88.jpg",
      heading:"Style is eternal",
      writeup:"In the ever-evolving world of fshion, XOX is making waves with its bold approach and unyielding commitment to authenticity.XOX Beautiful Culture is here, and it's redefining what streetwear means for the modern era"
    },
    {
      image: "/55.jpg",
      heading:"Embrace the Culture",
      writeup:"Reflects our dedication to creating fashion that transcends trends. XOX Beautiful Culture is about embracing individuality, breaking norms, and building a community of dreamers and doers who see fashion as an extensin of their identity"
    },
    {
      image: "/22.jpg",
      heading:"Express your Individuality",
      writeup:"XOX Beautiful Culture stands as a testament to the timeless essence of street style. Born out of a desire to merge individuality with urban aestethics."
    },
  ];

  return (
    <div className="hero-container">
      <div className="hero-slider">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-image-container">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
                <div className="overlay">
                  <div className="hero-content">
                    <h1 className="hero-title">XOX Beautiful Culture</h1>
                    <p className="hero-tagline">{slide.heading}</p>
                    <p className="hero-about">
                      {slide.writeup}
                    </p>
                    <Link to={"/catalog"}><button className="hero-button" >Explore Catalog</button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
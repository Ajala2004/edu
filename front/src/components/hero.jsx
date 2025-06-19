import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div>
        <h1>Choose a Payment Package</h1>
        <p>We've been managing payments should be easy to ABC. That's why we provide seamless payment solutions, offering the best payment platform, you can focus on what matters most - providing rewarding quality education.</p>
      </div>
      <div className="lesson-summary">
        <h3>Lesson Summary</h3>
        <p>Topic Name |</p>
        <h4> Category </h4>
        <h4>| Location </h4>
        <h4>| Date </h4>
        <h4>| Time</h4>
      </div>
    </section>
  );
};

export default HeroSection;
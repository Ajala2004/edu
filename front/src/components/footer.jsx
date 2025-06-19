import React from 'react';
import './footer.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h2>Sign Up for Our Newsletter, Offers, Promotions and Educational Contents</h2>
        <p>Join our professional community today to stay updated!</p>
        <div className="input-group">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </header>
      <footer className="footer">
        <div className="footer-section">
          <div className="logo">Educly <i className="fas fa-book"></i></div>
          <p>
            Educly is a global Educational Technology company headquartered in Pakistan, accessible to everyone at every educational milestone and at all instances of one's life. At Educly, we provide solutions to meet the evolving needs of students and educational institutes.
          </p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Terms of Service</li>
            <li>Leadership</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help & Support</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li><a href="mailto:support@educly.org">support@educly.org <i className="fas fa-envelope"></i></a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2023 Educly. All rights reserved.</p>
        <div className="social-icons">
          <span>Follow us on</span>
          <a href="#"><i className="fab fa-globe"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
};

export default App;
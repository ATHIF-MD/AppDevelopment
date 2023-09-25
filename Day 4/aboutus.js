import React from 'react';
import '../assets/css/aboutus.css';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="custom-aboutus-container">
      <div className="top-text">
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <h2>About Us</h2>
      <div className="p1">
      <p>
      Welcome to Vote4Revolution, your trusted platform for secure and convenient online voting. At Vote4Revolution, we are passionate about promoting democratic participation and empowering citizens to make their voices heard in a digital age.
      </p>
      </div>
      <div className="p2">
      
      </div>
      <div className="p3">
      <h3>Trust :</h3>
      <p>
      Transparency, inclusivity, and integrity are at the heart of everything we do. We are committed to non-partisanship and providing accurate, unbiased information to help you make informed decisions at the polls.      </p>
      </div>
      <div className="p4">
      <h3>Contact :</h3>
      <p>
      Have questions or feedback? We'd love to hear from you. Contact our friendly support team at Vote4Revolution@gmail.com or +91 12345678901.
      </p>
      <p>
      Join us at Vote4Revolution and be part of the next generation of online voting. Together, we can make democracy more accessible, secure, and convenient for everyone. Your voice matters, and we're here to amplify it.
      </p>
      </div>
    </div>
  );
}

export default AboutUs;

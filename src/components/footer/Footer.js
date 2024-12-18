// // src/components/Footer.js
// import React from 'react';
// import './Footer.css';

// const Footer = () => (
//   <footer className="footer">
//     <p>© 2024 Your Company. All rights reserved.</p>
//   </footer>
// );

// export default Footer;
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 My Company. All Rights Reserved.</p>
      <div className="logo">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
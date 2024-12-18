// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => (
//   <nav className="navbar">
//     <Link to="/">Home</Link>
//     <Link to="/about">About Us</Link>
//     <Link to="/services">Services</Link>
//     <Link to="/contact">Contact Us</Link>
//   </nav>
// );

// export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// // import logo from './path-to-your-logo.png'; // Ensure to use the correct path to your logo

// const Navbar = () => (
//   <nav className="navbar">
//     <div className="navbar-logo">
//       {/* <img src={logo} alt="Logo" /> */}
//     </div>
//     <div className="navbar-links">
//       <Link to="/">Home</Link>
//       <Link to="/about">About Us</Link>
//       {/* <Link to="/services">Services</Link> */}
//       <Link to="/contact">Contact Us</Link>
//     </div>
//   </nav>
// );

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from '../../assets/logo.png'; // Ensure the correct path to your logo

const Navbar = ({ isLoggedIn, handleLogout }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      {/* Uncomment the below line when you add your logo */}
      {/* <img src={logo} alt="Company Logo" className="logo-image" /> */}
      <h1>MyCompany</h1> {/* Placeholder text for logo */}
    </div>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
    <div className="navbar-actions">
      {!isLoggedIn ? (
        <Link to="/Login" className="login-btn">Login</Link>
      ) : (
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      )}
    </div>
  </nav>
);

export default Navbar;

// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar.js';
import Footer from './components/footer/Footer.js';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Services from './pages/services/Services.js';
import Contact from './pages/contact/Contact.js';
// import BookSlot from'./components/bookslot/BookSlot';
import BookSlot from './components/bookslot/BookSlot.js';
import BookSlotForm from './components/bookform/BookSlotForm.js';
import Login from './pages/Login/Login.js';
import BookSlot1 from './components/BookSlot1.js/BookSlot1'; 
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('User logged out');
  };
// const App = () => (
  return (
  <Router>
    <div className="app">
    <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> 
        {/* <Route path="/" element={<BookSlot />} /> */}
         <Route path="/book-slot/:slotTime" element={<BookSlotForm />} />
        <Route path='/BookSlot'element={<BookSlot/>}/>
        <Route path="/bookslot1" element={<BookSlot1 />} /> {/* New route */}
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
};

export default App;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookSlotForm.css';


const BookSlotForm = () => {
  // const { slotTime } = useParams();
  const { slotTime } = useParams();
 // Retrieve slot time from URL
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Thank you ${formData.name}! Your slot at "${slotTime}" has been booked.`);
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="slot-form">
      <h2>Book Slot: {slotTime}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookSlotForm;

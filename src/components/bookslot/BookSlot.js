// import React, { useState } from 'react';
// import './BookSlot.css';

// const slots = [
//   { time: "9:00 AM to 10:00 AM", status: "" },
//   { time: "10:00 AM to 11:00 AM", status: "" },
//   { time: "11:00 AM to 12:00 PM", status: "" },
//   { time: "12:00 PM to 01:00 PM", status: "" },
//   { time: "01:00 PM to 02:00 PM", status: "" },
//   { time: "02:00 PM to 03:00 PM", status: "" },
//   { time: "04:00 PM to 05:00 PM", status: "" },
//   { time: "05:00 PM to 06:00 PM", status: "" },
// ];

// const BookSlot = () => {
//   const [selectedSlot, setSelectedSlot] = useState(null); // State to track selected slot
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" }); // State for form data

//   // Handle click on slot to show form
//   const handleSlotClick = (slot) => {
//     setSelectedSlot(slot);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="book-slot">
//       <h1>Choose Your Slot</h1>
//       <ul className="slot-list">
//         {slots.map((slot, index) => (
//           <li key={index} className="slot" onClick={() => handleSlotClick(slot)}>
//             <span>{slot.time}</span>
//             <span className="slot-status">{slot.status}</span>
//           </li>
//         ))}
//       </ul>

//       {selectedSlot && (
//         <div className="slot-form">
//           <h2>Book Slot: {selectedSlot.time}</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />

//             <label htmlFor="phone">Phone:</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//             />

//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookSlot;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BookSlot.css';

// const slots = [
//   { time: "9:00 AM to 10:00 AM", status: "" },
//   { time: "10:00 AM to 11:00 AM", status: "" },
//   { time: "11:00 AM to 12:00 PM", status: "" },
//   { time: "12:00 PM to 01:00 PM", status: "" },
//   { time: "01:00 PM to 02:00 PM", status: "" },
//   { time: "02:00 PM to 03:00 PM", status: "" },
//   { time: "04:00 PM to 05:00 PM", status: "" },
//   { time: "05:00 PM to 06:00 PM", status: "" },
// ];

// const BookSlot = () => {
//   const navigate = useNavigate();

//   const handleSlotClick = (slot) => {
//     navigate(`/book-slot/${encodeURIComponent(slot.time)}`);

//   };

//   return (
//     <div className="book-slot">
//       <h1>Choose Your Slot</h1>
//       <ul className="slot-list">
//         {slots.map((slot, index) => (
//           <li key={index} className="slot" onClick={() => handleSlotClick(slot)}>
//             <span>{slot.time}</span>
//             <span className="slot-status">{slot.status}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookSlot;
// 

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './BookSlot.css';

// const BookSlot = () => {
//   const location = useLocation();
//   const { companyName, details, openings, eligibility, position, location: jobLocation } = location.state || {}; // Destructure all necessary details

//   return (
//     <div className="book-slot">
//       {companyName ? (
//         <>
//           <h1>Company: {companyName}</h1>
//           <p><strong>About the Company:</strong> {details}</p>
//           <h2>Job Details</h2>
//           <ul>
//             <li><strong>Position:</strong> {position}</li>
//             <li><strong>Number of Openings:</strong> {openings}</li>
//             <li><strong>Eligibility:</strong> {eligibility}</li>
//             <li><strong>Job Location:</strong> {jobLocation}</li>
//           </ul>
//           {/* Add the button at the bottom */}
//           <div className="book-slot-button-container">
//             <button 
//               className="book-slot-button"
//               onClick={() => alert(`You have booked a slot for ${companyName}.`)}
//             >
//               Book Your Slot
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>No company details available. Please go back and select a company.</p>
//       )}
//     </div>
//   );
// };

// export default BookSlot;

//this line is comment
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookSlot.css';

const BookSlot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { companyName, details, openings, eligibility, position, location: jobLocation } = location.state || {}; // Destructure all necessary details

  const handleBookSlot = () => {
    // Navigate to the /book-slot-1 page (which corresponds to the BookSlot1 component)
    navigate('/bookslot1');
  };

  return (
    <div className="book-slot">
      {companyName ? (
        <>
          <h1>Company: {companyName}</h1>
          <p><strong>About the Company:</strong> {details}</p>
          <h2>Job Details</h2>
          <ul>
            <li><strong>Position:</strong> {position}</li>
            <li><strong>Number of Openings:</strong> {openings}</li>
            <li><strong>Eligibility:</strong> {eligibility}</li>
            <li><strong>Job Location:</strong> {jobLocation}</li>
          </ul>
          {/* Add the button at the bottom */}
          <div className="book-slot-button-container">
            <button 
              className="book-slot-button"
              onClick={handleBookSlot}
            >
              Book Your Slot
            </button>
          </div>
        </>
      ) : (
        <p>No company details available. Please go back and select a company.</p>
      )}
    </div>
  );
};

export default BookSlot;


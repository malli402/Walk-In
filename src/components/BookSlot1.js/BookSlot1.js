//  import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BookSlot1.css';

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

// const BookSlot1 = () => {
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

// export default BookSlot1;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookSlot1.css';

const slots = [
  { time: "9:00 AM to 10:00 AM", status: "" },
  { time: "10:00 AM to 11:00 AM", status: "" },
  { time: "11:00 AM to 12:00 PM", status: "" },
  { time: "12:00 PM to 01:00 PM", status: "" },
  { time: "01:00 PM to 02:00 PM", status: "" },
  { time: "02:00 PM to 03:00 PM", status: "" },
  { time: "04:00 PM to 05:00 PM", status: "" },
  { time: "05:00 PM to 06:00 PM", status: "" },
];

const BookSlot1 = () => {
  const navigate = useNavigate();

  const handleSlotClick = (slot) => {
    navigate(`/book-slot/${encodeURIComponent(slot.time)}`);
  };

  return (
    <div className="book-slot">
      <h1>Choose Your Slot</h1>
      <ul className="slot-list">
        {slots.map((slot, index) => (
          <li key={index} className="slot" onClick={() => handleSlotClick(slot)}>
            <span>{slot.time}</span>
            <span className="slot-status">{slot.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSlot1;

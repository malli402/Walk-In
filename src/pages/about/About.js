
// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About Us</h1>
//       <p>
//         Welcome to <strong>[Your Company Name]</strong>, a platform designed to simplify and
//         streamline interview scheduling for candidates and employers alike.
//       </p>

//       <h2>What We Do</h2>
//       <p>
//         Our platform enables candidates to book interview slots effortlessly and ensures a seamless
//         scheduling experience for recruiters.
//       </p>
//       <p>
//         We bridge the gap between job seekers and employers by removing scheduling conflicts and
//         making the hiring process more efficient.
//       </p>

//       <h2>Why Choose Us</h2>
//       <p>
//         We value your time and believe that a well-organized interview process is the foundation of
//         successful hiring.
//       </p>
//       <p>
//         Our user-friendly interface, real-time slot booking, and automated reminders ensure a
//         hassle-free experience.
//       </p>

//       <h2>Mission Statement</h2>
//       <p>
//         Our mission is to revolutionize the hiring process by offering a flexible, reliable, and
//         transparent scheduling platform for everyone involved.
//       </p>

//       <h2>Core Values</h2>
//       <ul>
//         <li><strong>Efficiency</strong>: Making scheduling fast and straightforward.</li>
//         <li><strong>Innovation</strong>: Continually improving our platform to meet user needs.</li>
//         <li><strong>Customer Focus</strong>: Ensuring satisfaction for both candidates and employers.</li>
//         <li><strong>Integrity</strong>: Upholding fairness and transparency in every interaction.</li>
//       </ul>

//       <h2>How It Works</h2>
//       <h3>Candidates:</h3>
//       <p>Browse available slots, select a convenient time, and book your interview in seconds.</p>
//       <h3>Employers:</h3>
//       <p>Set up interview schedules, manage bookings, and receive notifications effortlessly.</p>

//       <h2>Our Vision</h2>
//       <p>
//         To become the go-to platform for interview scheduling, empowering companies to hire better
//         talent and candidates to find their dream jobs.
//       </p>

//       <h2>Team</h2>
//       <p>
//         We are a team of dedicated professionals passionate about simplifying recruitment through
//         innovative technology.
//       </p>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import './About.css';

// Team Data
const teamMembers = [
  { id: 1, name: "John Doe", position: "CEO", bio: "Leading with vision and strategy." },
  { id: 2, name: "Jane Smith", position: "CTO", bio: "Driving innovation and technology." },
  { id: 3, name: "Mike Johnson", position: "Product Manager", bio: "Building user-centric products." },
  { id: 4, name: "Emily Davis", position: "HR Manager", bio: "Ensuring seamless hiring processes." },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Interview Slot Booking</strong>, a platform designed to simplify and streamline
        interview scheduling for candidates and employers alike.
      </p>

      {/* What We Do Section */}
      <div className="about-section fade-in">
        <h2>What We Do</h2>
        <p>
          Our platform enables candidates to book interview slots effortlessly and ensures a seamless
          scheduling experience for recruiters. We remove scheduling conflicts and make hiring efficient.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="about-section fade-in">
        <h2>Why Choose Us</h2>
        <ul>
          <li>User-friendly interface for booking slots.</li>
          <li>Real-time updates and notifications.</li>
          <li>Flexible scheduling for candidates and recruiters.</li>
          <li>Automated reminders to save time.</li>
        </ul>
      </div>

      {/* Mission Section */}
      <div className="about-section fade-in">
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize the hiring process by providing a reliable, flexible, and transparent
          interview scheduling platform.
        </p>
      </div>

      {/* Team Section */}
      <div className="about-section fade-in">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <h3>{member.name}</h3>
              <p><strong>{member.position}</strong></p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="about-section fade-in">
        <h2>Our Vision</h2>
        <p>
          To become the go-to platform for interview scheduling, empowering companies to hire better talent
          and candidates to land their dream jobs.
        </p>
      </div>
    </div>
  );
};

export default About;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import bannerImage from '../../assets/banner.jpg';
// // import serviceImage1 from '../../assets/service1.jpg'; // Replace with actual paths
// // import serviceImage2 from '../../assets/service2.jpg';
// // import serviceImage3 from '../../assets/service3.jpg';

// const Home = () => {
//   return (
//     <div className="home">
//       <div className="banner">
//         <img src={bannerImage} alt="Company Banner" className="banner-image" />
//         <h1>Welcome to Our Company</h1>
//         {/* <p>We provide top-notch services to help your business grow.</p> */}
//       </div>

//       {/* IT Company Section */}
//       <section className="services">
//         <h2>IT Companies Interview Slots</h2>
//         <ul className="service-list">
//           <li>
//             {/* <Link to="/BookSlot">
//               {/* <img src={serviceImage1} alt="IT Company 1" className="service-image" /> 
//               <p>Bookyour slot</p>
//             </Link> */}
//          <Link
//   to="/BookSlot"
//   state={{
//     companyName: 'Tech Solutions',
//     details: 'Tech Solutions is a leading IT company specializing in AI and cloud services.',
//     openings: 5,
//     eligibility: 'B.E/B.Tech in Computer Science or related fields.',
//     position: 'Software Engineer',
//     location: 'Hyderabad, India'
//   }}
// >
//   Tech Solutions
// </Link>
// {/* <Link to="/BookSlot" state={{ companyName: "Non-IT Company 1", details: "Details about Non-IT Company 1" }}>
//   <p>Book your slot</p>
// </Link> */}

//           </li>
//           <li>
//             <Link to="/BookSlot">
//               {/* <img src={serviceImage2} alt="IT Company 2" className="service-image" /> */}
//               <p>Bookyour slot</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/BookSlot">
//               {/* <img src={serviceImage3} alt="IT Company 3" className="service-image" /> */}
//               <p>Bookyour slot</p>
//             </Link>
//           </li>
//         </ul>
//       </section>

//       {/* Non-IT Company Section */}
//       <section className="services">
//         <h2>Non-IT Companies Interview slots</h2>
//         <ul className="service-list">
//           <li>
//             <Link to="/BookSlot">
//               {/* <img src={serviceImage1} alt="Non-IT Company 1" className="service-image" /> */}
//               <p>Bookyour slot</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/BookSlot">
//               {/* <img src={serviceImage2} alt="Non-IT Company 2" className="service-image" /> */}
//               <p>Bookyour slot</p>
//             </Link>
//           </li>
//           <li>
//             <Link to="/BookSlot">
//               {/* <img src={serviceImage3} alt="Non-IT Company 3" className="service-image" /> */}
//               <p>Bookyour slot</p>
//             </Link>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bannerImage from '../../assets/banner.jpg';
import itCompanyImage from '../../assets/itCompanyImage.jpeg';
import nonItCompanyImage from '../../assets/nonitCompanyImage.jpg';


// Dynamic company data
const companyData = {
  IT: [
    {
      id: 1,
      companyName: 'Tech Solutions',
      details: 'Leading IT company specializing in AI and Cloud services.',
      openings: 5,
      eligibility: 'B.E/B.Tech in Computer Science',
      position: 'Software Engineer',
      location: 'Hyderabad, India',
      image: itCompanyImage,
    },
    {
      id: 2,
      companyName: 'CyberSoft Ltd',
      details: 'Cybersecurity services for global enterprises.',
      openings: 8,
      eligibility: 'B.Tech/ BCA/ MCA',
      position: 'Cybersecurity Analyst',
      location: 'Bangalore, India',
      image: itCompanyImage,
    },
  ],
  NonIT: [
    {
      id: 3,
      companyName: 'FinanceWorld Pvt Ltd',
      details: 'Leading financial services provider in Asia.',
      openings: 10,
      eligibility: 'MBA in Finance/ B.Com',
      position: 'Financial Analyst',
      location: 'Mumbai, India',
      image: nonItCompanyImage,
    },
    {
      id: 4,
      companyName: 'HealthCare Inc',
      details: 'Top healthcare solutions provider.',
      openings: 3,
      eligibility: 'B.Sc/ M.Sc in Healthcare',
      position: 'Health Consultant',
      location: 'Delhi, India',
      image: nonItCompanyImage,
    },
  ],
};

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="Company Banner" className="banner-image" />
        <h1>Welcome to Interview Slot Booking</h1>
        <p>Book interview slots for IT and Non-IT companies easily!</p>
      </div>

      {/* IT Company Section */}
      <section className="services">
        <h2>IT Companies Interview Slots</h2>
        <ul className="service-list">
          {companyData.IT.map((company) => (
            <li key={company.id} className="company-card">
              <img src={company.image} alt={company.companyName} />
              <h3>{company.companyName}</h3>
              <p>{company.details}</p>
              <Link
                to="/BookSlot"
                state={{
                  companyName: company.companyName,
                  details: company.details,
                  openings: company.openings,
                  eligibility: company.eligibility,
                  position: company.position,
                  location: company.location,
                }}
              >
                <button>Click here</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Non-IT Company Section */}
      <section className="services">
        <h2>Non-IT Companies Interview Slots</h2>
        <ul className="service-list">
          {companyData.NonIT.map((company) => (
            <li key={company.id} className="company-card">
              <img src={company.image} alt={company.companyName} />
              <h3>{company.companyName}</h3>
              <p>{company.details}</p>
              <Link
                to="/BookSlot"
                state={{
                  companyName: company.companyName,
                  details: company.details,
                  openings: company.openings,
                  eligibility: company.eligibility,
                  position: company.position,
                  location: company.location,
                }}
              >
                <button>Click here</button>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Certificates.css";

const certificates = [
  {
    title: "GDG Certificate",
    img: "/public/images/GDG.jpeg",
    description: "Attended GDG Cairo event and completed hands-on workshop.",
  },
  {
    title: "NTI Certificate",
    img: "/public/images/British_Airways_realData.jpg",
    description: "Completed NTI training program.",
  },
  {
    title: "British Airways RealData Certificate",
    img: "/public/images/British_Airways_realData.jpg",
    description: "Worked on real data project with British Airways dataset.",
  },
];

const datacampCertificates = [
  { title: "End to End Machine Learning", img: "/public/images/End_To_END_MACHINE_LEARNING.png", description: "Completed a full machine learning workflow project." },
  { title: "Supervised ML", img: "/public/images/SUPERVISEDML.png", description: "Studied supervised machine learning techniques." },
  { title: "Introduction to SQL", img: "/public/images/INTRODUTION_SQL.png", description: "Learned SQL basics for data analysis." },
  { title: "Intermediate SQL", img: "/public/images/intermediate_SQL.png", description: "Advanced queries and database operations." },
  { title: "Joining Data in SQL", img: "/public/images/JoiningDATASQL.png", description: "Mastered joins and relational queries." },
  { title: "Power BI DAX", img: "/public/images/DAXPowerBI.png", description: "Created dashboards using DAX in Power BI." },
];

function Certificates() {
  const [showFlipbook, setShowFlipbook] = useState(false);

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="cert-title">Certificates</h2>
      <div className="timeline">

        {/* الشهادات العادية - زي التنسيق القديم بالظبط */}
        {certificates.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="circle"></div>
            <img src={item.img} alt={item.title} className="cert-img" />
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}

        {/* بلوك DataCamp - صورة مكدسة */}
        <div className="timeline-item" onClick={() => setShowFlipbook(true)}>
          <div className="circle"></div>
          <div className="content">
            <div className="datacamp-preview">
              {datacampCertificates.slice(0, 4).map((cert, index) => (
                <img
                  key={index}
                  src={cert.img}
                  alt={cert.title}
                  className={`preview-img pos-${index}`}
                />
              ))}
            </div>
            <h3>DataCamp Certificates</h3>
            <p>Click to flip through all certificates</p>
          </div>
        </div>
      </div>

      {/* Overlay Flipbook */}
      {showFlipbook && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={() => setShowFlipbook(false)}>✖</button>
            <HTMLFlipBook width={400} height={500} showCover={true} className="datacamp-book">
              {datacampCertificates.map((cert, index) => (
                <div className="book-page" key={index}>
                  <img src={cert.img} alt={cert.title} className="flip-img" />
                  <h4>{cert.title}</h4>
                  <p>{cert.description}</p>
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;

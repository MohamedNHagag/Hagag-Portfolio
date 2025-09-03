import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Certificates.css";

const certificates = [
  {
    title: "GDG Certificate",
    img: "/public/images/GDG.jpeg",
    description: "Attended GDG Benha event and completed Exploratory Data Analysis (EDA), Feature Engineering & Data Preprocessing, Machine Learning, Model Deployment, SQL and Power BI.",
  },
  {
    title: "NTI Summer Training – Machine Learning",
    img: "/public/images/NTI.png",
    description: "intensive summer training program at NTI, where I learned hands-on experience in core ML concepts, practical applications, and freelancing skills. During the training, I developed an end-to-end ML project starting from Ingestion Data, data preprocessing to model training, evaluation, and deployment. The program also enhanced my soft skills, particularly communication, presentation, teamwork, collaboration, problem-solving, critical thinking, and time management.",
  },
   {
    title: "nVIDIA Deep learning Certificate",
    img: "/public/images/nVIDIA.png",
    description: "Completed the NVIDIA Deep Learning Institute's Fundamentals of Deep Learning for Computer Vision course, gaining practical experience in building and deploying deep learning models for image classification tasks using popular frameworks like TensorFlow and PyTorch. This certification has enhanced my understanding of deep learning concepts and their applications in computer vision.",
  },
  {
    title: "British Airways RealData Certificate",
    img: "/public/images/British_Airways_realData.jpg",
    description: "the British Airways Data Science Virtual Experience on Forage, working on real airline booking data to understand customer behavior and booking decisions. The project covered the full end-to-end pipeline: starting with EDA and visualization, applying data cleaning and preprocessing, training and evaluating classification models, and finally deploying the best model with Streamlit. This experience enhanced my skills in data analysis, machine learning, and model deployment.",
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

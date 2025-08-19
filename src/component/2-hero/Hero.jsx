import React, { useRef } from "react";
import "./hero.css";
import developer from "../../animation/dev.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
// @ts-ignore
import avatar from "../../../public/me-modified.jpg";
import { Typewriter } from "react-simple-typewriter";
function Hero() {
  const lottieRef = useRef();
  return (
    <section id="hero" className="hero flex ">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src={avatar}
            className="avatar"
            alt=""
          />
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="icon-verified"
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            <Typewriter
              words={[
                "Hello, I'm Mohamed Hagag",
                "A Data Analysis | AI & Machine Learning | NLP | CV | DL",
                "A Freelancer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
          <p>
              {/* الجزء الثابت بدون حركة */}
              Computer Science and Artificial Intelligence student with 3+ years of hands-on experience in advanced data analysis, business 
              intelligence, and machine learning. Skilled in data cleaning, exploratory data analysis (EDA), and delivering actionable insights using SQL, 
              Power BI, and Excel through advanced data visualization and reporting. Proficient in Python and experienced in designing and optimizing 
              models using TensorFlow, Keras, and Scikit-learn, with strong expertise in neural networks (CNNs, RNNs) for solving real-world 
              challenges. Experienced in natural language processing (NLP) for multilingual text analysis, and computer vision using YOLO and OpenCV 
              for object detection, image segmentation, and OCR-based automation. Strong foundation in mathematics and statistics, including linear 
              algebra, probability, and differential equations, for algorithm optimization. Familiar with cloud platforms (AWS, Azure, GCP), Docker, and 
              API integration for real-time analytics.             
              {/* الجزء اللي هيتكتب بالحركة */}
              <Typewriter
                words={[
                  "Additionally skilled in front-end development (ReactJS, HTML, CSS, JavaScript) for building interactive dashboards and deploying AI-driven web applications end-to-end.",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={15}
                deleteSpeed={0}
                delaySpeed={1000}
              />
          </p>

          <div className="icons flex ">
            <a className="icon icon-envelope" href="mailto:mohamednasserabohamda@gmail.com"></a>
            <a
              className="icon icon-github"
              href="https://github.com/MohamedNHagag"
            ></a>                                                                                                                                                 
            <a className="icon icon-linkedin" 
            href="https://www.linkedin.com/in/mohamed-hagag-a117682a7/"
            ></a>
          </div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          loop={true}
          animationData={developer}
        />
      </div>
    </section>
  );
}

export default Hero;

import React, { useState, useMemo } from "react";
import "./main.css";
import customdata from "./myprojects.json";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Main() {
  const [active, setActive] = useState("all project");
  const [myprojects] = useState(customdata);
  const [expanded, setExpanded] = useState(false);

  const buttons = [
    "all project",
    "Data Analysis",
    "Data Science",
    "Machine Learning & Deep Learning",
    "Computer Vision & NLP",
    "FrontEnd",
  ];

  const filteredProjects = useMemo(() => {
    return myprojects.filter(
      (project) => active === "all project" || project.Category === active
    );
  }, [active, myprojects]);

  return (
    <main id="main" className="flex">
      <section className="left flex">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              setActive(btn);
              setExpanded(false); // collapse on category change
            }}
            className={active === btn ? "active" : null}
          >
            {btn}
          </button>
        ))}
      </section>

      <section className="right flex">
        <div className={`cards-wrapper ${expanded ? "expanded" : "collapsed"}`}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                className="card"
              >
                <Link to={`/ProjectDetails/${project.id}`} className="card-link">
                  <img
                    width="100%"
                    className="picture-self"
                    src={project.imgpath[0]}
                    alt={project.title}
                  />
                  <div className="box">
                    <h1 className="title">{project.title}</h1>
                    <p className="subtitle">{project.subtitle}</p>
                  </div>
                </Link>
                <div className="flex icons">
                  <a className="icon-link" href={project.link || "#"}></a>
                  <a className="icon-github" href={project.github || "#"}></a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        {filteredProjects.length > 6 && (
          <motion.button
                    className="toggle-btn1"
                    onClick={() => setExpanded(!expanded)}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "#24252e",
                      color: "#fff",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    style={{
                      background: "none",
                      border: "1px solid #407095",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    {expanded ? "Show Less ↑" : "Show More ↓"}
          </motion.button>

        )}
      </section>
    </main>
  );
}

export default Main;

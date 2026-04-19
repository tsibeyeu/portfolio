import React from "react";
import Tilt from "react-parallax-tilt";
import { myProjects } from "../component/datas/projects";
import style from "./Project.module.css";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className={style.section}>
      {/* 1. Line Separator between About and Projects */}
      <div className={style.sectionSeparator}>
        <div className={style.line}></div>
      </div>

      {/* 2. Centered Header with extra context */}
      <div className={style.header}>
        <span className={style.tag}>03 // WORK</span>
        <h1 className={style.title}>
          Selected <span>Projects</span>
        </h1>
        <p className={style.lead}>
          A curated collection of digital experiences I've built, focusing on
          the **MERN** stack and **Laravel** ecosystem. Each project solves a
          specific problem through clean code and user-centric design.
        </p>
      </div>

      <div className={style.projectGrid}>
        {myProjects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            transitionSpeed={2000}
            scale={1.02}
          >
            <div className={style.card}>
              <div className={style.imageBox}>
                <img src={project.img} alt={project.title} />
                <div className={style.overlay}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={style.viewBtn}
                  >
                    View Source Code →
                  </a>
                </div>
              </div>

              <div className={style.cardInfo}>
                <span className={style.tech}>{project.stack}</span>
                <h5 className={style.projectTitle}>{project.title}</h5>
                <p className={style.projectDesc}>{project.description}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;

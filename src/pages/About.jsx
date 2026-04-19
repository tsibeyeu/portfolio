import React from "react";
import { skills } from "../component/datas/data";
import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.section}>
      {/* Decorative background text */}
      <div className={style.bgText}>ABOUT</div>

      <div className={style.container}>
        <header className={style.header}>
          <div className={style.tagLine}>
            <span className={style.number}>02</span>
            <div className={style.line}></div>
            <span className={style.category}>WHO AM I</span>
          </div>
          <h2 className={style.mainTitle}>
            Engineering digital experiences with <span>precision.</span>
          </h2>
        </header>

        <div className={style.mainGrid}>
          {/* Personality & Pitch */}
          <div className={style.descriptionSide}>
            <p className={style.leadText}>
              I’m a <strong>Full Stack Engineer</strong> bridge-building between
              robust backend architecture and pixel-perfect frontends.
            </p>
            <p className={style.bodyText}>
              Specializing in the <strong>MERN Stack</strong> and{" "}
              <strong>Laravel</strong>, I transform complex business
              requirements into scalable, high-performance applications. My
              focus is on writing code that is as clean as the interfaces I
              design.
            </p>

            <div className={style.badgeContainer}>
              <span className={style.badge}>MERN SPECIALIST</span>
              <span className={style.badge}>LARAVEL EXPERT</span>
              <span className={style.badge}>UI/UX DRIVEN</span>
            </div>
          </div>

          {/* Tech Arsenal (The "Bento" Skill Box) */}
          <div className={style.techSide}>
            <div className={style.techCard}>
              <h3>THE ARSENAL</h3>
              <div className={style.skillsGrid}>
                {skills.map((skill, index) => (
                  <div key={index} className={style.skillNode}>
                    <img src={skill.imageUrl} alt={skill.name} />
                    <div className={style.tooltip}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

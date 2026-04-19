import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { pro } from "./images";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.bgWrapper}>
        <img src={pro} alt="" className={style.bgImage} />
        <div className={style.overlay}></div>
      </div>

      <div className={style.gridContainer}>
        {/* LEFT COLUMN: Large Text */}
        <div className={style.leftSide}>
          <h1 className={style.name}>
            TSI<span>ON</span>
          </h1>
          <div className={style.typewriterContainer}>
            <h2 className={style.typingText}>Full Stack Developer</h2>
          </div>
          <p className={style.description}>
            Turning ideas into interactive reality with modern tech stacks.
          </p>
          <div className={style.ctaGroup}>
            {/* High-Impact Button */}
            <a href="Tsion Resume.pdf" className={style.premiumBtn} download>
              <span className={style.btnText}>Grab My Resume</span>
              <div className={style.btnArrow}>→</div>
            </a>

            {/* Bold Text Socials */}
            <div className={style.boldSocials}>
              <a href="https://github.com" data-name="GITHUB">
                GH
              </a>
              <a href="https://linkedin.com" data-name="LINKEDIN">
                LN
              </a>
              <a href="https://x.com" data-name="TWITTER">
                TW
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Balance */}
        {/* RIGHT COLUMN: Visual Balance */}
        <div className={style.rightSide}>
          <div className={style.visualCard}>
            <div className={style.glow}></div>
            {/* New content inside the card */}
            <div className={style.cardContent}>
              <span className={style.greeting}>Hello Client! 👋</span>
              <p className={style.subText}>
                Let's build something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

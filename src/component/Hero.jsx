import React from "react";
import { pro } from "./images";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.bgWrapper}>
        <img src={pro} alt="Developer Background" className={style.bgImage} />
        <div className={style.overlay}></div>
      </div>

      <div className={style.gridContainer}>
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
            <div className={style.actionButtons}>
              {/* Primary: Download Button */}
              <a
                href="/Tsion Resume.pdf"
                className={style.premiumBtn}
                download="Tsion_Beyene_Resume.pdf"
              >
                <span className={style.btnText}>Grab My Resume</span>
                <div className={style.btnArrow}>→</div>
              </a>

              {/* Secondary: View Link */}
              <a
                href="/Tsion Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={style.viewResumeLink}
              >
                View CV
              </a>
            </div>

            <div className={style.boldSocials}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                data-name="GITHUB"
              >
                GH
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                data-name="LINKEDIN"
              >
                LN
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                data-name="TWITTER"
              >
                TW
              </a>
            </div>
          </div>
        </div>

        <div className={style.rightSide}>
          <div className={style.visualCard}>
            <div className={style.glow}></div>
            <div className={style.cardContent}>
              <span className={style.greeting}>Hello There! 👋</span>
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

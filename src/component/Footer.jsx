import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import style from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footerSection}>
      {/* 1. The Vertical Connecting Line */}
      <div className={style.separator}>
        <div className={style.line}></div>
      </div>

      <div className={style.container}>
        {/* 2. The Main Call to Action */}
        <div className={style.ctaWrap}>
          <h2 className={style.ctaText}>
            Ready to start a project? <br />
            <span>Let's build something together.</span>
          </h2>
          <Link className={style.modernBtn} to="/contact">
            Get In Touch
          </Link>
        </div>

        {/* 3. Professional Footer Navigation */}
        <div className={style.footerBottom}>
          <div className={style.brandSide}>
            <Link to="/" className={style.logo}>
              TSI<span>.</span>
            </Link>
            <p className={style.tagline}>
              Full Stack Developer // Problem Solver
            </p>
          </div>

          <div className={style.linkSide}>
            <div className={style.socials}>
              <a href="https://github.com">
                <FaGithub />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin />
              </a>
              <a href="https://x.com">
                <FaTwitter />
              </a>
            </div>
            <p className={style.copy}>
              © {currentYear} Tsion Beyene. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

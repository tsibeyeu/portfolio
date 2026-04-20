// src/components/SideSocials.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import style from "./SideSocials.module.css";

const SideSocials = () => {
  return (
    <div className={style.socialBar}>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://x.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <div className={style.verticalLine}></div>
    </div>
  );
};
export default SideSocials;

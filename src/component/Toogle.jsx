import React, { useContext } from "react";
import { BiSun } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import style from "./Toogle.module.css";
import { themeContext } from "./Context";

const Toogle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleToggle = () => {
    theme.dispatch({ type: "toogle" });
  };

  return (
    <button
      className={`${style.toggleBtn} ${darkMode ? style.dark : style.light}`}
      onClick={handleToggle}
      aria-label="Toggle Theme"
    >
      <div className={style.iconContainer}>
        <BsMoon className={style.moonIcon} />
        <BiSun className={style.sunIcon} />
      </div>
      <div className={style.background}></div>
    </button>
  );
};

export default Toogle;

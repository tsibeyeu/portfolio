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
    <div className={style.toggleWrapper} onClick={handleToggle}>
      <BsMoon className={style.icon} />
      <BiSun className={style.icon} />
      {/* The sliding ball */}
      <div
        className={style.ball}
        style={
          darkMode
            ? { transform: "translateX(0px)" }
            : { transform: "translateX(28px)" }
        }
      ></div>
    </div>
  );
};

export default Toogle;

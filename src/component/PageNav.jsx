import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Toogle from "./Toogle";

const PageNav = () => {
  const navItems = [
    { id: "01", label: "Home", path: "/" },
    { id: "02", label: "About", path: "/about" },
    { id: "03", label: "Projects", path: "/project" },
    { id: "04", label: "Contact", path: "/contact" },
  ];

  return (
    <header className={style.header}>
      <Link className={style.logo} to="/">
        TSI<span className={style.logoDot}>.</span>
      </Link>

      <nav className={style.nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${style.navLink} ${style.active}` : style.navLink
                }
              >
                <span className={style.number}>{item.id}</span>
                <span className={style.label}>{item.label}</span>
              </NavLink>
            </li>
          ))}
          <li className={style.toggleItem}>
            <Toogle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageNav;

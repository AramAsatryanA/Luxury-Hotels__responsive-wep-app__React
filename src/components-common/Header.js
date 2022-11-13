import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import pageLogo from "../assets/images/icons/page_logo.svg";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

import styles from "./Header.module.css";

function Header() {
  const [mobileMode, setMobileMode] = useState(false);

  function hideNavMenu(event) {
    const link = event.target.closest("a");

    //todo --- To hide navigation menu only if one of the links clicked
    if (!link) return;

    setMobileMode(false);
  }

  return (
    <header>
      <div className="-container">
        <nav>
          <Link to="/" id="logo">
            <img src={pageLogo} alt="Logo"></img>
          </Link>
          <ul
            className={
              mobileMode ? styles["nav__links-mobile"] : styles["nav__links"]
            }
            onClick={hideNavMenu}
          >
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : null)}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : null)}
              to="/facilities"
            >
              Facilities
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : null)}
              to="/rooms"
            >
              Rooms
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : null)}
              to="/contact-us"
            >
              Contact-us
            </NavLink>
            <button
              className={`${styles["btn__nav"]} ${styles["btn__nav-close"]}`}
              onClick={() => setMobileMode(false)}
            >
              <CgClose />
            </button>
          </ul>
          <button
            className={`${styles["btn__nav"]} ${styles["btn__nav-open"]}`}
            onClick={() => setMobileMode(true)}
          >
            <FiMenu />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

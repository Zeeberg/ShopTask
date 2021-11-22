import React from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <Logo />
          <Navbar />
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default Header;

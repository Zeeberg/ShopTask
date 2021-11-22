import React from "react";
import RangeList from "../Range/RangeList";
import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <RangeList />
    </div>
  );
};

export default Sidebar;

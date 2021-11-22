import React from "react";
import styles from "./styles.module.scss";

interface StarProps {
  rate: number;
}

const Stars = ({ rate }: StarProps) => {
  return (
    <div
      className={styles["stars"]}
      style={{ "--rating": rate } as React.CSSProperties}
      data-rate={rate}
    ></div>
  );
};

export default Stars;

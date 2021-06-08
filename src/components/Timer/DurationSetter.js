import React from "react";
import Button from '../UI/Button';
import styles from "./DurationSetter.module.css";

const DurationSetter = (props) => {
  return (
    <div className={styles.setter}>
      <header>
        <h2 className={styles.title}>{props.mode}</h2>
      </header>
      <div className={styles.controls}>
          <Button>+</Button>
          <span>10</span>
          <Button>-</Button>
      </div>
    </div>
  );
};

export default DurationSetter;

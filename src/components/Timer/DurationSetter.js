import React from "react";
import Button from "../UI/Button";
import styles from "./DurationSetter.module.css";

const DurationSetter = ({ mode, duration, setDuration, isRunning }) => {
  return (
    <div className={styles.setter}>
      <header>
        <h2 className={styles.title}>{mode}</h2>
      </header>
      <div className={styles.controls}>
        <Button value="increase" onClick={() => !isRunning && setDuration(duration + 1)}>+</Button>
        <span>{duration}</span>
        <Button value="decrease" onClick={() => !isRunning && setDuration(duration - 1)}>-</Button>
      </div>
    </div>
  );
};

export default DurationSetter;

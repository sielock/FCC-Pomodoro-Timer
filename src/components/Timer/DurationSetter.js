import React from "react";
import Button from "../UI/Button";
import styles from "./DurationSetter.module.css";

const DurationSetter = ({ mode, duration, updateDuration }) => {
  const increment = () => {
    updateDuration(duration < 60 ? (duration += 1) : 60);
  };

  const decrement = () => {
    updateDuration(duration > 1 ? (duration -= 1) : 1);
  };

  return (
    <div className={styles.setter}>
      <header>
        <h2 className={styles.title}>{mode}</h2>
      </header>
      <div className={styles.controls}>
        <Button value="increase" onClick={increment}>
          +
        </Button>
        <span>{duration}</span>
        <Button value="decrease" onClick={decrement}>
          -
        </Button>
      </div>
    </div>
  );
};

export default DurationSetter;

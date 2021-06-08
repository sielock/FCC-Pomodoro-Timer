import React from "react";
import Button from "../UI/Button";
import styles from "./Timer.module.css";

const Timer = () => {
  return (
    <div className={styles.timer}>
      <div className={styles.modeTitle}>
        <header>
          <h2>Working</h2>
        </header>
      </div>
      <div className={styles.countdown}>
        <p>25:00</p>
      </div>
      <div className={styles.controls}>
        <Button>Start</Button>
        <Button>Stop</Button>
      </div>
    </div>
  );
};

export default Timer;

import React from "react";
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
        <button>Start</button>
        <button>Stop</button>
      </div>
    </div>
  );
};

export default Timer;

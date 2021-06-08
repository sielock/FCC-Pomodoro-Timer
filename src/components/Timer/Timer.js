import React from "react";
import Button from "../UI/Button";
import styles from "./Timer.module.css";

const Timer = (props) => {

  const startTimer =() => {
    console.log('start');
  }

  const stopTimer = () => {
    console.log('stop');
  }

  const updateTimerValue = () => {
    console.log('update');
  }

  return (
    <div className={styles.timer}>
      <div className={styles.modeTitle}>
        <header>
          <h2 onChange={updateTimerValue}>{props.mode}</h2>
        </header>
      </div>
      <div className={styles.countdown}>
        <p>{props.duration}</p>
      </div>
      <div className={styles.controls}>
        <Button value="start" onClick={startTimer}>Start</Button>
        <Button value="stop" onClick={stopTimer}>Stop</Button>
      </div>
    </div>
  );
};

export default Timer;

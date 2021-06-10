import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import styles from "./Timer.module.css";

const Timer = ({
  mode,
  updateMode,
  workDuration,
  updateWorkDuration,
  breakDuration,
  updateBreakDuration,
}) => {
  const initialTime = (mode === "Working" ? workDuration : breakDuration);
  const [seconds, setSeconds] = useState(0);
  const [display, setDisplay] = useState(25);
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    setDisplay(initialTime);
  }, [mode, workDuration, breakDuration, initialTime]);

  useEffect(() => {
    if (isRunning) {
      var interval = setInterval(() => {
        if (display === 0 && seconds === 0) {
          updateMode(mode === "Working" ? "Break" : "Working");
        }
        if (seconds === 0) {
          setDisplay(display - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 150);
    }

    return () => clearInterval(interval);
  }, [isRunning, display, seconds, mode, updateMode]);

  const resetTimer = () => {
    setisRunning(false);
    updateWorkDuration(25);
    updateBreakDuration(5);
    setSeconds(0);
  };

  return (
    <div className={styles.timer}>
      <div className={styles.modeTitle}>
        <header>
          <h2>{mode}</h2>
        </header>
      </div>
      <div className={styles.countdown}>
        <p>{`${display > 9 ? display : `0${display}`}:${
          seconds > 9 ? seconds : `0${seconds}`
        }`}</p>
      </div>
      <div className={styles.controls}>
        <Button value="start" onClick={() => setisRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button value="reset" onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;

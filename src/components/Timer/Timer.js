import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import styles from "./Timer.module.css";

const Timer = ({ mode, setMode, breakDuration, setBreakDuration, workDuration, setWorkDuration, isRunning, setIsRunning }) => {
  const [minutes, setMinutes] = useState(mode === "Session" ? workDuration : breakDuration);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMinutes(mode === "Session" ? workDuration : breakDuration);
  }, [mode, workDuration, breakDuration]);

  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    if (isRunning) {
      let interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setMode(mode === 'Session' ? 'Break' : 'Session');
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  });

  const resetTimer = () => {
    setWorkDuration(25);
    setBreakDuration(5);
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  }

  return (
    <div className={styles.timer}>
      <div className={styles.modeTitle}>
        <header>
          <h2>{mode}</h2>
        </header>
      </div>
      <div className={styles.countdown}>
        <p>
          {displayMinutes}:{displaySeconds}
        </p>
      </div>
      <div className={styles.controls}>
        <Button value="start" onClick={() => setIsRunning(!isRunning)}>
          {!isRunning ? "Start" : "Stop"}
        </Button>
        <Button value="reset" onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;

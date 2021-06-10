import React from "react";
import DurationSetter from "../Timer/DurationSetter";
import styles from "./DurationControls.module.css";

const DurationControls = ({
  workDuration,
  setWorkDuration,
  breakDuration,
  setBreakDuration,
  isRunning,
}) => {
  return (
    <div className={styles.wrapper}>
      <DurationSetter
        mode="Session"
        duration={workDuration}
        setDuration={setWorkDuration}
        isRunning={isRunning}
      />
      <DurationSetter
        mode="Break"
        duration={breakDuration}
        setDuration={setBreakDuration}
        isRunning={isRunning}
      />
    </div>
  );
};

export default DurationControls;

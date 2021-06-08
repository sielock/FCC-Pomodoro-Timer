import React, { useState } from "react";
import DurationSetter from "./components/Timer/DurationSetter";
import Timer from "./components/Timer/Timer";
import styles from "./App.module.css";

const App = () => {
  const [mode, setMode] = useState("Working");
  const [breakLength, setBreakLength] = useState(5);
  const [workLength, setWorkLength] = useState(25);

  const updateMode = (newMode) => {
    setMode(newMode);
  }

  const updateDuration = (mode, change) => {
    if(mode === 'Break') {
      setBreakLength(prevState => change === 'increase' ? prevState += 1 : prevState -=1);
    }
    else {
      setWorkLength(prevState => change === 'increase' ? prevState += 1 : prevState -=1);
    }
  };

  return (
    <div>
      <Timer mode={mode} onChange={updateMode} />
      <div className={styles.durationControlsWrapper}>
        <DurationSetter
          mode="Break"
          duration={breakLength}
          updateDuration={updateDuration}
        />
        <DurationSetter
          mode="Working"
          duration={workLength}
          updateDuration={updateDuration}
        />
      </div>
    </div>
  );
};

export default App;

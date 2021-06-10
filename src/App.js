import React, { useState } from "react";
import DurationSetter from "./components/Timer/DurationSetter";
import Timer from "./components/Timer/Timer";
import styles from "./App.module.css";

const App = () => {
  const [mode, setMode] = useState("Working");
  const [breakLength, setBreakLength] = useState(5);
  const [workLength, setWorkLength] = useState(25);

  return (
    <div>
      <Timer
        mode={mode}
        updateMode={setMode}
        workDuration={workLength}
        updateWorkDuration={setWorkLength}
        breakDuration={breakLength}
        updateBreakDuration={setBreakLength}
      />
      <div className={styles.durationControlsWrapper}>
        <DurationSetter
          mode="Break"
          duration={breakLength}
          updateDuration={setBreakLength}
        />
        <DurationSetter
          mode="Working"
          duration={workLength}
          updateDuration={setWorkLength}
        />
      </div>
    </div>
  );
};

export default App;

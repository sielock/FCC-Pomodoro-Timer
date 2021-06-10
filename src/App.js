import React, { useState } from "react";
import DurationControls from "./components/UI/DurationControls";
import Timer from "./components/Timer/Timer";

const App = () => {
  const [mode, setMode] = useState("Session");
  const [breakDuration, setBreakDuration] = useState(5);
  const [workDuration, setWorkDuration] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div>
      <Timer
        mode={mode}
        setMode={setMode}
        breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
        workDuration={workDuration}
        setWorkDuration={setWorkDuration}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
      <DurationControls
        workDuration={workDuration}
        setWorkDuration={setWorkDuration}
        breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
        isRunning={isRunning}
      />
    </div>
  );
};

export default App;

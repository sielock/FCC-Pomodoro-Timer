import React from "react";
import DurationSetter from "./components/Timer/DurationSetter";
import Timer from "./components/Timer/Timer";
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Timer />
      <div className={styles.durationControlsWrapper}>
        <DurationSetter mode="Break" />
        <DurationSetter mode="Working" />
      </div>
    </div>
  );
};

export default App;

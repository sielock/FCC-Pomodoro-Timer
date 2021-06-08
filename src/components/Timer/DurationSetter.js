import React from "react";
import styles from "./DurationSetter.module.css";

const DurationSetter = (props) => {
  return (
    <div>
      <header>
        <h2>{props.mode}</h2>
      </header>
      <div>
          <button>+</button>
          <span>10</span>
          <button>-</button>
      </div>
    </div>
  );
};

export default DurationSetter;

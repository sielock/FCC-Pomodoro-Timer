import React from "react";
import Button from '../UI/Button';
import styles from "./DurationSetter.module.css";

const DurationSetter = (props) => {
  const handleClick = (event) => {
    if (event.target.value === 'increase') {
      props.updateDuration(props.mode, 'increase');
    }
    if(event.target.value === 'decrease') {
      props.updateDuration(props.mode, 'decrease');
    }
  }

  return (
    <div className={styles.setter}>
      <header>
        <h2 className={styles.title}>{props.mode}</h2>
      </header>
      <div className={styles.controls}>
          <Button value="increase" onClick={handleClick}>+</Button>
          <span>{props.duration}</span>
          <Button value="decrease" onClick={handleClick}>-</Button>
      </div>
    </div>
  );
};

export default DurationSetter;

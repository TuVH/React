import React, { useState } from "react";
import "./ToggleStyle.css";
const Toggle = () => {
  const [on, setOn] = useState(false);
  const isOn = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={isOn}>
        <div className={`sprint ${on ? "active" : ""}`}></div>
      </div>
      <div>
          <h2>{on}</h2>
               az
      </div>
    </div>
  );
};

export default Toggle;

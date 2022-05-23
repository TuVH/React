import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div className="input-div" >
      <input
        ref={divRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-gray-300 focus:border-blue-500"
      ></input>
    </div>
  );
};

export default Input;

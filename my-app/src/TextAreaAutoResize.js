import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");


  const handleChange = (event) => {
    //setTextAreaHeight("auto");
    console.log(textAreaHeight);
    setText(event.target.value);
  }

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
    console.log(textAreaHeight);
  },[text])
  return (
    <div className="p-5">
      <textarea
        className="w-full max-w-[400px] overflow-hidden p-5 rounded-lg border border-gray-300 focus:border-blue-400"
        placeholder="Please enter your content"
        value={text}
        ref={textAreaRef}
        style={{
            height: textAreaHeight
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;

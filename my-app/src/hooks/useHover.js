import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const nodeRef = useRef(null);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const dom = nodeRef.current;
    console.log(dom);
    function handleMouseOver() {
        setHover(true);
    }
    function handleMouseOut() {
        setHover(false);
    }
    if(dom){
        dom.addEventListener("mouseover", handleMouseOver);
        dom.addEventListener("mouseout", handleMouseOut);
    }  
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return {
    hover,
    nodeRef,
  };
}

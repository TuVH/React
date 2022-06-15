import { useState } from "react";

export default function useFormHook(initialValue){
    const [name, setName] = useState(initialValue);
      const handleOnchange = (e) => {
        setName({
          ...name,
          [e.target.name]: e.target.value,
        });
      };

    return{
        name,
        handleOnchange
    }
}
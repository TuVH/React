import React, { useState } from "react";
import useFormHook from "../hook/useFormHooks";

const Form = () => {
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");

  // const handleChangeName = (event) => {
  //   console.log(event)
  //   setName(event.target.value);
  // };
  // const handleChangeCountry = (event) => {
  //   console.log(event.target)
  //   setCountry(event.target.value);
  // };

  // const handleChangeMessage = (event) => {
  //   setMessage(event.target.value);
  // };
  // return (
  //   <div className="p-5">
  //     {name}
  //     <input
  //       type="text"
  //       name="fullName"
  //       id=""
  //       className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
  //       placeholder="enter your name"
  //       onChange={handleChangeName}
  //     />
  //     {message}
  //     <textarea
  //       className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
  //       placeholder="enter your message"
  //       onChange={handleChangeMessage}
  //     ></textarea>
  //     {country}
  //     <select name="country" id="" onChange={handleChangeCountry}>
  //       <option value="vietnam">VN</option>
  //       <option value="usa">USA</option>
  //       <option value="germany">Đức</option>
  //     </select>
  //   </div>
  const { name, handleOnchange } = useFormHook({
    message: "",
    email: "",
  });
  console.log(name);
  return (
    <div>
      {name.message}
      <input
        type="text"
        name="message"
        className="w-full max-w-[300px] p-5 m-5 border border-gray-200 rounded-lg"
        placeholder="enter your message"
        onChange={handleOnchange}
      />
      {name.email}
      <input
        type="text"
        name="email"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="enter your email"
        onChange={handleOnchange}
      />
    </div>
  );
};

export default Form;

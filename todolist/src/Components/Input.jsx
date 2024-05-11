import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useRef } from "react";

export default function Input(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-around">
      <input
        ref={inputBox}
        className="focus:outline-none p-3 border w-[90%] border-state-400"
        type="text"
        placeholder="Enter Data Here!!"
      />
      <div
        onClick={() => {
          props.handler(inputBox.current.value);
          inputBox.current.value = "";
        }}
        className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center"
      >
        <FaPlus />
      </div>
    </div>
  );
}

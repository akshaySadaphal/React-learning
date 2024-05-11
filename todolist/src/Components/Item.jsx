import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Item(props) {
    console.log(props)
  const [done, setDone] = useState(false);
  return (
    <div
      onClick={() => setDone(!done)}
      className="cursore-pointer item-center select-none w-full border-b p-3 flex justify-between"
    >
      <div>
        <span className="pr-2 text-[14px] text-slate-400">{props.time}</span>
        <span className={`${done === true ? "line-through text-red-400" : ""} text-[20px]`}>
          {props.item}
        </span>
      </div>
      <div onClick={()=> props.removeHandler(props.id)}>
        <FaRegTrashAlt className="text-[#e74c3c]" />
      </div>
    </div>
  );
}

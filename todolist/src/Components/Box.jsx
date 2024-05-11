import React from "react";
import Item from "./Item";

export default function Box(props) {
  const Items = props.data.map((singleData,index) => {
    return <Item removeHandler={props.removeHandler} key={index} id={index} item={singleData.item} time={singleData.time} />;
  });
  return (
    <div className="p-3">
      {Items}
    </div>
  );
}

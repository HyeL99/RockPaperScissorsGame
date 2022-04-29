import React from "react";

const Box = (props) => {
  return (
    <div className={`box ${props.result}`}>
        <h1>{props.title}</h1>
        <div>
          <img className="item-img" src={props.item && props.item.img} alt="profile"/>
        </div>
        <h3>{props.result}</h3>
      </div>
  )
};

export default Box;
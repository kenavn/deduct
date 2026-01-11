import React from "react";
import Symbol from "./Symbol";

const Symbols = props =>{
  return (
    <div className="symbol-row">
      <div className="symbol-container">
        <Symbol type={props.images[0]} />
      </div>
      <div className="symbol-container">
        <Symbol type={props.images[1]} />
      </div>
      <div className="symbol-container">
        <Symbol type={props.images[2]} />
      </div>
      <div className="symbol-container">
        <Symbol type={props.images[3]} />
      </div>
    </div>
  );
}

export default Symbols;

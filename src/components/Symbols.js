import React from "react";
import Symbol from "./Symbol";

const Symbols = props =>{
  return (
    <div
      className="container-fluid alert alert-secondary"
      style={{ width: "300px", height: "auto"}}
    >
      <div className="row" style={{padding: "1%"}}>
        <div className="col">
          <Symbol type={props.images[0]} />
        </div>
        <div className="col">
          <Symbol type={props.images[1]} />
        </div>
        <div className="col">
          <Symbol type={props.images[2]} />
        </div>
        <div className="col">
          <Symbol type={props.images[3]} />
        </div>
      </div>
    </div>
  );
}

export default Symbols;

import React from "react";

const Steps = props => {
return (
    <div className={"container alert alert-secondary btn-outline-secondary"} style={{width: 200, cursor: "pointer"}} onClick={props.onClick}>
        <div className={"row"}>
            <div className={"col text-center"}>{props.data[0] + 1 }</div>
            <div className={"col text-center"}>{props.data[1] + 1 }</div>
            <div className={"col text-center"}>{props.data[2] + 1 }</div>
            <div className={"col text-center"}>{props.data[3] + 1 }</div>
        </div>
    </div>
);
}

export default Steps;
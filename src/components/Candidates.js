import React from "react";
import Steps from "./Steps"

const Candidates = props => {
    return (
        <>
            <p className={"centering"} style={{padding:10, paddingTop: 20}}>Choose an alternative:</p>
            {props.candidates.map(can => <Steps data={can} onClick={() => props.onAnswer(can)}/>)}
            <div className="centering"><button className="btn btn-outline-danger" onClick={props.onSkip}>Skip</button></div>
        </>
    );
};

export default Candidates;
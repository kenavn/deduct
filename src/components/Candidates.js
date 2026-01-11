import React from "react";
import Steps from "./Steps"

const Candidates = props => {
    return (
        <>
            {props.candidates.map((can, idx) => <Steps data={can} onClick={() => props.onAnswer(can)} key={idx}/>)}
            <div className="centering" style={{marginTop: '1.5rem'}}>
                <button className="btn btn-skip" onClick={props.onSkip}>Skip</button>
            </div>
        </>
    );
};

export default Candidates;
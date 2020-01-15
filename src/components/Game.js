import React, {useState, useEffect} from "react";
import Symbols from "./Symbols";
import Steps from "./Steps";
import Placeholder from "./Placeholder";
import Candidates from "./Candidates";
import shuffle from "../utils/shuffle";
import validate from "../utils/validate";
//import validate from "../utils/validate";

const Game = props => {
  const [target, setTarget] = useState([0,1,2,3]);
  const [steps, setSteps] = useState([[0,0,0,0]]);
  const [candidates, setCandidates] = useState([[0,0,0,0]]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
//  const [level, setLevel] = useState(0);
//  const [timerStart, setTimerStart] = useState(0);

useEffect(() =>{ advance() }, []);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

useEffect(() => {
  setCandidates(shuffle([target, shuffle([0,1,2,3]), shuffle([0,1,2,3])]))
}, [target])

useEffect(() => {
  setSteps([]);
}, [candidates]);

  function onSkip() {
    setScore(score-5);
    advance();
  };

  function onAnswer(answer) {
    console.log("svar");
    if(validate(answer, steps, target))
    {
      setScore(score + 10);
      advance();
    }
    else
    {
      setScore(score - 5);
      advance();
    }
    
  };

  function advance(){
    setTarget(shuffle([0,1,2,3]))
  };

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col"}>
          <Symbols images={ [0,1,2,3] } />
            {steps.map(stp => <Steps data={stp} key={stp}/>)}
          <Placeholder/>
          <Symbols images={ target } />
        </div>
        <div className={"col"}>
          <Candidates candidates={candidates} onSkip={onSkip} onAnswer={onAnswer}/>
          <p className={"centering"} style={{paddingTop:40}}>Time remaining: {timeLeft}s</p>
          <p className={"centering"} style={{}}>Score: {score}</p>
        </div>
      </div>
    </div>
  );
}

export default Game;

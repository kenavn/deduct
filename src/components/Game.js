import React, {useState, useEffect} from "react";
import Symbols from "./Symbols";
import Steps from "./Steps";
import Placeholder from "./Placeholder";
import Candidates from "./Candidates";
import shuffle from "../utils/shuffle";
import validate from "../utils/validate";
//import validate from "../utils/validate";

const Game = ({ onGameEnd }) => {
  const [target, setTarget] = useState([0,1,2,3]);
  const [steps, setSteps] = useState([[0,0,0,0]]);
  const [candidates, setCandidates] = useState([[0,0,0,0]]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [skipped, setSkipped] = useState(0);

useEffect(() =>{ advance() }, []);

  useEffect(() => {
    if (!timeLeft) {
      // Game ended - send stats to parent
      if (onGameEnd) {
        onGameEnd({
          score,
          correct,
          wrong,
          skipped,
          totalQuestions: correct + wrong + skipped,
          timeSpent: 300
        });
      }
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, score, correct, wrong, skipped, onGameEnd]);

useEffect(() => {
  setCandidates(shuffle([target, shuffle([0,1,2,3]), shuffle([0,1,2,3])]))
}, [target])

useEffect(() => {
  setSteps([]);
}, [candidates]);

  function onSkip() {
    setScore(score-5);
    setSkipped(skipped + 1);
    advance();
  };

  function onAnswer(answer) {
    if(validate(answer, steps, target))
    {
      setScore(score + 10);
      setCorrect(correct + 1);
      advance();
    }
    else
    {
      setScore(score - 5);
      setWrong(wrong + 1);
      advance();
    }

  };

  function advance(){
    setTarget(shuffle([0,1,2,3]))
  };

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-lg-6"}>
          <div className="game-card">
            <h2 className="section-header">Puzzle</h2>
            <Symbols images={ [0,1,2,3] } />
            {steps.map(stp => <Steps data={stp} key={stp}/>)}
            <Placeholder/>
            <Symbols images={ target } />
          </div>
        </div>
        <div className={"col-lg-6"}>
          <div className="game-card">
            <h2 className="section-header">Your Move</h2>
            <Candidates candidates={candidates} onSkip={onSkip} onAnswer={onAnswer}/>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-label">Time Remaining</span>
              <span className="stat-value">{timeLeft}s</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Score</span>
              <span className="stat-value score">{score}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;

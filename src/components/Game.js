import React, {useState} from "react";
import Symbols from "./Symbols";
import Steps from "./Steps";
import Placeholder from "./Placeholder";
import "../styles/styles.css"


const Game = props => {
  const [target, setTarget] = useState([0,0,0,0]);
  const [steps, setSteps] = useState([[]]);
  return (
    <>
      <div class="jumbotron centering">
        <h1>Indra Navia</h1>
        <p>Kenneths really challenging deductive-logic test</p>
      </div>
      <Symbols images={ [0,1,2,3] } />
      <Steps data={[0,1,2,3]}/>
      <Steps data={[0,1,2,3]}/>
      <Placeholder/>
      <Symbols images={ target } />
    </>
  );
}

export default Game;

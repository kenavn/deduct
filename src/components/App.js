import React from "react";
import Game from "./Game"
import "../styles/styles.css"

const App = props => {
    return (
        <>
          <div className={"jumbotron centering"}>
            <h1>Indra Deductiva</h1>
            <p>Kenneths really hard deductive logic-test for the mentally challenged</p>
          </div>
        <Game/>
        </>
      );
}

export default App;
import React, { useState } from "react";
import Game from "./Game"
import StartScreen from "./StartScreen"
import EndScreen from "./EndScreen"
import "../styles/styles.css"

const App = props => {
    const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'ended'
    const [gameStats, setGameStats] = useState(null);

    const handleStart = () => {
      setGameState('playing');
    };

    const handleGameEnd = (stats) => {
      setGameStats(stats);
      setGameState('ended');
    };

    const handleRestart = () => {
      setGameStats(null);
      setGameState('start');
    };

    return (
        <>
          <div className={"jumbotron centering"}>
            <h1>Deductiva</h1>
            <p>Kenneth's deductive logic test for pattern recognition masters</p>
          </div>
          {gameState === 'start' && (
            <StartScreen onStart={handleStart} />
          )}
          {gameState === 'playing' && (
            <Game onGameEnd={handleGameEnd} />
          )}
          {gameState === 'ended' && gameStats && (
            <EndScreen stats={gameStats} onRestart={handleRestart} />
          )}
        </>
      );
}

export default App;
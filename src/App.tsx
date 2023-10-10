import {useEffect} from "react";

import {Square} from "./components";
import {useGameContext} from "./context";

export const App = () => {
  const {board, checkWinner, resetGame} = useGameContext();

  useEffect(() => {
    checkWinner();
  }, [board, checkWinner]);

  return (
    <main>
      {board.map((_, index) => (
        <Square key={index} boardPosition={index} />
      ))}

      <button onClick={resetGame}>Restart game</button>
    </main>
  );
};

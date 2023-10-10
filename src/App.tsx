import {useEffect} from "react";

import {Square} from "./components";
import {useGameContext} from "./context";

export const App = () => {
  const {board, checkWinner} = useGameContext();

  useEffect(() => {
    checkWinner();
  }, [board, checkWinner]);

  return (
    <main>
      {board.map((_, index) => (
        <Square key={index} boardPosition={index} />
      ))}
    </main>
  );
};

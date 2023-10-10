import React, {useState} from "react";

import {TURNS} from "../../types";

import {GameContext} from "./";

interface Props {
  children: React.ReactNode;
}

export const GameProvider = ({children}: Props) => {
  const [board, setBoard] = useState(Array<TURNS | null>(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const setNewTurn = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    setTurn(newTurn);
  };

  const updateBoard = (boardPosition: number, newValue: TURNS) => {
    const newBoard = [...board];

    newBoard[boardPosition] = newValue;
    setBoard(newBoard);
  };

  return (
    <GameContext.Provider value={{board, turn, setNewTurn, updateBoard}}>
      {children}
    </GameContext.Provider>
  );
};

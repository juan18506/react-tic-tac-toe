import React, {useState} from "react";

import {TURNS, WINNERS} from "../../types";

import {GameContext} from "./";

interface Props {
  children: React.ReactNode;
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const GameProvider = ({children}: Props) => {
  const [board, setBoard] = useState(Array<TURNS | null>(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState<WINNERS>(WINNERS.InGame);

  const setNewTurn = (): void => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    setTurn(newTurn);
  };

  const updateBoard = (boardPosition: number, newValue: TURNS): void => {
    const newBoard = [...board];

    newBoard[boardPosition] = newValue;
    setBoard(newBoard);
  };

  const checkWinner = (): void => {
    WINNER_COMBOS.forEach((combo) => {
      if (
        board[combo[0]] !== null &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]]
      ) {
        const newWinner = WINNERS[board[combo[0]]!];

        setWinner(newWinner);
      } else if (board.every((square) => square !== null)) {
        setWinner(WINNERS.Tie);
      }
    });
  };

  const resetGame = (): void => {
    setBoard(Array<TURNS | null>(9).fill(null));
    setTurn(TURNS.X);
    setWinner(WINNERS.InGame);
  };

  return (
    <GameContext.Provider
      value={{board, turn, winner, setNewTurn, updateBoard, checkWinner, resetGame}}
    >
      {children}
    </GameContext.Provider>
  );
};

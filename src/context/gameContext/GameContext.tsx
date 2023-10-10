import {createContext} from "react";

import {TURNS, WINNERS} from "../../types";

type GameContextType = {
  board: Array<TURNS | null>;
  turn: TURNS;
  winner: WINNERS;
  setNewTurn: () => void;
  updateBoard: (boardPosition: number, newValue: TURNS) => void;
  checkWinner: () => void;
};

export const GameContext = createContext<GameContextType | null>(null);

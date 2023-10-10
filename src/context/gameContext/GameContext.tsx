import {createContext} from "react";

import {TURNS} from "../../types";

type GameContextType = {
  board: Array<TURNS | null>;
  turn: TURNS;
  setNewTurn: () => void;
  updateBoard: (boardPosition: number, newValue: TURNS) => void;
};

export const GameContext = createContext<GameContextType | null>(null);

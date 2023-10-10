import {useContext} from "react";

import {GameContext} from "./";

export const useGameContext = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error("useGameContext must be used inside the GameProvider");
  }

  return gameContext;
};

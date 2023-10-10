import {useGameContext} from "../context";
import {WINNERS} from "../types";

interface Props {
  boardPosition: number;
}

export const Square = ({boardPosition}: Props) => {
  const {board, turn, winner, setNewTurn, updateBoard} = useGameContext();

  const handleClick = () => {
    if (winner !== WINNERS.InGame || board[boardPosition] !== null) return;

    updateBoard(boardPosition, turn);
    setNewTurn();
  };

  return (
    <div className="square" onClick={handleClick}>
      {board[boardPosition]}
    </div>
  );
};

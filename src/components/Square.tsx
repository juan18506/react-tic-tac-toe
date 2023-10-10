import {useGameContext} from "../context";

interface Props {
  boardPosition: number;
}

export const Square = ({boardPosition}: Props) => {
  const {board, turn, setNewTurn, updateBoard} = useGameContext();

  const handleClick = () => {
    if (board[boardPosition] !== null) return;

    updateBoard(boardPosition, turn);
    setNewTurn();
  };

  return (
    <div className="square" onClick={handleClick}>
      {board[boardPosition]}
    </div>
  );
};

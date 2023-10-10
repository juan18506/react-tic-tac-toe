import {Square} from "./components";
import {useGameContext} from "./context";

export const App = () => {
  const {board} = useGameContext();

  return (
    <main>
      {board.map((_, index) => (
        <Square key={index} boardPosition={index} />
      ))}
    </main>
  );
};

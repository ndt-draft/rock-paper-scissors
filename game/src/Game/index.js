import Menu from "./Menu/Menu";
import Selections from "./Selections/Selections";
import { useGame } from "../GameProvider";

const Game = () => {
  // step 1: menu
  // step 2: show user picked item
  // step 3: show pc picked item
  // step 4: show result
  const { screen } = useGame();

  switch (screen) {
    case "menu":
      return <Menu />;
    case "user-picked":
      return <Selections />;
    case "pc-picked":
      return <Selections pcPicked />;
    case "result":
      return <Selections result />;
    default:
      return <Menu />;
  }
};

export default Game;

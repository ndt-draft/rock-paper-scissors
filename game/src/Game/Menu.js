import rockIcon from "../images/icon-rock.svg";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import { useGame } from "../GameProvider";

const selections = [
  { value: "rock", icon: rockIcon },
  { value: "paper", icon: paperIcon },
  { value: "scissors", icon: scissorsIcon },
];

const Menu = () => {
  const { handleUserSelect, userSelection, pcSelection, status, point } =
    useGame();

  return (
    <div>
      {selections.map((selection) => (
        <button onClick={handleUserSelect(selection.value)}>
          <img src={selection.icon} alt={selection.value} />
        </button>
      ))}
      {userSelection}
      {pcSelection}
      {status}
      {point}
    </div>
  );
};

export default Menu;

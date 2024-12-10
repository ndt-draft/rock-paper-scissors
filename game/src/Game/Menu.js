import { useGame } from "../GameProvider";
import { selections } from "./constants";

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

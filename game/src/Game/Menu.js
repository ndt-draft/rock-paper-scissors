import { useGame } from "../GameProvider";
import { selections } from "./constants";
import { StyledMenu } from "./Menu.style";
import Button from "./Button";

const Menu = () => {
  const { handleUserSelect, userSelection, pcSelection, status, point } =
    useGame();

  return (
    <StyledMenu>
      {selections.map((selection) => (
        <Button {...selection} onSelect={handleUserSelect(selection.value)} />
      ))}
      {userSelection}
      {pcSelection}
      {status}
      {point}
    </StyledMenu>
  );
};

export default Menu;

import { useGame } from "../../GameProvider";
import { selections } from "../constants";
import { StyledMenu } from "./Menu.style";
import Button from "../Button/Button";

const Menu = () => {
  const { handleUserSelect } = useGame();

  return (
    <StyledMenu>
      {selections.map((selection) => (
        <Button
          key={selection.value}
          {...selection}
          onSelect={handleUserSelect(selection.value)}
        />
      ))}
    </StyledMenu>
  );
};

export default Menu;

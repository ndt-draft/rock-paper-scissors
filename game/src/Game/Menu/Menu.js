import { useGame } from "../../GameProvider";
import { selections } from "../constants";
import { StyledMenu } from "./Menu.style";
import Selection from "../Selection/Selection";

const Menu = () => {
  const { handleUserSelect } = useGame();

  return (
    <StyledMenu>
      {selections.map((selection) => (
        <Selection
          key={selection.value}
          {...selection}
          onSelect={handleUserSelect(selection.value)}
          menu
        />
      ))}
    </StyledMenu>
  );
};

export default Menu;

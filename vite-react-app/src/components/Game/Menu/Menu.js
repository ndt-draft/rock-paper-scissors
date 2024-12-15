import { useGame } from "@components/GameProvider";
import { selections } from "@/constants/selections";
import { StyledMenu } from "./Menu.style";
import Selection from "@components/Game/Selection/Selection";

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

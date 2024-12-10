import { useEffect } from "react";
import lodash from "lodash";
import { useGame } from "../../GameProvider";
import { StyledUserPicked } from "./UserPicked.style";
import Button from "../Button/Button";
import { selections } from "../constants";

const UserPicked = () => {
  const { userSelection, changeScreen } = useGame();

  useEffect(() => {
    setTimeout(() => {
      changeScreen("pc-picked");
    }, 1000);
  }, []);

  const userSelectionIcons = lodash.find(selections, { value: userSelection });

  return (
    <StyledUserPicked>
      <div className="choice">
        <div className="heading">YOU PICKED</div>
        <Button
          type="preview"
          value={userSelection}
          icon={userSelectionIcons?.icon}
        ></Button>
      </div>
      <div className="choice">
        <div className="heading">THE HOUSE PICKED</div>
        <Button type="preview" />
      </div>
    </StyledUserPicked>
  );
};

export default UserPicked;

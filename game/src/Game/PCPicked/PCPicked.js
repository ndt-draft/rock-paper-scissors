import { useEffect } from "react";
import lodash from "lodash";
import { useGame } from "../../GameProvider";
import { StyledPCPicked } from "./PCPicked.style";
import Button from "../Button/Button";
import { selections } from "../constants";

const PCPicked = () => {
  const { userSelection, pcSelection, changeScreen } = useGame();

  useEffect(() => {
    setTimeout(() => {
      changeScreen("result");
    }, 1000);
  }, [changeScreen]);

  const userSelectionIcons = lodash.find(selections, { value: userSelection });
  const pcSelectionIcons = lodash.find(selections, { value: pcSelection });

  return (
    <StyledPCPicked>
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
        <Button
          type="preview"
          value={pcSelection}
          icon={pcSelectionIcons?.icon}
        />
      </div>
    </StyledPCPicked>
  );
};

export default PCPicked;

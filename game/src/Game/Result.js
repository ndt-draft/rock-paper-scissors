import { useGame } from "../GameProvider";
import { StyledResult } from "./Result.style";
import Button from "./Button";
import lodash from "lodash";
import { selections } from "./constants";

const Result = () => {
  const { userSelection, pcSelection, status, changeScreen } = useGame();

  const userSelectionIcons = lodash.find(selections, { value: userSelection });
  const pcSelectionIcons = lodash.find(selections, { value: pcSelection });

  return (
    <StyledResult>
      <div className="choice">
        <div className="heading">YOU PICKED</div>
        <Button
          type="preview"
          value={userSelection}
          icon={userSelectionIcons?.icon}
        ></Button>
      </div>
      <div className="status">
        <div className="game-status">YOU {lodash.toUpper(status)}</div>
        <button className="play-again" onClick={() => changeScreen("menu")}>
          PLAY AGAIN
        </button>
      </div>
      <div className="choice">
        <div className="heading">THE HOUSE PICKED</div>
        <Button
          type="preview"
          value={pcSelection}
          icon={pcSelectionIcons?.icon}
        />
      </div>
    </StyledResult>
  );
};

export default Result;

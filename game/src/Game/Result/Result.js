import { useGame } from "../../GameProvider";
import { StyledResult } from "./Result.style";
import Button from "../Button/Button";
import lodash from "lodash";
import { selections } from "../constants";
import { useEffect } from "react";

const Result = () => {
  const { userSelection, pcSelection, status, playAgain, handleResult } =
    useGame();

  const userSelectionIcons = lodash.find(selections, { value: userSelection });
  const pcSelectionIcons = lodash.find(selections, { value: pcSelection });

  useEffect(() => {
    handleResult();
    // eslint-disable-next-line
  }, []);

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
        <button className="play-again" onClick={playAgain}>
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

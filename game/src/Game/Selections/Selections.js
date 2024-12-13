import { useEffect } from "react";
import lodash from "lodash";
import { useGame } from "../../GameProvider";
import { StyledSelections } from "./Selections.style";
import Selection from "../Selection/Selection";
import { selections } from "../constants";

const Selections = ({ pcPicked, result }) => {
  const {
    userSelection,
    pcSelection,
    changeScreen,
    handlePcSelect,
    status,
    playAgain,
    handleResult,
  } = useGame();

  useEffect(() => {
    if (result) {
      return;
    }

    if (!pcPicked) {
      setTimeout(() => {
        changeScreen("pc-picked");
      }, 1000);
    } else if (!pcSelection) {
      setTimeout(() => {
        handlePcSelect();
      }, 1000);
    }
  }, [pcPicked, pcSelection, changeScreen, handlePcSelect, result]);

  useEffect(() => {
    if (result) {
      return;
    }

    if (pcPicked && pcSelection) {
      setTimeout(() => {
        changeScreen("result");
      }, 1000);
    }
  }, [pcPicked, pcSelection, result, changeScreen]);

  useEffect(() => {
    if (result) {
      handleResult();
    }
  }, [result]);

  const userSelectionIcons = lodash.find(selections, { value: userSelection });
  const pcSelectionIcons = lodash.find(selections, { value: pcSelection });

  return (
    <StyledSelections>
      <div className="choice">
        <div className="heading">YOU PICKED</div>
        <Selection
          value={userSelection}
          icon={userSelectionIcons?.icon}
          size={300}
          iconSize={180}
        ></Selection>
      </div>
      {result && (
        <div className="status">
          <div className="game-status">YOU {lodash.toUpper(status)}</div>
          <button className="play-again" onClick={playAgain}>
            PLAY AGAIN
          </button>
        </div>
      )}
      <div className="choice">
        <div className="heading">THE HOUSE PICKED</div>
        <Selection
          value={pcSelection}
          icon={pcSelectionIcons?.icon}
          size={300}
          iconSize={180}
        />
      </div>
    </StyledSelections>
  );
};

export default Selections;

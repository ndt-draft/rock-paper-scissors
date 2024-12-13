import { useEffect } from "react";
import lodash from "lodash";
import { useGame } from "../../GameProvider";
import { StyledSelections } from "./Selections.style";
import Selection from "../Selection/Selection";
import { selections } from "../constants";

const Selections = ({ pcPicked }) => {
  const { userSelection, pcSelection, changeScreen, handlePcSelect } =
    useGame();

  useEffect(() => {
    setTimeout(() => {
      if (!pcPicked) {
        changeScreen("pc-picked");
      } else if (!pcSelection) {
        handlePcSelect();
      }
    }, 1000);
  }, [pcPicked, pcSelection, changeScreen, handlePcSelect]);

  useEffect(() => {
    if (pcPicked && pcSelection) {
      setTimeout(() => {
        changeScreen("result");
      }, 1000);
    }
  }, [pcPicked, pcSelection, changeScreen]);

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
          iconSize={200}
        ></Selection>
      </div>
      <div className="choice">
        <div className="heading">THE HOUSE PICKED</div>
        <Selection
          value={pcSelection}
          icon={pcSelectionIcons?.icon}
          size={300}
          iconSize={200}
        />
      </div>
    </StyledSelections>
  );
};

export default Selections;

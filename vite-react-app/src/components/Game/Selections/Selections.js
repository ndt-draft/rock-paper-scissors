import { useEffect } from "react";
import lodash from "lodash";
import { useGame } from "@components/GameProvider";
import Status from "./Status";
import { StyledSelections } from "./Selections.style";
import Selection from "@components/Game/Selection/Selection";
import { selections } from "@/constants/selections";

const Selections = ({ pcPicked, result }) => {
  const {
    userSelection,
    pcSelection,
    changeScreen,
    handlePcSelect,
    handleResult,
  } = useGame();

  useEffect(() => {
    if (result) {
      return;
    }

    if (!pcPicked) {
      setTimeout(() => {
        changeScreen("pc-picked");
      }, 400);
    } else if (!pcSelection) {
      setTimeout(() => {
        handlePcSelect();
      }, 400);
    }
  }, [pcPicked, pcSelection, changeScreen, handlePcSelect, result]);

  useEffect(() => {
    if (result) {
      return;
    }

    if (pcPicked && pcSelection) {
      setTimeout(() => {
        changeScreen("result");
      }, 400);
    }
  }, [pcPicked, pcSelection, result, changeScreen]);

  useEffect(() => {
    if (result) {
      handleResult();
    }
    // eslint-disable-next-line
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
          mobileSize={140}
          mobileIconSize={60}
        ></Selection>
      </div>
      <Status />
      <div className="choice">
        <div className="heading">THE HOUSE PICKED</div>
        <Selection
          value={pcSelection}
          icon={pcSelectionIcons?.icon}
          size={300}
          iconSize={180}
          mobileSize={140}
          mobileIconSize={60}
        />
      </div>
    </StyledSelections>
  );
};

export default Selections;

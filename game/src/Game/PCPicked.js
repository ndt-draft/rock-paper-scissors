import { useEffect } from "react";
import { useGame } from "../GameProvider";

const PCPicked = () => {
  const { userSelection, pcSelection, changeScreen } = useGame();

  useEffect(() => {
    setTimeout(() => {
      changeScreen("result");
    }, 1000);
  }, []);

  return (
    <div>
      <div>user choose: {userSelection}</div>
      <div>pc choose: {pcSelection}</div>
    </div>
  );
};

export default PCPicked;

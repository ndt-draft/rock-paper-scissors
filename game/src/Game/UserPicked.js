import { useEffect } from "react";
import { useGame } from "../GameProvider";

const UserPicked = () => {
  const { userSelection, pcSelection, changeScreen } = useGame();

  useEffect(() => {
    setTimeout(() => {
      changeScreen("pc-picked");
    }, 1000);
  }, []);

  return (
    <div>
      <div>user choose: {userSelection}</div>
      <div>pc choose: {}</div>
    </div>
  );
};

export default UserPicked;

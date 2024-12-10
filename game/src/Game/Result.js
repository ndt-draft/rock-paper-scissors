import { useGame } from "../GameProvider";

const Result = () => {
  const { userSelection, pcSelection, status, changeScreen } = useGame();

  return (
    <div>
      <div>{userSelection}</div>
      <div>
        {status}
        <button onClick={() => changeScreen("menu")}>Play again</button>
      </div>
      <div>{pcSelection}</div>
    </div>
  );
};

export default Result;

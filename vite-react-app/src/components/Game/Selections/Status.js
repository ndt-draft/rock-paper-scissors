import lodash from "lodash";
import { useGame } from "@components/GameProvider";

const Status = () => {
  const { screen, status, playAgain } = useGame();
  return (
    <div className="status">
      {screen === "result" && (
        <>
          <div className="game-status">YOU {lodash.toUpper(status)}</div>
          <button className="play-again" onClick={playAgain}>
            PLAY AGAIN
          </button>
        </>
      )}
    </div>
  );
};

export default Status;

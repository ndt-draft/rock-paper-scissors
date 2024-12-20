import { useGame } from "../GameProvider";

const TestChangeScreen = () => {
  const { changeScreen } = useGame();
  return (
    <div>
      <button onClick={() => changeScreen("menu")}>menu</button>
      <button onClick={() => changeScreen("user-picked")}>user picked</button>
      <button onClick={() => changeScreen("pc-picked")}>pc picked</button>
      <button onClick={() => changeScreen("result")}>result</button>
    </div>
  );
};

export default TestChangeScreen;

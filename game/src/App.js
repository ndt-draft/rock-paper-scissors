import { StyledApp } from "./App.style";

import GameProvider from "./GameProvider";
import Header from "./Header";
import Game from "./Game";
import TestChangeScreen from "./TestChangeScreen";

function App() {
  return (
    <StyledApp>
      <div className="game-wrapper">
        <GameProvider>
          <Header />
          <Game />
          <TestChangeScreen />
        </GameProvider>
      </div>
    </StyledApp>
  );
}

export default App;

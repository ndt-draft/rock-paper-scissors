import { StyledApp } from "./App.style";

import GameProvider from "./GameProvider";
import Header from "./Header";
import Game from "./Game";
import Rules from "./Rules";

function App() {
  return (
    <StyledApp>
      <div className="game-wrapper">
        <GameProvider>
          <Header />
          <Game />
        </GameProvider>
      </div>
      <Rules />
    </StyledApp>
  );
}

export default App;

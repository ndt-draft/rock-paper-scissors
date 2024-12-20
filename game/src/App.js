import { StyledApp } from "./App.style";

import GameProvider from "./GameProvider";
import Header from "./Header";
import Game from "./Game";

function App() {
  return (
    <StyledApp>
      <div className="game-wrapper">
        <GameProvider>
          <Header />
          <Game />
        </GameProvider>
      </div>
    </StyledApp>
  );
}

export default App;

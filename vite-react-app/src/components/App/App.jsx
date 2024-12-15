import GameProvider from "@components/GameProvider";
import Header from "@components/Header";
import Game from "@components/Game";
import Rules from "@components/Rules";
import ThemeProvider from "@components/ThemeProvider";
import { StyledApp } from "./App.style";

function App() {
  return (
    <ThemeProvider>
      <StyledApp>
        <GameProvider>
          <Header />
          <Game />
        </GameProvider>
        <Rules />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

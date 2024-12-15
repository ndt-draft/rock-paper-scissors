import GameProvider from "@components/GameProvider";
import Header from "@components/Header";
import Game from "@components/Game";
import Rules from "@components/Rules";
import { ThemeProvider } from "styled-components";
import themes from "@/constants/themes";
import { StyledApp } from "./App.style";

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
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

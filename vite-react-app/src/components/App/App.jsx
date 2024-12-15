import GameProvider from "@components/GameProvider";
import Header from "@components/Header";
import Game from "@components/Game";
import Rules from "@components/Rules";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Header />
        <Game />
      </GameProvider>
      <Rules />
    </div>
  );
}

export default App;

import GameProvider from "./GameProvider";
import Header from "./Header";
import Game from "./Game";
import Rules from "./Rules";

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

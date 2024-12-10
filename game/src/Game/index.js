import { useState } from "react";
import Menu from "./Menu";
import UserPicked from "./UserPicked";
import PCPicked from "./PCPicked";
import Result from "./Result";
import { useGame } from "../GameProvider";

const Game = () => {
  // step 1: menu
  // step 2: show user picked item
  // step 3: show pc picked item
  // step 4: show result
  const { screen } = useGame();

  switch (screen) {
    case "menu":
      return <Menu />;
    case "user-picked":
      return <UserPicked />;
    case "pc-picked":
      return <PCPicked />;
    case "result":
      return <Result />;
  }

  return <Menu />;
};

export default Game;

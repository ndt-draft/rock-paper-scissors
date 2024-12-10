import React, { useContext, useReducer } from "react";
import lodash from "lodash";

const initialState = {
  screen: "menu",
  status: null,
  userSelection: null,
  pcSelection: null,
  point: lodash.toNumber(localStorage.getItem("gamePoint")),
};

const GameContext = React.createContext(initialState);

export const useGame = () => useContext(GameContext);

function gameReducer(state, action) {
  switch (action.type) {
    case "change_screen":
      return {
        ...state,
        screen: action.payload,
      };
    case "update_game": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

const winConditions = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  spock: ["scissors", "rock"],
  lizard: ["spock", "paper"],
};

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const changeScreen = (newScreen) => {
    dispatch({
      type: "change_screen",
      payload: newScreen,
    });
  };

  const handleUserSelect = (userSelection) => () => {
    const pcSelection = lodash.sample(["rock", "paper", "scissors"]);
    const isUserWon = lodash.includes(
      winConditions[userSelection],
      pcSelection
    );
    const gameStatus =
      userSelection === pcSelection ? "draw" : isUserWon ? "win" : "lose";

    const newGamePoint = gameStatus === "win" ? state.point + 1 : state.point;
    localStorage.setItem("gamePoint", newGamePoint);

    dispatch({
      type: "update_game",
      payload: {
        screen: "user-picked",
        status: gameStatus,
        userSelection,
        pcSelection,
        point: newGamePoint,
      },
    });
  };

  const actions = {
    changeScreen,
    handleUserSelect,
  };

  return (
    <GameContext.Provider value={{ ...state, dispatch, ...actions }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

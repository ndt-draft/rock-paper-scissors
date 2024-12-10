import React, { useContext, useReducer } from "react";
import lodash from "lodash";

const initialState = {
  screen: "menu",
  status: null,
  userSelection: null,
  pcSelection: null,
  point: 0,
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
  }
}

const winConditions = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"],
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

    dispatch({
      type: "update_game",
      payload: {
        status: gameStatus,
        userSelection,
        pcSelection,
        point: gameStatus === "win" ? state.point + 1 : state.point,
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

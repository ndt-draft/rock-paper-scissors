import React, { useContext, useReducer } from "react";

const GameContext = React.createContext({
  screen: "menu",
});

export const useGame = () => useContext(GameContext);

function reducer(state, action) {
  switch (action.type) {
    case "change_screen":
      return {
        screen: action.payload,
      };
  }
}

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { screen: "menu" });

  const changeScreen = (newScreen) => {
    dispatch({
      type: "change_screen",
      payload: newScreen,
    });
  };

  return (
    <GameContext.Provider value={{ ...state, dispatch, changeScreen }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

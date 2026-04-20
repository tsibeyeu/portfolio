import React, { createContext, useReducer, useEffect } from "react";

export const themeContext = createContext();

// Get saved theme or default to false
const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};

function themeReducer(state, action) {
  switch (action.type) {
    case "toogle":
      const newState = { darkMode: !state.darkMode };
      // Save choice to browser memory
      localStorage.setItem("darkMode", JSON.stringify(newState.darkMode));
      return newState;
    default:
      return state;
  }
}

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};

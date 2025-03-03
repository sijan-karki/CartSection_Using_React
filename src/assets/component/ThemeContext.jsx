import React, { useReducer } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialstate = {
    theme: "light",
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };

      case "Decrement":
        return { ...state, count: state.count - 1 };

      case "toogleTheme":
        return { ...state, theme: state.theme == "light" ? "dark" : "light" };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

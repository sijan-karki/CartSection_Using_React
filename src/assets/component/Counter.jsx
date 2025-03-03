import React, { useContext, useReducer, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Stack from "@mui/material/Stack";

export default function Counters() {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div
      className={`app${state.theme}`}
      style={{ width: "600px", height: "400px", alignContent: "center" }}
    >
      <h1>Counter App</h1>
      <p style={{ paddingBottom: "20px" }}>Current Count : {state.count}</p>
      <Stack direction="row" spacing={2} sx={{ pl: "17%" }}>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: "toogleTheme" })}>
          Toogle Theme
        </button>
      </Stack>
    </div>
  );
}

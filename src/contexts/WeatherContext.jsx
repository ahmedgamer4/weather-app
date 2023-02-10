import { createContext, useReducer } from "react";
import React from "react";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case "C":
      return true;
    case "F":
      return false;
    default:
      break;
  }
};

export const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  const [degree, dispatch] = useReducer(weatherReducer, true);

  return (
    <WeatherContext.Provider value={[degree, dispatch]}>
      {props.children}
    </WeatherContext.Provider>
  );
};


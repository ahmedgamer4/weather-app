import React from "react";
import { createContext, useReducer } from "react";
import { getWeatherByName } from "../utils/services";

const cityReducer = (state, action) => {
  switch (action.type) {
    case "SET_CITY":
      return action.city;
    default:
      break;
  }
};

const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
  const data = () =>
    getWeatherByName("London").then(res => res)
  const [city, dispatch] = useReducer(cityReducer, '', data) 

  return (
    <CityContext.Provider value={[city, dispatch]}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;

import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import CityContext from "../contexts/CityContext";
import { getWeatherByName } from "../utils/services";

const MobileNav = ({ state, setState }) => {
  const [cityInput, setCityInput] = useState("");
  const [fCity, setFCity] = useState("");
  const [city, dispatch] = useContext(CityContext);

  const onClick = () => {
    setFCity(cityInput);
    setCityInput('')
  };

  useEffect(() => {
    getWeatherByName(fCity).then((res) =>
      dispatch({ type: "SET_CITY", city: res })
    );
  }, [fCity]);

  return (
    <nav
      className={`absolute left-0 right-0 bg-slate-800 w-full flex flex-col px-8 gap-4 h-full text-gray-200 ${
        state ? "" : "hidden"
      }`}
    >
      <button
        className="place-self-end"
        type="button"
        onClick={() => setState(false)}
      >
        <i className="fa-solid fa-x"></i>
      </button>
      <form className="flex gap-2 flex-wrap lg:justify-between">
        <input
          type="text"
          className="w-auto bg-transparent border border-slate-400 p-3 flex-grow pl-6 text-xs"
          placeholder="Search for loaction"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value)
          }}
        />
        <button
          type="submit"
          className="text-xs bg-indigo-600 px-6 py-3 font-bold"
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          Search
        </button>
      </form>
      <div></div>
    </nav>
  );
};

export default MobileNav;

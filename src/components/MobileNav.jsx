import axios from "axios";
import React, { useState } from "react";

const baseUrl = `http://api.weatherapi.com/v1/forecast.json?key=cd4757a4780e45aa877120505230702&q=${location}&days=5&aqi=no&alerts=no`;

const MobileNav = ({ state, setState }) => {
  const [city, setCity] = useState("London");

  const getCity = (city) => axios.get(baseUrl).then((res) => { 
    setCity(res)
    console.log(res)
   });

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
        />
        <button
          type="button"
          className="text-xs bg-indigo-600 px-6 py-3 font-bold"
          onClick={setCity}
        >
          Search
        </button>
      </form>
      <div></div>
    </nav>
  );
};

export default MobileNav;

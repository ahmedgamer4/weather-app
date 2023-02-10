import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import CityContext from "../contexts/CityContext";
import { getWeatherByName } from "../utils/services";
import { WeatherContext } from "../contexts/WeatherContext";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [degree, __] = useContext(WeatherContext);
  const [mobileNavState, setMstate] = useState(false);
  const [data, _] = useContext(CityContext);

  const query = useQuery(["city", data], () => data);
  if (query.isLoading) return <div>Loading...</div>;
  const city = query.data;

  return (
    <div
      className={`flex flex-col justify-between items-center w-full py-6 bg-slate-800 gap-8 lg:w-1/3 relative`}
    >
      <MobileNav state={mobileNavState} setState={setMstate} />
      <div className="flex w-11/12 justify-between ">
        <button
          className="bg-gray-500 text-gray-100 text-sm p-2"
          onClick={() => setMstate(true)}
        >
          Search for places
        </button>
        <button className="bg-gray-500 rounded-full w-9 text-gray-100">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>
      <img
        src={city.current.condition.icon}
        className="w-44"
        alt="weather img"
      />
      <div className={`text-7xl text-white ${degree ? "" : "hidden"}`}>
        {city.current.temp_c}{" "}
        <span className="text-4xl text-gray-400">&#8451;</span>
      </div>
      <div className={`text-7xl text-white ${degree ? "hidden" : ""}`}>
        {city.current.temp_f}{" "}
        <span className="text-4xl text-gray-400">&#8457;</span>
      </div>
      <h1 className="text-2xl text-gray-400">{city.current.condition.text}</h1>
      <div>
        <div className="flex gap-3 mx-auto text-gray-400">
          <div>Today &ensp;.</div>
          <div>{city.location.localtime.slice(0, 10)}</div>
        </div>

        <div className="w-14 mx-auto text-gray-400 flex items-center gap-2">
          <i className="fa-solid fa-location-dot"></i>
          <p>{city.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

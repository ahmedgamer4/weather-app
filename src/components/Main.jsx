import React, { useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getWeatherByName } from "../utils/services";
import { WeatherContext } from "../contexts/WeatherContext";
import CityContext from "../contexts/CityContext";

const Main = () => {
  const [degree, dispatch] = useContext(WeatherContext);
  const [data, _] = useContext(CityContext);

  // const query = useQuery('city', () => data, {

  // })
  const query = useQuery({
    queryKey: ["city", data],
    queryFn: () => data,
  });
  if (query.isLoading) return <div>Loading....</div>;

  return (
    <div className="bg-slate-900 text-white flex-grow flex flex-col gap-8 px-20 py-7">
      <section className="self-end flex gap-4">
        <button
          className="w-10 h-10 bg-slate-600 rounded-full"
          onClick={() => dispatch({ type: "C" })}
        >
          &#8451;
        </button>
        <button
          className="w-10 h-10 bg-slate-600 rounded-full"
          onClick={() => dispatch({ type: "F" })}
        >
          &#8457;
        </button>
      </section>

      <section className="flex flex-wrap gap-6">
        {query.data.forecast.forecastday.map((day) => (
          <div
            key={query.data.forecast.forecastday.indexOf(day)}
            className="w-32 p-4 bg-slate-800 gap-3 flex flex-col"
          >
            <p className="text-sm text-gray-200">{day.date}</p>
            <img src={day.day.condition.icon} alt="" />
            <div className="flex gap-2 text-sm">
              <p className={`text-gray-200 ${degree ? "" : "hidden"}`}>
                {day.day.maxtemp_c}&#8451;
              </p>
              <p className={`text-gray-200 ${degree ? "" : "hidden"}`}>
                {day.day.mintemp_c}&#8451;
              </p>
              <p className={`text-gray-200 ${degree ? "hidden" : ""}`}>
                {day.day.maxtemp_f}&#8457;
              </p>
              <p className={`text-gray-200 ${degree ? "hidden" : ""}`}>
                {day.day.mintemp_f}&#8457;
              </p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h1 className="mb-8 font-semibold text-2xl text-gray-300">
          Today&apos;s Highlights
        </h1>

        <div className="grid grid-cols-1 lg:grid-rows-[2fr_1.7fr] lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center gap-4 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Wind status</h2>
            <h1 className="font-bold text-4xl">
              {query.data.current.wind_mph}{" "}
              <span className="font-thin">mph</span>
            </h1>
            <div className="text-gray-300">{query.data.current.wind_dir}</div>
          </div>

          <div className="flex flex-col items-center gap-3 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Humdity</h2>
            <h1 className="font-bold text-5xl">
              {query.data.current.humidity}{" "}
              <span className="font-thin text-2xl">&#37;</span>
            </h1>
            <div className="w-full mt-2">
              <section className="flex w-full justify-between mb-1 text-xs">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </section>
              <div className="rounded-full w-full bg-gray-500 h-2">
                <div
                  style={{
                    width: `${query.data.current.humidity}%`,
                  }}
                  className={`rounded-full h-2 bg-yellow-400`}
                ></div>
              </div>
              <p className="self-end text-xs">%</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Visibility</h2>
            <h1 className="font-bold text-5xl">
              {query.data.current.vis_miles}{" "}
              <span className="font-thin text-3xl">miles</span>
            </h1>
          </div>

          <div className="flex flex-col items-center gap-4 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Air Pressure</h2>
            <h1 className="font-bold text-5xl">
              {query.data.current.pressure_mb}{" "}
              <span className="font-thin text-3xl">mb</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

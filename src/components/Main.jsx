import React, { useContext } from "react";
import { useQuery } from "react-query";
import data from "../../data.json";
import { WeatherContext } from "../WeatherContext";

const Main = () => {
  const [degree, dispatch] = useContext(WeatherContext)

  const query = useQuery('city', () => data)
  if (query.isLoading) return
  const city = query.data

  return (
    <div className="bg-slate-900 text-white flex-grow flex flex-col gap-8 px-20 py-7">
      <section className="self-end flex gap-4">
        <button className="w-10 h-10 bg-slate-600 rounded-full" onClick={() => dispatch({ type: 'C' })}>&#8451;</button>
        <button className="w-10 h-10 bg-slate-600 rounded-full" onClick={() => dispatch({ type: 'F' })}>&#8457;</button>
      </section>

      <section className="flex flex-wrap gap-4">
        {city.forecast.forecastday.map((day) => (
          <div
            key={city.forecast.forecastday.indexOf(day)}
            className="w-32 p-4 bg-slate-800 gap-3 flex flex-col"
          >
            <p className="text-sm text-gray-200">{day.date}</p>
            <img src={day.day.condition.icon} alt="" />
            <div className="flex gap-2 text-sm">
              <p className={`text-gray-200 ${degree ? '' : 'hidden' }`}>{day.day.maxtemp_c}&#8451;</p>
              <p className={`text-gray-200 ${degree ? '' : 'hidden' }`}>{day.day.mintemp_c}&#8451;</p>
              <p className={`text-gray-200 ${degree ? 'hidden' : ''}`}>{day.day.maxtemp_f}&#8457;</p>
              <p className={`text-gray-200 ${degree ? 'hidden' : ''}`}>{day.day.mintemp_f}&#8457;</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h1 className="mb-8 font-semibold text-2xl text-gray-300">
          Today&apos;s Highlights
        </h1>

        <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-20">
          <div className="flex flex-col items-center gap-4 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Wind status</h2>
            <h1 className="font-bold text-4xl">
              {city.current.wind_mph} <span className="font-thin">mph</span>
            </h1>
            <div className="text-gray-300">{city.current.wind_dir}</div>
          </div>

          <div className="flex flex-col items-center gap-4 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Humdity</h2>
            <h1 className="font-bold text-5xl">
              {city.current.humidity}{" "}
              <span className="font-thin text-2xl">&#37;</span>
            </h1>
            <div className="rounded-full w-full bg-gray-500 h-4 mt-3">
              <div
                className={`rounded-full w-[${city.current.humidity.toString()}%] h-4 bg-yellow-400`}
              ></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Visibility</h2>
            <h1 className="font-bold text-5xl">
              {city.current.vis_miles}{" "}
              <span className="font-thin text-3xl">miles</span>
            </h1>
          </div>

          <div className="flex flex-col items-center gap-4 bg-slate-800 p-8">
            <h2 className="text-gray-300 text-sm">Air Pressure</h2>
            <h1 className="font-bold text-5xl">
              {city.current.pressure_mb}{" "}
              <span className="font-thin text-3xl">mb</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

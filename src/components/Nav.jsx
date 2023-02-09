import React, { useContext, useState } from 'react';
import data from '../../data.json'
import { WeatherContext } from '../WeatherContext';
import MobileNav from './MobileNav';

const Nav = () => {
  const [degree, dispatch] = useContext(WeatherContext)
  const [mobileNavState, setMstate] = useState(false)

  return (
    <div className={`flex flex-col justify-between items-center w-full py-6 bg-slate-800 gap-8 lg:w-1/3 relative`}>
      <MobileNav state={mobileNavState} setState={setMstate}/>
      <div className="flex w-11/12 justify-between ">
        <button className="bg-gray-500 text-gray-100 text-sm p-2" onClick={() => setMstate(true)}>Search for places</button>
        <button className="bg-gray-500 rounded-full w-9 text-gray-100">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>`
      <img src={data.current.condition.icon} className='w-44' alt="weather img" />
      <div className={`text-7xl text-white ${degree ? '' : 'hidden'}`}>{ data.current.temp_c } <span className='text-4xl text-gray-400'>&#8451;</span></div>
      <div className={`text-7xl text-white ${degree ? 'hidden' : ''}`}>{ data.current.temp_f } <span className='text-4xl text-gray-400'>&#8457;</span></div>
      <h1 className='text-2xl text-gray-400'>{data.current.condition.text}</h1>
      <div>
        <div className="flex gap-3 mx-auto text-gray-400">
          <div>Today &ensp;.</div>
          <div>{data.location.localtime.slice(0, 10)}</div>
        </div>

        <div className="w-14 mx-auto text-gray-400 flex items-center gap-2">
          <i className="fa-solid fa-location-dot"></i>
          <p>City</p>
        </div>
      </div>
    </div>
  );
};

export default Nav
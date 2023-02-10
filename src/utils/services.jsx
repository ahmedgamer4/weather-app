import axios from "axios"

export const getWeatherByName = async (city) => {
  const res = await axios
    .get(`https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=cd4757a4780e45aa877120505230702&q=${city}&days=5&aqi=no&alerts=no`)
  console.log(res.data)
  return res.data
}

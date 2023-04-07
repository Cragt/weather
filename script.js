const baseURL =
  "http://api.weatherapi.com/v1/current.json?key=f15d9ccab0cd47289e1223913230604&q=";
let citySearch = "47712";
let data1 = null;
const city = document.querySelector(".location");
const card = document.querySelector(".container");
const condition = document.querySelector(".condition");
const image = document.querySelector("img");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

async function pull(city) {
  let info = await fetch(baseURL + city, { mode: "cors" });
  const data = await info.json();
  console.log(data);
  const processedData = {
    condition: data.current.condition.text,
    icon: "https:" + data.current.condition.icon,
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    feelsLikeC: data.current.feelslike_c,
    feelsLikeF: data.current.feelslike_f,
    tempC: data.current.temp_c,
    tempF: data.current.temp_f,
    windDirection: data.current.wind_dir,
    windGustMetric: data.current.gust_kph,
    windGustImperial: data.current.gust_mph,
    windMetric: data.current.wind_kph,
    windImperial: data.current.wind_mph,
    humidity: data.current.humidity,
    isDay: data.current.is_day,
  };
  // console.log(processedData)
  data1 = processedData;
  return processedData;
}

pull(citySearch).then((processedData) => {
  city.innerText = `${processedData.name}, ${processedData.region} - ${processedData.country}`;
  condition.innerText = processedData.condition;
  image.src = processedData.icon;
  temp.innerText = `${processedData.tempF}\u00B0F, feels like ${processedData.feelsLikeF}\u00B0F`;
  wind.innerText = `Wind direction: ${processedData.windDirection} at ${processedData.windImperial}mph`;
  humidity.innerText = `Humidity: ${processedData.humidity}%`;
  console.log(processedData.name);
  console.log(data1);
});

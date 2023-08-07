let data;
const inputBox = document.getElementById("inputbox");
const country = document.getElementById("countryName");
const state = document.getElementById("stateName");
const city = document.getElementById("cityName");
const humidity = document.getElementById("humidityName");
const wind = document.getElementById("windName");
const temperature = document.getElementById("tempName");
const image = document.getElementById("logo");
const weatherimage = document.getElementById("image");

const getData = async (event) => {
  event.preventDefault();
  //   !inputBoc.value means if input box is empty
  if (!inputBox.value) {
    alert("enter_city name to proceed!!");
  }

  const city = inputBox.value;
  //   const API = "2894c86e30d56890394696cb591ac972";

  //    fetch data
  const fetchdata = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=623292d050e8448499c145524233006&q=${city} `
  );
  const orgdata = await fetchdata.json();
  data = orgdata;
  console.log(data);

  //   displaying data in html
  country.innerHTML = data.location.country;
  state.innerHTML = data.location.region;
  city.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  wind.innerText = data.current.wind_kph;
  temperature.innerText = data.current.temp_c;
  weatherimage.innerHTML = data.current.condition.text;
  image.src = data.current.condition.icon;
};

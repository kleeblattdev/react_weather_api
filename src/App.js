//library import
import {useState, useEffect} from 'react';

//CSS Import
import './App.css';

//components import
import Weather from './components/weather/Weather';
import CityButton from './components/citybutton/CityButton';

function App() {
  const [weather, setWeather] = useState({})
  let city = "Berlin"

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a41655a4ebfb545dc129c528f1b94fd&units=metric`)
    .then(response => response.json())
    .then(data => setWeather(data))
  },[city])

  console.log(weather)

  return (
    <div className="App">
      <CityButton city ={"Düsseldorf"}></CityButton>
      <CityButton city ={"Köln"}></CityButton>
      <CityButton city ={"Berlin"}></CityButton>
      <CityButton city ={"Hamburg"}></CityButton>
      <Weather weather={weather}></Weather>
    </div>
  );
}

export default App;

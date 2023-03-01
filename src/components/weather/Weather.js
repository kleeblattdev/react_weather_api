
const Weather = (props) => {

    return ( 
        <main>
            <p>{props.weather.weather[0].description} in {props.weather.name}</p>
            <p>Current: {props.weather.main.temp}°C</p>
            <p>Wind speed: {props.weather.wind.speed} mi/hr</p>
        </main>
    );
}

export default Weather;
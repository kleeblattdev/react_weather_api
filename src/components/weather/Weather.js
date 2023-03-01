
const Weather = (props) => {
    console.log(props)
    return(
        <section>
            <p>{props.weather.weather[0].description} in {props.weather.name}</p>
            <p>Current: {props.weather.main.temp}°C</p>
            <p>Wind speed: {props.weather.wind.speed} mi/hr</p>
    </section>
    )
    };

export default Weather;
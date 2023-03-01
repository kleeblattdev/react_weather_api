//library import
import {useState, useEffect} from 'react';

//component import
import Weather from "../components/weather/Weather";

const Home = () => {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState("Münster");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a41655a4ebfb545dc129c528f1b94fd&units=metric`)
        .then(response => response.json())
        .then(data => setWeather(data))
        },[city])

/*     if(!weather){
        return <p>Loading</p>;
    } */

    return ( 
        <main>
            <button onClick={()=> setCity("Düsseldorf")}>Düsseldorf</button>
            <button onClick={()=> setCity("Köln")}>Köln</button>
            <button onClick={()=> setCity("Berlin")}>Berlin</button>
            <button onClick={()=> setCity("Hamburg")}>Hamburg</button>
            {weather? <Weather weather={weather}/>: <p>Loading</p>}
        </main>
    );
}

export default Home;
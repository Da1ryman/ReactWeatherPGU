import axios from "axios";
import { useEffect, useState } from "react"
import "./WeatherCard.css"

const WeatherCard = (props) => {

    const [weather, setWeather] = useState();

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_WEATHER;

        if (!props.city) return;
        
        axios.get(`${apiKey}city-weather?cityName=${props.city}`).then(response => {
            setWeather(response.data)
            console.log(response)
        }
        ).catch(error =>
            console.error(error)
        )
    }, [props.city]) 

    if (!weather) {
        return (
            <div className="loading-container">
                <div class="terminal-loader">
                    <div class="terminal-header">
                        <div class="terminal-title">Status</div>
                            <div class="terminal-controls">
                            <div class="control close"></div>
                            <div class="control minimize"></div>
                            <div class="control maximize"></div>
                        </div>
                    </div>
                    <div class="text">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="inner">
                    <h1 className="main-text">{weather.cityName}, {weather.countryCode}</h1>
                    <p className="common-text">Coordinates: {weather.cords.lat}, {weather.cords.lon}</p>
                    <p className="common-text">Temperature: {weather.temperature}°C</p>
                    <p className="common-text">Feels like: {weather.feelsLikeTemperature}°C</p>
                    <p className="common-text">Pressure: {weather.atmosphericPressure} hPa</p>
                    <p className="common-text">Wind speed: {weather.windSpeed} м/c</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
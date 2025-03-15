import { useState } from "react";
import "./WeatherList.css";
import WeatherCard from "./WeatherCard";

const WeatherList = (props) => {
    
    const [activeCity, setActiveCity] = useState('Пятигорск');

    const changeCity = (city) => {
        setActiveCity(city)
    };

    return (
        <div>
            <ul className="list">
                {props.cities.map((city, index) => (
                    <li key={index} className='list__item'>
                        <button onClick={() => changeCity(city)} className={city === activeCity ? "btn__link btn__link_active" : "btn__link"}>{city}</button>
                    </li>
                ))}
            </ul>
            <WeatherCard city={activeCity}/>
        </div>
       

    );
};

export default WeatherList;
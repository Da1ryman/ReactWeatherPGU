import WeatherList from "../components/weather/WeatherList";
import "./App.css"

const App = () => {
    const cities = ["Пятигорск", "Москва", "Ростов"]
    return (
        <>
            <WeatherList cities={cities}/>
        </>
    )
}

export default App;
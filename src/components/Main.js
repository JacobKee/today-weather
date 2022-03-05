import React, { useState, } from "react";
import '../App.css';
import Result from './Result';
import SearchBar from './SearchBar';
import SearchHistory from "./SearchHistory";
const apiKey = "886705b4c1182eb1c69f28eb8c520e20"

function Main() {
    const [weather, setWeather] = useState([])
    const [history, setHistory] = useState([])

    // get current weather from API
    const searchWeather = (city) => {
        if (city.trim() !== '') {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
                .then(res => res.json())
                .then((result) => {
                    displayWeather(result)
                    if (result.cod === 200) {
                        const currentDate = new Date();
                        const timestamp = currentDate.getTime();
                        addHistory({
                            place: result.name + ', ' + result.sys.country,
                            datetime: timestamp
                        })
                    }
                })
        }
    }

    // display selected city's weather
    const displayWeather = (data) => {
        setWeather(data)
    }

    // add weather to array list
    const addHistory = (data) => {
        let mapped = history.map((x) => x.place)
        let found = mapped.includes(data.place)
        if (!found) {
            setHistory([...history, data])
        }
    }

    // delete weather from array list
    const deleteHistory = (place) => {
        let newHistory = [...history]; // make a separate copy of the array
        let data = newHistory.filter(item => item.place !== place)
        setHistory(data)
    }

    return (
        <div >
            <div className="header">
                <h2 className="title">Today's weather</h2>
            </div>
            <SearchBar searchWeather={searchWeather} ></SearchBar>
            <Result weather={weather} ></Result>
            <SearchHistory history={history} searchWeather={searchWeather} deleteHistory={deleteHistory}></SearchHistory>
        </div>
    );
}

export default Main;

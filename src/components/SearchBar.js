import React, { useState } from 'react'
import '../assets/SearchBar.css';

function SearchBar(props) {
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    // search selected city's weather
    const searchWeather = e => {
        e.preventDefault();
        props.searchWeather(city)
    }

    // clear input data
    const clearInput = e => {
        e.preventDefault();
        setCity('')
        setCountry('')
    }

    return (
        <div className="container-row">
            <label className="label">City:</label>
            <input className="input" type='text' id="city" value={city} onChange={(e) => setCity(e.target.value)}></input>
            {/* <label className="label">Country:</label>
            <input className="input" type='text' value={country} id="country" onChange={(e) => setCountry(e.target.value)}></input> */}
            <button className="button" id="search" onClick={searchWeather}>Search</button>
            <button className="button" id="clear" onClick={clearInput}>Clear</button>
        </div>
    );
}

export default SearchBar;

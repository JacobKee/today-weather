import '../assets/Result.css';
import Moment from 'react-moment'

function Result(props) {
    if (props.weather.length !== 0) {
        if (props.weather.cod === 200) {
            return (
                <div className="container-result">
                    <div className="row">
                        <label className="weather-place gray">{props.weather.name},</label>
                        <label className="weather-place gray">{props.weather.sys.country}</label>
                    </div>
                    <div className="row">
                        <label className="weather">{props.weather.weather[0].main}</label>
                    </div>
                    <div className="row">
                        <label className="weather-label gray">Description:</label>
                        <label className="weather-description">{props.weather.weather[0].description}</label>
                    </div>
                    <div className="row">
                        <label className="weather-label gray">Temperature:</label>
                        <label className="weather-temperature">{props.weather.main.temp_max}&#8451;&nbsp;~</label>
                        <label className="weather-temperature">&nbsp;{props.weather.main.temp_min}&#8451;</label>
                    </div>
                    <div className="row">
                        <label className="weather-label gray">Humidity:</label>
                        <label className="weather-humidity">{props.weather.main.humidity}%</label>
                    </div>
                    <div className="row">
                        <label className="weather-label gray">Time:</label>
                        <Moment unix format="YYYY-MM-DD hh:mm A">{props.weather.dt}</Moment>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container-notFound">
                    <label className="notFound">Not found</label>
                </div>
            )
        }
    }
    else {
       return null
    }
}

export default Result;

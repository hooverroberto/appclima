import React, { useEffect, useState } from 'react';

const WeatherCard = ({ tempInfo }) => {
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;


    const [weatherIcon, SetWeatherIcon] = useState("");
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    SetWeatherIcon("wi-day-cloudy");
                    break;
                case "Haze":
                    SetWeatherIcon("wi-fog");
                    break;
                case "Clear":
                    SetWeatherIcon("wi-day-sunny");
                    break;
                case "Mist":
                    SetWeatherIcon("wi-fog");
                    break;
                default:
                    SetWeatherIcon("wi-fog");
                    break;
            }
        }
    }, [weathermood]);
    return (
        <div className='container'>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherIcon}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>

                    <div className='description'>
                        <div className='weatherCondition'>{weathermood}</div>
                        <div className='place'>
                            {name}, <b>{country}</b>
                        </div>
                    </div>

                </div>

                <div className='date'>{new Date().toLocaleString()}</div>
                <div className='extra-temp'>
                    <div className='temp-info-minmax p'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunset'></i></p>
                            <p className='extra-info-leftside'>
                                {timeStr} <br /> Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className='wi wi-humidity'></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity} <br /> Humidity
                            </p>
                        </div>
                    </div>
                    <div className='weather-extra-info p'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-rain'></i></p>
                            <p className='extra-info-leftside'>
                                {pressure} <br /> Pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-strong-wind'></i></p>
                            <p className='extra-info-leftside'>
                                {speed} <br /> Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
};

export default WeatherCard;
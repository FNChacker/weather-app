import React, { useEffect, useState } from "react";

const Weather = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatheState] = useState("");
//Added more cases of weather icons
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-day-haze");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-day-windy");
          break;

        case "Rain":
          setWeatheState("wi-day-rain");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //sunset timer fixed
  let second = sunset;
  let date = new Date(second * 1000);
  var timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          {<i className={`wi ${weatherState}`}></i>}
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span> {temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date"> {new Date().toLocaleString()} </div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM
                <br />
                sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weather;

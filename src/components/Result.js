//this comp is a result of search
import React from "react";
import "../css/Result.css";

const Result = props => {
  //destructuring
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err
  } = props.weather;
  let content = null;
  if (!err && city) {
    //actually data and time
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div>
        <h3>
          Pogoda dla miasta <strong>{city}</strong>
        </h3>
        <h4>Dane aktualne dla: {date}</h4>
        <h4>Aktualna temperatura: {temp} &#186;C</h4>
        <h4>Wschód słońca dzisiaj o {sunriseTime}</h4>
        <h4>Zachód słońca dzisiaj o {sunsetTime}</h4>
        <h4>Aktualna siła wiatru: {wind} m/s</h4>
        <h4>Aktualne ciśnienie {pressure} hPa</h4>
      </div>
    );
  }
  return <div className="result">{err ? `Brak ${city} w bazie` : content}</div>;
};

export default Result;

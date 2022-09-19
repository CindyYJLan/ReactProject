import React from "react";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  const redlable =
    props.maxTemp >= 35 ? (
      <span className="redlable">Heatwave warning</span>
    ) : null;

  const orangelable =
    props.wind >= 30 ? (
      <span className="orangelable"> Strong wind warning </span>
    ) : null;

  function getColor(temp) {
    let tempColor = "white";
    if (temp >= 15 && temp <= 25) {
      tempColor = "#90a13b6e";
    } else if (temp >= 25 && temp <= 35) {
      tempColor = "#ffb8009c";
    } else if (temp >= 35) {
      tempColor = "#dd6d6c";
    }
    return tempColor;
  }

  const temps = props.hourlyTemp;
  const tempColors = temps.map((temp1) => getColor(temp1));
  const hourlyColor = [];
  for (let i = 0; i < 24; i++) {
    hourlyColor.push(
      <div style={{ background: tempColors[i] }}>{temps[i]}°C</div>
    );
  }

  return (
    <div>
      <table>
        <tr>
          <th>{props.day}</th>
        </tr>
        <tr>
          <td>{props.conditions}</td>
        </tr>
        <tr>
          <td>{props.maxTemp}°C</td>
        </tr>
        <tr>
          <td>{props.wind}km/h</td>
        </tr>
        <tr>
          <td>{hourlyColor}</td>
        </tr>
      </table>
      <p>{redlable}</p>
      <p>{orangelable}</p>
    </div>
  );
}

export default WeatherForecast;

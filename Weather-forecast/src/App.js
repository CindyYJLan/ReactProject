import WeatherForecast from "./WeatherForecast";
import "./App.css";

function App() {
  return (
    <div className="tablefore">
      <h2>Weather Forecast</h2>
      <table>
        <tr className="tabletop">
          <td id="tableMon">
            <WeatherForecast
              day="Monday"
              conditions="sunny🌞"
              maxTemp={38}
              wind={15}
              hourlyTemp={[
                17, 36, 17, 17, 18, 40, 20, 22, 24, 27, 29, 32, 34, 35, 34, 33,
                32, 30, 28, 26, 24, 28, 19, 18,
              ]}
            />
          </td>
          <td id="tableTue">
            <WeatherForecast
              day="Tuesday"
              conditions="stormy⛈️"
              maxTemp={26}
              wind={36}
              hourlyTemp={[
                17, 17, 17, 28, 18, 19, 20, 22, 24, 27, 29, 32, 34, 35, 34, 33,
                32, 30, 28, 26, 24, 21, 19, 30,
              ]}
            />
          </td>
          <td id="tableWed">
            <WeatherForecast
              day="Wednesday"
              conditions=" rainy 🌧️"
              maxTemp={25}
              wind={25}
              hourlyTemp={[
                15, 15, 17, 17, 18, 19, 20, 20, 24, 27, 29, 32, 34, 30, 34, 33,
                25, 17, 17, 18, 19, 20, 20, 21,
              ]}
            />
          </td>
          <td id="tableThu">
            <WeatherForecast
              day="Thursday"
              conditions="cloudy ☁️"
              maxTemp={28}
              wind={20}
              hourlyTemp={[
                17, 15, 17, 17, 18, 19, 20, 20, 24, 27, 29, 32, 34, 30, 34, 33,
                32, 30, 28, 26, 24, 21, 30, 18,
              ]}
            />
          </td>
          <td id="tableFri">
            <WeatherForecast
              day="Friday"
              conditions="sunny🌞"
              maxTemp={35}
              wind={16}
              hourlyTemp={[
                17, 17, 17, 17, 18, 19, 20, 22, 24, 27, 29, 32, 34, 35, 34, 33,
                32, 30, 28, 26, 24, 21, 19, 18,
              ]}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;

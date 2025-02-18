import React, { useEffect, useState } from "react";

function Index() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getWeatherForecast();
  }, []);

  const getWeatherForecast = async () => {
    try {
      const response = await fetch("https://localhost:7267/WeatherForecast");
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert("Error during fetch api", error);
    }
  };
  return (
    <>
      <div>This is vite react app</div>
      <div className="mx-10 my-10 flex flex-row m">
        {weather.map((w) => (
          <ul key={w.date} className="mb-3 mx-10">
            <li>{w.date}</li>
            <li>{w.temperatureC}</li>
            <li>{w.temperatureF}</li>
            <li>{w.summary}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Index;

import React, { Component } from "react";
import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";
import { Button } from "semantic-ui-react";

// Creating the WeatherCard component
class WeatherCard extends Component {
  constructor(props) {
    super(props);

    // Binding event handler functions to the component 
    this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
    this.deleteDataFromLocalStorage =
      this.deleteDataFromLocalStorage.bind(this);
  }

  // A function to delete the city from favorites in local storage
  deleteDataFromLocalStorage() {
    const existingCities = JSON.parse(localStorage.getItem("cityList"));
    const indexOfCity = existingCities.indexOf(this.props.weatherData.city);

    existingCities.splice(indexOfCity, 1);
    localStorage.setItem("cityList", JSON.stringify(existingCities));
    // update the favorites list
    this.props.callBackFromParent(existingCities);
  }

  // A function to save the city to favorites in local storage
  saveDataToLocalStorage() {
    const existingCities = JSON.parse(localStorage.getItem("cityList")) || [];

    existingCities.push(this.props.weatherData.city);
    localStorage.setItem("cityList", JSON.stringify(existingCities));
    // Update the favorites list
    this.props.callBackFromParent(existingCities);
  }

  render() {
    // Extract weather data and calculate temperature in Celsius
    const { city, weather, country, temp } = this.props.weatherData;
    const celcius = Math.round(temp - 273.15);

    // Define Save and Delete buttons 
    const saveBtn = (
      <Button
        positive
        size="mini"
        onClick={this.saveDataToLocalStorage}
        content="Save to favorites"
      />
    );
    const deleteBtn = (
      <Button
        negative
        size="mini"
        onClick={this.deleteDataFromLocalStorage}
        content="Delete from favorites"
      />
    );

    // Check if the current city exists in the favorites list
    const existingCities = this.props.savedCities;

    return (
      <div className="WeatherCard">
        <h1 className="WeatherCard-degrees">{celcius}°</h1>
        <div className="WeatherCard-icon-container">
          {/* Render weather icon based on the weather condition */}
          <i className={`wi wi-owm-${weather[0].id} WeatherCard-icon`} />
          <p>{weather[0].main}</p>
        </div>
        <h2 className="WeatherCard-city">
          {city}, {country}
        </h2>
        {/* Render Save or Delete button based on whether the city is in favorites */}
        {existingCities.includes(city) ? deleteBtn : saveBtn}
      </div>
    );
  }
}

export default WeatherCard;

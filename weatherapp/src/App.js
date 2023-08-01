import React, { Component } from "react";
import "./css/App.css";

// Importing custom components
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Favorites from "./components/Favorites";

// Importing API_KEY from config.js
import API_KEY from "./config.js";

class App extends Component {
  constructor(props) {
    super(props);
    // State initialization
    this.state = {
      weatherData: {
        weather: "",
        city: "",
        country: "",
        temp: 0,
      },
      searchDone: false,
      savedCities: [],
      hasSavedCities: false,
      errorMessage: "",
    };

    // Binding methods to the component's instance
    this.callWeatherData = this.callWeatherData.bind(this);
    this.updateSavedCities = this.updateSavedCities.bind(this);
  }

  // Function to fetch weather data for a given city
  callWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    fetch(url)
      .then(handleErrors) // Check for response errors
      .then((resp) => resp.json())
      .then((data) => {
        // Construct weather object from API response
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
        };
        // Update state with the weather data and set searchDone to true
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: "",
        });
      })
      .catch((error) => {
        // If an error occurs, set an error message to display
        this.setState({ errorMessage: error.message });
      });

    // Function to handle response errors
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }

  // Function to update the list of saved cities
  updateSavedCities(cityArr) {
    // Check if there are saved cities and set the hasSavedCities state accordingly
    const hasCities = cityArr.length > 0;
    this.setState({ savedCities: cityArr, hasSavedCities: hasCities });
  }

  componentWillMount() {
    // Check if there are any saved cities in local storage before the App is mounted
    let existingCities = JSON.parse(localStorage.getItem("cityList") || "[]");

    if (existingCities.length !== 0) {
      // If saved cities are found, update the state with the list of saved cities
      this.setState({
        hasSavedCities: true,
        savedCities: existingCities,
      });
    }
  }

  render() {
    const {
      searchDone,
      weatherData,
      hasSavedCities,
      savedCities,
      errorMessage,
    } = this.state;

    return (
      <div className="App">
        {/* Render the SearchBar component with a callback to receive user input */}
        <SearchBar
          callBackFromParent={this.callWeatherData}
          error={errorMessage}
        />
        {/* Render the WeatherCard component when a search is performed */}
        {searchDone && (
          <WeatherCard
            weatherData={weatherData}
            savedCities={savedCities}
            callBackFromParent={this.updateSavedCities}
          />
        )}
        {/* Render the Favorites component if there are saved cities */}
        {hasSavedCities && (
          <Favorites
            savedCities={savedCities}
            callBackFromParent={this.callWeatherData}
          />
        )}
      </div>
    );
  }
}

export default App;

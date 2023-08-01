import React, { Component } from "react";
import "../css/Favorites.css";
import { Button } from "semantic-ui-react";

// Creating the Favorites component
class Favorites extends Component {
  constructor(props) {
    super(props);

    // Binding the event handler function to the component 
    this.getWeather = this.getWeather.bind(this);
  }

  // A function to pass the selected city back to the parent component
  getWeather(event) {
    this.props.callBackFromParent(event.target.value);
  }

  render() {
    // Checking the savedCities to create Buttons for each city
    let cityElements = this.props.savedCities.map((city) => {
      return (
        <Button
          className="Favorites-btn"
          size="tiny"
          value={city}
          key={`${city}-button`}
          onClick={this.getWeather}
          content={city}
        />
      );
    });

    return (
      <div className="Favorites">
        {/* Displaying the title */}
        <h3 className="Favorites-title">My favorite cities</h3>
        {/* Displaying the list of buttons */}
        <div className="Favorites-button-container">{cityElements}</div>
      </div>
    );
  }
}

export default Favorites;

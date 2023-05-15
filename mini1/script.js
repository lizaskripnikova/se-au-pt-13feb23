const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const feels_like = document.getElementById("feels_like");
const wind_speed = document.getElementById("wind_speed");
const cloud_pct = document.getElementById("cloud_pct");
const cityName = document.getElementById("cityName");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': ,
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


// fetching API
const getWeather = (city) => {
	fetch(w + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			return showWeather(response)
		})
		.catch(err =>
			console.error(err)
		)
}

weather.innerHTML = `<h3 style="color:white; padding: 20px 5px;">Search and see the live weather of any city!</h3>`



const showWeather = (response) => {
	// If the city doesn't exist in API - throw an error
	if (response.error == 'An unexpected error occured.') {
			weather.innerHTML = `<h3 style="color:red; padding-top: 20px;">${city.value} city not found</h3>`;
			return;
		} else {
			// If the city does exist in API - show it on screen
			weather.innerHTML = 
            `<div class="col-1">
				<div class="weather-info">
					<div class="col-1-1">
						<span class="num" id="temp">${response.temp}</span>
						<span class="deg"> &#176C</span>
					</div>
					<div class="col-1-2">
						<span class="city" id="cityName">${city.value}</span>
					</div>
				</div>
			</div>
			<div class="col-2">
				<div class="weather-details">
					<h3>Weather Details</h3>
					<div class="w-bottom">
						<ul>
							<li>Humidity: <span id="humidity">${response.humidity}</span>%</li>
							<li>Feels like: <span id="feels_like">${response.feels_like}</span>&#176C</li>
							<li>Wind: <span id="wind_speed"></span>${response.wind_speed} km/h</li>
							<li>Cloud percentage: <span id="cloud_pct"></span>${response.cloud_pct} % </li>
						</ul>
					</div>
				</div>
			</div>`;

    // Display activity recommendation
const activityRecommendation = recommendActivity(response.cloud_pct, response.temp);
const activityRecommendationElement = document.createElement("div");
activityRecommendationElement.id = "activityRecommendation";
activityRecommendationElement.innerHTML = `
   			 <div class="col-2">
      			  <div class="weather-details">
      			    <h3>Activity Recommendation</h3>
       			     <div class="w-bottom">
            		    <ul>
            			    <p>${activityRecommendation}</p>
            		    </ul>
           			 </div>
       			 </div>
    		 </div>`;
        weather.appendChild(activityRecommendationElement);
    }
}
    

// Search other city weather
searchCity.addEventListener("click", (event) => {
event.preventDefault()
getWeather(city.value)
})

// function to recommend activities based on weather conditions
const recommendActivity = (cloud_pct, temp) => {
if (cloud_pct < 50 && temp > 15 && wind_speed <= 40)  {
return "Recommended outdoor activities: swimming, hiking, picnic, cycling ";
} else {
return "Recommended indoor activities: movie, museum, bowling, cooking, reading books";
}
}


    

 var apiKey = "aa6a965bdeca3df25b15a8693bbf86d9";
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}";

 var searchCity = document.getElementById("#search-city");
 var cityInputEl = document.getElementById("#city-input");
 var searchBtn = document.getElementById("#search-button")
 var clearBtn = document.getElementById("#clear-button");
 var pastCitiesEl = document.getElementById("#past-cities");
 var currentWeather = document.getElementById("#current-weather");
 var futureForecast = document.getElementById("#future-forecast");
 var searchHistory = [];

//Needs:
//event trigger for clicking on search button / formSubmitHandler from activity?
//searched city saved and appended to list as buttons
//searched city loads current weather info and a 5 day forecast
//clicking on a saved city will reload weather info in current / 5day areas




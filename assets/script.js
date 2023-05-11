var searchCity = $("#search-city");
var searchButton = $("#btn-search");
var searchList = $("#search-list");

var weatherMain = $("#weather-main");

var currentCity = $("#current-city");
var statsTemp = $("#temp-stats");
var statsWind = $("#wind-stats");
var statsHumidity = $("#humidity-stats");

var futureForecast= $("#future-forecast");
var apiKey = "aa6a965bdeca3df25b15a8693bbf86d9";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=" + apiKey;

// Will be used to display current date next to current city being searched
var currentDate = dayjs().format("MM-DD-YY");
  $("#currentDay").text(currentDate)

//Needs:
//event trigger for clicking on search button
//searched city saved and appended to list as buttons
//searched city loads current weather info and a 5 day forecast
//clicking on a saved city will reload weather info in current / 5day areas

fetch(queryURL)
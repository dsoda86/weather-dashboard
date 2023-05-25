var apiKey = "aa6a965bdeca3df25b15a8693bbf86d9";

 var searchCity = document.getElementById("#search-city");
 var cityInputEl = document.getElementById("#city-input");
 var searchBtn = document.getElementById("#search-button")
 var clearBtn = document.getElementById("#clear-button");
 var pastCitiesEl = document.getElementById("#past-cities");
 var currentWeather = document.getElementById("#current-weather");
 var futureForecast = document.getElementById("#future-forecast");
 var searchHistory = [];

//Needs:
//event trigger for clicking on search button / formSubmitHandler from activity/ event listener for submit form
function weatherDashboard(event) {
    event.preventDefault();
    var cityName = cityInputEl.value;
    getCityForecast(cityName);
}
//searched city loads current weather info and a 5 day forecast
function getCityForecast(cityName) {
    //var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=aa6a965bdeca3df25b15a8693bbf86d9`;
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (currentData) {
            console.log(currentData);

            //var parametersURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&units=imperial&appid=aa6a965bdeca3df25b15a8693bbf86d9`;
            fetch(parametersURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (futureData) {
                    if (searchHistory.includes(currentData.name) === false) {
                        searchHistory.push(currentData.name);
                        localStorage.setItem("city", JSON.stringify(searchHistory));
                    }
                    displaySearchedCity();
                    console.log(futureData)
                    currentWeather.innerHTML = 
                    `<ul>
                        <li>${currentData.name} /<span> ${dayjs(currentData.dt, "X").format(MM/DD/YYYY)} </span></li>
                        <li><img src="http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png" /></li>
                        <li>Temp: ${currentData.main.temp}</li>
                        <li>Wind: ${currentData.main.wind.speed}</li>
                        <li>Humidity: ${currentData.main.humidity}</li>
                    </ul>`;

                    var weatherCards = " ";
                    for (var i = 1; i < 6; i++) {
                        weatherCards = weatherCards + 
                        `<ul class="col-12 col-xl-2 day">
                            <li>${dayjs(futureData.daily[i].dt, "X").format(" MM/DD/YYYY")}</li>
                            <li><img src ="http://openweathermap.org/img/wn/${futureData.daily[i].weather[0].icon}@2x.png" /></li>
                            <li>Temp: ${futureData.daily[i].temp.day}</li>
                            <li>Wind: ${futureData.daily[i].wind_speed}</li>
                            <li>Humdity: ${futureData.daily[i].humidity}</li>
                        </ul>`;
                    }
                    futureForecast.innerHTML = weatherCards;
                });
                
                
        });
}
//searched city saved and appended to list as buttons using template literal to create the new buttons
function displaySearchedCity () {
    if (localStorage.getItem("city")) {
        searchHistory = JSON.parse(localStorage.getItem("city"));
    }
    var searchList = " ";
    for (var i = 0; i < searchHistory.length; i++) {
        searchList = searchList + `<button class="btn btn-secondary appendList my-2" type="submit">${searchHistory[i]}</button>`;
    }
    //pastCitiesEl.innerHTML = searchList;
    var appendList = document.querySelectorAll(".appendList");
    for (var i = 0; i < appendList.length; i++) {
        appendList[i].addEventListener("click", function() {
            getCityForecast(this.textContent);   
        });
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     searchCity.addEventListener("submit", weatherDashboard);
// });

//searchCity.addEventListener("submit", weatherDashboard);

// clearBtn function / event listener / local storage
// function clearPastCities() {
//     localStorage.clear();
//     pastSearchedCitiesEl.textContent = "";
    
// }
displaySearchedCity();

//
 







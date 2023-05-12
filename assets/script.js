
 var apiKey = "aa6a965bdeca3df25b15a8693bbf86d9";
 //var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}";

 var searchCity = document.getElementById("#search-city");
 var cityInputEl = document.getElementById("#city-input");
 var searchBtn = document.getElementById("#search-button")
 var clearBtn = document.getElementById("#clear-button");
 var pastCitiesEl = document.getElementById("#past-cities");
 var currentWeather = document.getElementById("#current-weather");
 var futureForecast = document.getElementById("#future-forecast");
 var searchHistory = [];

//Needs:
//event trigger for clicking on search button / formSubmitHandler from activity/ 
function weatherDashboard(event) {
    event.preventDefault();
    var cityName = cityInputEl.value;
    getCityForecast(cityName);
}
//searched city saved and appended to list as buttons using template literal to create the new buttons
function displaySearchedCity () {
    if (localStorage.getItem("city")) {
        searchHistory = JSON.parse(localStorage.getItem("city"));
    }
    var searchList =" ";
        for (var i = 0; i < searchHistory.length; i++) {
            searchList = searchList + `<button class="btn btn-secondary my-2" type="submit">${searchHistory[i]}</button>`
        }
        pastCitiesEl.textContent = searchList;
        var appendList = document.querySelectorAll(".appendList");
        for (var i = 0; i < appendList.length; i++) {
            appendList[i].addEventListener("click", function() {
                getCityForecast(this.textContent)   
            })
        }
}
//searched city loads current weather info and a 5 day forecast
function getCityForecast(cityName) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=aa6a965bdeca3df25b15a8693bbf86d9";
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (currentData) {
            console.log(currentData);

            var parametersURL = "https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${currentData.coord.lon}&units=imperial&appid=aa6a965bdeca3df25b15a8693bbf86d9";
            fetch(parametersURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (futureData) {
                    if (searchHistory.includes(currentData.name) ===false) {
                        searchHistory.push(currentData.name);
                        localStoragesetItem("city", JSON.stringify(searchHistory));
                    }
                    displaySearchedCity();
                }
                //Append current city weather ul and li
                //Append 5 day forecast ul and li
                //Use dayjs for current date info
                )
        })
}
displaySearchedCity();

// clearBtn function / event listener

//
 







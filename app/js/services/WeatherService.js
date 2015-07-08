app.service("WeatherService", ['$http', function($http){

    this.API_KEY = "22c328d54df08fc83f1b8c94826ffc0a";
    this.city = "Genoa";

    this.getCurrentTemperature = function () {
        return $http.get("http://api.openweathermap.org/data/2.5/weather?q=Genoa,it");
    };

    this.convertDegToDirection = function(degrees){
        var directions = ["N","NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
            "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        var i = (degrees + 11.25)/22.5;

        console.log(i)
        return directions[Math.floor(i) % 16];
    }
}]);
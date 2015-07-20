app.controller("ForecastCtrl", ['$scope', '$http','WeatherService', 'ChartFactory', function ($scope, $http, WeatherService, ChartFactory) {
    $scope.title = "Forecast";
    $scope.timeOptions = [
        {name: "today", value:1},
        {name: "tomorrow", value:2},
        {name: "next week", value:7},
        {name: "next two weeks", value:14}
    ];
    $scope.timeOption = $scope.timeOptions[0];
    $scope.pressureChart = ChartFactory.getChartConfiguration({
        domain: [],
        label: 'Pressure',
        data: []
    });
    $scope.$on('$viewContentLoaded', function(event){
        setTimeout(function () {
            var icon = document.getElementById("loading-img");
            icon.className = "power-cord";
        }, 500);
    });
    $scope.dataSets = {
      domain: [],
      temperature: [],
      humidity: [],
      pressure: []
    };
    $scope.config = {
        title: {
            text: "Forecast"
        },
        data: [
            {
                name: "temperature",
                showInLegend: true,
                type: "line",
                dataPoints: [],
            },
            {
                name: "pressure",
                showInLegend: true,
                type: "line",
                axisYType: "secondary",
                dataPoints: [],
            }
        ],
        axisY:{
            suffix: "C",
            includeZero: false
        },
        axisY2:{
            suffix: "hPa",
            includeZero: false
        },
        axisX:{
            valueFormatString: "MMM DD"
        }
    };

    $scope.updateForecast = function(data){
        $scope.config.data[0].dataPoints = [];
        $scope.config.data[1].dataPoints = [];

        for (var i = 0; i < data.list.length; i++){
            $scope.config.data[0].dataPoints.push({
                x: new Date(data.list[i].dt * 1000),
                y: data.list[i].temp.day
            });
            $scope.config.data[1].dataPoints.push({
                x: new Date(data.list[i].dt * 1000),
                y: data.list[i].pressure
            });
        }
    };

    $scope.getForecast = function(){
        WeatherService.getLongForecast($scope.timeOption.value)
            .then(function (data) {
                $scope.updateForecast(data.data);
            });
    };
    $scope.getForecast();
}]);
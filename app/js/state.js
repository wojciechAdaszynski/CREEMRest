app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('root',{
            url: '/',
            views: {
                'header': {
                    templateUrl: 'js/partials/header.html'
                },
                'content': {
                }
            }
        })
        .state('root.home', {
            url: "home",
            views: {
                'content@': {
                    templateUrl: 'js/partials/home.html'
                }
            }
        })
        .state('root.energymeter', {
            url: "energymeter",
            views: {
                'content@': {
                    templateUrl: "js/partials/energymeter.html",
                    controller: "EnergyMeterCtrl"
                }
            }

        })
        .state('root.consumed', {
            url: "consumed",
            views: {
                'content@': {
                    templateUrl: "js/partials/consumed.html",
                    controller: "ConsumedCtrl"
                }
            }
        })
        .state('root.produced', {
            url: "produced",
            views: {
                'content@': {
                    templateUrl: "js/partials/produced.html",
                    controller: "ProducedCtrl"
                }
            }
        })
        .state('root.weather', {
            url: "weather",
            views: {
                'content@': {
                    templateUrl: "js/partials/weather.html",
                    controller: "WeatherCtrl"
                }
            }
        });
});
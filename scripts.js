var app = angular.module('computer',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'MainCtrl'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        })
        .when('/services', {
            templateUrl: 'services.html',
            controller: 'ServicesCtrl'
        })
        .otherwise({redirectTo: '/main'})

}]);

app.controller('MainCtrl',['$scope', function($scope){
    console.log('main ctrl');
}]);

app.controller('ContactCtrl',['$scope', function($scope){
    console.log('contact ctrl');
}]);

app.controller('ServicesCtrl',['$scope', function($scope){
    console.log("serv ctrl");
}]);


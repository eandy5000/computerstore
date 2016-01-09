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

app.controller('MainCtrl',['$scope','$http', function($scope, $http){
    $http.get('services.json').then(function(response){
        console.log(response.data);

        $scope.services = response.data;
    })
}]);



app.controller('ServicesCtrl',['$scope', '$http', function($scope, $http){
    $http.get('services.json').then(function(response){
        console.log(response.data);

        $scope.services = response.data;
    })
}]);

app.controller('ContactCtrl',['$scope', '$http', function($scope, $http){
    $http.get('locations.json').then(function(response){
        console.log(response.data);

        $scope.locations = response.data;
    })
}]);


var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/suscriptores', {
      templateUrl: '/frontend/views/suscriptores-lista.html',
      controller: 'SuscriptorListaController'
    })
    .when('/suscriptores-crear', {
      templateUrl: '/frontend/views/suscriptores-crear.html',
      controller: 'SuscriptorCrearController'
    })
    .otherwise({
      redirectTo: '/suscriptores'
    });

  $locationProvider.html5Mode(true);
}]);

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  // Configuración de rutas
  $routeProvider
    .when('/subscribers', {
      templateUrl: '/frontend/views/subscribers-list.html',
      controller: 'SubscriberListController'
    })
    .when('/subscribers-crear', {
      templateUrl: '/frontend/views/subscribers-create.html',
      controller: 'SubscriberCreateController'
    })
    .otherwise({
      redirectTo: '/subscribers'
    });

  // Habilitar URLs limpias (sin #!)
  $locationProvider.html5Mode(true);
}]);

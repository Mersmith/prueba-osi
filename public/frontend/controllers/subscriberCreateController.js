app.controller('SubscriberCreateController', function($scope, $http, $location) {
    $scope.subscriber = {};
    $scope.error = '';

    $scope.createSubscriber = function() {
        $http.post('http://127.0.0.1:8000/api/subscribers', $scope.subscriber)
        .then(function(response) {
            alert('Suscriptor creado correctamente');
            $location.path('/subscribers'); // redirige a la lista
        }, function(error) {
            $scope.error = error.data.message || 'Ocurrió un error';
        });
    };
});

app.controller('SubscriberCreateController', function ($scope, $location, SubscriberService) {
    $scope.subscriber = {
        name: '',
        email: '',
    };

    $scope.createSubscriber = function () {
        SubscriberService.create($scope.subscriber)
            .then(function (response) {
                alert('Suscriptor creado correctamente');
                $location.path('/subscribers');
            }, function (error) {
                $scope.error = error.data.message || 'Ocurrió un error';
            });
    };
});

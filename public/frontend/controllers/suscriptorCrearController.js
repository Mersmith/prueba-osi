app.controller('SuscriptorCrearController', function ($scope, $location, SuscriptorService) {
    $scope.suscriptor = {
        nombre: '',
        correo: '',
    };

    $scope.crearSuscriptor = function () {
        SuscriptorService.suscriptorCrear($scope.suscriptor)
            .then(function (response) {
                alert('Suscriptor creado correctamente');
                $location.path('/suscriptores');
            }, function (error) {
                $scope.error = error.data.message || 'Ocurrió un error';
            });
    };
});

app.controller('SuscriptorListaController', function ($scope, $timeout, SuscriptorService) {
  $scope.suscriptores = [];
  $scope.buscador = '';
  $scope.currentPage = 1;
  $scope.lastPage = 1;

  let buscadorTimeout;

  $scope.traerSuscriptores = function () {
    SuscriptorService.suscriptorLista({ page: $scope.currentPage, buscador: $scope.buscador })
      .then(function (response) {
        $scope.suscriptores = response.data.data;
        $scope.currentPage = response.data.current_page;
        $scope.lastPage = response.data.last_page;
      }, function (error) {
        console.error('Error al cargar', error);
      });
  };

  $scope.buscarSuscriptor = function () {
    if (buscadorTimeout) {
      $timeout.cancel(buscadorTimeout);
    }

    buscadorTimeout = $timeout(function () {
      $scope.currentPage = 1;
      $scope.traerSuscriptores();
    }, 2000);
  };

  $scope.changePage = function (page) {
    if (page >= 1 && page <= $scope.lastPage) {
      $scope.currentPage = page;
      $scope.traerSuscriptores();
    }
  };

  $scope.resetBuscador = function () {
    $scope.buscador = '';
    $scope.currentPage = 1;
    $scope.traerSuscriptores();
  };

  $scope.enviarMensajesMasivosBienvenida = function () {
    if (confirm("¿Enviar correos de bienvenida a todos los suscriptores?")) {
      SuscriptorService.suscriptorMensajeBievenidaMasivo()
        .then(function (response) {
          alert(response.data.message);
        }, function (error) {
          console.error('Error al enviar correos', error);
          alert('Ocurrió un error al enviar los correos');
        });
    }
  };

  $scope.traerSuscriptores();
});

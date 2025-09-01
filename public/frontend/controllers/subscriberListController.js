app.controller('SubscriberListController', function ($scope, SubscriberService) {
  $scope.subscribers = [];
  $scope.search = '';
  $scope.currentPage = 1;
  $scope.lastPage = 1;

  $scope.loadSubscribers = function () {
    SubscriberService.getAll({ page: $scope.currentPage, search: $scope.search })
      .then(function (response) {
        $scope.subscribers = response.data.data;
        $scope.currentPage = response.data.current_page;
        $scope.lastPage = response.data.last_page;
      }, function (error) {
        console.error('Error al cargar', error);
      });
  };

  $scope.searchSubscribers = function () {
    $scope.currentPage = 1; // reiniciar a la primera página
    $scope.loadSubscribers();
  };

  $scope.changePage = function (page) {
    if (page >= 1 && page <= $scope.lastPage) {
      $scope.currentPage = page;
      $scope.loadSubscribers();
    }
  };

  // Cargar inicial
  $scope.loadSubscribers();
});

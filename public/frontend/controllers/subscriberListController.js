app.controller('SubscriberListController', function ($scope, $timeout, SubscriberService) {
  $scope.subscribers = [];
  $scope.search = '';
  $scope.currentPage = 1;
  $scope.lastPage = 1;

  let searchTimeout;

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
    if (searchTimeout) {
      $timeout.cancel(searchTimeout);
    }

    searchTimeout = $timeout(function () {
      $scope.currentPage = 1;
      $scope.loadSubscribers();
    }, 2000);
  };

  $scope.changePage = function (page) {
    if (page >= 1 && page <= $scope.lastPage) {
      $scope.currentPage = page;
      $scope.loadSubscribers();
    }
  };

  $scope.resetSearch = function () {
    $scope.search = '';
    $scope.currentPage = 1;
    $scope.loadSubscribers();
  };

  $scope.loadSubscribers();
});

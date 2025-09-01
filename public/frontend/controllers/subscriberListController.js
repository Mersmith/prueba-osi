app.controller('SubscriberListController', function($scope, SubscriberService) {
    $scope.subscribers = [];
  
    SubscriberService.getAll().then(function(response) {
      $scope.subscribers = response.data;
    }, function(error) {
      console.error('Error al cargar', error);
    });
  });
  
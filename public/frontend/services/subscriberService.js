app.factory('SubscriberService', function ($http) {
  var baseUrl = 'http://127.0.0.1:8000/api/subscribers';

  return {
    getAll: function () {
      return $http.get(baseUrl);
    },
    create: function (subscriber) {
      return $http.post(baseUrl, subscriber);
    }
  };
});

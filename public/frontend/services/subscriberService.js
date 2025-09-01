app.factory('SubscriberService', function ($http) {
  var baseUrl = 'http://127.0.0.1:8000/api/subscribers';

  return {
    getAll: function (params) {
      return $http.get(baseUrl, { params: params });
    },
    create: function (subscriber) {
      return $http.post(baseUrl, subscriber);
    }
  };
});

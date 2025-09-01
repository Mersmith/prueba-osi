app.factory('SuscriptorService', function ($http) {
  var apiUrl = 'http://127.0.0.1:8000/api/subscribers';

  return {
    suscriptorLista: function (params) {
      return $http.get(apiUrl, { params: params });
    },
    suscriptorCrear: function (subscriber) {
      return $http.post(apiUrl, subscriber);
    },
    suscriptorMensajeBievenidaMasivo: function () {
      return $http.post(apiUrl + '/correo-masivos-bienvenida');
    }
  };
});

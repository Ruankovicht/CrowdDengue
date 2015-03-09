angular.module('starter.services', [])

.factory('Server', function($http) {
  var locationsObj = [
  ];

  return {
    recuperaDenuncias: function(ings) {
      $http({
            method: 'GET',
            url: 'espera' + loginsenha}).
        success(function (data, status) {
            locationsObj = data;
        }).
        error(function (data, status) {
            alert('Falha na Conexão com a Internet');
        });
        return locationObj;
    },
    login: function(ings) {
      $http({
            method: 'GET',
            url: 'espera' + loginsenha}).
        success(function (data, status) {
            recipes = data;
        }).
        error(function (data, status) {
            alert('Falha na Conexão com a Internet');
        });
        return locationObj;
    },
    enviaDenuncia: function(recipeId) {
      for ($rec in recipes) {
          if (recipes[$rec].id == recipeId) {
              return recipes[$rec];
          }
      }
    },
});

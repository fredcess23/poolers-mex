(function () {

  var app = angular.module('poolersmx', [
  	'ngRoute',
    'poolersmx.directives',
    'poolersmx.controllers'
  ]);


  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/carpool', {
        templateUrl: 'views/carpool.html'
      })
      
      .otherwise({
        redirectTo: '/'
      });

  }]);


})();

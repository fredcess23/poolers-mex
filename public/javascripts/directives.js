(function () {

  angular.module('poolersmx.directives', [])
  
    .directive('poolersmxHeader', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/poolersmx-header.html'
      };
    })

    .directive('poolersmxCredentials', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/poolersmx-credentials.html'
      };
    })

    .directive('poolersmxLogin', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/poolersmx-login.html'
      };
    })

    .directive('poolersmxRegister', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/poolersmx-register.html'
      };
    })


})();

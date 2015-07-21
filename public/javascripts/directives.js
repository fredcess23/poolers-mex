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
        templateUrl: 'partials/poolersmx-login.html',
        controller: function(){
          // logic here
        },
        controllerAs: 'logCtrl'
      };
    })

    .directive('poolersmxRegister', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/poolersmx-register.html',
        controller: function(){
          // logic here
        },
        controllerAs: 'regCtrl'

      };
    })


})();

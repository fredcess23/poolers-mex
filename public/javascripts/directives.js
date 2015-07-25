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
        controller: function($scope,$http){
          
          $scope.userid = '';
          $scope.psw = '';


          $scope.login = function() {
            $http({
               method: 'POST',
               url: '/login',
               params: {
                  userid: $scope.userid,
                  psw: $scope.psw    
               }
            }).

            success(function(data) {
               if(typeof(data) == 'object'){

                 alert('Success');

               }else{
                  alert('Usuario o password incorrecto');
               } 
            }).

            error(function() {
               alert('Error in /login');
            });
          };


        },
        controllerAs: 'logCtrl'
      };
    })

    .directive('poolersmxRegister', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/poolersmx-register.html',
        controller: function($scope,$http,poolersmxService){
      
          $scope._id = null;
          $scope.name = '';
          $scope.lastName = ''
          $scope.email = '';
          $scope.user = '';
          $scope.password = '';
          $scope.clientes = [];

          $scope.loadUsers = function(){
            $http({
               method: 'GET', 
               url: '/load'
            }).
            success(function(data) {
               if(typeof(data) == 'object'){
                  $scope.clientes = data;
               }else{
                  alert('Error trying to get the Users');
               }
            }).
            error(function() {
               alert('Error trying to get the Users');
            });
          };


          $scope.saveUser = function() {

            var userdata = {
              _id: $scope._id ,
              name: $scope.name,
              lastName: $scope.lastName,
              email: $scope.email,
              user: $scope.user,
              password: $scope.password
            };

            poolersmxService.serviceSaveUser(userdata).then(function (data) {
              if(typeof(data) == 'object'){
                  $scope.cleanData();
                  //$scope.cargarClientes();
               }else{
                  alert('Error trying to save the User (directive).');
               }
            });

          };



          $scope.eliminarCliente = function(indice) {
            $http({
               method: 'POST',
               url: '/eliminar',
               params: {
                  _id: indice
               }
            }).
            success(function(data) {
               if(data == 'Ok'){
                  $scope.limpiarDatos();
                  $scope.cargarClientes();
               }else{
                  alert('Error trying to delete the User.');
               } 
            }).
            error(function() {
               alert('Error trying to delete the User.');
            });
          };


           $scope.cleanData = function() {
              $scope._id = null;
              $scope.name = '';
              $scope.lastName = '';
              $scope.email = '';
              $scope.user = '';
              $scope.password = '';
           };
      

        },
        controllerAs: 'userCtrl'

      };
    })


})();

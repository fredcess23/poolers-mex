(function () {

  angular.module('poolersmx.services', [])
      //Dependy Injection - http and q services are injected in the function
      //factory returns an object
    .factory('poolersmxService', ['$http', '$q', function ($http, $q) {

      function serviceSaveUser(userdata) {
        // q is used to comply the promisse or refuse it  
        var deferred = $q.defer();

        $http({
             method: 'POST',
             url: '/save',
             params: {
                name: userdata.name,
                lastName: userdata.lastName,
                email:userdata.email,
                user: userdata.user,
                password: userdata.password,
                _id:userdata._id
             }
          }). //http promisse
          success(function(data) {
              //prommise is solve
              deferred.resolve(data);
          }).
          error(function() {
            alert('Error trying to save the User (services)');
             deferred.reject();             
          });

        return deferred.promise;

      }


      return {
        serviceSaveUser: serviceSaveUser
      };

    }]);

})();


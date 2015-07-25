(function () {

  angular.module('poolersmx.services', [])

    .factory('poolersmxService', ['$http', '$q', function ($http, $q) {

      function serviceSaveUser(userdata) {

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
          }).
          success(function(data) {
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


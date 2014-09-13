'use strict';
angular.module('chatApp')
.factory('userSvc', function($rootScope, $log, $http) {
  var urlUsers = "/api/collections/chatUsers";

  var urlChat = "/api/collections/chat";

  var getUsers = function () {
    return $http.get(urlUsers);
  };

  var getUser = function (id) {
    return $http.get(urlUsers + "/" + id);
  };

  var createUser = function (user) {
    $http.put(urlUsers, user).then(function (response) {
      $rootScope.$broadcast("user:created");
      $log.info("user:created");
    });
  };

  return {
    getUsers: getUsers,
    getUser: getUser,
    createUser: createUser
  }

});



//   return $resource('api/collections/chatUsers',
//     {},
//     {
//       query: { method: 'GET', isArray: true},
//       create: { method: 'POST'}
//     }
//     )
// })
// .factory('userSvc2', function($resource) {
//   return $resource('api/collections/chatUsers/:id',
//     {
//       id: '@_id'
//     },
//     {
//       show: { method: 'GET', isArray: true},
//       delete: { method: 'DELETE'},
//     }
//     )
// });

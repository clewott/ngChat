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
    $http.post(urlUsers, user).then(function (response) {
      $rootScope.$broadcast("user:created");
      $log.info("user:created");
    });
  };

  var addChatter = function(user) {
    $http.put(urlUsers + "/" + user._id, user).success(function(data) {
    $rootScope.$broadcast("chat:added");
    $log.info("chat:added");
    });
  };



  return {
    getUsers: getUsers,
    getUser: getUser,
    createUser: createUser,
    addChatter: addChatter
  }

});

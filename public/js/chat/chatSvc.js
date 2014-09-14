'use strict';
angular.module('chatApp')

  .factory('chatSvc', function ($route, $rootScope, $log, $http, $cookies, $cookieStore) {
    var addUser = function(userName){
      $cookieStore.put("name", userName);

    };

    var userName = $cookieStore.get("name");

    var urlChat = "/api/collections/chat";

    var getChats = function () {
      return $http.get(urlChat);

    };


    var addChat = function (chat) {
      $http.post(urlChat, chat).success(function (response) {
        $rootScope.$broadcast("chat:added");
        $log.info("chat:added");
      });
    };

    return {
      getChats: getChats,
      addChat: addChat,
      addUser: addUser,
      userName: userName,
    }

  });

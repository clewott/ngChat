'use strict';
angular.module('chatApp')

  .factory('chatSvc', function ($route, $rootScope, $log, $http, $cookies, $cookieStore) {
    var usersOnline = [];

    var addUser = function(userName){
      $cookieStore.put("name", userName);
      $rootScope.$broadcast("user:added");
      console.log("user:added");
      usersOnline.push(userName);
    };

    var userName = $cookieStore.get("name");

    // var removeName = $cookieStore.remove("name");

    var getUsers = function(){
      return usersOnline;
    }

///////////////////////////////////////////////////////
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
      getUsers: getUsers,
      addChat: addChat,
      addUser: addUser,
      // removeName: removeName,
      userName: userName,
    }

  });

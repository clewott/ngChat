'use strict';
angular.module('chatApp')

  .factory('chatSvc', function ($route, $rootScope, $log, $http, $cookies, $cookieStore) {

    var addUser = function(userName){
      $cookieStore.put("name", userName);
      $rootScope.$broadcast("user:added");
      console.log("user:added");
    };

    var userName = $cookieStore.get("name");

    // var removeName = $cookieStore.remove("name");

    // var getUsers = function(){
    //   return usersOnline;
    // }

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
///////////////////////////////////////////////////////
    var urlUsers = "/api/collections/users";

    var getOnlineUsers = function () {
      return $http.get(urlUsers);
    };


    var addOnlineUser = function(user) {
      $http.post(urlUsers, user).success(function (response) {
        $rootScope.$broadcast("user:online");
        $log.info("user:online");
      });
    };

    var removeOnlineUser = function(user){
      $http.delete(urlUsers + "/" + user._id, user).then(function(response){
        $rootScope.$broadcast("user:offline");
        $log.info("user:offline")
      });
    };


    return {
      getChats: getChats,
      // getUsers: getUsers,
      addChat: addChat,
      addUser: addUser,
      getOnlineUsers: getOnlineUsers,
      addOnlineUser: addOnlineUser,
      removeOnlineUser: removeOnlineUser,
      // removeName: removeName,
      userName: userName,
    }

  });

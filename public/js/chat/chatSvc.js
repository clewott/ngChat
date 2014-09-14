'use strict';
angular.module('chatApp')
  .factory('chatSvc', function ($rootScope, $log, $http) {
    var urlChat = "/api/collections/chat";

    var getChats = function () {
      return $http.get(urlChat);
    };

    var getChat = function (id) {
      return $http.get(urlChat + "/" + id);
    };

    var addChat = function (chat) {
      return $http.post(urlChat, chat).then(function (response) {
        $rootScope.$broadcast("chat:added");
        $log.info("chat:added");
      });
    };


    return {
      getChats: getChats,
      getChat: getChat,
      addChat: addChat
    }

  });

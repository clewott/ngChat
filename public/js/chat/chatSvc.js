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


  // .factory('chatSvc', function($resource) {
  //   return $resource('api/collections/chat',
  //     {},
  //     {
  //       query: { method: 'GET', isArray: true },
  //       create: { method: 'POST'}
  //     });
  // })
  // .factory('chatSvc2', function($resource) {
  //   return $resource('api/collections/chat/:id',
  //     {
  //       id: '@_id'
  //     },
  //     {
  //       show: { method: 'GET'},
  //       edit: { method: 'PUT'},
  //       delete: { method: 'DELETE'}
  //     }
  //     )
  // })

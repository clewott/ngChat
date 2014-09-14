'use strict';

angular.module('chatApp')
  .controller('chatCtrl', function ($scope, $log, $location, $routeParams, chatSvc, userSvc) {

    chatSvc.getChats().then(function (chats) {
      $scope.chats = chats.data;
    });

    $scope.addChat = function (chat) {
      chatSvc.addChat(chat).success(function () {
        $location.path("/chat");
      });
    }

    $scope.addChatter = function(chat) {
      chatUsersSvc.getUser($routeParams.id).success(function(user) {
        $scope.singleUser = user;
        $log.info($scope.singleUser);
        $scope.singleUser.chats.push({
          author:chat.author,
          content:chat.content,
          chatTime:new Date()
        });
        chatUsersSvc.addChatter(chat);
      });
      $scope.chat = {};
    };


// USER FUNCTIONS //
    userSvc.getUsers().then(function (users) {
      $scope.users = users.data;
    });

    $scope.newUser = function(user) {
      userSvc.createUser({
        name:user.name,
        chats: []
      })
      $location.path("/chat");
      $log.info(user);
    };
  });

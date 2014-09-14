'use strict';

angular.module('chatApp')
  .controller('chatCtrl', function ($scope, $location, $rootScope, $routeParams, $interval, $cookies, $cookieStore, chatSvc) {


    $scope.user = chatSvc.userName;
    console.log($scope.user);

    $scope.getChats = $interval(function()
    {
      chatSvc.getChats().success(function(chats){
      $scope.chats = chats;
      });
    }, 500);


    $scope.addUser = function(userName){
      chatSvc.addUser(userName);
      $location.path("/chat");
    };



    $scope.addChat = function(chat) {
      var chat =
      {
        name: $scope.user,
        content: chat.content,
        date: new Date()
      };
      chatSvc.addChat(chat);
      $scope.submitChat ={};
    };

});

'use strict';

angular.module('chatApp')
  .controller('chatCtrl', function ($scope, $location, $rootScope, $routeParams, $route, $interval, $cookies, $cookieStore, chatSvc) {


    $scope.user = chatSvc.userName;
    console.log($scope.user);

    $scope.getUsers = chatSvc.getUsers();

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

    // $scope.logout = function(userName){
    //   chatSvc.removeUser;
    //   $location.path("/");
    // }

    $scope.addChat = function(chat) {
      var chat =
      {
        name: $scope.user,
        content: chat.content,
        date: new Date(),
        icon: chat.icon,
      };
      chatSvc.addChat(chat);
      $scope.submitChat ={};
    };

    $scope.sortComment = function(chat) {
      var date = new Date(chat.date);
      return date;
    };
});

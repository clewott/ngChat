'use strict';

angular.module('chatApp')
  .controller('chatCtrl', function ($scope, $location, $rootScope, $routeParams, $route, $interval, $timeout,$cookies, $cookieStore, chatSvc) {


    $scope.user = chatSvc.userName;
    console.log($scope.user);

    $scope.getChats = $interval(function()
    {
      chatSvc.getChats().success(function(chats){
      $scope.thisUser = $scope.user;
      $scope.chats = chats;
      });
    }, 500);

    $scope.getOnlineUsers = $interval(function()
    {
      chatSvc.getOnlineUsers().success(function(users){
      $scope.thisUser = $scope.user;
      $scope.users = users;
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
        date: new Date(),
        icon: chat.icon,
      };
      chatSvc.addChat(chat);
      $scope.submitChat ={};
    };

    $scope.addOnlineUser = function(user) {
      var user =
      {
        name: $scope.user,
        online: true,
        icon: user.icon,
      };
      chatSvc.addOnlineUser(user);
    };

    $scope.removeOnlineUser = function(id){
      chatSvc.removeOnlineUser(id);
      $location.path("/");
    };

    // var userRun = new Date();
    // $scope.userIdle = $rootScope.$watch(function detectIdle() {
    //   var now = new Date();
    //   if (now - userRun > 10*60*60) {
    //      chatSvc.editOnlineUser(user)
    //   }
    //   userRun = now;
    // });
// SORT CHAT FUNC
    $scope.sortChat = function(chat) {
      var date = new Date(chat.date);
      return date;
    };
});

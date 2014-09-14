'use strict';

angular.module('chatApp')
  .controller('chatCtrl', function ($scope, $location, $rootScope, $routeParams, $timeout, $cookies, $cookieStore, chatSvc, userSvc) {


    $scope.user = chatSvc.userName;
    console.log($scope.user);

    chatSvc.getChats().success(function(chats){
      $scope.chats = chats;
    });


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

    // $rootScope.$on("chat:added", function(){
    //   chatSvc.getChat().success(function(chat){
    //     $scope.singleChat = chat;
    //   });
    // });
});

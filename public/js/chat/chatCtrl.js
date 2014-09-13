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

    $scope.newPost = function(post) {
      chatSvc.create(post)
      $location.path('/chat');
    };

// USER FUNCTIONS //
    userSvc.getUsers().then(function (users) {
      $scope.users = users.data;
    });

    $scope.newUser = function(user) {
      userSvc.createUser(user);
      $location.path("/chat");
      $log.info(user);
    };

// //FUNCTIONS FROM POSTSCTRL //
//     $scope.post = chatSvc2.show({ id: $routeParams.id });
//     $scope.delete = function() {
//       chatSvc2.delete({ id: $routeParams.id });
//       $location.path('/chat');
//     };
//     $scope.edit = function() {
//       chatSvc2.edit($scope.post);
//       $location.path('/chat');
//     };


  });

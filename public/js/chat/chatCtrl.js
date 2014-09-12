'use strict';

angular.module('chatApp')
  .controller('chatCtrl', function ($scope, $location, $routeParams, chatSvc, chatSvc2, userSvc, userSvc2) {

    $scope.createPost = function() {
      $location.path('/new');
    };
    $scope.newPost = function(post) {
      chatSvc.create(post)
      $location.path('/chat');
    };
    $scope.posts = chatSvc.query();

//FUNCTIONS FROM POSTSCTRL //
    $scope.post = chatSvc2.show({ id: $routeParams.id });
    $scope.delete = function() {
      chatSvc2.delete({ id: $routeParams.id });
      $location.path('/chat');
    };
    $scope.edit = function() {
      chatSvc2.edit($scope.post);
      $location.path('/chat');
    };
// USER FUNCTIONS //
    $scope.newUser = function(user) {
      userSvc.create(user)
      console.log(user);
      console.log("TEST");
      $location.path('/chat');
    };

    $scope.users = userSvc.query();



  });
  // .controller('PostCtrl', function($scope, $location, $routeParams, chatSvc2) {
  //
  //   $scope.post = chatSvc2.show({ id: $routeParams.id });
  //   $scope.delete = function() {
  //     chatSvc2.delete({ id: $routeParams.id });
  //     $location.path('/blog');
  //   };
  //   $scope.edit = function() {
  //     chatSvc2.edit($scope.post);
  //     $location.path('/blog');
  //   };
  //
  // });

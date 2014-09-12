'use strict';

angular.module('chatApp')
  .controller('httpCtrl', function ($scope, $location, httpSvc) {

    $scope.createPost = function() {
      $location.path('/new');
    };
    $scope.newPost = function(post) {
      httpSvc.create(post)
      $location.path('/blog');
    };
    $scope.posts = httpSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, httpSvc2) {

    $scope.post = httpSvc2.show({ id: $routeParams.id });
    $scope.delete = function() {
      httpSvc2.delete({ id: $routeParams.id });
      $location.path('/blog');
    };
    $scope.edit = function() {
      httpSvc2.edit($scope.post);
      $location.path('/blog');
    };

  });

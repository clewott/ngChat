'use strict';

angular
  .module("chatApp", ["ngRoute", 'ngResource'])
    .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
      })
      .when('/chat', {
        templateUrl: 'views/blog-list.html',
        controller: 'chatCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'chatCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'chatCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'chatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

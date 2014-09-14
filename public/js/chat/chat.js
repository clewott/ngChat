'use strict';

angular
  .module("chatApp", ["ngRoute", 'ngCookies'])
    .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "chatCtrl"
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: "chatCtrl"
      })
      .when('/chat/:id', {
        templateUrl: 'views/show.html',
        controller: 'chatCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'chatCtrl'
      })
      .when('/chat/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'chatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

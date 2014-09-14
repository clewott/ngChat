'use strict';

angular
  .module("chatApp", ["ngRoute", "ngCookies"])
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
      .otherwise({
        redirectTo: '/'
      });

  });

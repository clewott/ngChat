'use strict';

angular
  .module("chatApp", ["ngRoute", 'ngResource'])
    .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'httpCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'httpCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

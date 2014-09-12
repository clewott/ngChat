'use strict';

angular
  .module('chatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
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
        controller: 'httpCtrl2'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'httpCtrl2'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

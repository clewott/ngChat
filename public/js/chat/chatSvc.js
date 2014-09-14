'use strict';
angular.module('chatApp')
  .factory('chatSvc', function($resource, $rootScope, $log) {
    return $resource('api/collections/chat',
      {},
      {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'}
      });
  })
  .factory('chatSvc2', function($resource) {
    return $resource('api/collections/chat/:id',
      {
        id: '@_id'
      },
      {
        show: { method: 'GET'},
        edit: { method: 'PUT'},
        delete: { method: 'DELETE'}
      }
      )
  })

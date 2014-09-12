'use strict';
angular.module('chatApp')
  .factory('chatSvc', function($resource) {
    return $resource('api/collections/demotiy',
      {},
      {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'}
      });
  })
  .factory('chatSvc2', function($resource) {
    return $resource('api/collections/demotiy/:id',
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
  .factory('userSvc', function($resource) {
    return $resource('api/collections/users',
      {},
      {
        query: { method: 'GET', isArray: true},
        create: { method: 'POST'}
      }
      )
  })
  .factory('userSvc2', function($resource) {
    return $resource('api/collections/users/:id',
      {
        id: '@_id'
      },
      {
        show: { method: 'GET'},
        delete: { method: 'DELETE'},
      }
      )
  });

'use strict';
angular.module('chatApp')
.factory('userSvc', function($resource) {
  return $resource('api/collections/chatUsers',
    {},
    {
      query: { method: 'GET', isArray: true},
      create: { method: 'POST'}
    }
    )
})
.factory('userSvc2', function($resource) {
  return $resource('api/collections/chatUsers/:id',
    {
      id: '@_id'
    },
    {
      show: { method: 'GET', isArray: true},
      delete: { method: 'DELETE'},
    }
    )
});

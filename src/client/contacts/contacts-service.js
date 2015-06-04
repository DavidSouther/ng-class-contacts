angular.module('contacts.service', [
  'ngResource'
]).factory('Contact', function($resource){
  return $resource('/api/v1/contacts/:contactId', {
    contactId: '@id'
  });
});

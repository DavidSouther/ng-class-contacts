angular.module('contacts.list.directive', [
  'contacts.list.template',
  'contacts.service',
  'ngRoute'
]).config(function($routeProvider){
  $routeProvider.when('/list', {
    templateUrl: 'contacts/list',
    controller: ContactsListController
  });

  $routeProvider.otherwise({
    redirectTo: '/list'
  });
});

function ContactsListController($scope, Contact){
  $scope.contacts = Contact.query();
}

angular.module('contacts.edit.directive', [
  'ngRoute',
  'contacts.service',
  'contacts.edit.template'
]).config(function($routeProvider){
  $routeProvider.when('/new', {
    templateUrl: 'contacts/edit',
    controller: ContactsEditController
  });
});

function ContactsEditController($scope, Contact){
  $scope.contact = new Contact();
}

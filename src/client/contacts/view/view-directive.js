angular.module('contacts.view.directive', [
  'ngRoute',
  'contacts.service',
  'contacts.view.template'
]).config(function($routeProvider){
  $routeProvider.when('/view/:contactId', {
    templateUrl: 'contacts/view',
    controller: ContactViewController
  });
});

function ContactViewController($scope, Contact, $routeParams){
  $scope.contact = Contact.get({
    contactId: $routeParams.contactId
  });
}

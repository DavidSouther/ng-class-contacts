angular.module('contacts.edit.directive', [
  'ngRoute',
  'ngMessages',
  'contacts.service',
  'contacts.edit.template'
]).config(function($routeProvider){
  var editView = {
    templateUrl: 'contacts/edit',
    controller: ContactsEditController
  };

  $routeProvider.when('/new', editView);
  $routeProvider.when('/edit/:contactId', editView);
});

function ContactsEditController(
  $scope, $location,
  $routeParams, Contact
){
  if($routeParams.contactId){
    $scope.contact = Contact.get({
      contactId: $routeParams.contactId
    });
  } else {
    $scope.contact = new Contact();
  }

  $scope.save = function(){
    $scope.contact.$save().then(function(){
      $location.url('/list');
    });
  };
}

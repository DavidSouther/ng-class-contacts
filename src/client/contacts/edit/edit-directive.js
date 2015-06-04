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

function ContactsEditController($scope, $location, Contact){
  $scope.contact = new Contact();
  $scope.save = function(){
    $scope.contact.$save().then(function(){
      $location.url('/list');
    });
  };
}

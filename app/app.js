'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'productList',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/products', {
    template: '<product-list></product-list>'
  })
  .when('/view2', {
    template: '<view2></view2>'
  })
  .otherwise({
    redirectTo: '/products'
  });
}]);

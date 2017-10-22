'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'productList',
  'myApp.view2',
  'productDetail',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/products', {
    template: '<product-list></product-list>'
  })
  .when('/product/:productId', {
    template: '<product-detail></product-detail>'
  })
  .when('/view2', {
    template: '<view2></view2>'
  })
  .otherwise({
    redirectTo: '/products'
  });
}]);

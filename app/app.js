'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'productList',
  'shoppingCart',
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
  .when('/shoppingCart', {
    template: '<shopping-cart></shopping-cart>'
  })
  .when('/shoppingCart/add/:productId', {
    template: '<shopping-cart></shopping-cart>'
  })
  .otherwise({
    redirectTo: '/products'
  });
}]);

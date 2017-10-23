'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'productList',
  'shoppingCart',
  'productDetail',
  'myApp.version'
]).
factory('State', function() {
  let products = [
    {
      name: 'Item 1',
      price: 'Product price',
      id: 'item_1'
    }, {
      name: 'Item 2',
      price: 'Product price',
      id: 'item_2'
    }, {
      name: 'Item 3',
      price: 'Product price',
      id: 'item_3'
    }
  ];
  return {
    cart: [],
    getProduct: (id) => products.find(product => id === product.id),
    getProducts: () => products
  };
}).
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

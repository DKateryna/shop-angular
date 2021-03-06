'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'productList',
  'shoppingCart',
  'productDetail',
  'checkoutDetail',
  'orderConfirmed',
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
    }, {
      name: 'Item 4',
      price: 'Product price',
      id: 'item_4'
    }, {
      name: 'Item 5',
      price: 'Product price',
      id: 'item_5'
    }
  ];
  let customer = '';
  let checkedOut = [];
  let cart = [];
  return {
    getCart: () => cart,
    addToCart: (product) => cart.push(product),
    getProduct: (id) => products.find(product => id === product.id),
    getProducts: () => products,
    checkOut: () => {
      checkedOut = cart.slice();
      cart = [];
    },
    getCheckedOut: () => checkedOut,
    getCustomer: () => customer,
    setCustomer: (name) => customer = name
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
    .when('/checkoutDetail', {
      template: '<checkout-detail></checkout-detail>'
    })
    .when('/orderConfirmed', {
      template: '<order-confirmed></order-confirmed>'
    })
    .otherwise({
      redirectTo: '/products'
    });
}]);

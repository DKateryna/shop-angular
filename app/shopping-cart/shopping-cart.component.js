'use strict';

angular.module('shoppingCart')
.component('shoppingCart', {
  templateUrl: 'shopping-cart/shopping-cart.html',
  controller: ['$routeParams', '$scope', 'State',
    function ($routeParams, $scope, State) {
      if ($routeParams.productId) {
        State.cart.push(State.getProduct($routeParams.productId));
      }
      this.products = State.cart;
    }
  ]
});

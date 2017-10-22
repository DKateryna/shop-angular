'use strict';

angular.module('shoppingCart')
.component('shoppingCart', {
  templateUrl: 'shopping-cart/shopping-cart.html',
  controller: ['$routeParams', '$scope',
    function ($routeParams, $scope) {
      this.productId = $routeParams.productId;
      // $scope.onClick = function (productId) {
      //   window.location = "#!/shoppingCart/add/" + productId;
      // };
    }
  ]
});

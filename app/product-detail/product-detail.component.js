angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['$routeParams', '$scope', 'State',
      function ProductDetailController($routeParams, $scope, State) {
        this.product = State.getProduct($routeParams.productId);
        $scope.onClick = function (id) {
          window.location = "#!/shoppingCart/add/" + id;
        };
      }
    ]
  });

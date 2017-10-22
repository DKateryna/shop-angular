angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['$routeParams', '$scope',
      function ProductDetailController($routeParams, $scope) {
        this.productId = $routeParams.productId;
        $scope.onClick = function (productId) {
          window.location = "#!/shoppingCart/add/" + productId;
        };
      }
    ]
  });

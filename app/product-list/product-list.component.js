angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: function productList($scope, State) {
      $scope.onClick = (id) => window.location = "#!/product/" + id
      this.products = State.getProducts();
    }
  });

class ProductDetail {
  constructor ($routeParams, $scope, State){
    this.product = State.getProduct($routeParams.productId);
    $scope.onClick = (id) => window.location = "#!/shoppingCart/add/" + id

  }
}

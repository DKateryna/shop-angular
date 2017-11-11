class ShoppingCart {
  constructor ($routeParams, $scope, State) {
    if ($routeParams.productId) {
      State.cart.push(State.getProduct($routeParams.productId));
    }
    this.products = State.cart;
    $scope.onClick = () => window.location = "#!/checkoutDetail";
  }
}

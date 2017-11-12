class ShoppingCart {
  constructor ($routeParams, $scope, State) {
    if ($routeParams.productId) {
      State.addToCart(State.getProduct($routeParams.productId));
    }
    this.products = State.getCart();
    $scope.onClick = () => window.location = "#!/checkoutDetail";
  }
}

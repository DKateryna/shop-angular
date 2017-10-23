class ProductList {
  constructor ($scope, State) {
    $scope.onClick = (id) => window.location = "#!/product/" + id
    this.products = State.getProducts();
  }
}

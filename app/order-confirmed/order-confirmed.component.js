class OrderConfirmed {
  constructor ($routeParams, $scope, State){
    $scope.customer = State.getCustomer();
    this.products = State.getCheckedOut();
  }
}

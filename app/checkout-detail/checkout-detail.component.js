class CheckoutDetail {
  constructor($routeParams, $scope, State) {
    this.now = new Date();
    $scope.onClick = (user) => {
      State.setCustomer(user.name);
      State.checkOut();
      window.location = "#!/orderConfirmed";
    };
  }
}

class CheckoutDetail {
  constructor($routeParams, $scope, State) {
    $scope.onClick = (user) => {
      State.setCustomer(user.name);
      State.checkOut();
      window.location = "#!/orderConfirmed";
    };
  }
}

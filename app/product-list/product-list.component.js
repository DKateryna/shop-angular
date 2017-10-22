angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: function productList($scope) {
      $scope.onClick = function (productId) {
        window.location = "#!/product/"+productId;
      };
      this.products = [
        {
          name: 'Item 1',
          price: 'Product price',
          id: 'item_1'
        }, {
          name: 'Item 2',
          price: 'Product price',
          id: 'item_2'
        }, {
          name: 'Item 3',
          price: 'Product price',
          id: 'item_3'
        }
      ];
    }
  });

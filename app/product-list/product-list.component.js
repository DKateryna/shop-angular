angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: function productList() {
      this.products = [
        {
          name: 'Item 1',
          price: 8
        }, {
          name: 'Item 2',
          price: 5
        }, {
          name: 'Item 3',
          price: 10
        }
      ];
    }
  });

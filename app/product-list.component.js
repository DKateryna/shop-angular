angular.
  module('myApp').
  component('productList', {
    template:
        '<ul>' +
          '<li ng-repeat="product in $ctrl.products">' +
            '<span>{{product.name}}</span>' +
            '<p>{{product.price}}</p>' +
          '</li>' +
        '</ul>',
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

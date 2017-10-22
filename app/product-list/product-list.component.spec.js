describe('productList', function() {

  beforeEach(module('productLists'));

  describe('productListController', function() {

    it('should create a `products` model with 3 products', inject(function($componentController) {
      var ctrl = $componentController('productList');

      expect(ctrl.products.length).toBe(3);
    }));

  });

});

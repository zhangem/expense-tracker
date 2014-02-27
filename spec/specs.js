beforeEach(function(){
  Purchase.all = [];
});
describe("Purchase", function() {
  describe("initialize", function() {
    it("sets the description and the amount of a purchase", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("Book", "$10");
      testPurchase.description.should.equal("Book");
      testPurchase.price.should.equal("$10");
    });
  });
  //   it("creates an empty array for the purchases property", function(){
  //     var testPurchase = Object.create(Purchase);
  //     testPurchase.initialize("Computer", "$300");
  //     testPurchase.purchases.should.eql([]);
  //   });
  // });
  describe("create", function() {
    it("creates a new instance of Purchase", function() {
      var testPurchase = Purchase.create();
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
    it("adds the purchase to the .all property", function(){
      var testPurchase = Purchase.create();
      Purchase.all.should.eql([testPurchase]);
    });
  });
});

describe("Category", function() {
  describe("initialize", function() {
    it("sets the category", function() {
      var testCategory = Object.create(Category);
      testCategory.initialize("food");
      testCategory.category.should.equal("food");
    });

    it("creates an empty array for the purchases property", function() {
      var testCategory = Object.create(Category);
      testCategory.initialize("clothes");
      testCategory.purchases.should.eql([]);
    });
  });
  describe("create", function() {
    it("creates a new instance of a Category", function(){
      var testCategory = Category.create();
      Category.isPrototypeOf(testCategory).should.equal(true);
    });
  });
});

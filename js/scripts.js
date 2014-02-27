var Purchase = {
  all:[],
  initialize: function(description, price) {
    this.description = description;
    this.price = price;
  }, 
  create: function(description, price) {
    var purchase = Object.create(Purchase);
    purchase.initialize(description, price);
    Purchase.all.push(purchase);
    return purchase;
  }
};

var Category = {
  initialize : function(category) {
    this.category = category;
    this.purchases = [];
  },

  create: function(category) {
    var category = Object.create(Category);
    category.initialize(category);
    return category;
  } 
};


$(document).ready(function() {
  $("form#new-purchase").submit(function(event) {
    event.preventDefault();

    var inputtedDescription = $("input#new-description").val();
    var inputtedPrice = $("input#new-price").val();
  
    var newPurchase = Purchase.create(inputtedDescription, inputtedPrice);

    $("table#purchase-table").append("<tr>" + "<td>" + inputtedDescription + "</td>" +"<td>" + inputtedPrice + "</td>" + "</tr>");
    this.reset();
  });

  $("form#new-category").submit(function(event) {
    event.preventDefault();

    var inputtedCategory = $("input#new-cat").val();

    $("ul#categories").append("<li>" + inputtedCategory + "</li>");
    this.reset();
  });
});

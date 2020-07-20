(function() {
  "use strict";

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsToBuy();

    list.checkOff = function(itemIndex) {
      console.log("Checking off item ", itemIndex);
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
  }


  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsBought();
  }
  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "Bag", quantity: 2 },
      { name: "Pen", quantity: 5 },
      { name: "Pencil", quantity: 3 },
      { name: "Eraser", quantity: 4 },
      { name: "Copy", quantity: 5 },
      { name: "Book", quantity: 6 },
      { name: "Snacks", quantity: 7 },
      { name: "Ribbons", quantity: 8 },
      { name: "Nametag", quantity: 4 },
      { name: "Staple Pin", quantity: 6 }
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.checkOff = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
    };
  }
})();

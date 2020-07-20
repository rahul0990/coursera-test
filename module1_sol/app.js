(function() {
  "use strict";
  angular.module("LunchChecker", []).controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.item = "";
    $scope.nbOfItems = 0;
    $scope.message;
    $scope.itemok = null;
    $scope.checkItems = function() {
      if($scope.item.length > 0) {
        console.log("Items entered: " + $scope.item);
        var itemArray = $scope.item.split(",");
        console.log("Items as array: " + itemArray);

        $scope.message = checkItemCount(itemArray);
        $scope.itemok = true;
      }
      else
      {
        $scope.message = "ERROR: Enter the Item first";
        $scope.itemok = false;
      }
    };
  }

  function checkItemCount(items) {
    var itemCount = items.length;
    console.log("Number of items : " + itemCount);

    if(itemCount < 4)
      return "OUTPUT: Enjoy!";
    else
      return "OUTPUT: Too much!";
  }
})();

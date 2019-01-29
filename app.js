(function () {
  'use strict'
var app = angular.module('myApp', []);
app.controller('myCtrl',myCtrl);
myCtrl.$inject=['$scope'];
function myCtrl ($scope,
  $injector) {
    $scope.LunchItemsCount = function(items) {
      var count=items ? items.split(",") : 0;
      debugger;

        if(typeof $scope.items === "undefined"||$scope.items==="")
        {
          $scope.LunchItems='Please enter data first';
        }
        else {
          if (count.length <= 3)
          {
             $scope.LunchItems = "Enjoy!";
          }
          else if(count.length > 3)
          {
            $scope.LunchItems= "Too much!";
          }
        }
      console.log($injector.annotate(myCtrl));
};
}
})();

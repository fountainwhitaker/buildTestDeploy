angular.module('app', [])
  .controller('appController', function appController($scope) {
    $scope.toDoList = [];
    $scope.submit = function() {
      $scope.toDoList.push($scope.toDoItem);
      console.log("$scope.toDoList is ", $scope.toDoList);
      $scope.toDoItem = "";
    };
});

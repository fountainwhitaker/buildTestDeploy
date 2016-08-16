// angular.module('calculatorApp', []).controller('CalculatorController', function CalculatorController($scope) {
//   $scope.sum = function() {
//     $scope.z = $scope.x + $scope.y;
//   };
// });

describe('app', function () {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('name', function () {
		it('CircleCI exam test', function () {
			var $scope = {};
			var controller = $controller('appController', { $scope: $scope });
      $scope.toDo = "Take CircleCI exam!"
			$scope.submit();
      console.log("Top of my list this week is: ", $scope.toDo);
			expect($scope.toDo).toBe("Take CircleCI exam!");
		});
	});

});

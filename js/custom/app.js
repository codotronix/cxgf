var app = angular.module("MainApp", []);

app.controller("tankCtrl", ['$scope', 'servc_cxge', function ($scope, cxge) {
	$scope.tank = {};
	$scope.tank.left = "100";
	$scope.tank.top = "80";
	$scope.tank.direction = "tankRight";

	$scope.tank.moveLeft = function () { 
		$scope.tank.direction = "tankLeft";
		$scope.tank.left--;
		console.log($scope.tank.direction)
	};

	$scope.tank.moveRight = function () {
		$scope.tank.direction = "tankRight";
		$scope.tank.left++;
		console.log($scope.tank.direction)
	};

	$scope.tank.moveUp = function () {
		$scope.tank.direction = "tankUp";
		console.log($scope.tank.direction)
	};

	$scope.tank.moveDown = function () {
		$scope.tank.direction = "tankDown";
		console.log($scope.tank.direction)
	};


	var ge = cxge.getEngine();
	ge.notifyOnKey(37, $scope.tank.moveLeft);
	ge.notifyOnKey(38, $scope.tank.moveUp);
	ge.notifyOnKey(39, $scope.tank.moveRight);
	ge.notifyOnKey(40, $scope.tank.moveDown);
	//console.log(ge);
	//9804317257
	
}]);



var app = angular.module("MainApp", []);

app.controller("tankCtrl", ['$scope', 'servc_cxge', function ($scope, cxge) {
	var ge = cxge.getEngine();

	$scope.tank = {};
	$scope.tank.left = 100;
	$scope.tank.top = 80;
	$scope.tank.direction = "tankRight";
	var tank = {};
	tank.size = 70;
	tank.speed = 5;

	$scope.tank.moveLeft = function () { 
		$scope.tank.direction = "tankLeft";
		$scope.tank.left -= tank.speed;
		if($scope.tank.left < 0) {
			$scope.tank.left = 0;
		}
		$scope.$apply();
		//console.log($scope)
	};

	$scope.tank.moveRight = function () {
		$scope.tank.direction = "tankRight";
		$scope.tank.left += tank.speed;
		if($scope.tank.left > ($scope.field.width - tank.size)) {
			$scope.tank.left = $scope.field.width - tank.size;
		}
		$scope.$apply();
		//console.log($scope)
	};

	$scope.tank.moveUp = function () {
		$scope.tank.direction = "tankUp";
		$scope.tank.top -= tank.speed;
		if($scope.tank.top < 0) {
			$scope.tank.top = 0;
		}
		$scope.$apply();
		//console.log($scope.tank.direction)
	};

	$scope.tank.moveDown = function () {
		$scope.tank.direction = "tankDown";
		$scope.tank.top += tank.speed;
		if($scope.tank.top > ($scope.field.height - tank.size)) {
			$scope.tank.top = $scope.field.height - tank.size;
		}
		$scope.$apply();
		//console.log($scope.tank.direction)
	};


	
	ge.notifyOnKey(37, $scope.tank.moveLeft);
	ge.notifyOnKey(38, $scope.tank.moveUp);
	ge.notifyOnKey(39, $scope.tank.moveRight);
	ge.notifyOnKey(40, $scope.tank.moveDown);
	//console.log(ge);
	//9804317257
	
}]);

app.controller("mainCtrl", ['$scope', function ($scope) {
	$scope.field = {};
	$scope.field.width = parseInt(angular.element(document.querySelector('#battleField')).css('width'));
	$scope.field.height = parseInt(angular.element(document.querySelector('#battleField')).css('height'));
}]);


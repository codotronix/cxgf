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
		//console.log($scope.tank.top);
		//console.log($scope.field.height);
		//console.log(tank.size);
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

app.controller("mainCtrl", ['$scope','servc_cxge', function ($scope, cxge) {
	$scope.field = {};
	$scope.field.width = cxge.getScreenWidth();
	$scope.field.height = cxge.getScreenHeight();
	//console.log($scope.field.height);
}]);

app.directive("enemyTank", function ($interval, servc_cxge) {
	return {		
		restrict: 'E',
		replace: true,
		transclude: true,
		scope:{
			tankId:'='
		},
		controller: function ($scope) {
			var direction = ["Left", "Right", "Up", "Down"];
			var size = 70;
			var screenHt = servc_cxge.getScreenHeight();
			var screenWd = servc_cxge.getScreenWidth();
			$scope.left = Math.random() * (screenWd - size);
			$scope.top = Math.random() * (screenHt - size);
			$scope.direction = direction[Math.floor(Math.random() * 4)];

			var nextDirection = {};
			nextDirection.Left = ["Left", "Up", "Down"];
			nextDirection.Right = ["Right", "Up", "Down"];
			nextDirection.Up = ["Left", "Right", "Up"];
			nextDirection.Down = ["Left", "Right", "Down"];

			var speed = 7;			
			var count = 0;
			var nxtDir = "Left";
			function move () {
				if (count % 15 == 0) {
					count = 1;
					nxtDir = nextDirection[$scope.direction][Math.floor(Math.random() * 3)];
				} 
				count++;
				
				//console.log(nxtDir);

				if(nxtDir == "Left") {
					$scope.direction = "Left";
					$scope.left -= speed;
					if($scope.left < 0) {
						$scope.left = 0;
						nxtDir = "Right";
					}
				} 
				else if (nxtDir == "Right") {
					$scope.direction = "Right";
					$scope.left += speed;
					if($scope.left > (screenWd - size)) {
						$scope.left = screenWd - size;
						nxtDir = "Left";
					}
				}
				else if (nxtDir == "Up") {
					$scope.direction = "Up";
					$scope.top -= speed;
					if($scope.top < 0) {
						$scope.top = 0;
						nxtDir = "Down";
					}
				}
				else if (nxtDir == "Down") {
					$scope.direction = "Down";
					$scope.top += speed;
					if($scope.top > (screenHt - size)) {
						$scope.top = screenHt - size;
						nxtDir = "Up";
					}
				}
			};

			$interval(move, 100);
		},
		/*
		link: function(scope, element, attrs, controllers) {
			
		},*/
		template: '<div id="enemy_{{tankId}}" class="enemyTank enemyTank{{direction}}" style="top:{{top}}px;left:{{left}}px;"></div>'
	};
});



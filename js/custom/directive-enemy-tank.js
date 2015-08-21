var app = angular.module("MainApp");

app.directive("enemyTank", function ($interval, servc_cxge) {
	return {		
		restrict: 'E',
		/*replace: true,*/
		/*transclude: true,*/
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
			$scope.bulletTop = 0;
			$scope.bulletLeft = 0;
			$scope.bulletAlive = false;

			var bullet = {};
			bullet.size = 16;
			bullet.direction = 'Up';
			bullet.speed = 25;

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

				//move tank start
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
				//move tank end ////////////////////////

				//move bullet start
				if ($scope.bulletAlive) {
					if(bullet.direction == 'Up') {
						$scope.bulletTop -= bullet.speed;
					} else if (bullet.direction == 'Down') {
						$scope.bulletTop += bullet.speed;
					} else if (bullet.direction == 'Left') {
						$scope.bulletLeft -= bullet.speed;
					} else if (bullet.direction == 'Right') {
						$scope.bulletLeft += bullet.speed;
					}
				}

				if($scope.bulletTop < 0 || $scope.bulletTop > screenHt || $scope.bulletLeft < 0 || $scope.bulletLeft > screenWd) {
					$scope.bulletAlive = false;
				}
				////move bullet end ////////////////////
			};

			function fireBullet () {
				if(!$scope.bulletAlive) {
					var rand = Math.floor(Math.random() * 99);
					if(rand % 2 == 0) {
						$scope.bulletTop = $scope.top + size / 2 - bullet.size/2;
						$scope.bulletLeft = $scope.left + size / 2  - bullet.size/2;
						bullet.direction = $scope.direction;
						$scope.bulletAlive = true;
					}
				}				
			}

			$interval(move, 100);
			$interval(fireBullet, 1000);
		},
		/*
		link: function(scope, element, attrs, controllers) {			
		},*/
		templateUrl: 'templates/enemyTank.html'
	};
});
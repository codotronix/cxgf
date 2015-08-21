var app = angular.module("MainApp", []);

app.controller("mainCtrl", ['$scope','servc_cxge', function ($scope, cxge) {
	$scope.field = {};
	$scope.field.width = cxge.getScreenWidth();
	$scope.field.height = cxge.getScreenHeight();

	/*
	function resolveCollision () {

	}

	cxge.onCollision(resolveCollision);
	*/
}]);
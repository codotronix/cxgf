(function(){
    angular.module("cxgf-web")
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider

        .when("/home", {
            templateUrl: "www/templates/home.html",
            controller: "homeController",
            controllerAs: "vm"
        })
        .when("/see-it-in-action", {
            templateUrl: "www/templates/see-in-action.html",
            controller: "seeInActionController",
            controllerAs: "vm"
        })
        .when("/demos", {
            templateUrl: "www/templates/demos.html",
            controller: "demosController",
            controllerAs: "vm"
        })
        .when("/manual", {
            templateUrl: "www/templates/manual.html",
            controller: "manualController",
            controllerAs: "vm"
        })

        .when("/", {
            redirectTo: "/home"
        })
        .otherwise({
            redirectTo: "/"
        });

    }]);
})();
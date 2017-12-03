(function(){
    //homeController
    angular.module("cxgf-web").controller("manualController", manualController);

    manualController.$inject = ['$rootScope'];

    function manualController ($rootScope) {
        $rootScope.pageID = 'manualpage';
    }
})();
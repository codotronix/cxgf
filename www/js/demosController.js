(function(){
    //homeController
    angular.module("cxgf-web").controller("demosController", demosController);

    demosController.$inject = ['$rootScope'];

    function demosController ($rootScope) {
        $rootScope.pageID = 'demopage';
        var vm = this;

        console.log('demopage');

        vm.demos = [
        	{
        		name: "Beware of Boxes",
				url: "demos/beware-of-boxes/index.html?enemy=20",
				img: "www/img/bob/bob-1.png",
				desc: "In this world of moving boxes, you are a living box and there are lots of dead zombie boxes roaming around. You have to start from one safe house and reach another. That's all..."
        	},
        	{
        		name: "Asteroid Attack",
				url: "http://barick.in/Asteroid-Attack/play.html",
				img: "www/img/astattack/astattack.png",
				desc: "Some vicious asteroid like aliens are coming towards earth. You are the only defence standing between them and planet earth. Go save earth!"
        	},
        	{
        		name: "Go Gol2, Go",
				url: "demos/goltu/index.html",
				img: "www/img/go-gol2-go/go-gol2-go.png",
				desc: "Little Gol2 must run for his life to save himself from VouVou"
        	},
        ];
    }
})();
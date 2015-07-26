var app = angular.module("MainApp");

app.service('servc_cxge', function () {
	var cxge;	
	function GameEngine () {
		var gameObj = [];
		var keyPressListener = {};
		
		this.notifyOnKey = function(key, callback) {
			if(keyPressListener[key] == undefined) {
				keyPressListener[key] = [];
			}
			keyPressListener[key].push(callback);
			//console.log('pushing callback function');
			//console.log(callback);
		};

		function init () {
			bindKeyPressEvent();
		};

		function bindKeyPressEvent() {
			angular.element(document).on('keydown', function(ev){
				//loop thru all listener object and call all listening callback functions
				for(var key in keyPressListener) {
					if(ev.keyCode == key) {
						for(var i in keyPressListener[key]) {
							keyPressListener[key][i]();
						}
					}
				}
			})
		}

		init();
	}

	this.getScreenHeight = function(){
		return(parseInt($(window).innerHeight()));
	};

	this.getScreenWidth = function(){
		return(parseInt($(window).innerWidth()));
	};
	
	this.getEngine = function(){
		if(cxge == undefined) {
			cxge = new GameEngine();
		}		
		return cxge;
	};
})
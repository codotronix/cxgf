function cxge () {
	var cxge;
	
	function GameEngine () {
		var gameObj = [];
		var keyPressListener = {};
		
		this.notifyOnKey = function(key, callback) {
			if(keyPressListener[key] == undefined) {
				keyPressListener[key] = [];
			}
			keyPressListener[key].push(callback);
		};

		function init () {
			bindKeyPressEvent();
		};

		function bindKeyPressEvent(){
			$(document).on('keyup', function(ev){
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
	
	this.getEngine = function(){
		if(cxge == undefined) {
			cxge = new GameEngine();
		}		
		return cxge;
	};
}
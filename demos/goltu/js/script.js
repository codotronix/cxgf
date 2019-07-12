$(function(){
	'use strict'
	//var winHeight = $(window).height();

	$(document).keydown(function(ev){
		if (ev.keyCode == 37) {
			//doLeft();
		} else if (ev.keyCode == 39) {
			doRight();
		} else if (ev.keyCode == 32) {
			goltu.jump(14, .5);
		}
	})

	/* Hammer Code */
	var hammertime = new Hammer($('g-world')[0]);
	hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
	hammertime.on('swipeup', function(ev) {
    	console.log('swipeup detected');
    	goltu.jump(14, .5);
	});
	hammertime.on('swipedown', function(ev) {
    	console.log('swipeup detected');
    	goltu.sitdown();
	});
	/* end of hammer Code */

	/*
	 * When the player is running right, actually ground (with everything) is moving left...
	 */
	function doRight() {
		$('g-ground').addClass('moving');		
	}

	//Game
	var game = {};
	game.status = 'running';


	//Goltu cxgf GameObj
	var goltu = cxgf.GameObject.create({});



	//Goltu
	//var goltu = {};
	goltu.status = 'running';
	goltu.posY = parseInt($('g-goltu').css('top'));
	goltu.groundPosY = goltu.posY;
	goltu.restoreSpeed = 3;
	goltu.speed = 3;
	goltu.verticalSpeed = 0;
	goltu.gravity = 0;
	goltu.acceleration = 0;
	goltu.distanceCovered = 0;
	goltu.sitdown = function () {
		if (this.status == 'seated' || this.status == 'jumping') {
			console.log("can't sit if in air or already seated");
			return;
		}

		this.status = 'seated';
		this.acceleration = .03;
		$('g-goltu').removeClass().addClass('seated');
	};
	goltu.jump = function (verticalSpeed, gravity) {
		//console.log('Goltu jump is called...');
		this.speed = this.restoreSpeed;
		if (this.status == 'jumping') {
			console.log("can't jump... already in air..."); 
			return;
		}
		this.verticalSpeed = verticalSpeed;
		this.gravity = gravity;
		goltu.status = 'jumping';
		$('g-goltu').removeClass().addClass('jumping');
	};
	goltu.calcPosition = function () {
		if (this.status == 'jumping') {
			this.verticalSpeed -= this.gravity;
			this.posY -= this.verticalSpeed;
			this.applyPosition();
		} else if (this.status == 'seated') {
			this.speed -= this.acceleration;
			if(this.speed < 0) {
				this.speed = 0;
			}
		} else if (this.status == 'collision') {
			this.speed = 0;
		} else {
			this.speed = this.restoreSpeed;
		}
	};
	goltu.applyPosition = function () {
		if (this.posY > this.groundPosY) {	/*should not go below ground*/
			this.posY = this.groundPosY;
			this.status = 'running';
			$('g-goltu').removeClass().addClass('running');
		}
		$('g-goltu').css('top', this.posY);
	}


	//Road
	var road = {};
	road.posX = 0;
	road.move = function (speed) {
		road.posX -= speed;
		var pos = road.posX + "px 0px";	
		$('g-road').css("background-position", pos);
	};

	function calcPosition () {
		goltu.calcPosition();
	}

	function applyPosition () {
		road.move(goltu.speed);
	}

	function loopFn () {
		calcPosition ();
		applyPosition ();
		requestAnimFrame (loopFn);
	}

	loopFn ();	
});

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function(callback){
            window.setTimeout(callback, 1000 / 60);
          };
})();
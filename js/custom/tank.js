function tank (element) {
	var el = element;
	var speed = 10;

	this.getElement = function() {
		return el;
	};

	this.faceLeft = function () {
		el.removeClass().addClass("tankLeft");
	};

	this.faceRight = function () {
		el.removeClass().addClass("tankRight");
	};

	this.faceUp = function () {
		el.removeClass().addClass("tankUp");
	};

	this.faceDown = function () {
		el.removeClass().addClass("tankDown");
	};

	this.moveLeft = function() { 
		var left = getLeft();
		if(left > 0) {
			setLeft(left - speed);
		}
	};

	this.moveRight = function() { 
		var left = getLeft(); 
		if(left < 930) {
			setLeft(left + speed);
		}
	}

	function getLeft () {
		var left = parseInt(el.css('left'));
		return left;
	}

	function setLeft (left) {
		el.css('left', left + 'px');
	}

	function getTop () {
		var top = parseInt(el.css('top'));
		return top;
	}

	function setTop (top) {
		el.css('top', top +  'px');
	}
}
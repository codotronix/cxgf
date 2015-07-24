function tank (element) {
	var el = element;
	var speed = 10;

	this.getElement = function() {
		return el;
	};

	var faceLeft = function () {
		el.removeClass().addClass("tankLeft");
	};

	var faceRight = function () {
		el.removeClass().addClass("tankRight");
	};

	var faceUp = function () {
		el.removeClass().addClass("tankUp");
	};

	var faceDown = function () {
		el.removeClass().addClass("tankDown");
	};

	this.moveLeft = function() {
		faceLeft();
		var left = getLeft();
		if(left > 0) {
			setLeft(left - speed);
		}
	};

	this.moveRight = function() {
		faceRight();
		var left = getLeft(); 
		if(left < 930) {
			setLeft(left + speed);
		}
	}

	this.moveUp = function() {
		faceUp();
		var top = getTop(); 
		if(top > 0) {
			setTop(top - speed);
		}
	}

	this.moveDown = function() {
		faceDown();
		var top = getTop(); 
		if(top < 530) {
			setTop(top + speed);
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
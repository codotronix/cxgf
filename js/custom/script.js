$(function(){
	var gTank = new tank($('#tank'));
	var cx = (new cxge()).getEngine();

	//left key pressed
	cx.notifyOnKey(37, gTank.faceLeft);
	cx.notifyOnKey(37, gTank.moveLeft);

	//right key pressed
	cx.notifyOnKey(39, gTank.faceRight);
	cx.notifyOnKey(39, gTank.moveRight);
})






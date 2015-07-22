function left () {
	//console.log("left pressed");
	$('#tank').removeClass().addClass("tankLeft");
}

function right () {
	$('#tank').removeClass().addClass("tankRight");
}

function up () {
	$('#tank').removeClass().addClass("tankUp");
}

function down () {
	$('#tank').removeClass().addClass("tankDown");
}

var cx = (new cxge()).getEngine();
cx.notifyOnKey(37, left);
cx.notifyOnKey(38, up);
cx.notifyOnKey(39, right);
cx.notifyOnKey(40, down);



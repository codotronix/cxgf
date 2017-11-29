//(function(){

    /** @class */

    var b1 = new window.cxgf.GameObject({
        x: 100,
        y: 100,
        speed: 7,
        htmlId: 'box1'
    });


    var b2 = new window.cxgf.GameObject({
        x: 250,
        y: 100,
        speed: 5,
        htmlId: 'box2'
    });

    cxgf.KeyEvent.onKeyPress(cxgf.KeyEvent.keys.LEFT, b1.moveLeft, b1);
    cxgf.KeyEvent.onKeyPress(cxgf.KeyEvent.keys.RIGHT, b1.moveRight, b1);
    cxgf.KeyEvent.onKeyPress(cxgf.KeyEvent.keys.UP, b2.moveUp, b2);
    cxgf.KeyEvent.onKeyPress(cxgf.KeyEvent.keys.DOWN, b2.moveDown, b2);
    /***************************/


//})()
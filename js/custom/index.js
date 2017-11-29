(function(){

    /********* TEST 1 **********/


    function moveBox1Left () {
        var left = parseInt($('#box1').css('left'));
        $('#box1').css('left', (left-5) + 'px');
    }

    function moveBox1Right () {
        var left = parseInt($('#box1').css('left'));
        $('#box1').css('left', (left+5) + 'px');
    }

    cxgf.KeyEvent.onKeyPress(cxgf.KeyEvent.keys.LEFT, moveBox1Left);
    cxgf.KeyEvent.onKeyPress(cxgf.KeyEvent.keys.RIGHT, moveBox1Right);
    /***************************/


})()
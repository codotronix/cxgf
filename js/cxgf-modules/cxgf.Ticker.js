(function(window){

    window.cxgf.Ticker = {
        onTick: onTick,
        startTick: startTick,
        stopTick: stopTick
    };

    var _tickRunning = false;
    var _tickListener = [];

    /*
    * Add callback function to Ticker
    */
    function onTick (callbackFn, obj) {
        _tickListener.push({
            fn: callbackFn,
            obj: obj
        });

        //start the tick
        startTick();
    }

    function startTick () {
        if(!_tickRunning) {
            _tickRunning = true;
            _tick();
        }        
    }

    function stopTick () {
        _tickRunning = false;
    }

    function _tick () {
        if(!_tickRunning || _tickListener.length <= 0) {
            return;
        }

        for(var i in _tickListener) {
            _tickListener[i].fn.apply(_tickListener[i].obj);
        }

        setTimeout(_tick, 1000/60);
    }
    


})(window);
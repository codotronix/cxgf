(function(window){

    window.cxgf.Ticker = {
        onTick: onTick,
        startTick: startTick,
        stopTick: stopTick
    };

    var _tickRunning = false;
    var _tickListener = [];
    var _tickCounter = 0;
    var _tickResetUpperLimit = 27000000;    //27000000 ticks = 125 hours, given 60 ticks/sec


    /*
    * Add callback function to Ticker
    * skipTick: number of ticks to skip before the function is called again
    */
    function onTick (callbackFn, obj, skipTick) {
        var tickListenerID = cxgf.Utils.generateID('ticker');
        _tickListener.push({
            id: tickListenerID,
            fn: callbackFn,
            obj: obj || window,
            skipTick: (skipTick === undefined || skipTick < 0) ? 1 : skipTick
        });

        //start the tick
        startTick();

        return tickListenerID;
    }

    function _gerenateUniqueID () {
        var tickID = (Math.random() * Math.random() * 999999999).toString().replace(/[.]/g, '-');

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
        if(!_tickRunning) {
            return;
        }
        _tickCounter++;

        for(var i in _tickListener) {
            if(_tickCounter % _tickListener[i].skipTick === 0) {
                _tickListener[i].fn.apply(_tickListener[i].obj);
            }            
        }

        //reset the counter if a certain upper limit is reached
        // to prevent integer overflow kind of mess
        if(_tickCounter === _tickResetUpperLimit) {
            _tickCounter = 0;
        }

        setTimeout(_tick, 1000/60);
    }
    


})(window);
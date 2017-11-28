(function(cxgf){

    cxgf = {
        notifyOnKeyPress: notifyOnKeyPress
    };

    //Only 1 framework
    var _gameObj;
    var _keyPressListener;

    init();

    function init () {
        _internalObjects = {};
    }

    
    function notifyOnKeyPress (key, callbackFn) {
        if(_keyPressListener[key] == undefined) {
                _keyPressListener[key] = [];
            }
        _keyPressListener[key].push(callbackFn);
    }

    



})(cxgf={})
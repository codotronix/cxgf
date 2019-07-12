(function(window){

    window.cxgf.KeyEvent = {
        onKeyPress: onKeyPress,

        keys: {
            "LEFT": 37,
            "UP": 38,
            "RIGHT": 39,
            "DOWN": 40,
            "SPACE": 32,
            "TAB": 9,
            "SHIFT": 16,
            "CTRL": 17,
            "ALT": 18,
            "A": 65,
            "B": 66,
            "C": 67,
            "D": 68,
            "E": 69,
            "F": 70,
            "G": 71,
            "H": 72,
            "I": 73,
            "J": 74,
            "K": 75,
            "L": 76,
            "M": 77,
            "N": 78,
            "O": 79,
            "P": 80,
            "Q": 81,
            "R": 82,
            "S": 83,
            "T": 84,
            "U": 85,
            "V": 86,
            "W": 87,
            "X": 88,
            "Y": 89,
            "Z": 90,
            "ONE": 49,
            "TWO": 50,
            "THREE": 51,
            "FOUR": 52,
            "FIVE": 53,
            "SIX": 54,
            "SEVEN": 55,
            "EIGHT": 56,
            "NINE": 57,
            "ZERO": 48
        }
    };

    var _keyPressListeners = {};

    init();

    function init () {
        bindKeyPressEvent();
    }

    function onKeyPress (key, callbackFn, obj) {
        if(_keyPressListeners[key] == undefined) {
            _keyPressListeners[key] = [];
        }
        _keyPressListeners[key].push({
            fn: callbackFn,
            obj: obj
        });
    }


    function bindKeyPressEvent(){
        $(document).on('keydown', function(ev){
            //loop thru all listener object 
            //and call all listening callback functions
            for(var key in _keyPressListeners) {
                if(ev.keyCode == key) {
                    for(var i in _keyPressListeners[key]) {
                        _keyPressListeners[key][i].fn.apply(_keyPressListeners[key][i].obj);
                    }
                }
            }
        })
    }


})(window);
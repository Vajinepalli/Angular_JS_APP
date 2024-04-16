angular.
module('myApp').
service('shareTime', function() {
    //private variable
    var _currentTime = {};
    _currentTime = new Date();

    //public API
    return {
        currentTime: _currentTime
        
    };
})
angular.
module('getTime').
component('getTime', {
    templateUrl: 'app/getTime/getTime.template.html',
    controller: function($scope, shareTime) {
        var self = this;
        self.time = shareTime.currentTime;
        console.log("version 1.01 22/06/2018")
    }
});

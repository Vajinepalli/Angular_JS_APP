angular.
module('getTime').
component('getTime', {
    templateUrl: `<h2> &emsp;{{$ctrl.time | date}}</h2>`,
    controller: function($scope, shareTime) {
        var self = this;
        self.time = shareTime.currentTime;
        console.log("version 1.01 22/06/2018")
    }
});

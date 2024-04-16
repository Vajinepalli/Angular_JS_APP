//Angular Links Router
angular.
module('myApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        //$locationProvider.hashPrefix('!');
        $routeProvider.
        when('/chartView', {
            template: '<chart-View></chart-View>'
        }).
        when('/chartBar', {
            template: '<chart-Bar></chart-Bar>'
        }).
        otherwise('/chartView');
    }
]);
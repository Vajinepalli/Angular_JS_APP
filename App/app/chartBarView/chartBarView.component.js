angular.
module('chartBarView').
component('chartBar', {
    templateUrl: 'app/chartBarView/chartBarView.template.html',

    controller: ['$scope', 'shareTime', '$location','$timeout',
        function LineCtrl($scope, shareTime, $location, $timeout) {
			
			//Timer to switch View
			var goToFirstPage = function(){
				$location.path('/chartView');
			};
			
            var self = this;
            //Shared Service Time
            self.time = shareTime.currentTime;

            //Chart Setup
            $scope.labels = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
            $scope.series = ['Actual', 'Goal'];
            $scope.colors = ['#45b7cd', '#ff6384'];

            //Chart Data
            $scope.data = [
                [1220, 1260, 1120, 1300, 1300, 1280, 1250],
                [1250, 1250, 1250, 1250, 1250, 1250, 1250]
            ];

            //Chart Customisation 
            $scope.datasetOverride = [{
                    label: "Actual",
                    borderWidth: 1,
                    type: 'bar'
                },
                {
                    label: "Goal",
                    borderWidth: 3,
                    type: 'line'
                }
            ];

            $scope.options = {
                elements: {
                    line: {
                        fill: false
                    }
                },
                legend: {
                    display: true,
                },
                scales: {
                    yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: 'Outs (Units)',
                            fontSize: 15
                        },
                        ticks: {
                            min: 0,
                            max: 1400
                        }
                    }],
                    xAxes: [{
                        id: 'x-axis-1',
                        scaleLabel: {
                            display: true,
                            labelString: 'Days ',
                            fontSize: 15
                        },
                    }]
                },

                title: {
                    display: true,
                    text: 'Production Daily Out\'s Totals',
                    fontSize: 20
                },
            };
			$timeout(goToFirstPage, 60000);
            
			
        }
    ]
});
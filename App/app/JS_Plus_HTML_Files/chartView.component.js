//Angular Controller
angular.
module('chartView').
component('chartView', {
    templateUrl: `<div>

    <div class="chart-container" style="display: block; width: 80%; height: 80%;">
    <canvas 
        id="line" 
        class="chart chart-line ng-isolate-scope" 
        chart-data="data" 
        chart-labels="labels" 
        chart-series="series" 
        chart-options="options"
        chart-colors = "colors"
        chart-dataset-override="datasetOverride2">
    </canvas>
    </div>
</div>


<div ng-show="!showError ">
    <p><span id="view1Time">* * Updated @ {{$ctrl.time | date:'mediumTime'}} * * </span>  </p>    
</div>
<div ng-show="showError ">
    <p id="loadError"><i class="fas fa-exclamation"></i> Chart Load Error </p>
</div>`,

    controller: ['$scope', '$http', 'shareTime', '$location','$timeout', '$route',
        function LineCtrl($scope, $http, shareTime, $location, $timeout, $route) {
			
			//Timer to switch View
			var goToSecondPage = function(){
				$location.path('/chartBar');
			};
						
            //Shared Service 
            var self = this;
            self.time = new Date();
            
            //Chart Setup
            $scope.labels = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
            $scope.series = ['Actual', 'Goal'];
            $scope.colors = ['#45b7cd', '#ff0000'];
			$scope.showError = false;   
            //Chart Data http request                            
            $http.get("http://127.0.0.1:8887/data/lineGraph_temp.json").
			then(function(response) {
                //console.log(response);
                self.data = response.data.tt_lineData;
                $scope.data = [
                    [],
                    []
                ];
                $scope.arrActual = new Array;
                $scope.arrGoal = new Array;

                //Loop to push data into Data Array
                angular.forEach(self.data, function(item) {
                    $scope.data[0].push(item.Actual);
                    $scope.data[1].push(item.Goal);
                });
            }, function (error) {
			//alert message  

			$scope.showError = true;    
			});

            //Chart Customisation
            $scope.datasetOverride2 = [{
                fill: true
            }, {
                fill: false
            }];
            $scope.options = {

                legend: {
                    display: true,
                },
                title: {
                    display: true,
                    text: 'Production Pace Chart',
                    fontSize: 20
                },

                scales: {
                    yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: 'Pace (Total Outs/hr)',
                            fontSize: 20
                        },
                        ticks: {
                            min: 0,
                            max: 1200
                        }
                    }],
                    xAxes: [{
                        id: 'x-axis-1',
                        scaleLabel: {
                            display: true,
                            labelString: 'Time ',
                            fontSize: 20
                        },
                    }],
                }
            }; // Doc's here for options https://www.chartjs.org/docs/latest/configuration/title.html
		
			
			$timeout(goToSecondPage, 60000);
            
			
			
			
        }
    ]
});
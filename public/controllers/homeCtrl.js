app.controller('HomeCtrl',['$scope', '$http', '$state', function($scope, $http, $state){
    $scope.value = 'Hello World';
    console.log('I am Home Controller');


    var getDevices = function () {
        $http.get('/getDevices').then(function (response) {
            $scope.devices = response.data;
        });
    };

    getDevices();

    $scope.lookForEvents = function(deviceId){
        $state.go('home.events',{deviceId : deviceId});
    }

}]);
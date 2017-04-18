app.controller('EventsCtrl',['$scope', '$http','$stateParams', function($scope, $http, $stateParams){
    $scope.value = 'Hello World 2';
    console.log('I am Events Controller');
    console.log('Event Controller called with params');
    console.log($stateParams.deviceId);
    var id = $stateParams.deviceId;

    $scope.val = '654654645';
    var getEvents = function () {
        $http.get('/getEvents/'+id).then(function (response) {
            $scope.datas = response.data;
        });
    };

    getEvents();
}]);
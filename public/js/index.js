var app = angular.module('app', [])
app.controller('teamController', function($scope, $http) {
    $http.get('data/team.json').then(function(results) {
        $scope.scoordiesteam = results.data.scoordies
        $scope.coordinatorsteam = results.data.coordinators
        $scope.headsteam = results.data.heads
    })
})
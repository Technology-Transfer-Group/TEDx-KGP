var app = angular.module('app', [])
app.controller('teamController', function($scope, $http) {
    $http.get('data/team.json').then(function(results) {
        $scope.coreteam = results.data.core
        $scope.designmediateam = results.data.designmedia
        $scope.webteam = results.data.web
    })
})
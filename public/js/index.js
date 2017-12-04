var app = angular.module('app', [])
app.controller('teamController', function($scope, $http) {
    $http.get('data/team.json').then(function(results) {
        $scope.team = results.data.data
    })
})

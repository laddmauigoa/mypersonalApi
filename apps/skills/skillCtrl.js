var app = angular.module('mypersonalApi');

app.controller('skillCtrl', function($scope, mainService) {
	$scope.test = 'this is the skill ctrl'

	mainService.getMeData('skills').then(function(res) {
		$scope.talents = res.data
	})
})
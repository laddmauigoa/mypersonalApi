var app = angular.module('mypersonalApi');

app.controller('homeCtrl', function($scope, mainService) {
	$scope.test = 'this is the home ctrl'
	

	mainService.getMeData('location').then(function(res) {
		console.log(res)
		console.log('cccccccccccccccccc')
		$scope.data = res.data
	})
	mainService.getMeData('name').then(function(res) {
		$scope.name = res.data
	})

})
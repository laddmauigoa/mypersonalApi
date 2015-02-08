var app = angular.module('mypersonalApi', ['ngRoute'])

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'apps/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.when('/me', {
		templateUrl: 'apps/me/meTmpl.html',
		controller: 'meCtrl'
	})
	.when('/skills', {
		templateUrl: 'apps/skills/skillsTmpl.html',
		controller: 'skillCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})
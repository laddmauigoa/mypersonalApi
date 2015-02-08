var app = angular.module('mypersonalApi');

app.service('mainService', function($http, $q) {

this.getMeData = function(str) {
	var dfd = $q.defer();
	 $http({
		method: 'GET',
		url: 'http://localhost:8888/'+str
	})
	.then(function(res) {
		console.log('res', res)
		console.log('.............')
		dfd.resolve(res)
	},
	function(err) {
		console.log('err', err)
	})
	return dfd.promise
}

})

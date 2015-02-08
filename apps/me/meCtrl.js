var app = angular.module('mypersonalApi');

app.controller('meCtrl', function($scope, mainService) {
 $scope.test = 'this is the me ctrl'

 mainService.getMeData('hobbies').then(function(res) {
 	$scope.stuffs = res.data
 })

 mainService.getMeData('Occupations').then(function(res) {
 	$scope.fluffs = res.data
 })



  mainService.getMeData('hobbies').then(function(res) {
 	$scope.ruffs = res.data
 })

  mainService.getMeData('references').then(function(res) {
 	$scope.cuffs = res.data
 })

})
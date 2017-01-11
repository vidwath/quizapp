'use strict';

/**
 * @ngdoc function
 * @name quizappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizappApp
 */
angular.module('quizappApp')
.controller('MainCtrl', function ($scope,mainService) {
	mainService.getAbout()
	.then(function(success) {
		$scope.main = success;
		console.log($scope.main);
	}, function(error) {
		$scope.error = error;
		console.log($scope.error);
	});
});

'use strict';

angular.module('quizappApp')

.service('mainService', ['$http', function($http) {
    this.getAbout = function() {
        return $http.get('/assets/data/main.data.json')
            .then(function(data) {
            	console.log(data);
            }).then(function(data) {
            	console.log(data);
            });
    };
}]);